# 个人博客 - 最小可行产品 (MVP)

一个极简的个人博客系统，使用纯静态网站技术构建，适合快速部署和个人使用。

## 🌟 功能特点

- ✅ **响应式设计** - 适配手机、平板和桌面
- ✅ **暗色/亮色模式** - 支持主题切换，自动保存偏好
- ✅ **文章列表** - 动态加载和展示文章
- ✅ **现代UI** - 使用CSS变量和现代布局技术
- ✅ **无后端依赖** - 纯前端实现，部署简单

## 📁 项目结构

```
personal-blog/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # JavaScript功能
├── articles.json       # 文章数据
├── vercel.json         # Vercel部署配置
└── README.md           # 项目说明
```

## 🚀 快速开始

### 本地预览
1. 将项目文件复制到你的工作目录
2. 使用任何HTTP服务器打开`index.html`
   ```bash
   # 使用Python快速启动服务器
   python -m http.server 8000
   ```
3. 打开浏览器访问 `http://localhost:8000`

### 在线部署

#### 方法一：Vercel（推荐）
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击"New Project"
4. 导入这个项目所在的Git仓库
5. Vercel会自动检测并部署

#### 方法二：GitHub Pages
1. 将项目推送到GitHub仓库
2. 进入仓库设置 → Pages
3. 选择部署分支和目录
4. 访问 `https://你的用户名.github.io/仓库名`

#### 方法三：Netlify
1. 访问 [netlify.com](https://netlify.com)
2. 拖拽项目文件夹到部署区域
3. 自动生成部署链接

## 📝 如何添加文章

### 方法一：编辑JSON文件
编辑 `articles.json` 文件，按照现有格式添加新文章：

```json
{
  "id": 7,
  "title": "文章标题",
  "excerpt": "文章摘要",
  "date": "2024-03-16",
  "tags": ["标签1", "标签2"],
  "image": "blue",
  "readTime": "10分钟"
}
```

可用图片颜色：`blue`, `green`, `purple`, `orange`, `red`, `teal`

### 方法二：创建文章详情页（高级）
1. 创建 `article.html` 模板页面
2. 通过URL参数加载不同文章内容
3. 使用JavaScript动态渲染完整文章

## 🎨 自定义样式

### 修改主题颜色
编辑 `style.css` 中的CSS变量：

```css
:root {
  --primary-color: #你的颜色;
  --secondary-color: #你的颜色;
  /* 其他变量 */
}
```

### 添加新组件
在 `index.html` 中添加新的HTML结构，在 `style.css` 中添加对应的样式。

## 🔧 功能扩展建议

### 短期改进
1. **搜索功能** - 在文章标题和内容中搜索
2. **分类筛选** - 按标签筛选文章
3. **文章详情页** - 完整的文章阅读页面
4. **评论系统** - 集成第三方评论服务

### 长期规划
1. **静态网站生成器** - 使用Hugo/Hexo管理文章
2. **Markdown支持** - 自动将Markdown转换为文章
3. **SEO优化** - 添加meta标签和结构化数据
4. **PWA支持** - 添加离线访问功能

## 🌐 部署后的设置

### 自定义域名
1. 在Vercel项目设置中添加自定义域名
2. 在域名注册商处配置DNS记录
3. 等待DNS生效

### 添加分析工具
1. **Google Analytics** - 在`index.html`中添加跟踪代码
2. **Umami** - 隐私友好的开源分析工具
3. **Cloudflare Analytics** - 轻量级分析

### SEO优化
1. 修改 `index.html` 中的meta标签
2. 生成sitemap.xml文件
3. 提交到Google Search Console

## 🤝 贡献与反馈

这是一个个人项目模板，你可以：
- 自由修改和分发
- 根据需求添加新功能
- 分享你的改进版本

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情（可自行创建）

## 🙏 感谢使用

这个项目遵循MVP（最小可行产品）原则，只包含最核心的功能，便于快速启动和迭代。

祝你写作愉快！ ✨