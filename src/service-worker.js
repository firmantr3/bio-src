if(workbox) {
    const precacheManifest = self.__precacheManifest.filter((item) => {
        let isImage = (/\.(gif|jpg|jpeg|tiff|png)$/i).test(item.url);

        return ! isImage;
    });

    workbox.precaching.precacheAndRoute(precacheManifest, {});

    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg)$/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                }),
            ],
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

    self.addEventListener("message", (e) => {
        console.log('updated, skip waiting!')
        if (e.data.action == 'skipWaiting') self.skipWaiting()
    })
}
else {
    console.log('Workbox failed!');
}
