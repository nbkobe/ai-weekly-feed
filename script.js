// ===== AI工具数据 =====
const tools = [
    { name: "ChatGPT", desc: "OpenAI出品的最强对话AI，支持写作、编程、分析等多种任务", icon: "fas fa-robot", color: "#10a37f", category: "chat", tag: "对话", url: "https://chat.openai.com", rating: "⭐ 4.9" },
    { name: "Claude", desc: "Anthropic出品的AI助手，擅长长文分析和安全对话", icon: "fas fa-brain", color: "#d97706", category: "chat", tag: "对话", url: "https://claude.ai", rating: "⭐ 4.8" },
    { name: "豆包", desc: "字节跳动出品的AI助手，中文能力出色，免费好用", icon: "fas fa-comment-dots", color: "#00d2d3", category: "chat", tag: "对话", url: "https://www.doubao.com", rating: "⭐ 4.7" },
    { name: "DeepSeek", desc: "国产开源大模型，推理能力极强，性价比超高", icon: "fas fa-search", color: "#4834d4", category: "chat", tag: "对话", url: "https://chat.deepseek.com", rating: "⭐ 4.8" },
    { name: "通义千问", desc: "阿里出品的大模型，支持多模态，中文理解力强", icon: "fas fa-atom", color: "#6c5ce7", category: "chat", tag: "对话", url: "https://tongyi.aliyun.com", rating: "⭐ 4.6" },
    { name: "文心一言", desc: "百度出品的大模型，中文创作和知识问答表现出色", icon: "fas fa-feather", color: "#e17055", category: "chat", tag: "对话", url: "https://yiyan.baidu.com", rating: "⭐ 4.5" },
    { name: "Midjourney", desc: "最强AI绘画工具，生成艺术级图片，风格多样", icon: "fas fa-palette", color: "#fd79a8", category: "image", tag: "图像", url: "https://midjourney.com", rating: "⭐ 4.9" },
    { name: "DALL·E 3", desc: "OpenAI的图像生成工具，理解力强，风格精准", icon: "fas fa-image", color: "#00b894", category: "image", tag: "图像", url: "https://openai.com/dall-e-3", rating: "⭐ 4.7" },
    { name: "Stable Diffusion", desc: "开源AI绘画模型，可本地部署，自由度极高", icon: "fas fa-paint-brush", color: "#a29bfe", category: "image", tag: "图像", url: "https://stability.ai", rating: "⭐ 4.6" },
    { name: "即梦AI", desc: "字节出品的AI绘画工具，中文提示词友好", icon: "fas fa-star", color: "#fdcb6e", category: "image", tag: "图像", url: "https://jimeng.jianying.com", rating: "⭐ 4.5" },
    { name: "Sora", desc: "OpenAI的视频生成模型，文字生成电影级视频", icon: "fas fa-film", color: "#e84393", category: "video", tag: "视频", url: "https://openai.com/sora", rating: "⭐ 4.8" },
    { name: "可灵AI", desc: "快手出品的视频生成工具，中文场景理解力强", icon: "fas fa-video", color: "#ff7675", category: "video", tag: "视频", url: "https://kling.kuaishou.com", rating: "⭐ 4.6" },
    { name: "剪映AI", desc: "字节出品的视频编辑工具，AI一键成片", icon: "fas fa-magic", color: "#00cec9", category: "video", tag: "视频", url: "https://www.capcut.cn", rating: "⭐ 4.7" },
    { name: "Suno", desc: "最强AI音乐生成工具，输入文字即可创作歌曲", icon: "fas fa-music", color: "#6c5ce7", category: "audio", tag: "音频", url: "https://suno.com", rating: "⭐ 4.8" },
    { name: "Udio", desc: "AI音乐创作平台，支持多种音乐风格", icon: "fas fa-headphones", color: "#e17055", category: "audio", tag: "音频", url: "https://udio.com", rating: "⭐ 4.5" },
    { name: "GitHub Copilot", desc: "最强AI编程助手，支持所有主流编程语言", icon: "fas fa-code", color: "#00b894", category: "code", tag: "编程", url: "https://github.com/features/copilot", rating: "⭐ 4.8" },
    { name: "Cursor", desc: "AI驱动的代码编辑器，编程效率提升10倍", icon: "fas fa-terminal", color: "#0984e3", category: "code", tag: "编程", url: "https://cursor.sh", rating: "⭐ 4.9" },
    { name: "v0.dev", desc: "Vercel出品的AI前端代码生成工具", icon: "fas fa-laptop-code", color: "#636e72", category: "code", tag: "编程", url: "https://v0.dev", rating: "⭐ 4.6" },
    { name: "Bolt.new", desc: "全栈AI开发工具，一句话生成完整应用", icon: "fas fa-bolt", color: "#fdcb6e", category: "code", tag: "编程", url: "https://bolt.new", rating: "⭐ 4.7" },
    { name: "Jasper", desc: "专业AI写作工具，适合营销文案和内容创作", icon: "fas fa-pen-fancy", color: "#e84393", category: "writing", tag: "写作", url: "https://jasper.ai", rating: "⭐ 4.5" },
    { name: "Notion AI", desc: "Notion内置的AI写作助手，文档协作利器", icon: "fas fa-file-alt", color: "#2d3436", category: "writing", tag: "写作", url: "https://notion.so", rating: "⭐ 4.7" },
    { name: "Gamma", desc: "AI一键生成PPT/文档/网页，告别排版烦恼", icon: "fas fa-presentation-screen", color: "#6c5ce7", category: "office", tag: "办公", url: "https://gamma.app", rating: "⭐ 4.6" },
    { name: "Napkin AI", desc: "AI自动将文字转化为精美图表和流程图", icon: "fas fa-chart-bar", color: "#00b894", category: "office", tag: "办公", url: "https://napkin.ai", rating: "⭐ 4.5" },
    { name: "美图AI", desc: "国产AI设计工具，一键抠图/扩图/风格转换", icon: "fas fa-wand-magic-sparkles", color: "#fd79a8", category: "design", tag: "设计", url: "https://www.meitu.com", rating: "⭐ 4.5" },
    { name: "Canva AI", desc: "在线设计平台，AI辅助设计海报/Logo/社交媒体图", icon: "fas fa-pen-nib", color: "#00cec9", category: "design", tag: "设计", url: "https://canva.com", rating: "⭐ 4.7" },
    { name: "Remove.bg", desc: "AI一键去除图片背景，3秒出结果", icon: "fas fa-eraser", color: "#0984e3", category: "design", tag: "设计", url: "https://remove.bg", rating: "⭐ 4.6" },
    ];

    { name: "Figma AI", desc: "设计工具巨头Figma内置AI，自动布局/生成组件", icon: "fas fa-vector-square", color: "#a29bfe", category: "design", tag: "设计", url: "https://figma.com", rating: "⭐ 4.7" },
    // ====== AI 资讯数据（6条） ======
