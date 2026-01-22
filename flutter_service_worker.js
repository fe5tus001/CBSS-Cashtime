'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ff12ad0e5ab0e5dc909bb049eb398250",
"assets/AssetManifest.bin.json": "6b315091556c146e976f1b40b9fe611f",
"assets/AssetManifest.json": "b6e7583af6453ce7aee287bc20becc7d",
"assets/assets/app_icon.png": "8915d3d9f0d4dabf58c261b020b919fa",
"assets/assets/fonts/AvenirLTStd-Black.otf": "b1abb878e2529cb5cb4450139844155d",
"assets/assets/fonts/AvenirLTStd-BlackOblique.otf": "8b0a1a58eec57de6031bd107c50808ff",
"assets/assets/fonts/AvenirLTStd-Book.otf": "ecb0c2ae369ba2a89d9a1ec2a1b3187b",
"assets/assets/fonts/AvenirLTStd-BookOblique.otf": "072f9bf739a80a1ca47547031936ad15",
"assets/assets/fonts/AvenirLTStd-Heavy.otf": "a7edaaca7240679d0cda0cce2c2e896e",
"assets/assets/fonts/AvenirLTStd-HeavyOblique.otf": "8a5b7a5f05164dfc562a9d2bd0ec23f4",
"assets/assets/fonts/AvenirLTStd-Light.otf": "0b78ec9d509f67bfe3f8458c9d285df0",
"assets/assets/fonts/AvenirLTStd-LightOblique.otf": "e0c6b9dd07665dcd7d9dfd121608bf5c",
"assets/assets/fonts/AvenirLTStd-Medium.otf": "4f995fa49446998983e05df9994dc96c",
"assets/assets/fonts/AvenirLTStd-MediumOblique.otf": "7e4d6a7f83ff54a6f33ac51c12ff527a",
"assets/assets/fonts/AvenirLTStd-Oblique.otf": "8bdd65fe4e31e9a5abef42e1a85d1640",
"assets/assets/fonts/AvenirLTStd-Roman.otf": "b1d7c6e085a31e9f5e4745c9aef6eb4b",
"assets/assets/fonts/Brandon_Grotesque_black.otf": "f5394bdf7a563a2f794b227873a183c9",
"assets/assets/fonts/Brandon_Grotesque_black_italic.otf": "eff1ae4ea573befa35e0e1112b90e21c",
"assets/assets/fonts/Brandon_Grotesque_bold.otf": "bc46786f8f3d0ec8c386b979321ce8c3",
"assets/assets/fonts/Brandon_Grotesque_bold_italic.otf": "6242843da4083d072d387e0e7f63077d",
"assets/assets/fonts/Brandon_Grotesque_light.otf": "0aa494d044d9ce23c5d1d2bffd30e556",
"assets/assets/fonts/Brandon_Grotesque_light_italic.otf": "63bc198780aa30c9ba152dcf65b35958",
"assets/assets/fonts/Brandon_Grotesque_medium-Bold.otf": "647415a51891489519b434e3e0626f72",
"assets/assets/fonts/Brandon_Grotesque_medium_italic.otf": "f449d4a583143e5da10fe5368b6836c5",
"assets/assets/fonts/Brandon_Grotesque_regular.otf": "1381af6d5dad856426cd0db0aa61b52b",
"assets/assets/fonts/Brandon_Grotesque_regular_italic.otf": "52ca7de385558c37610c80d04707e77d",
"assets/assets/fonts/Brandon_Grotesque_thin.otf": "7c2bc3c9d19bb6e5e151ef79a32116b0",
"assets/assets/fonts/Brandon_Grotesque_thin_italic.otf": "fad5eb48a2259f4c610c07fac6fab956",
"assets/assets/fonts/Lulo-Clean.otf": "0f9e4e6d3dc62159d00b3ae021aefcae",
"assets/assets/images/atm_1.jpg": "1c0f618f68e6a8b5a302e173fcb7baa4",
"assets/assets/images/contact_us.jpg": "d746d19a706fe04c75af93c4874ccf7d",
"assets/assets/images/hero_background.jpg": "3b3c5f1a377046111b100dbec8095aa8",
"assets/assets/images/kwacha.jpg": "68dcb1c24b8be567ccc6691f767c0022",
"assets/assets/images/kwacha_2.jpg": "abd34d8c70b7feb1a41db5282fad4c6f",
"assets/assets/images/our_team.jpg": "b1df3578ac2c557031c1114eab5998ca",
"assets/assets/images/pos_1.jpg": "56fb75b9bb1c4a1825b891ac1f2d5c23",
"assets/assets/images/pos_2.jpg": "a07bece2afad3871a5c7bcf3f351ddd5",
"assets/assets/images/services.jpg": "dd008e875b5dc84a538395f20c8e1227",
"assets/assets/images/splash-3.jpg": "6a8f3d9cd4f706da8eeac9e4afa271ed",
"assets/assets/images/splash_1.jpg": "3ea8df382632909dea5f59631e3d0540",
"assets/assets/logo.png": "8915d3d9f0d4dabf58c261b020b919fa",
"assets/FontManifest.json": "15cf10ac9a318f6e5a8eb4814147f765",
"assets/fonts/MaterialIcons-Regular.otf": "0a4b05e914998303ca57b8457404f11c",
"assets/NOTICES": "5e12572ee83fb00b81c002305c62d2f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "837c6f52505f32b6a6b07dad6b38743a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "7d624bbaf184ded2de42f1726d05c8aa",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a1a7504092ce3578f02d59d74ef40d60",
"icons/Icon-192.png": "ed965fb1ba683340861f2878359f9642",
"icons/Icon-512.png": "1508ccc337b86d5c08e4cb575964f07d",
"icons/Icon-maskable-192.png": "ed965fb1ba683340861f2878359f9642",
"icons/Icon-maskable-512.png": "1508ccc337b86d5c08e4cb575964f07d",
"index.html": "8926b05f4361488f3c5743aa3952e0af",
"/": "8926b05f4361488f3c5743aa3952e0af",
"main.dart.js": "bf2c58a83c0f4f509db059d8a15f4499",
"manifest.json": "7d5acf59bf691bd9addb000f7f873ee2",
"version.json": "75fa34cb530ca58d7ae110fafb0cbbd5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
