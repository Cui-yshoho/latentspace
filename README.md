# Tech Blog

基于 VitePress 的技术博客。

## 本地开发

```bash
npm install
npm run dev    # 启动开发服务器，默认 http://localhost:5173
npm run build  # 构建静态站点到 docs/.vitepress/dist
npm run preview # 预览构建产物
```

## 写新文章

1. 在 `docs/posts/` 下新建 `xxx.md`
2. 在 `docs/.vitepress/config.mjs` 的 `sidebar` 里追加一项
3. 在 `docs/posts/index.md` 里加一行链接
4. `git commit && git push` —— GitHub Actions 会自动部署

## 部署到 GitHub Pages

### 1. 创建仓库

如果是 `username.github.io` 仓库（个人主页），保持 `config.mjs` 里 `base: '/'`。

如果是 `username/blog` 这种子路径仓库，改为 `base: '/blog/'`。

### 2. 开启 Pages

仓库 → Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。

### 3. 推送

```bash
git init
git add .
git commit -m "init blog"
git branch -M main
git remote add origin git@github.com:<username>/<repo>.git
git push -u origin main
```

Actions 跑完后访问 `https://<username>.github.io/<repo>/`。

## 功能

- ✅ Markdown 写作
- ✅ 代码块（行号、行高亮、复制按钮、明暗双主题）
- ✅ KaTeX/MathJax 数学公式
- ✅ Mermaid 图表
- ✅ 本地全文搜索
- ✅ 暗色模式
- ✅ 最后更新时间
- ✅ 大纲导航
