const pages = [
    '/',
    '/about-me',
];
  
module.exports = {
    siteUrl: 'https://serhatbelen.dev',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    transform: async (_, path) => {
        return {
            loc: path,
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
            alternateRefs: [],
        };
    },
    additionalPaths: async () => {
        return pages.map((page) => ({
            loc: page,
            lastmod: new Date().toISOString(),
        }));
    },
};
  