const newsData = [
  {
    id: 1,
    title: "谷歌 Gemini 3.8 Flash 预览版曝光，性能"明显提升"",
    summary: "谷歌员工已在内部平台测试下一代 Flash 模型，速度更快、成本更低，CEO 皮查伊称力争每月发布一款新模型。",
    date: "2026-08-28",
    tag: "模型动态",
    icon: "fas fa-bolt",
    color: "#4285f4",
    url: "https://www.itbear.com.cn/html/2026-08/1527536.html"
  },
  {
    id: 2,
    title: "中国大模型日均词元调用量突破500万亿",
    summary: "央视报道，截至2026年6月，国内AI日均词元调用量突破500万亿，两年实现千倍增长，竞争焦点转向智能体落地。",
    date: "2026-08-27",
    tag: "行业动态",
    icon: "fas fa-chart-line",
    color: "#e8453c",
    url: "https://www.toutiao.com/article/7678641236185580058/"
  },
  {
    id: 3,
    title: "OpenAI 正式关停 Sora，消费级AI视频路线熄火",
    summary: "Sora App已于4月底下线，API端计划9月下线。国产可灵、即梦、Veo等趁势崛起，抢占视频生成市场。",
    date: "2026-08-24",
    tag: "产品动态",
    icon: "fas fa-film",
    color: "#8b5cf6",
    url: "https://www.citnews.com.cn/news/220966"
  },
  {
    id: 4,
    title: "阿里云百炼下调 Qwen3.8-Flash 计费单价",
    summary: "输入单价从1元/次降至0.8元/次，输出从3元/次降至2.7元/次，整体成本降低10%，覆盖所有用户。",
    date: "2026-08-27",
    tag: "价格调整",
    icon: "fas fa-tags",
    color: "#f59e0b",
    url: "https://www.itbear.com.cn/html/2026-08/1526184.html"
  },
  {
    id: 5,
    title: "DeepSeek 文本请求市场份额连续两周超越谷歌",
    summary: "OpenRouter数据显示，DeepSeek以27.1%的文本请求份额位居第一，谷歌23.8%紧随其后，OpenAI排名第三。",
    date: "2026-08-18",
    tag: "市场份额",
    icon: "fas fa-trophy",
    color: "#10b981",
    url: "https://mp.weixin.qq.com/s"
  },
  {
    id: 6,
    title: "Anthropic 发布模型硬件标准研究预览版",
    summary: "提出适配大模型推理的硬件接口规范，推动行业软硬件适配标准化，降低不同厂商硬件迁移成本。",
    date: "2026-08-28",
    tag: "技术进展",
    icon: "fas fa-microchip",
    color: "#ec4899",
    url: "https://www.anthropic.com"
  }
];

