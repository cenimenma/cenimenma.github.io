// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { profile } from './site-data';

export const SITE_TITLE = `${profile.name} · ${profile.role}`;
export const SITE_DESCRIPTION = profile.tagline;
