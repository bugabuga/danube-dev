"use strict";var precacheConfig=[["/danube-dev/index.html","f72d997bde43110283ad2f1a6ce1562d"],["/danube-dev/static/css/main.0cffcc8e.css","cdc97694abd61d346ac93b573fed091c"],["/danube-dev/static/js/main.eea17c12.js","acd2206d768a119c013f2849197f07f6"],["/danube-dev/static/media/about-img-2.6d5920da.jpg","6d5920da96567648d178786e27992e37"],["/danube-dev/static/media/about-img-3.a7ab5ae7.jpg","a7ab5ae78185badc72a9857291fad16d"],["/danube-dev/static/media/about-img-5.4e965fdd.jpg","4e965fdda13f51dd83b45db811d62746"],["/danube-dev/static/media/about-img-6.45f1ef9b.jpg","45f1ef9bddb60dbafe005e00e978472c"],["/danube-dev/static/media/about-img-7.224ed1c5.jpg","224ed1c5914fb825b9430f4f736cbb35"],["/danube-dev/static/media/about-img-8.d114d1d4.jpg","d114d1d4c57019cd46dec6cc1a7f9e10"],["/danube-dev/static/media/about-img-9.7dc455fb.jpg","7dc455fbd726022e80506b5886e46fd5"],["/danube-dev/static/media/agrobazaplus.7ed1c69e.png","7ed1c69ea8485329b546fcbefdb173c6"],["/danube-dev/static/media/agrodobrobut.63ba2314.png","63ba2314e1ad6e3daa8b625a82ed1d07"],["/danube-dev/static/media/agroexpert.c45efca4.png","c45efca480eec38119b35541b921f0a2"],["/danube-dev/static/media/agroscop.22181d0c.png","22181d0c76d55bf090e01717504dec18"],["/danube-dev/static/media/agrotok.36e4f978.png","36e4f9783da9895bef3e61d075be3708"],["/danube-dev/static/media/andriy-syumka.969b625f.jpg","969b625f689d3046fd2a871235324ef9"],["/danube-dev/static/media/arkanda.dff2665e.jpg","dff2665e9781ede8092a49c276eea480"],["/danube-dev/static/media/balaton.6155f2f0.jpg","6155f2f0100e12a39e0dc60cf39a2956"],["/danube-dev/static/media/barley.c021c2ef.jpg","c021c2ef68dc6695e32d6cf71cc21c70"],["/danube-dev/static/media/bohdan-kovpak_web.51095a22.jpg","51095a22ccc2a1b42368362436aaec06"],["/danube-dev/static/media/cemical_seeds.10b42483.png","10b42483fdb4d7090f33f182b041c215"],["/danube-dev/static/media/europartner.648b1894.png","648b1894cfedefbf8ecff11865cc8b19"],["/danube-dev/static/media/expolux.7d580cbc.png","7d580cbcc12a271f8ab9197ec939b7d8"],["/danube-dev/static/media/factory.e0369a3a.jpg","e0369a3a5879df2d72261f175fdc3d46"],["/danube-dev/static/media/felix-gohn_web.42efc1c1.jpg","42efc1c1651704a96a8641da57d406ae"],["/danube-dev/static/media/field.6c11116e.jpg","6c11116e3c7391c3a55757d2a46cfeb4"],["/danube-dev/static/media/field_footer.765b16b0.jpg","765b16b097b1f21d1d60e70f8ce3821f"],["/danube-dev/static/media/fulvio.2ef4af06.jpg","2ef4af062cfedcc7d722e08d398768a7"],["/danube-dev/static/media/grainforce.18f64a34.png","18f64a344c397661dadb3487c41828e7"],["/danube-dev/static/media/julia-tasheva_web.8990dd42.jpg","8990dd42ec38f5f5b7b5d16d7e2c732a"],["/danube-dev/static/media/kc104.30b382b2.jpg","30b382b212df52621e3be066ce42fcf3"],["/danube-dev/static/media/location-white.ac6def0f.svg","ac6def0f1a8365f217486bcdb41ad56c"],["/danube-dev/static/media/location.956f1b81.svg","956f1b8190adafe794927f40a119dba6"],["/danube-dev/static/media/logo.7646bc16.svg","7646bc16801339e6d5cfcb3ab72e467c"],["/danube-dev/static/media/logo_white.8db0a5cd.svg","8db0a5cd4d0a2752dec70795202637a3"],["/danube-dev/static/media/midas.372734d9.jpg","372734d920bf82989b91e6e4c355e32a"],["/danube-dev/static/media/nikolaichuk.af0f45ab.jpg","af0f45ab74133df0b7d3a9430bad89b4"],["/danube-dev/static/media/oleksandr-kuleshov.f26fcfdd.jpg","f26fcfdd5221aad9824d2495e006b1e0"],["/danube-dev/static/media/orion_bioteh.5f3d2ef5.png","5f3d2ef537bce31136812f40a32e894f"],["/danube-dev/static/media/orlando.eebb865f.jpg","eebb865fdc27b2d1bdef0fefab25b64c"],["/danube-dev/static/media/paula.dff2665e.jpg","dff2665e9781ede8092a49c276eea480"],["/danube-dev/static/media/pedro.30867bab.jpg","30867bab8657d95aaddbc4594d4fd543"],["/danube-dev/static/media/probstdorfer.9b273e6a.svg","9b273e6afcd3d0d10ecb9dadeab17436"],["/danube-dev/static/media/rape.b0109ac1.jpg","b0109ac12573f989575c7ad0eea4cfce"],["/danube-dev/static/media/raps.4ea97eb3.jpg","4ea97eb3f6e7d3f5010dd852cc039766"],["/danube-dev/static/media/roland.372734d9.jpg","372734d920bf82989b91e6e4c355e32a"],["/danube-dev/static/media/sedna_agro.5baa833f.png","5baa833f1992b9eec7bda8d4e22a9675"],["/danube-dev/static/media/seed-2.d8d6080b.jpg","d8d6080b6c2867ee4340cb712a278dd5"],["/danube-dev/static/media/seed-4.37aee7cd.jpg","37aee7cd25ed9b8cd0f7c45a3d523b7a"],["/danube-dev/static/media/seed-5.b844afb1.jpg","b844afb1fe918372022ac2678ad65617"],["/danube-dev/static/media/seed-5_origin.4fe66c5f.jpg","4fe66c5f1eee7ad36971c43cac0746f7"],["/danube-dev/static/media/seed.f4a53ebd.jpg","f4a53ebdde21e6873616e74dfdd4cd84"],["/danube-dev/static/media/sergiy_merzhvinskiy.61032eff.jpg","61032eff1dc2b81c87e2938c0f094bc1"],["/danube-dev/static/media/sigalia.fd9820e2.jpg","fd9820e2dedceac8f587f6bd655ffdde"],["/danube-dev/static/media/sinara.4308de00.jpg","4308de009bb109c0f8ab57bac81e0999"],["/danube-dev/static/media/soevyvik.44eff49f.png","44eff49f8f6afcd07148103f1ba1d7cf"],["/danube-dev/static/media/soy.f5474f0d.jpg","f5474f0da48af89820f6bf478f68df24"],["/danube-dev/static/media/soybeans.d6df7a79.jpg","d6df7a79a92837bb94432dba2ea06674"],["/danube-dev/static/media/spring-barley.593a2402.jpg","593a2402ebe002387b927ceed4292aeb"],["/danube-dev/static/media/spring-barley_origin.1a63ca1d.jpg","1a63ca1dfabc36b1714cb47f50f0354f"],["/danube-dev/static/media/sultana.c4d86f3e.jpg","c4d86f3ed2d5d1778e7d91df689b505d"],["/danube-dev/static/media/sunflower.8a6fccb8.jpg","8a6fccb87ebba69d74308f77337e0e16"],["/danube-dev/static/media/sunflower.df169cb6.jpg","df169cb69a8069a03c31e4b4bf9f099f"],["/danube-dev/static/media/svitlana-linnik_web.d80750b2.jpg","d80750b27ade06d5519a2178c601052d"],["/danube-dev/static/media/tak_group.434f9196.png","434f919652cac146b2b7d7b0ad5efb62"],["/danube-dev/static/media/vienna.dff2665e.jpg","dff2665e9781ede8092a49c276eea480"],["/danube-dev/static/media/viola.c4d86f3e.jpg","c4d86f3ed2d5d1778e7d91df689b505d"],["/danube-dev/static/media/volodumur-opolonec_web.68084bac.jpg","68084bacf8c918c8cbccd4b8e232b3ac"],["/danube-dev/static/media/we-are.a2ed603c.jpg","a2ed603c3a60d9d2f50566ea015ec44f"],["/danube-dev/static/media/wheat.63a4c325.jpg","63a4c325d3ce75039d3420c997313dd2"],["/danube-dev/static/media/winter-barley.2b66e871.jpg","2b66e87146da0f1f15f850af9044f264"],["/danube-dev/static/media/winter.9748caa4.jpg","9748caa48341917d81d1c793c43ed1c7"],["/danube-dev/static/media/yarra.6502d7b0.jpg","6502d7b001aede379961fb7cf52f93a6"],["/danube-dev/static/media/yulia-vezel.83d160bd.jpg","83d160bdd453f2e1fb7fcf362c150fa7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var d=new URL(e);return"/"===d.pathname.slice(-1)&&(d.pathname+=a),d.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,d,c){var t=new URL(e);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(d)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var d=new URL(a).pathname;return e.some(function(e){return d.match(e)})},stripIgnoredUrlParameters=function(e,d){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return d.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],d=e[1],c=new URL(a,self.location),t=createCacheKey(c,hashParamName,d,/\.\w{8}\./);return[c.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(d){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!d.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var d=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!d.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,d=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(d))||(d=addDirectoryIndex(d,c),e=urlsToCacheKeys.has(d));var t="/danube-dev/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(d=new URL(t,self.location).toString(),e=urlsToCacheKeys.has(d)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(d)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});