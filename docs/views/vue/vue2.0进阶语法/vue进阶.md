---
title: vue2.0进阶
date: 2021-07-07
sidebarDepth: 0
tags:
  - Vue
categories:
  - 前端
isShowComments: false
---

## 1.通过 v-bind="$props" 以及v-bind="$attrs" 实现属性透传

很多时候，我们会写一些嵌套组件，比如 A 的子组件是 B，B 的子组件是 C。这个时候如果 A 传递 `props` 给 B，B 又得传递 `props` 给 C，利用属性传透，我们可以避免二次传递（A->B B->C）的过程，直接在C中拿到A中传来的数据。

前提：组件A嵌套组件B，组件B嵌套组件A

```js
// ComponentA
<template>
  <div>
    <div>
      组件A
    </div>
    <component-b :personal="personalInfo" @change-name="changeName" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      personalInfo: {
        name: 'austin',
        age: '24'
      }
    }
  },
  methods: {
    changeName(val) {
      this.personalInfo.name = val
    }
  }
}
</script>
```

```js
// ComponentB
<template>
  <div>
    <div>
      组件B
    </div>
    <component-c v-bind="$attrs" v-on="$listeners" />
  </div>
</template>
```

```js
// ComponentC
<template>
  <div>
    组件C
    <p>
      <span>来自A的数据：</span>
      <span>name:{{ $attrs.personal.name }}</span>
      <span>age:{{ $attrs.personal.age }}</span>
    </p>
    <div @click="changeA">
      改变A中的人名为tom
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeA() {
      this.$emit('change-name', 'tom')
    }
  }
}
</script>
```

## 2.作用域插槽实现 UI 和业务逻辑的分离

很多时候，我们想复用一个组件的业务逻辑，但是不想使用该组件的 `UI`，那么可以使用作用域插槽实现 `UI` 和业务逻辑的分离

```js
// 子组件 toggle
<template>
  <div class="toggle-container">
    <slot :currentState="currentState" :setOn="openState" :setOff="closeState" :toggle="toggle" />
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentState: this.state
    }
  },
  methods: {
    openState() {
      this.currentState = true
    },
    closeState() {
      this.currentState = false
    },
    toggle() {
      this.currentState = !this.currentState
    }
  }
}
</script>
```

```js
// 父组件
<Toggle1 :state="state" class="toggle-container-two">
  <template v-slot:default="{currentState, setOn, setOff, toggle }">
    <button @click="toggle">切换</button>
    <button @click="setOff">关闭</button>
    <button @click="setOn">打开</button>
    <div v-if="currentState">我是打开的内容</div>
    <div v-else>我是关闭的内容</div>
  </template>
</Toggle1>
```

这样处理的目的在于，子组件可以只关心自己的业务逻辑，交出自己的DOM给父组件，实现UI和业务逻辑的分离。

## 3.动态的指令参数

在 `Vue 2.6` 中提供了这样一个特性：可以动态的将指令参数传递给组件。假设你有一个组件 `<my-button>`，有时候你需要绑定一个点击事件 `click`，有时候需要绑定一个双击事件 `dblclick`，这个时候你可以这么写

```js
<template>
  ...
  <my-button @[someEvent]="handleSomeEvent()"/>
  ...
</template>

<script>
  ...
  data(){
    return{
      ...
      someEvent: someCondition ? "click" : "dblclick"
    }
  },
  
  methods:{
    handleSomeEvent(){
      // do something
    }
  }
  ...
</script>
```

## 4.hookEvent 的使用

在 `Vue 2.X` 当中，`hooks` 可以作为一种 `Event`，在 `Vue` 的源码当中，称之为 `hookEvent`。 利用它，我们可以模板声明式的监听子组件的生命周期钩子，从而可以给第三方组件添加生命周期处理函数

比如，我们调用了一个很耗费性能的第三方组件 `List`，这个组件可能需要渲染很久，为了更好的用户体验，我们想在 `List ` 组件进行更新的时候添加一个 `loading` 的动画效果

这个时候，我们可能会想到直接修改这个组件的源码，利用 `beforeUpdate` 和 `updated` 来显示 `loading`，但是这种办法非常不好。第一修改成本比较大，第二无法享受开源社区对这个组件的升级与维护，你需要自己手动维护

这个时候就可以通过 `hookEvent` 模板声明式的注入声明周期钩子函数，类似如下：

```js
<List @hook:updated="handleTableUpdated"></List >
```

另外，我们还可以通过下面的方式给一个 `Vue` 组件添加生命周期处理函数

```js
vm.$on('hooks:created', cb)
vm.$once('hooks:created', cb)
```

比如说，我们如果想在组件销毁的时候，去销毁之前调用的组件，一般处理方案：

```js
mounted(){
	this.thirdPartyPlugin = thirdPartyPlugin();
},
beforeDestroy() {
	this.thirdPartyPlugin.destroy();
}
```

