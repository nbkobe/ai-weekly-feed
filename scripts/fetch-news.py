#!/usr/bin/env python3
"""
AI 资讯自动抓取脚本
通过 GitHub Actions 定时运行，抓取 AI 资讯并更新 news.json
"""

import json
import os
import re
import urllib.request
import urllib.error
from datetime import datetime, timedelta

# 数据源：RSS feeds
RSS_FEEDS = [
    {"name": "Hacker News AI", "url": "https://hnrss.org/newest?q=AI+OR+LLM+OR+GPT&count=10"},
    {"name": "OpenAI Blog", "url": "https://openai.com/blog/rss.xml"},
]

def fetch_rss(url):
    """简单的 RSS 解析（不依赖第三方库）"""
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'AI-Weekly-Bot/1.0'})
        with urllib.request.urlopen(req, timeout=10) as response:
            content = response.read().decode('utf-8')

        items = []
        # 简单的 XML 解析
        item_blocks = re.findall(r'<item>(.*?)</item>', content, re.DOTALL)
        for block in item_blocks[:5]:  # 每个源最多取5条
            title_match = re.search(r'<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?</title>', block)
            link_match = re.search(r'', block)
            desc_match = re.search(r'<description>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?</description>', block)

            if title_match:
                title = title_match.group(1).strip()
                link = link_match.group(1).strip() if link_match else ""
                desc = desc_match.group(1).strip() if desc_match else ""
                # 清理 HTML 标签
                desc = re.sub(r'<[^>]+>', '', desc)[:200]

                items.append({
                    "title": title,
                    "url": link,
                    "summary": desc
                })
        return items
    except Exception as e:
        print(f"抓取失败 {url}: {e}")
        return []

def classify_tag(title):
    """根据标题自动分类"""
    title_lower = title.lower()
    if any(w in title_lower for w in ['gpt', 'chatgpt', 'openai', 'claude', 'deepseek', 'llm', '模型']):
        return '大模型'
    if any(w in title_lower for w in ['代码', 'code', '编程', 'programming', 'cursor', 'copilot']):
        return 'AI编程'
    if any(w in title_lower for w in ['图片', 'image', '画', 'art', 'midjourney', 'diffusion']):
        return 'AI绘画'
    if any(w in title_lower for w in ['视频', 'video', 'runway', 'sora']):
        return 'AI视频'
    if any(w in title_lower for w in ['音乐', 'music', 'suno']):
        return 'AI音乐'
    return 'AI产品'

def main():
    print(f"[{datetime.now()}] 开始抓取 AI 资讯...")

    all_news = []
    news_id = 1

    for feed in RSS_FEEDS:
        print(f"  抓取: {feed['name']}")
        items = fetch_rss(feed['url'])
        for item in items:
            all_news.append({
                "id": news_id,
                "title": item["title"],
                "summary": item["summary"],
                "source": feed["name"],
                "url": item["url"],
                "date": datetime.now().strftime("%Y-%m-%d"),
                "tag": classify_tag(item["title"]),
                "isHot": news_id <= 3
            })
            news_id += 1

    # 去重（按标题）
    seen_titles = set()
    unique_news = []
    for news in all_news:
        if news["title"] not in seen_titles:
            seen_titles.add(news["title"])
            unique_news.append(news)

    # 重新编号
    for i, news in enumerate(unique_news):
        news["id"] = i + 1

    # 保存
    output = {"news": unique_news}
    output_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'news.json')
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"  完成！共抓取 {len(unique_news)} 条资讯")

if __name__ == '__main__':
    main()
