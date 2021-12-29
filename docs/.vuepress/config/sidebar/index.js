//侧边栏
module.exports = {
  "/views/": [
    "",
    {
      title: "浏览器相关",
      collapsable: true,
      children: [
        "浏览器相关/1.浏览器缓存.md",
        "浏览器相关/2.本地存储.md",
        "浏览器相关/3.输入url到页面呈现发生了什么.md",
      ],
    },
    {
      title: "HTML",
      collapsable: true,
      children: [],
    },
    {
      title: "Css",
      collapsable: true,
      children: [],
    },
    {
      title: "JavaScript",
      collapsable: true,
      children: [
        {
          title: "基础",
          collapsable: true,
          children: [
            "javascript/JavaScript基础/1.函数.md",
            "javascript/JavaScript基础/2.作用域、执行上下文与作用域链.md",
            "javascript/JavaScript基础/3.继承.md",
            "javascript/JavaScript基础/4.数组.md",
            "javascript/JavaScript基础/5.正则表达式.md",
            "javascript/JavaScript基础/6.彻底搞懂This.md",
            "javascript/JavaScript基础/7.深入理解call、apply和bind.md",
            "javascript/JavaScript基础/8.闭包.md",
            "javascript/JavaScript基础/9.原型和原型链.md",
            "javascript/JavaScript基础/10.同步、异步、阻塞和非阻塞.md",
            "javascript/JavaScript基础/11.Event Loop.md",
            "javascript/JavaScript基础/12.spread和rest操作符.md",
            "javascript/JavaScript基础/13.函数柯里化.md",
            "javascript/JavaScript基础/14.深拷贝与浅拷贝.md",
          ],
        },
        {
          title: "进阶",
          collapsable: true,
          children: [
            "javascript/JavaScript进阶/1.js异步解决方案.md",
            "javascript/JavaScript进阶/2.实现一个Promise（A+规范）.md",
            "javascript/JavaScript进阶/3.async、await实现原理.md",
            "javascript/JavaScript进阶/4.generator实现原理.md",
            "javascript/JavaScript进阶/5.Object.defineProperty和Proxy.md",
          ],
        },
        {
          title: "JS设计模式",
          collapsable: true,
          children: [
            {
              title: "创建型设计模式",
              collapsable: true,
              children: [],
            },
            {
              title: "结构型设计模式",
              collapsable: true,
              children: [],
            },
            {
              title: "行为型设计模式",
              collapsable: true,
              children: [],
            },
            {
              title: "架构型设计模式",
              collapsable: true,
              children: [],
            },
          ],
        },
        {
          title: "ES6+相关语法",
          collapsable: true,
          children: [
            "javascript/es6+/1.let和const命令.md",
            "javascript/es6+/2.变量的解构赋值.md",
            "javascript/es6+/3.字符串的扩展.md",
          ],
        },
        // "javascript/js常用函数收录.md",
      ],
    },
    {
      title: "Vue2.0",
      collapsable: true,
      children: [
        {
          title: "最佳实践",
          collapsable: true,
          children: [
            "vue/vue2.0最佳实践/架构层.md",
            "vue/vue2.0最佳实践/代码层.md",
          ],
        },
        {
          title: "进阶",
          collapsable: true,
          children: ["vue/vue2.0进阶语法/vue进阶.md"],
        },
      ],
    },
    {
      title: "Vuex",
      collapsable: true,
      children: [],
    },
    {
      title: "Node.js",
      collapsable: true,
      children: [],
    },
  ],
};