// ====== 每周精选榜单数据（10个） ======
const rankingsData = [
  { rank: 1, name: "ChatGPT", desc: "综合能力最强，全球使用份额超64%", icon: "fas fa-robot", color: "#10a37f", score: 98, trend: "up" },
  { rank: 2, name: "豆包", desc: "国内月活3.45亿，中文理解与响应速度顶尖", icon: "fas fa-comment-dots", color: "#e8453c", score: 96, trend: "up" },
  { rank: 3, name: "Claude", desc: "长文本与低幻觉率之王，学术/法务首选", icon: "fas fa-brain", color: "#7c3aed", score: 95, trend: "stable" },
  { rank: 4, name: "DeepSeek", desc: "开源免费，代码与数学推理国内第一", icon: "fas fa-code", color: "#f59e0b", score: 93, trend: "up" },
  { rank: 5, name: "Gemini", desc: "多模态理解最强，Google生态深度整合", icon: "fas fa-globe", color: "#4285f4", score: 91, trend: "down" },
  { rank: 6, name: "Midjourney", desc: "AI绘画画质天花板，艺术表现力无人能及", icon: "fas fa-palette", color: "#ec4899", score: 90, trend: "stable" },
  { rank: 7, name: "Kimi", desc: "超长上下文专家，支持100-200万token", icon: "fas fa-book-open", color: "#06b6d4", score: 88, trend: "up" },
  { rank: 8, name: "可灵AI", desc: "国产视频顶流，6月全球用户破1亿", icon: "fas fa-video", color: "#8b5cf6", score: 86, trend: "up" },
  { rank: 9, name: "通义千问", desc: "中文公文写作强，API成本低廉", icon: "fas fa-feather-alt", color: "#f97316", score: 85, trend: "stable" },
  { rank: 10, name: "Microsoft Copilot", desc: "Office全家桶深度集成，职场办公利器", icon: "fas fa-file-word", color: "#0078d4", score: 84, trend: "down" }
];

