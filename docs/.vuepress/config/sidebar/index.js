//侧边栏
module.exports = {
  "/views/": [
    "",
    {
      title: "浏览器原理",
      collapsable: true,
      children: [],
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
          title: "JavaScript基础",
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
          ]
        },
        {
          title: "JavaScript进阶",
          collapsable: true,
          children: [
            "javascript/JavaScript进阶/1.js异步解决方案.md",
            "javascript/JavaScript进阶/2.实现一个Promise（A+规范）.md",
            "javascript/JavaScript进阶/3.async、await实现原理.md",
            "javascript/JavaScript进阶/4.generator实现原理.md",
            "javascript/JavaScript进阶/5.Object.defineProperty和Proxy.md",
          ]
        },
        {
          title: "JavaScript设计模式",
          collapsable: true,
          children: [
            {
              title: "创建型设计模式",
              collapsable: true,
              children: []
            },
            {
              title: "结构型设计模式",
              collapsable: true,
              children: []
            },
            {
              title: "行为型设计模式",
              collapsable: true,
              children: []
            },
            {
              title: "架构型设计模式",
              collapsable: true,
              children: []
            }
          ]
        },
        "javascript/js常用函数收录.md",
      ],
    },
    {
      title: "Vue2.0",
      collapsable: true,
      children: [],
    },
    {
      title: "Vue-Router",
      collapsable: true,
      children: [],
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
