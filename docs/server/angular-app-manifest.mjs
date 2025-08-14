
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1067, hash: '5199330a42f8085fab3e20a8b66d44571e7030f7813eec4ab75498143f028458', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: '2a86981bbd658054dd689ee5e0d333518633b804c317593af88df651a0264008', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8435, hash: '437a8f733689500dfcbf7c501fbd88bae9ca90ee09af9216ac04e23b281b8acc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-A44ULZVL.css': {size: 865, hash: 'OugjUt4hbrM', text: () => import('./assets-chunks/styles-A44ULZVL_css.mjs').then(m => m.default)}
  },
};
