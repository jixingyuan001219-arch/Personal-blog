// 个人博客 - 主要功能脚本

// DOM元素
const themeToggle = document.getElementById('themeToggle');
const articleGrid = document.getElementById('articleGrid');
const articleCount = document.getElementById('articleCount');

// 颜色映射用于文章图片
const colorMap = {
    blue: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    green: 'linear-gradient(135deg, #10b981, #059669)',
    purple: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    orange: 'linear-gradient(135deg, #f59e0b, #d97706)',
    red: 'linear-gradient(135deg, #ef4444, #dc2626)',
    teal: 'linear-gradient(135deg, #14b8a6, #0d9488)'
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadArticles();
    setupEventListeners();
});

// 设置事件监听器
function setupEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);
}

// 主题功能
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');

    if (isDark) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// 加载和渲染文章
async function loadArticles() {
    try {
        // 在实际项目中，这里可以是从API获取数据
        // 现在我们使用本地的articles.json文件
        const response = await fetch('articles.json');
        const articles = await response.json();

        // 更新文章计数
        articleCount.textContent = articles.length;

        // 渲染文章
        renderArticles(articles);
    } catch (error) {
        console.error('加载文章失败:', error);
        // 使用示例数据作为后备
        renderArticles(getFallbackArticles());
    }
}

function renderArticles(articles) {
    articleGrid.innerHTML = '';

    articles.forEach(article => {
        const articleCard = createArticleCard(article);
        articleGrid.appendChild(articleCard);
    });
}

function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';

    // 格式化日期
    const dateObj = new Date(article.date);
    const formattedDate = dateObj.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // 创建标签HTML
    const tagsHtml = article.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join('');

    card.innerHTML = `
        <div class="article-image" style="background: ${colorMap[article.image] || colorMap.blue}">
            <div class="article-date">${formattedDate}</div>
        </div>
        <div class="article-content">
            <h4>${article.title}</h4>
            <p>${article.excerpt}</p>
            <div class="article-meta">
                <div class="tags">
                    ${tagsHtml}
                </div>
                <a href="#" class="read-more" data-id="${article.id}">
                    阅读更多 <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;

    // 添加点击事件到"阅读更多"按钮
    const readMoreBtn = card.querySelector('.read-more');
    readMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openArticle(article.id);
    });

    return card;
}

function openArticle(id) {
    // 在实际项目中，这里会跳转到文章详情页
    // 现在只是显示一个提示
    alert(`打开文章 #${id}\n\n这是一个示例功能。在实际的博客中，这里会显示完整的文章内容。\n\n你可以添加一个article.html页面来展示完整的文章。`);
}

// 后备数据（如果JSON加载失败）
function getFallbackArticles() {
    return [
        {
            id: 1,
            title: "示例文章：博客搭建教程",
            excerpt: "这是一个示例文章，展示了博客的基本功能。",
            date: "2024-03-15",
            tags: ["示例", "教程"],
            image: "blue",
            readTime: "5分钟"
        },
        {
            id: 2,
            title: "欢迎来到我的博客",
            excerpt: "这里将分享我的思考和学习笔记。",
            date: "2024-03-10",
            tags: ["欢迎", "介绍"],
            image: "green",
            readTime: "3分钟"
        }
    ];
}

// 额外的工具函数
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
}

// 搜索功能（未来扩展）
function setupSearch() {
    // 这里可以实现搜索功能
    console.log('搜索功能待实现');
}

// 文章过滤功能（未来扩展）
function filterArticlesByTag(tag) {
    // 这里可以实现按标签过滤文章
    console.log(`按标签过滤: ${tag}`);
}

// 导出函数供控制台调试
window.blog = {
    toggleTheme,
    loadArticles,
    formatDate
};