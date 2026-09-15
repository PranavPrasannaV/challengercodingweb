import type { MetadataRoute } from 'next';
import { SITE } from '@/src/site';

// Required under output: 'export' — the file is produced at build time.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    // Local-profile pages. Nothing behind them is private, but
                    // there is nothing there to index either.
                    '/login/',
                    '/signup/',
                    '/learn/',
                ],
            },
        ],
        sitemap: `${SITE.url}/sitemap.xml`,
        host: SITE.url,
    };
}
