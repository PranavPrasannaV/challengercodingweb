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
                // The 73 legacy .html pages are deliberately NOT disallowed.
                // Each carries <meta name="robots" content="noindex, follow">
                // and a canonical to its replacement, and a crawler has to be
                // allowed to fetch a page in order to read those tags. Blocking
                // them here would leave them indexed on link signals alone.
            },
        ],
        sitemap: `${SITE.url}/sitemap.xml`,
        host: SITE.url,
    };
}
