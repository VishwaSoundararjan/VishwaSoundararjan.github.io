'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "50d988293373178e199b768b0ae1c5a5",
"assets/assets/bell.png": "763a9e0873e97900c31fced1eb54d02f",
"assets/assets/career.png": "533b7555b14e824f56da20e2337e0d5b",
"assets/assets/certification.png": "8a041534fbec38704475311bbfb6bdcb",
"assets/assets/certification1.png": "25abc89539a657129bfedd7ec1c64cee",
"assets/assets/custom_event.png": "5263f810c031d14470c5f6130fbe7ebd",
"assets/assets/education.png": "3ad0d99a635b847295cb6409aef1a7d3",
"assets/assets/farook_3.png": "a7546341ee744cb50db22e9d850cf58a",
"assets/assets/graduated.png": "2d66bb13635821e32362f4f9b5ba3647",
"assets/assets/home.png": "29d8d242f985f4e0417504ea82ebfc4b",
"assets/assets/house.png": "10d1cce28caca2ac818887044ab42054",
"assets/assets/location.png": "6bf1f96dd7f21a3eeaabfcfe76181bbc",
"assets/assets/notification-bell.png": "1a1d8dcc5a101b4ddacb18a19e2d99a9",
"assets/assets/notification.png": "69067e1ed3e51714f16cbb3c9461847d",
"assets/assets/open-book.png": "17637ddc3ea5f0f6535e69c6baf68ef0",
"assets/assets/phone-book.png": "3d96f1e51e935cf512e8377a12185b56",
"assets/assets/postGraduate.png": "2dc8c549255ea3adb1c63d0879292549",
"assets/assets/product_img.png": "a3d7be61aa8346faae250fffe8a98615",
"assets/assets/pro_owner.png": "821cd3b71171b90b00e983ce655d76c8",
"assets/assets/ram_profile.png": "ba2dd08740f9a0bb70eb8ca6c3614071",
"assets/assets/recharge.png": "dd6d3f855fff685ab6136bfc150a7630",
"assets/assets/register%2520(2).png": "1dd86abc37814d35cfdf1a51d8b36199",
"assets/assets/register%2520(3).png": "133c1996af933edf665427b99af7a61f",
"assets/assets/splashLogo.jpeg": "357ffab341d11b347e9be8da7a1695b2",
"assets/assets/visionLogo.jpeg": "45605bc187931ed132e9cead6f276007",
"assets/assets/winner.png": "023afe2ef23544af01f06bee60de31ec",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6dbae7ec00a40a7dcff9065084d751ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"common/handlers/00b4e22061214a93a63fd0848bd73506.js": "200f23950d6740d2241583832a5604ff",
"common/handlers/0414f84148e8446e9341fa92fc523b9b.js": "3cc7ffc856ee28c742490bee742e748b",
"common/handlers/22f5edd7e3e74c50868d4b28f4e83f4d.js": "0a251aad682f449c14abc34c6775b9eb",
"common/handlers/26670660d1c44fdda7f5cbf5450b523d.js": "ec0cbaf8fb65fc7165c38ff4066bc489",
"common/handlers/29437f489cde47e8b846abc7b2679478.js": "58fec6194ad57984a379189b3565b530",
"common/handlers/340aa303558c4ce99479d698ad66dc70.js": "10c83b3e10897ce12dc8b36e3ed6715a",
"common/handlers/3c675be0b0db4d2ea2c68ffe8a6e63b4.js": "9f32eeee9477ab99938f561f153266a9",
"common/handlers/5f7a2e8e1bdb47399d28278a2759394c.js": "3409be2f92bf678e2fe0c81136a2223e",
"common/handlers/664ff0c9f804437daf5dddf310453094.js": "6818575ee3a9c89a39db1893e5b1e8aa",
"common/handlers/6da5fc51c42d46169f68b80a2f37f335.js": "b212a7386022a8f463a7ed213a035268",
"common/handlers/7301417ba77544b29fb5db8fbddd35f4.js": "f5a42f0f865ce69cfb8c1ac9c9078630",
"common/handlers/8767e334f8b94f40901e80be058c9e37.js": "84febd9a498ac4c9ae239383c2337cd7",
"common/handlers/9b6f3da70a514781a8d3a1b3da1cf3ec.js": "245f342b1e8edd5f7a8981c857515082",
"common/handlers/a5ff722086e54f549383f45314ddbeee.js": "1f8e33a38a2249abb403f0afbc6f50f6",
"common/handlers/a68031bf194847528d7ac75484ab1780.js": "c2d23f8e2df05b4effa992b37840efc1",
"common/handlers/adcb55a7df6f4588a945bd3cd0879879.js": "106f5057ca61a7d5db503ed7d21c1ed9",
"common/handlers/bb073c1c05894bc3bb5deaf9ef5364e5.js": "900948b52a2cf4afdd2afbb721c72fec",
"common/handlers/c046450f4bd04596a6fc34dad8252795.js": "2d558adb7c3abf2697d84ed4ec7c9b36",
"common/handlers/c4363a534d194eb9b83ed3ba1f1f9f1e.js": "4a78cbf395e6f4928bba8b0bd157c9cd",
"common/handlers/cbcdfef77c8f40eea24446ef91703e8d.js": "806efddd0e77ff4700c80c69a75438fe",
"common/handlers/f4922fe05f5d49b287522160c4cbc648.js": "b61334e592183bf2a0e9189261261351",
"common/handlers/f4f0811b658c45e794322f307b93c235.js": "c4cb82a5d8d5a50ae3cacc86b6aa1faf",
"common/scripts/app.js": "895c7ee84603c2da827eadaf7e13a14c",
"common/scripts/AppRuleListener.js": "6555f8f350021130b05b99280c6bda74",
"common/scripts/carouselNotification.js": "01cbfc992cfa26d664cdb239c17f6b6d",
"common/scripts/clientSpecificFiles/abfrl.module.js": "100c6ab0dcd8d4e24e873b373d9a1df6",
"common/scripts/clientSpecificFiles/ais.module.js": "385528fd7ff449565075db11edb515fe",
"common/scripts/clientSpecificFiles/ambank.module.js": "05e545f53995cbc1ed4e7a8646c2321f",
"common/scripts/clientSpecificFiles/conditional.config.module.js": "769bbcd591a781a37cef33ec39e5ab07",
"common/scripts/clientSpecificFiles/conversion09.module.js": "bfcf42f934dbca2a5ce6b5d17f3d3a3a",
"common/scripts/clientSpecificFiles/financialadvisors.module.js": "3793be7e764ac6f7a53a51b818f06220",
"common/scripts/clientSpecificFiles/hdfc.module.js": "63f23861e2e173f8f99bf665c0231421",
"common/scripts/clientSpecificFiles/medanta.module.js": "f486d79583eefb12e01a7de6de7d3a18",
"common/scripts/clientSpecificFiles/rbl.module.js": "ed758e43715b2cc2fea45f90834d61a3",
"common/scripts/clientSpecificFiles/resulticks.module.js": "2b80c4de3ccc2cfb27c48d754cc0052e",
"common/scripts/clientSpecificFiles/utimf.module.js": "d3df17d45e624b85aeab85ca2057d07a",
"common/scripts/clientSpecificFiles/vinamilk.module.js": "e01cc1527f0fca5649cd20e366a39c00",
"common/scripts/clientSpecificFiles/visionretail.module.js": "ba15ddff2306e12a04895b932f1cd2d7",
"common/scripts/createPassportId.js": "bfc910b31b7b3f75d371aac643ba23ac",
"common/scripts/deviceRegister.js": "47d072fde39442bd6ce656f82cd13bf9",
"common/scripts/inAppNotification.js": "14b861586a1d78942c6b2e72de8fc7c6",
"common/scripts/inAppNotificationCss.js": "f6a26e19ab94fae58d01b52dc24ad077",
"common/scripts/index.js": "4f7913c30c991ff26d2afe835089551c",
"common/scripts/liveVisitors.js": "18a6d3c7cb8212504747f250f42a7d95",
"common/scripts/profileId.js": "0c48fcc42a59ec1b06619bc6afb3f341",
"common/scripts/progressiveForm.js": "06653b3caa5e52d922b4a56a8f685c5e",
"common/scripts/push-sw.js": "e787b3ff64094823c9a7ce3c235e1cb0",
"common/scripts/resumeJourney.js": "3536a8e166e5b89fe9357de6135dc88a",
"common/scripts/sw.js": "bbba6aec0cc6e1559ca24d1dcd680713",
"common/scripts/webeventtrack.js": "32f127532be95a6242d9281d3ac00a5c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "772660b0c656d7e5d8d12dec87eb2d9d",
"/": "772660b0c656d7e5d8d12dec87eb2d9d",
"main.dart.js": "2360ed268d2b55e512a8094961a44d19",
"manifest.json": "cd1393e088c38be8c6c7e0f0f0907482",
"sw.js": "9f65bfa08d47c13a1263f802c0e99c59",
"version.json": "57f9c41e73e9300255b959581e257d8a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
