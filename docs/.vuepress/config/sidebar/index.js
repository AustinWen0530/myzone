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
      title: "Javascript",
      collapsable: true,
      children: [
        "javascript/1.深拷贝与浅拷贝.md",
        "javascript/2.js循环遍历.md",
        "javascript/3.js继承.md",
        "javascript/4.js数组.md",
        "javascript/5.js父子关系问题（递归）.md",
        "javascript/6.js正则表达式.md",
        "javascript/7.async和promise.md",
        "javascript/8.实现一个Promise（A+规范）.md",
        "javascript/9.async和await原理.md",
        "javascript/10.Generator原理.md",
        "javascript/11.call、apply、bind、new、instance模拟实现.md",
        "javascript/12.js常用函数收录.md",
        "javascript/13.函数变量声明提升和优先级.md",
        "javascript/14.Object.defineProperty和Proxy区别.md",
      ],
    },
    {
      title: "Vue.js",
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
