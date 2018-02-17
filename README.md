# Thirty For Thirty

Thirty sites in which I recreate interactions/animations/effects I think are cool or simply challenging or interesting.

## Today's site: Service Workers!

This site uses service workers to cache content that will be available when you're offline.

[See the site](https://akiryk.github.io/thirty-sites-3/index.html). Before clicking on the navigation links, disconnect from the internet.

## How to use service workers

Long version: [Use the free Udacity/Google course](https://www.udacity.com/course/offline-web-applications--ud899).

Short version:

* Create a file called sw.js and place it in your root directory. This is the service worker file.
* Inside this file, attach several event listeners to "self" ("self" is more than just another way of saying "this" — it points to the [ServiceWorkerGlobalScope](https://stackoverflow.com/questions/38040044/should-i-use-self-or-this-in-service-worker)).
* One event listener will listen for the install event, which fires when the service worker is installed. Use this event to add all of the files you'd like to cache.
* Another event listener listens for when the service worker activates. A service worker can be installed and ready to go but not actually active. When a service worker activates, it's time to remove the old or previous service workers. You can't assume that a user has a particular version (they may not have visited your site in a long time), so make sure to use a naming pattern such as 'my-app-cache-v1' such that you can delete all caches beginning with 'my-app-cache-' that don't equal the latest one.
* Another listener listens for fetch events and delivers cached files when they are available.
* Finally, you need to register the service worker. In this example, I do it in main.js
