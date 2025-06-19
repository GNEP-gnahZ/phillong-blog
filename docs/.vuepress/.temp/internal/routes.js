export const redirects = JSON.parse("{\"/2.%E5%89%8D%E7%AB%AF/markdown.html\":\"/article/d0rzspz1/\",\"/1.%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/markdown.html\":\"/article/23d3m6ws/\",\"/3.%E5%90%8E%E7%AB%AF/markdown.html\":\"/article/imfqsk7t/\",\"/preview/custom-component.example.html\":\"/article/0ke27nfb/\",\"/preview/markdown.html\":\"/article/cceqeuro/\",\"/1.%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/1.%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BB%84%E6%88%90%E5%8E%9F%E7%90%86/markdown.html\":\"/article/wyaawvhf/\",\"/notes/demo/\":\"/demo/\",\"/notes/demo/bar.html\":\"/demo/mxpc7uo0/\",\"/notes/demo/foo.html\":\"/demo/6dlrpr88/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/d0rzspz1/", { loader: () => import(/* webpackChunkName: "article_d0rzspz1_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/article/d0rzspz1/index.html.js"), meta: {"title":"markdown"} }],
  ["/article/23d3m6ws/", { loader: () => import(/* webpackChunkName: "article_23d3m6ws_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/article/23d3m6ws/index.html.js"), meta: {"title":"markdown"} }],
  ["/article/imfqsk7t/", { loader: () => import(/* webpackChunkName: "article_imfqsk7t_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/article/imfqsk7t/index.html.js"), meta: {"title":"markdown"} }],
  ["/article/0ke27nfb/", { loader: () => import(/* webpackChunkName: "article_0ke27nfb_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/article/0ke27nfb/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/cceqeuro/", { loader: () => import(/* webpackChunkName: "article_cceqeuro_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/article/cceqeuro/index.html.js"), meta: {"title":"Markdown"} }],
  ["/article/wyaawvhf/", { loader: () => import(/* webpackChunkName: "article_wyaawvhf_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/article/wyaawvhf/index.html.js"), meta: {"title":"markdown"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/demo/mxpc7uo0/", { loader: () => import(/* webpackChunkName: "demo_mxpc7uo0_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/demo/mxpc7uo0/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/6dlrpr88/", { loader: () => import(/* webpackChunkName: "demo_6dlrpr88_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/demo/6dlrpr88/index.html.js"), meta: {"title":"foo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
