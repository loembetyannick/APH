import Generator from 'react-router-sitemap-generator';

const generator = new Generator(
    'https://adalplumbingandheating.co.uk/',
    {
      lastmod: new Date().toISOString().slice(0, 10),
      changefreq: 'monthly',
      priority: 0.8,
    }
  );
  generator.save('public/sitemap.xml');