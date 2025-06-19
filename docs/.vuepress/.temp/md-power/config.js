import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.153_esbuild@0.25.5_less@4.3.0_markdown-it@14.1.0_sass_548a92f1c5aad83964255a9904cfe508/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.153_esbuild@0.25.5_less@4.3.0_markdown-it@14.1.0_sass_548a92f1c5aad83964255a9904cfe508/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.153_esbuild@0.25.5_less@4.3.0_markdown-it@14.1.0_sass_548a92f1c5aad83964255a9904cfe508/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.153_esbuild@0.25.5_less@4.3.0_markdown-it@14.1.0_sass_548a92f1c5aad83964255a9904cfe508/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'

import '/Users/zhangpeng/Desktop/Code/newStudyProgram/phillong-blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.153_esbuild@0.25.5_less@4.3.0_markdown-it@14.1.0_sass_548a92f1c5aad83964255a9904cfe508/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
    
  }
})
