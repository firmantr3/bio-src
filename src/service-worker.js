if(workbox) {
    const precacheManifest = self.__precacheManifest.filter((item) => {
        let isImage = (/\.(gif|jpg|jpeg|tiff|png)$/i).test(item.url);

        return ! isImage;
    });

    precacheManifest.concat([
        {
            "revision": "674f50d287a8c48dc19ba404d20fe713",
            "url": "https://gravatar.com/avatar/85c9a1594c2d324183364fd303ba0ae4?s=300"
        }
    ]);

    workbox.precaching.precacheAndRoute(precacheManifest, {});

    workbox.routing.registerRoute(
        new RegExp(/\.(?:png|gif|jpg|jpeg|svg)$/),
        new workbox.strategies.CacheFirst({
            cacheName: 'images'
        }),
    );

    // workbox.routing.registerRoute(
    //     new RegExp('https://some-fancy-api.com'),
    //     workbox.strategies.networkFirst({
    //         cacheName: 'api',
    //     }),
    // );

    // workbox.routing.registerRoute(
    //     new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    //     workbox.strategies.cacheFirst({
    //         cacheName: 'googleapis',
    //         plugins: [
    //             new workbox.expiration.Plugin({
    //                 maxEntries: 30,
    //             }),
    //         ],
    //     }),
    // );

    this.addEventListener("message", (e) => {
        console.log('updated, skip waiting!')
        if (e.data.action == 'skipWaiting') this.skipWaiting()
    })
}
else {
    console.log('Workbox failed!');
}
