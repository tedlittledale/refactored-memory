if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return n[e]||(i=new Promise((async i=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},i=(i,n)=>{Promise.all(i.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(i)};self.define=(i,a,s)=>{n[i]||(n[i]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return n;case"module":return t;default:return e(i)}}))).then((e=>{const i=s(...e);return n.default||(n.default=i),n}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_error",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/Vmh0F-1tMN_Ro8eAnGEic/_buildManifest.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/Vmh0F-1tMN_Ro8eAnGEic/_ssgManifest.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/2b81fbccf7991fcaf3d766ef87435e02776483f3.fe5aed51aeb44e935b9a.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/7fd8fe7452cb73db1ee7ab20ebeea3b80cef323f.c00249e658d07d74eae9.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/commons.11489e358f97643e552b.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/framework.76fac10824b6450d7d51.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/main-0f8355066a414a0d975a.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/pages/_app-9332877559acdc085598.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/pages/_error-67461efa3dd05e050c04.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/pages/book/%5BplaceId%5D-693faa3c5d75a5b48b94.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/pages/cart-b8664bd56b783fd3d0a7.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/pages/index-21ea583bcd6c5e94937c.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/polyfills-51ce6eb9ed73aacaf515.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/chunks/webpack-95c2b224bccf352ee870.js",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/css/96bd4e5ad5c62d249c4e.css",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/fahkwang-all-600-normal.28ecb92950d4a8b66f311390292a0755.woff",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/fahkwang-latin-600-normal.c08d349134613b29093aecb10457708c.woff2",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/fahkwang-latin-ext-600-normal.aed3333b7b06031bc161d1092983585e.woff2",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/fahkwang-thai-600-normal.46ccce75c37eeae88aff54fda3847e3a.woff2",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/fahkwang-vietnamese-600-normal.06dd5af1ed74adeb02ddb5ec95fe56e1.woff2",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/mulish-all-400-normal.f12fae79347f9ab66b184ec93757c600.woff",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/mulish-all-700-normal.c03f9676af417b628e313ec11c6ddd8d.woff",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/mulish-latin-400-normal.1e3ade16373e5c750d4e1752d5ef2654.woff2",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/mulish-latin-700-normal.1e3ade16373e5c750d4e1752d5ef2654.woff2",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/mulish-latin-ext-400-normal.82ca89e377b3519c3ceb983da410a1af.woff2",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/mulish-latin-ext-700-normal.82ca89e377b3519c3ceb983da410a1af.woff2",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/mulish-vietnamese-400-normal.4e6fd9bd745931bcbfabda899128e712.woff2",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/_next/static/media/mulish-vietnamese-700-normal.4e6fd9bd745931bcbfabda899128e712.woff2",revision:"Vmh0F-1tMN_Ro8eAnGEic"},{url:"/android-chrome-192x192.png",revision:"7ce4173bcb6a8ae014018cebed175051"},{url:"/android-chrome-512x512.png",revision:"5139a5cccc5f938b7fe923fe92b9e410"},{url:"/animated-favicon.gif",revision:"384b7609c13ec29b063d3fc6d1a85347"},{url:"/apple-touch-icon.png",revision:"b842f14c4daae1a1b1048b63b56b84e4"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"69cf8bbb579112ab6a1579ebdeee703e"},{url:"/favicon-32x32.png",revision:"21ba59296968402ed7632ecaf65dfce6"},{url:"/favicon.ico",revision:"f366d0b3d8fcf681dda874baf2d53d11"},{url:"/favicon.png",revision:"d33494c7efb6487bfe7821cdd7784b2b"},{url:"/manifest.json",revision:"39a1746d01a4d0c9a8562344af0974fe"},{url:"/mstile-150x150.png",revision:"dadc07e3122ada3d9f32a038619be02e"},{url:"/safari-pinned-tab.svg",revision:"4f6b1c9e5d2f8cafa9435b770ab12d35"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",networkTimeoutSeconds:10,plugins:[{requestWillFetch:async({request:e})=>(Request(),e)},new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e,event:i,error:n,state:a})=>caches.match("/offline.jpg",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e,event:i,error:n,state:a})=>caches.match("/_error",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
