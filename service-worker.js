"use strict";var precacheConfig=[["/danube-dev/index.html","7a257b198e13db55009d09b60d18aa84"],["/danube-dev/static/css/main.3f577a7d.css","2c57a93aa1f8c19447ce34b5e45242f5"],["/danube-dev/static/js/main.e1536c16.js","03f8daa33881e8b48c80a1b6f820b2d8"],["/danube-dev/static/media/about-img-2.6d5920da.jpg","6d5920da96567648d178786e27992e37"],["/danube-dev/static/media/about-img-3.a7ab5ae7.jpg","a7ab5ae78185badc72a9857291fad16d"],["/danube-dev/static/media/about-img-4.8c5a4dd9.jpg","8c5a4dd9937e468fb79d8483e13c2a41"],["/danube-dev/static/media/about-img-5.4e965fdd.jpg","4e965fdda13f51dd83b45db811d62746"],["/danube-dev/static/media/about-img-6.45f1ef9b.jpg","45f1ef9bddb60dbafe005e00e978472c"],["/danube-dev/static/media/about-img-7.224ed1c5.jpg","224ed1c5914fb825b9430f4f736cbb35"],["/danube-dev/static/media/about-img-8.d114d1d4.jpg","d114d1d4c57019cd46dec6cc1a7f9e10"],["/danube-dev/static/media/about-img-9.7dc455fb.jpg","7dc455fbd726022e80506b5886e46fd5"],["/danube-dev/static/media/adler_logo.c9cf957b.png","c9cf957b33384428e0e311f7b68d3470"],["/danube-dev/static/media/andriy-syumka.969b625f.jpg","969b625f689d3046fd2a871235324ef9"],["/danube-dev/static/media/balaton.6155f2f0.jpg","6155f2f0100e12a39e0dc60cf39a2956"],["/danube-dev/static/media/barley.c021c2ef.jpg","c021c2ef68dc6695e32d6cf71cc21c70"],["/danube-dev/static/media/bohdan-kovpak_web.51095a22.jpg","51095a22ccc2a1b42368362436aaec06"],["/danube-dev/static/media/europartner.56a06913.jpg","56a06913b96fdac41e0b64b81f883627"],["/danube-dev/static/media/felix-gohn_web.42efc1c1.jpg","42efc1c1651704a96a8641da57d406ae"],["/danube-dev/static/media/field.6c11116e.jpg","6c11116e3c7391c3a55757d2a46cfeb4"],["/danube-dev/static/media/field_footer.765b16b0.jpg","765b16b097b1f21d1d60e70f8ce3821f"],["/danube-dev/static/media/fulvio.2ef4af06.jpg","2ef4af062cfedcc7d722e08d398768a7"],["/danube-dev/static/media/julia-tasheva_web.8990dd42.jpg","8990dd42ec38f5f5b7b5d16d7e2c732a"],["/danube-dev/static/media/kc104.30b382b2.jpg","30b382b212df52621e3be066ce42fcf3"],["/danube-dev/static/media/logo.7646bc16.svg","7646bc16801339e6d5cfcb3ab72e467c"],["/danube-dev/static/media/logo_white.f2502d30.svg","f2502d30deb25a0c38560bb6aad20ca0"],["/danube-dev/static/media/midas.372734d9.jpg","372734d920bf82989b91e6e4c355e32a"],["/danube-dev/static/media/nikolaichuk.af0f45ab.jpg","af0f45ab74133df0b7d3a9430bad89b4"],["/danube-dev/static/media/orlando.eebb865f.jpg","eebb865fdc27b2d1bdef0fefab25b64c"],["/danube-dev/static/media/paula.dff2665e.jpg","dff2665e9781ede8092a49c276eea480"],["/danube-dev/static/media/pedro.30867bab.jpg","30867bab8657d95aaddbc4594d4fd543"],["/danube-dev/static/media/raps.4ea97eb3.jpg","4ea97eb3f6e7d3f5010dd852cc039766"],["/danube-dev/static/media/sedna_agro.11773496.png","11773496d4776ae3981fca478d9a4f73"],["/danube-dev/static/media/sergiy_merzhvinskiy.61032eff.jpg","61032eff1dc2b81c87e2938c0f094bc1"],["/danube-dev/static/media/sigalia.fd9820e2.jpg","fd9820e2dedceac8f587f6bd655ffdde"],["/danube-dev/static/media/sinara.4308de00.jpg","4308de009bb109c0f8ab57bac81e0999"],["/danube-dev/static/media/soevyvik.2b1316d5.png","2b1316d5e849a7509c45c311af61908e"],["/danube-dev/static/media/soybeans.d6df7a79.jpg","d6df7a79a92837bb94432dba2ea06674"],["/danube-dev/static/media/sultana.c4d86f3e.jpg","c4d86f3ed2d5d1778e7d91df689b505d"],["/danube-dev/static/media/sunflower.df169cb6.jpg","df169cb69a8069a03c31e4b4bf9f099f"],["/danube-dev/static/media/svitlana-linnik_web.d80750b2.jpg","d80750b27ade06d5519a2178c601052d"],["/danube-dev/static/media/volodumur-opolonec_web.68084bac.jpg","68084bacf8c918c8cbccd4b8e232b3ac"],["/danube-dev/static/media/wheat.63a4c325.jpg","63a4c325d3ce75039d3420c997313dd2"],["/danube-dev/static/media/yulia-vezel.83d160bd.jpg","83d160bdd453f2e1fb7fcf362c150fa7"],["/danube-dev/static/media/zerno.eedf4f8e.png","eedf4f8e933c81133790ad9a8e6396d4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var d=new URL(e);return"/"===d.pathname.slice(-1)&&(d.pathname+=a),d.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,d,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(d)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var d=new URL(a).pathname;return e.some(function(e){return d.match(e)})},stripIgnoredUrlParameters=function(e,d){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return d.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],d=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,d,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(d){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!d.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var d=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!d.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,d=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(d))||(d=addDirectoryIndex(d,t),e=urlsToCacheKeys.has(d));var c="/danube-dev/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(d=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(d)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(d)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});