// Vercel Serverless Function - AI 聊天接口
// 使用 DeepSeek API（便宜好用）

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {
                        role: 'system',
                        content: `你是 AI Weekly Feed 的智能助手。你的职责是：
1. 帮用户推荐合适的 AI 工具
2. 回答 AI 相关问题
3. 帮用户优化提示词
4. 回答要简洁、实用、有趣

常用工具推荐：
- 对话AI：ChatGPT、DeepSeek、Claude、Kimi、通义千问
- AI绘画：Midjourney、Stable Diffusion
- AI编程：Cursor
- AI音乐：Suno
- AI视频：Runway
- 效率工具：Notion AI、Gamma`
                    },
                    { role: 'user', content: message }
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || '抱歉，我暂时无法回答。';

        res.status(200).json({ reply });
    } catch (error) {
        console.error('AI Chat Error:', error);
        res.status(500).json({ reply: '服务暂时不可用，请稍后再试。' });
    }
}
