export const blogPostData = [{"path":"/article/wyaawvhf/","title":"markdown","categoryList":[{"id":"fb7d1e","sort":1,"name":"计算机基础"},{"id":"c29c07","sort":1,"name":"计算机组成原理"}],"createTime":"2025/06/18 16:09:47","lang":"zh-CN","excerpt":""},{"path":"/article/imfqsk7t/","title":"markdown","categoryList":[{"id":"9afb50","sort":3,"name":"后端"}],"createTime":"2025/06/18 16:09:47","lang":"zh-CN","excerpt":""},{"path":"/article/d0rzspz1/","title":"markdown","categoryList":[{"id":"b969b7","sort":2,"name":"前端"}],"createTime":"2025/06/18 16:09:47","lang":"zh-CN","excerpt":""},{"path":"/article/23d3m6ws/","title":"markdown","categoryList":[{"id":"fb7d1e","sort":1,"name":"计算机基础"}],"createTime":"2025/06/18 16:00:41","lang":"zh-CN","excerpt":""},{"path":"/article/cceqeuro/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/06/18 15:58:44","lang":"zh-CN","excerpt":""},{"path":"/article/0ke27nfb/","title":"自定义组件","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["预览","组件"],"createTime":"2025/06/18 15:58:44","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
