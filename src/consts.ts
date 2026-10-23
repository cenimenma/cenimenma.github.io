// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { profile } from './site-data';

export const SITE_TITLE = profile.role ? `${profile.name} · ${profile.role}` : profile.name;
export const SITE_DESCRIPTION = profile.tagline || `${profile.name} 的个人主页`;
