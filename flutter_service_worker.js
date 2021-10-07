'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3b5ee9bab098087bf99e6f112900f2d8",
".git/config": "059f5f39056287131e62c874a62b4f7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f384801206511392a3ca9160ccfb6f5e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "63aa42534c80859c90d068537e283399",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba7d158140f442ba9d44ffb4818f79cb",
".git/logs/refs/heads/master": "ba7d158140f442ba9d44ffb4818f79cb",
".git/logs/refs/remotes/origin/master": "6e49da42de014088d60b7ae54629c782",
".git/objects/06/490d8acc460735c5a71344aa3752beefd313a0": "d6c78b201b908bc062da1c08547803b5",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0b/54990531bc23a6a3a9e80e9545dae48559badd": "ba905d4d5917dc166199c8a4fe754ce9",
".git/objects/0c/9634cb9745e500be3d5f677985209c48b474d3": "7f7fec100953f74201d7c763c93dc205",
".git/objects/0d/17f97cd34515e58fa5da9ddfde15939b594305": "1bd59b95f9444b572738d9363ebe4e80",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/18/c31459019dd9a222c53c7bb8e9870aa6498d88": "a02030e2833b91c5e5596c166a49ce4b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/9ebd5e5c3ba84675dce3383409d4e1c253a3f7": "328cb832eb7092df9fdd8a207bfdb127",
".git/objects/22/e78b151405cc2c5fc35cbb6c06f8b4b4a1a16f": "b4f40d477712b85c1b70b92a6fd2f8b8",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2a/5cb0a5878fc955b7c3e65645897f596e2609b6": "0ffb7e06276ba2d2c44e9d794da9e62a",
".git/objects/2f/d61110a82aaf8b2008cd39b2e47c0b16e72ffb": "a765bb4ff9a5dc5cc343a2edab69e760",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/f00626d8da3912f1301cabe56b39ca7cb219f3": "57afcffe64a2f595314cfd5be29bdf11",
".git/objects/3e/aac0d7ba87e81bc450b513a63196fb2937c951": "c8bc64f073c5ba814178f388a2900b79",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/44/cfb06155930a99315aed7f6c750a5d9295c3ab": "20cbd0e095943ef79ba67d6e40ba369f",
".git/objects/51/79efce2e1372b5e57fe0d310a02c15a3874207": "3cf1e3756ac5c7ff0029d7c98661c3b5",
".git/objects/55/e720835c928947483a5a4debc619c4bc5c8406": "e7b2f012e7fbf6fbc7b381daa92f95a0",
".git/objects/5b/f6059b612f0b117a4abadd4ee4c2b9b25d3886": "eeb26cb2e0a02423f03f8dac16e3acd3",
".git/objects/63/3ae0451d727f9388c81fe67fa4ea528a828204": "995fb3114281a20278e1865b8493e497",
".git/objects/6a/b7629eec524814475b53a0530642296571cde4": "fc13ff178ffc12b1af3064d3be123dab",
".git/objects/6b/53be356f8ab37af4ae309e025939033f777ba4": "a8ad81069012ca47dbab19511f33062d",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/77/bab8e0d0ee18dcc5137b69cfd39f6a2cbef349": "9aaba2b559ae0318ba2307552a60bc6e",
".git/objects/79/0f39a1065ab3474249445d6b604e8c84c4293c": "b6690381060071d05866e90fae9d2403",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/b7c126db89fad08b92a45c608828426aef53d0": "e04615758839ce9f48325ea5aa6c5f32",
".git/objects/7e/10ae673f22e37f591a3c39b39dbd670ec16f85": "925fe779a651f0ca5d14b52befb41f57",
".git/objects/82/c950af4b8588031877a7cdff4376b0d79af893": "402f64e1b7328dbd620b83ce6bb272d4",
".git/objects/83/20590f41f3ecdd8a05a4dbe99b89c50419b1fd": "d932a944c1399252c9b75e6035545d97",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/85/2411295db5ca7af946a406f06ef2f9c266efd4": "6d9d2ee423a4ac824871b6d5800afd45",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8e/1a4910207d3141f457e711ed4366c4bdd34d41": "3b7fb06f1431e068e2ba955364582c8e",
".git/objects/92/f2862bc80e615fab95d257bad2ff9d8fafd74f": "ef8d60cb2d6490d58fdb2b8503ca3035",
".git/objects/96/2b8efb8f656edebc59e63474730f01bfafc93e": "46fb06a9c508d618dbad673c2f64cca0",
".git/objects/9c/817054c5a99f8190bab0ca2133e472601630b4": "b5788388d4b526a0dd0427f73ddc55f8",
".git/objects/9e/4aa358fe8053ad9960831e066cac9a4a4a20d6": "d1c79d34c28bb90e06a16e6988ac8fdd",
".git/objects/9e/7086a4dad1e5899ecbece83878c3055c4f6951": "f0b1583befca7d38070ef0e09d9657c6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/c87e811b5fc7a87b4a08d4ff012ccc3038df60": "fd73f9f17c56235c33b1f208754e3e5e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ad/4bc56e3acb31bc6840e5c7af30751b532358ca": "11d3e955b7b449de7f25f3303b824217",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/b4/677c95f7838f320757960dd3dd360bc739a2eb": "f7733e77900d125be3c592529a8db38c",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/f3a0f46fc9c74dba2b118fb3063d36e533072a": "786efef5c4c30dc4f698fa8aa2924063",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/be/57642434224c918d9a1b69977e245c307533e9": "5d600f73a48d29f3b853c9573022edff",
".git/objects/d0/8a4a3ace4efb170bde02b45435b904ab0cf104": "ce1d0e49a47ee143830d43292e3c3b12",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/db/e7765df6a3f537fa0dc4cf131a1d21541be583": "3496ee701c7a3c09b0617fceb7a8bc06",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/df/3fe2877bb1182c5eea480995ccf0ac67fded90": "921cae5982222c318bad46fa04f6252e",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/178c748b0c7eb6fd30991c6ce640b57298f80b": "7aed067cb7ff7aa955b1380d5ec74c08",
".git/objects/ef/67ffc6b54b1f33594d21c0be47c6dabba8a699": "268c4481b5202384ef9b35231aa2085d",
".git/objects/f0/d4b85c9347c057f94c57131a20e82677e84922": "8fe85befbc1752d4bf0ea1ddb2382089",
".git/objects/f4/2f7a83fcabeea0cad0dcefa907e052763d998c": "d0ae00653ae71855ded95af1b90be605",
".git/refs/heads/master": "3c1f5662ab9c514b66c0d6d06d5d6e99",
".git/refs/remotes/origin/master": "18205a1104a1551ed2c1e066c2bcde8d",
"assets/AssetManifest.json": "7169fb5c1f6094d309221817cf603ef9",
"assets/assets/fonts/poppins.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/seascape.ttf": "a97c53cc1e6f1ed753951f596ce5a636",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/images/icon_decoration.png": "11fcda26d5436a7e918ee2025bdecf33",
"assets/assets/images/icon_food.png": "f777b56a9c7e3ef2c5bcc35217fc58f2",
"assets/assets/images/icon_makeup.png": "2160f19cb7c0a6fffacab945c9462e1e",
"assets/assets/images/icon_music.png": "cffe87781c8721b77b860a0441aa80c7",
"assets/assets/images/icon_venue.png": "f9a12bce8fecf6c252c5f1e46863d7b8",
"assets/assets/images/img0.png": "7187c3a1cbbaa07988556d7020871e63",
"assets/assets/images/img1.png": "e43ac23c6934b9ec4bc231a2ba9919f2",
"assets/assets/images/img2.png": "d1a7a4406b27279b03efbd990ca2afbb",
"assets/assets/images/mockup-2.png": "43ca138b1424c2cd672abe8e0fedc204",
"assets/assets/images/mockup-3.png": "22734f8af1b16dd47b4cd5c326f09203",
"assets/assets/images/mockup.png": "2ec9e0b08217f7a2383a961ce73c0e63",
"assets/assets/images/profile_pic.png": "14fadd39309977174ebbf611aa064f64",
"assets/assets/images/user.jpg": "c1a7b3126b0425c5bedaf64bac08d97b",
"assets/assets/logo/logo.png": "2af7b2e72abedc2bce98944653429354",
"assets/assets/logo/logo.svg": "925b17733e3fc58fc1e60125e3c2fcab",
"assets/assets/logo/logo_icon.png": "aa04971f5a403dd24bcaf06f55b093c1",
"assets/assets/logo/logo_name.svg": "13525360ef71a507eb10ce4d4f408658",
"assets/assets/logo/logo_text.png": "0b78ae381bd4c66c0394fc37cea78284",
"assets/assets/slides/background-1.jpeg": "f8ed4d3704b14706eb036222b7ca4045",
"assets/assets/slides/background-2.jpeg": "2a495deff8fae15f2b30f535d1576ca1",
"assets/assets/slides/background-3.jpeg": "a1789d9a53f146cb6178e9db14b5e244",
"assets/assets/slides/background.jpeg": "d9418faee4ffef09d5142d2281040011",
"assets/FontManifest.json": "eba8c399f863b75916b2eb6db61ac60e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "617b10f0bc2d779078d4ff25097cd3e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ce315522b0d34d9972c7dfc4f9521124",
"/": "ce315522b0d34d9972c7dfc4f9521124",
"main.dart.js": "155205cf6886e0fdbb9e930556d42e0c",
"manifest.json": "16cd987d4adf3af2758e47404616f26b",
"version.json": "ebed05aa31a91ac98b829a69c795445f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
