/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6625295a17831c9c4fab9968dd08a377"
  },
  {
    "url": "accumulate/10.数据库/mybaties与Redies简介.html",
    "revision": "5351889be4088b1bb27171d4f345227b"
  },
  {
    "url": "accumulate/10.数据库/mybatis.html",
    "revision": "c185531d6d8c2eeb35e8133045c9f6cd"
  },
  {
    "url": "accumulate/10.数据库/mybatisPlus.html",
    "revision": "9c921aabfa59b20a62864026d4fccd5b"
  },
  {
    "url": "accumulate/10.数据库/mysql.html",
    "revision": "5ac9f4165f2bc7b0ca02e77aecbb173b"
  },
  {
    "url": "accumulate/BUG.html",
    "revision": "b85dec00775839bc8fa53068973bc8bc"
  },
  {
    "url": "accumulate/index.html",
    "revision": "7e5f3a8321871f3aad49643bdc86fd2f"
  },
  {
    "url": "algorithm/index.html",
    "revision": "2168a20bbde9da1774aa7337f4ceb773"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.476f077b.js",
    "revision": "152923cf3044ad4868ffad421ed79e41"
  },
  {
    "url": "assets/js/11.7370de5e.js",
    "revision": "253d0196d6606df3a893d755cf24957f"
  },
  {
    "url": "assets/js/12.e8cdd9c7.js",
    "revision": "61e25a4d28193e46414dd1b78e410f6d"
  },
  {
    "url": "assets/js/13.36eb215d.js",
    "revision": "d5d7797d2432b32f87b3d09c38e018f5"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.dad9bf50.js",
    "revision": "79d535a9dd7f81156e73c93b63860feb"
  },
  {
    "url": "assets/js/4.e1d22369.js",
    "revision": "856678e07e984908176b25695b27fdbe"
  },
  {
    "url": "assets/js/5.9b4b84dc.js",
    "revision": "4035e67d2f2d34b0473497512e897af5"
  },
  {
    "url": "assets/js/6.12bc819c.js",
    "revision": "cb8c77bbd767ed8adb24e3d37efd9e70"
  },
  {
    "url": "assets/js/7.b4c12557.js",
    "revision": "476648c058668d3668abdc040540cc3d"
  },
  {
    "url": "assets/js/8.e731bc7b.js",
    "revision": "456d1d810d25dccce5205849cd2058b1"
  },
  {
    "url": "assets/js/9.9b64ccf6.js",
    "revision": "d62007b6715820fba2d4b528f6240d53"
  },
  {
    "url": "assets/js/app.d0ff34ca.js",
    "revision": "152c0b1873d52b244c219f304a9ebcee"
  },
  {
    "url": "guide.html",
    "revision": "ae94adb70d066d935dcd62724549a275"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "a67c32c5ba6c85c873d7acacde28438e"
  },
  {
    "url": "index.html",
    "revision": "0cffc3e085367bb4402cf54e5043cbfa"
  },
  {
    "url": "others/index.html",
    "revision": "184db71b1aca67289c3557a10250dd65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
