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
    { name: "Figma AI", desc: "设计工具巨头Figma内置AI，自动布局/生成组件", icon: "fas fa-vector-square", color: "#a29bfe", category: "design", tag: "设计", url: "https://figma.com", rating: "⭐ 4.7" },
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
function filterCategory(category, event) {
    // 更新按钮状态
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
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
            if (current >= target) {
                current = target;
                clearInterval(timer);
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
});

// 点击弹窗外部关闭
const modal = document.getElementById('randomModal');
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
}
