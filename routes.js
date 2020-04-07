const routes = module.exports = require('next-routes')()

// SE O SITE TIVER MULTI LINGUA
// module.exports = routes().add({ name: 'index', pattern: '/:lang/:slug?', page: 'index' })

// SE O SITE NÃO TIVER MULTI LINGUA
routes
.add({ name: 'index', pattern: '/:slug?', page: 'index' })
.add({ name: 'legal', pattern: '/legal?', page: 'legal' })
.add({ name: 'newsDetail', pattern: '/news/:slug?', page: 'news' })
.add({ name: 'worksDetaul', pattern: '/works/:slug?', page: 'works' })