
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ecommerce-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ecommerce-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 40833, hash: '22da15b9687bbc186bc0e7623a643e6b337e5cf6902be0cee3e15885160b50cc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 33351, hash: 'af5be84c11fb58ee7d7ae838053f031ffbbd08f01dc5459e990049150ad51505', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79050, hash: 'd01587cc9434904f8325770e616322a1800b4c60b6e5186d4dcdca4a0e81e7ea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SIF4AA4M.css': {size: 8043, hash: '5WchNNnImTU', text: () => import('./assets-chunks/styles-SIF4AA4M_css.mjs').then(m => m.default)}
  },
};