// ====== 深度评测数据（4篇） ======
const reviewsData = [
  {
    id: 1,
    title: "ChatGPT vs 豆包 vs DeepSeek：谁写开题报告最靠谱？",
    summary: "从生成速度、逻辑框架、文献真实性、AIGC风险四个维度实测三款大模型，结果出乎意料。",
    date: "2026-08-26",
    image: "📊",
    color: "#3b82f6",
    tags: ["对话模型", "横评", "写作"],
    url: "https://blog.csdn.net/wxjuliu/article/details/164083114"
  },
  {
    id: 2,
    title: "AI视频生成横评：Sora退场后，谁是新的视频之王？",
    summary: "Sora正式下线，可灵、即梦、Runway、Veo四大工具全面对比，从画质、速度、可控性逐一实测。",
    date: "2026-08-24",
    image: "🎬",
    color: "#8b5cf6",
    tags: ["视频生成", "横评", "评测"],
    url: "https://www.citnews.com.cn/news/220966"
  },
  {
    id: 3,
    title: "2026年主流大模型能力全景对比",
    summary: "中文理解、逻辑推理、代码能力、多模态、幻觉率、响应速度六大维度全面评分，一文选对模型。",
    date: "2026-07-24",
    image: "🔬",
    color: "#10b981",
    tags: ["大模型", "对比", "选购指南"],
    url: "https://www.toutiao.com/article/7677824993375568407/"
  },
  {
    id: 4,
    title: "2026 AI绘画工具真实感对比：Midjourney vs GPT Image vs FLUX",
    summary: "光影质感、人物写真、商业广告三大场景实测，谁的画面最接近真实摄影？",
    date: "2026-07-14",
    image: "🎨",
    color: "#ec4899",
    tags: ["AI绘画", "横评", "画质对比"],
    url: "#"
  }
];
];

// ===== 渲染工具卡片 =====
function renderTools(filteredTools) {
    const grid = document.getElementById('toolsGrid');
    grid.innerHTML = '';
    
    filteredTools.forEach((tool, index) => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.dataset.category = tool.category;
        card.style.transitionDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="tool-card-header">
                <div class="tool-icon" style="background: ${tool.color}22; color: ${tool.color}">
                    <i class="${tool.icon}"></i>
                </div>
                <div>
                    <div class="tool-name">${tool.name}</div>
                    <span class="tool-tag">${tool.tag}</span>
                </div>
            </div>
            <p class="tool-desc">${tool.desc}</p>
            <div class="tool-footer">
                <a href="${tool.url}" target="_blank" class="tool-link">访问 →</a>
                <span class="tool-rating">${tool.rating}</span>
            </div>
        `;
        
        grid.appendChild(card);
        
        // 触发滚动动画
        setTimeout(() => {
            observer.observe(card);
        }, 10);
    });
}

// ===== 搜索过滤 =====
function filterTools() {
    const query = document.getElementById('toolSearch').value.toLowerCase();
    const filtered = tools.filter(t => 
        t.name.toLowerCase().includes(query) || 
        t.desc.toLowerCase().includes(query) ||
        t.tag.includes(query)
    );
    renderTools(filtered);
}

// ===== 分类过滤 =====
// ===== 分类过滤 =====
function filterCategory(category) {
    // 更新按钮状态
    document.querySelectorAll('.filter-tag').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-tag[data-category="${category}"]`).classList.add('active');

    if (category === 'all') {
        renderTools(tools);
    } else {
        renderTools(tools.filter(t => t.category === category));
    }
}
// ===== 随机推荐 =====
function randomPick() {
    const tool = tools[Math.floor(Math.random() * tools.length)];
    const modal = document.getElementById('randomModal');
    
    document.getElementById('modalIcon').innerHTML = `<i class="${tool.icon}" style="color: ${tool.color}"></i>`;
    document.getElementById('modalTitle').textContent = tool.name;
    document.getElementById('modalDesc').textContent = tool.desc;
    document.getElementById('modalLink').href = tool.url;
    
    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('randomModal').classList.remove('show');
}

// ===== 滚动动画观察器 =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// ===== 导航栏滚动效果 =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== 鼠标跟随光效 =====
document.addEventListener('mousemove', (e) => {
    const glow = document.getElementById('cursorGlow');
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// ===== 数字递增动画 =====
function animateNumbers() {
    document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.target);
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
            current += increment;
            }
            el.textContent = Math.floor(current);
        }, 20);
    });
}

// ===== 粒子背景 =====
function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const count = 80;
    
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(108, 92, 231, ${p.opacity})`;
            ctx.fill();
            
            // 连线
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[j].x - p.x;
                const dy = particles[j].y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(108, 92, 231, ${0.1 * (1 - dist / 120)})`;
                    ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    renderTools(tools);
    animateNumbers();
    initParticles(); 
    renderTools(tools);
});

