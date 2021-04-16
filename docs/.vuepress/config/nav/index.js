//导航栏
module.exports = [
  { text: "主页", link: "/index.html", icon: "reco-home" },
  {
    text: "其它",
    icon: "reco-document",
    items: [
      {
        text: "我的项目😃",
        items: [
          {
            text: "My Project",
            link: "/other/project",
          },
        ],
      },
      {
        text: "常用网址😃",
        items: [
          {
            text: "LeetCode",
            link: "https://leetcode-cn.com/",
          },
          {
            text: "JavaScript基础",
            link: "https://wangdoc.com/javascript/dom/mutationobserver.html",
          },
          {
            text: "Vue.js",
            link: "https://cn.vuejs.org/v2/guide/",
          },
          {
            text: "React.js",
            link: "https://react.docschina.org/docs/getting-started.html",
          },
        ],
      },
    ],
  },
  // { text: "时间线", link: "/timeline/", icon: "reco-date" },
  { text: "关于我", link: "/about/", icon: "reco-message" },
];
