// ---------------------------------------------------------------------------
// 全站个人数据集中在这里。想改名字 / 简介 / 技能 / 项目 / 社交链接，
// 只需编辑本文件，页面会自动更新。
// 留空的板块（技能、经历等）会在页面上自动隐藏。
// ---------------------------------------------------------------------------

export type SocialIcon = 'github' | 'twitter' | 'linkedin' | 'email' | 'mastodon' | 'link';

export interface Social {
	label: string;
	url: string;
	icon: SocialIcon;
}

export interface SkillGroup {
	category: string;
	items: string[];
}

export interface Experience {
	role: string;
	org: string;
	period: string;
	summary: string;
}

export interface Project {
	title: string;
	description: string;
	tags: string[];
	period?: string;
	demoUrl?: string;
	repoUrl?: string;
	// 可选：放在 public/ 下的图片路径，例如 '/projects/foo.png'
	image?: string;
	featured?: boolean;
}

export const profile = {
	name: '刘泰来',
	role: '',
	tagline: '',
	// 头像：把图片放到 public/avatar.jpg 后取消注释即可；没有图时自动显示名字首字母
	avatar: '/avatar.jpg',
	location: '云南昆明',
	email: '2796254343@qq.com',
	// 简历 PDF：放到 public/resume.pdf 后填入 '/resume.pdf' 即可出现下载按钮
	resumeUrl: undefined as string | undefined,
};

export const socials: Social[] = [
	{ label: 'GitHub', url: 'https://github.com/cenimenma', icon: 'github' },
	{
		label: 'LinkedIn',
		url: 'https://www.linkedin.com/in/tailai-liu-1901b5386/',
		icon: 'linkedin',
	},
	{ label: 'Email', url: 'mailto:2796254343@qq.com', icon: 'email' },
];

// 暂不填写：留空即可，页面会自动隐藏「技能」板块
export const skillGroups: SkillGroup[] = [];

// 暂不填写：留空即可，页面会自动隐藏「经历」板块
export const experiences: Experience[] = [];

export const projects: Project[] = [
	{
		title: '基于强化学习的非完全信息博弈策略优化模型',
		period: '2024年12月 — 2025年10月',
		description:
			'设计并构建了以《三国杀》为场景的强化学习策略优化系统，采用"环境模拟器—强化学习框架—策略评估平台"三层架构，实现规则引擎、状态接口与动作验证器；训练并横向对比 DQN / NFSP 式 agent，通过自我对弈与课程学习训练 Agent，设计"稀疏+稠密"奖励函数缓解奖励稀疏问题，以胜率、决策一致性、策略可解释性等指标评估博弈策略。',
		tags: ['Python', 'RLCard', 'DQN', '多智能体仿真', '因果强化学习'],
		featured: true,
	},
	{
		title: '融合 LLM 与知识图谱的交互式文献分析系统 Agent',
		period: '2025年9月 — 2026年3月',
		description:
			'设计并实现了融合 LLM 与知识图谱的 Agent 文献分析系统，通过 PDF 元数据解析、知识图谱构建、数据挖掘工具构建、RAG 数据库构建、模糊查询、记忆系统与自研框架，实现了学术文献的高效解析、领域演化挖掘与可解释问答。',
		tags: ['Python', 'Agent', 'RAG', 'Function Calling', 'Prompt Engineering', 'NetworkX', 'BERTopic'],
		featured: true,
	},
	{
		title: 'Argus：基于 RAFT 框架的 Linux 内核邮件列表自动代码审查系统',
		period: '2026年3月 — 2026年7月',
		description:
			'设计并实现了去中心化系统中的自动代码审查系统，用 RAFT 方法微调小模型生成评审回复。编写 NNTP 爬虫采集 LKML 18 个月邮件，清洗、划分并构建 RAFT 训练数据集，进行 QLoRA 微调，以检索增强与静态分析信号增强上下文，并通过 CR-bench 评估体系验证效果。',
		tags: ['Python', 'Fine-tuning (QLoRA)', 'RAFT', 'GitHub Actions', 'Agent benchmark'],
		featured: true,
	},
];