// 点击弹窗外部关闭
const modal = document.getElementById('randomModal');
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
}
// ===== 事件监听绑定（替代 HTML 里的 onclick / oninput） =====

// 1. 搜索框实时过滤
const searchInput = document.getElementById('toolSearch');
if (searchInput) {
    searchInput.addEventListener('input', filterTools);
}

// 2. 分类按钮点击筛选
document.querySelectorAll('.filter-tag').forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        filterCategory(category);
    });
});

// 3. 随机推荐按钮（请确保你的按钮 class 是 random-btn）
const randomBtn = document.querySelector('.random-btn');
if (randomBtn) {
    randomBtn.addEventListener('click', randomPick);
}

// 4. 弹窗内的关闭按钮（请确保你的关闭图标 class 是 close-modal）
const closeBtn = document.querySelector('.close-modal');
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}
// ===== 事件监听绑定 =====
// ===== 页面初始化调用 =====
window.addEventListener('DOMContentLoaded', () => {
    // 1. 渲染所有板块内容
    renderTools(tools);      // 渲染工具卡片
    
    // 如果你的 script.js 里还有其他渲染函数，也在这里一并调用：
    // renderNews();         // 渲染AI资讯（如果代码里有这个函数）
    // renderRankings();     // 渲染每周精选
    // renderReviews();      // 渲染深度评测

    // 2. 启动视觉效果
    initParticles();
    animateNumbers();
});
// ====== 渲染 AI 资讯 ======
function renderNews() {
  const container = document.getElementById('newsGrid');
  if (!container) return;
  container.innerHTML = newsData.map(news => `
    <div class="news-card">
      <div class="news-icon" style="background:${news.color}22;color:${news.color}">
        <i class="${news.icon}"></i>
      </div>
      <div class="news-content">
        <div class="news-meta">
          <span class="news-tag" style="color:${news.color}">${news.tag}</span>
          <span class="news-date">${news.date}</span>
        </div>
        <h3 class="news-title">${news.title}</h3>
        <p class="news-summary">${news.summary}</p>
        <a href="${news.url}" target="_blank" class="news-link">阅读全文 <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  `).join('');
}

// ====== 渲染每周精选榜单 ======
function renderRankings() {
  const container = document.getElementById('rankingsList');
  if (!container) return;
  container.innerHTML = rankingsData.map((item, index) => `
    <div class="ranking-item">
      <div class="ranking-rank ${index < 3 ? 'top3' : ''}">${item.rank}</div>
      <div class="ranking-icon" style="background:${item.color}22;color:${item.color}">
        <i class="${item.icon}"></i>
      </div>
      <div class="ranking-info">
        <h4 class="ranking-name">${item.name}</h4>
        <p class="ranking-desc">${item.desc}</p>
      </div>
      <div class="ranking-score">
        <div class="score-bar"><div class="score-fill" style="width:${item.score}%;background:${item.color}"></div></div>
        <span class="score-value">${item.score}</span>
        <span class="score-trend ${item.trend}">${item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '—'}</span>
      </div>
    </div>
  `).join('');
}

// ====== 渲染深度评测 ======
function renderReviews() {
  const container = document.getElementById('reviewsGrid');
  if (!container) return;
  container.innerHTML = reviewsData.map(review => `
    <div class="review-card">
      <div class="review-image" style="background:linear-gradient(135deg,${review.color}15,${review.color}05)">
        <span class="review-emoji">${review.image}</span>
      </div>
      <div class="review-body">
        <div class="review-tags">
          ${review.tags.map(t => `<span class="review-tag">${t}</span>`).join('')}
        </div>
        <h3 class="review-title">${review.title}</h3>
        <p class="review-summary">${review.summary}</p>
        <div class="review-footer">
          <span class="review-date">${review.date}</span>
          <a href="${review.url}" target="_blank" class="review-link" style="color:${review.color}">查看评测 <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  `).join('');
}
renderNews();         // 渲染AI资讯
renderRankings();     // 渲染每周精选
renderReviews();      // 渲染深度评测
