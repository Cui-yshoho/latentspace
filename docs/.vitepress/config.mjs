import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import mathjax3 from 'markdown-it-mathjax3'

export default withMermaid(defineConfig({
  title: 'Latent Space',
  description: '算法 · 训练 · 系统 —— 笔记',
  lang: 'zh-CN',

  // 部署到 GitHub Pages 时改成 '/<仓库名>/'，比如 '/blog/'
  // 如果用自定义域名或部署到 username.github.io 根仓库则保持 '/'
  base: '/latentspace/',

  // 让浏览器自动跟随系统主题
  appearance: true,

  // 干净的 URL（去掉 .html 后缀）
  cleanUrls: true,

  // 最近更新时间
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '文章',
          items: [
            { text: 'Hello World', link: '/posts/hello-world' }
            // 新文章在这里追加
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username' }
    ],

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    lastUpdatedText: '最后更新',

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  },

  markdown: {
    // 代码块行号
    lineNumbers: true,
    // 数学公式支持
    config: (md) => {
      md.use(mathjax3)
    },
    // 代码主题（明/暗双主题）
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // Mermaid 配置
  mermaid: {
    // 主题等可以在这里配
  }
}))
