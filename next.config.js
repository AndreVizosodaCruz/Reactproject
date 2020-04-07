const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

const blogPostsFolder = '/static/content/posts';
const worksFolder = '/static/content/works';

const nextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    return cfg;
  }
}

const getPathsForPosts = () => {
  return fs
    .readdirSync(blogPostsFolder)
    .map(blogName => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        [`/blog/post/${trimmedName}`]: {
          page: '/blog/post/[slug]',
          query: {
            slug: trimmedName,
          },
        },
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
};

const getPathsForWorks = () => {
  return fs
    .readdirSync(worksFolder)
    .map(workName => {
      const trimmedName = workName.substring(0, workName.length - 3);
      return {
        [`/works/${trimmedName}`]: {
          page: '/works/[slug]',
          query: {
            slug: trimmedName,
          },
        },
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
};

module.exports = withPlugins([
  [withCSS],
  [withFonts],
], nextConfig, getPathsForPosts, getPathsForWorks);
