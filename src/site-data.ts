// ---------------------------------------------------------------------------
// 全站个人数据集中在这里。想改名字 / 简介 / 技能 / 项目 / 社交链接，
// 只需编辑本文件，页面会自动更新。
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
	demoUrl?: string;
	repoUrl?: string;
	// 可选：放在 public/ 下的图片路径，例如 '/projects/foo.png'
	image?: string;
	featured?: boolean;
}

export const profile = {
	name: 'Your Name',
	role: 'Software Developer',
	tagline: '一句话介绍自己：你做什么、擅长什么、在关注什么。',
	// 头像：把图片放到 public/avatar.jpg，或改成你的图片路径
	avatar: '/avatar.jpg',
	location: 'City, Country',
	email: 'you@example.com',
	// 简历 PDF：放到 public/resume.pdf 即可自动出现下载按钮；不需要就设为 undefined
	resumeUrl: '/resume.pdf',
};

export const socials: Social[] = [
	{ label: 'GitHub', url: 'https://github.com/your-username', icon: 'github' },
	{ label: 'Email', url: 'mailto:you@example.com', icon: 'email' },
	// { label: 'LinkedIn', url: 'https://linkedin.com/in/your-username', icon: 'linkedin' },
	// { label: 'Twitter', url: 'https://twitter.com/your-username', icon: 'twitter' },
];

export const skillGroups: SkillGroup[] = [
	{
		category: 'Languages',
		items: ['TypeScript', 'Python', 'Go', 'SQL'],
	},
	{
		category: 'Frontend',
		items: ['React', 'Astro', 'Vue', 'CSS'],
	},
	{
		category: 'Backend & Cloud',
		items: ['Node.js', 'PostgreSQL', 'Docker', 'AWS'],
	},
];

export const experiences: Experience[] = [
	{
		role: 'Software Developer',
		org: 'Company Name',
		period: '2023 — Present',
		summary: '负责什么、做出了什么成果，用一两句话概括。',
	},
	{
		role: 'Previous Role',
		org: 'Previous Company',
		period: '2021 — 2023',
		summary: '简述这段经历的职责与亮点。',
	},
];

export const projects: Project[] = [
	{
		title: 'Project One',
		description: '这个项目解决了什么问题、用了什么技术、有什么亮点。',
		tags: ['Astro', 'TypeScript'],
		demoUrl: 'https://example.com',
		repoUrl: 'https://github.com/your-username/project-one',
		featured: true,
	},
	{
		title: 'Project Two',
		description: '一句话说明这个项目做什么、为谁做的、效果如何。',
		tags: ['Python', 'FastAPI'],
		repoUrl: 'https://github.com/your-username/project-two',
		featured: true,
	},
	{
		title: 'Project Three',
		description: '简短描述，突出技术栈或成果。',
		tags: ['Go', 'Docker'],
		repoUrl: 'https://github.com/your-username/project-three',
	},
];