但是这么做代码的可读性是不好的，我们可以修改成以下的方式，优化我们代码的可读性，精简我们的代码，这也是 `Vue 3` 在致力解决的问题：

```js
mounted(){
	this.thirdPartyPlugin = thirdPartyPlugin();
	this.$on('hook:beforeDestroy',() => {
		thirdPartyPlugin.destroy();
	})
}
```

## 5.key 值在`<router-view>`上的使用

在 `Vue `中，使用 `v-for`，官方建议带上` key `值，因为如果不使用 `key`，`Vue` 默认会使用一种“就地复用”的策略进行更新。在一些情况下，很有可能会导致渲染不正确。
除了 `v-for`， 在使用` Vue-router `做项目时，会遇到如 `/path/:id `这样只改变 `id `号的场景，但渲染不同的组件。由于` router-view `是复用的，单纯的改变` id` 号并不会刷新 `router-view`，这并不是我们所期望的结果
这个时候，我们可以给每个 `router-view `添加一个不相同 key 值，让 Vue 每次切换路由参数的时候，认为是不同的组件，从而得到更新

```vue
<router-view :key="key"></router-view>
```

实际上对于所有的` DOM`，`Vue `都有可能采取就地复用的策略，所以如果遇到了渲染顺序不正确的问题，往往是Key值有问题。

## 6.`v-cloak` 解决页面闪烁问题

很多时候，我们页面模板中的数据是异步获取的，在网络不好的情况下，渲染页面的时候会出现页面闪烁的效果，影响用户体验，`v-cloak` 指令保持在元素上直到关联实例结束编译，利用它的特性，结合 `CSS` 的规则 `[v-cloak] { display: none }` 一起使用就可以隐藏掉未编译好的 `Mustache` 标签，直到实例准备完毕

```html
// template 中
<div class="#app" v-cloak>
    <p>{{value.name}}</p>
</div>

// css 中
[v-cloak] {
    display: none;
}
```

> 需要注意，虽然解决了闪烁的问题，但这段时间内如果什么都不处理的话，会直接白屏，这并不是我们想要的效果，我们应该加一个 `loading` 或者骨架屏的效果，提升用户体验

## 7.`v-once` 和 `v-pre` 提升性能

我们知道 `Vue` 的性能优化很大部分在编译这一块，`Vue` 源码就有类似标记静态节点的操作，以在 `patch` 的过程中跳过编译，从而提升性能。另外，`Vue` 提供了 `v-pre` 给我们去决定要不要跳过这个元素和它的子元素的编译过程。可以用来显示原始 `Mustache` 标签。跳过大量没有指令的节点会加快编译。

```html
<!-- 显示的是{{ this will not be compiled }} -->
<span v-pre>{{ this will not be compiled }}</span>  
<!-- 即使data里面定义了msg这里仍然是显示的{{msg}} -->
<span v-pre>{{msg}}</span>   
```

另外，如果只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。可以使用 `v-once`

```vue
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>
<!-- 有子元素 -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- 组件 -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` 指令-->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```

## 8.表单输入控制——表单修饰符/change事件/filter/指令

### 表单修饰符

如果是简单的控制输入一定是数字或者去掉用户输入的收尾空白符，可以直接使用 `Vue` 提供的表单修饰符 `.number` 和 `.trim`

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```html
<input v-model.number="age" type="number">
复制代码
```

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```html
<input v-model.trim="msg">
```



### change事件

给表单绑定事件，在事件处理中进行表单输入控制

```html
<input v-model="value2" type="text" @change="inputChange(value2)" />
```

```js
methods: {
  inputChange: function(val) {
    if (!val) return ''
    val = val.toString()
    this.value2 = val.charAt(0).toUpperCase() + val.slice(1)
  }
}
```

### 指令

```js
// 只能输入正整数,0-9的数字
Vue.directive('enterIntNumber', {
  inserted: function (el) {
    let trigger = (el, type) => {
      const e = document.createEvent('HTMLEvents')
      e.initEvent(type, true, true)
      el.dispatchEvent(e)
    }
    el.addEventListener("keyup", function (e) {
      let input = e.target;
      let reg = new RegExp('^\\d{1}\\d*$');  //正则验证是否是数字
      let correctReg = new RegExp('\\d{1}\\d*');  //正则获取是数字的部分
      let matchRes = input.value.match(reg);
      if (matchRes === null) {
        // 若不是纯数字 把纯数字部分用正则获取出来替换掉
        let correctMatchRes = input.value.match(correctReg);
        if (correctMatchRes) {
          input.value = correctMatchRes[0];
        } else {
          input.value = "";
        }
      }
      trigger(input, 'input')
    });
  }
});
```

使用指令控制

```html
<!--限制输入正整数-->
<input v-enterIntNumber placeholder="0" type="number">
```



```html

```

