export const auditsMeta = {
	"is-on-https": {
		"id": "is-on-https",
		"title": "Uses HTTPS",
		"description": "my description => All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more about HTTPS](https://developer.chrome.com/docs/lighthouse/pwa/is-on-https/)."
	},
	"viewport": {
		"id": "viewport",
		"title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
		"description": "my description => A `<meta name=\"viewport\">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/). [Learn more about using the viewport meta tag](https://developer.chrome.com/docs/lighthouse/pwa/viewport/)."
	},
	"first-contentful-paint": {
		"id": "first-contentful-paint",
		"title": "First Contentful Paint",
		"description": "my description => First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/)."
	},
	"largest-contentful-paint": {
		"id": "largest-contentful-paint",
		"title": "Largest Contentful Paint",
		"description": "my description => Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)"
	},
	"first-meaningful-paint": {
		"id": "first-meaningful-paint",
		"title": "First Meaningful Paint",
		"description": "my description => First Meaningful Paint measures when the primary content of a page is visible. [Learn more about the First Meaningful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/)."
	},
	"speed-index": {
		"id": "speed-index",
		"title": "Speed Index",
		"description": "my description => Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/)."
	},
	"screenshot-thumbnails": {
		"id": "screenshot-thumbnails",
		"title": "Screenshot Thumbnails",
		"description": "my description => This is what the load of your site looked like."
	},
	"final-screenshot": {
		"id": "final-screenshot",
		"title": "Final Screenshot",
		"description": "my description => The last screenshot captured of the pageload."
	},
	"total-blocking-time": {
		"id": "total-blocking-time",
		"title": "Total Blocking Time",
		"description": "my description => Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/)."
	},
	"max-potential-fid": {
		"id": "max-potential-fid",
		"title": "Max Potential First Input Delay",
		"description": "my description => The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/)."
	},
	"cumulative-layout-shift": {
		"id": "cumulative-layout-shift",
		"title": "Cumulative Layout Shift",
		"description": "my description => Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls)."
	},
	"errors-in-console": {
		"id": "errors-in-console",
		"title": "No browser errors logged to the console",
		"description": "my description => Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)"
	},
	"server-response-time": {
		"id": "server-response-time",
		"title": "Initial server response time was short",
		"description": "my description => Keep the server response time for the main document short because all other requests depend on it. [Learn more about the Time to First Byte metric](https://developer.chrome.com/docs/lighthouse/performance/time-to-first-byte/)."
	},
	"interactive": {
		"id": "interactive",
		"title": "Time to Interactive",
		"description": "my description => Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/)."
	},
	"user-timings": {
		"id": "user-timings",
		"title": "User Timing marks and measures",
		"description": "my description => Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more about User Timing marks](https://developer.chrome.com/docs/lighthouse/performance/user-timings/)."
	},
	"critical-request-chains": {
		"id": "critical-request-chains",
		"title": "Avoid chaining critical requests",
		"description": "my description => The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn how to avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/)."
	},
	"redirects": {
		"id": "redirects",
		"title": "Avoid multiple page redirects",
		"description": "my description => Redirects introduce additional delays before the page can be loaded. [Learn how to avoid page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/)."
	},
	"installable-manifest": {
		"id": "installable-manifest",
		"title": "Web app manifest or service worker do not meet the installability requirements",
		"description": "my description => Service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. With proper service worker and manifest implementations, browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement. [Learn more about manifest installability requirements](https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest/)."
	},
	"splash-screen": {
		"id": "splash-screen",
		"title": "Is not configured for a custom splash screen",
		"description": "my description => A themed splash screen ensures a high-quality experience when users launch your app from their homescreens. [Learn more about splash screens](https://developer.chrome.com/docs/lighthouse/pwa/splash-screen/)."
	},
	"themed-omnibox": {
		"id": "themed-omnibox",
		"title": "Does not set a theme color for the address bar.",
		"description": "my description => The browser address bar can be themed to match your site. [Learn more about theming the address bar](https://developer.chrome.com/docs/lighthouse/pwa/themed-omnibox/)."
	},
	"maskable-icon": {
		"id": "maskable-icon",
		"title": "Manifest doesn't have a maskable icon",
		"description": "my description => A maskable icon ensures that the image fills the entire shape without being letterboxed when installing the app on a device. [Learn about maskable manifest icons](https://developer.chrome.com/docs/lighthouse/pwa/maskable-icon-audit/)."
	},
	"content-width": {
		"id": "content-width",
		"title": "Content is sized correctly for the viewport",
		"description": "my description => If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn how to size content for the viewport](https://developer.chrome.com/docs/lighthouse/pwa/content-width/)."
	},
	"image-aspect-ratio": {
		"id": "image-aspect-ratio",
		"title": "Displays images with incorrect aspect ratio",
		"description": "my description => Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/)."
	},
	"image-size-responsive": {
		"id": "image-size-responsive",
		"title": "Serves images with low resolution",
		"description": "my description => Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn how to provide responsive images](https://web.dev/articles/serve-responsive-images)."
	},
	"preload-fonts": {
		"id": "preload-fonts",
		"title": "Fonts with `font-display: optional` are preloaded",
		"description": "my description => Preload `optional` fonts so first-time visitors may use them. [Learn more about preloading fonts](https://web.dev/articles/preload-optional-fonts)"
	},
	"deprecations": {
		"id": "deprecations",
		"title": "Avoids deprecated APIs",
		"description": "my description => Deprecated APIs will eventually be removed from the browser. [Learn more about deprecated APIs](https://developer.chrome.com/docs/lighthouse/best-practices/deprecations/)."
	},
	"third-party-cookies": {
		"id": "third-party-cookies",
		"title": "Avoids third-party cookies",
		"description": "my description => Support for third-party cookies will be removed in a future version of Chrome. [Learn more about phasing out third-party cookies](https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/)."
	},
	"mainthread-work-breakdown": {
		"id": "mainthread-work-breakdown",
		"title": "Minimizes main-thread work",
		"description": "my description => Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)"
	},
	"bootup-time": {
		"id": "bootup-time",
		"title": "JavaScript execution time",
		"description": "my description => Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/)."
	},
	"uses-rel-preload": {
		"id": "uses-rel-preload",
		"title": "Preload key requests",
		"description": "my description => Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn how to preload key requests](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preload/)."
	},
	"uses-rel-preconnect": {
		"id": "uses-rel-preconnect",
		"title": "Preconnect to required origins",
		"description": "my description => Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/)."
	},
	"font-display": {
		"id": "font-display",
		"title": "All text remains visible during webfont loads",
		"description": "my description => Leverage the `font-display` CSS feature to ensure text is user-visible while webfonts are loading. [Learn more about `font-display`](https://developer.chrome.com/docs/lighthouse/performance/font-display/)."
	},
	"diagnostics": {
		"id": "diagnostics",
		"title": "Diagnostics",
		"description": "my description => Collection of useful page vitals."
	},
	"network-requests": {
		"id": "network-requests",
		"title": "Network Requests",
		"description": "my description => Lists the network requests that were made during page load."
	},
	"network-rtt": {
		"id": "network-rtt",
		"title": "Network Round Trip Times",
		"description": "my description => Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more about the Round Trip Time](https://hpbn.co/primer-on-latency-and-bandwidth/)."
	},
	"network-server-latency": {
		"id": "network-server-latency",
		"title": "Server Backend Latencies",
		"description": "my description => Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more about server response time](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall)."
	},
	"main-thread-tasks": {
		"id": "main-thread-tasks",
		"title": "Tasks",
		"description": "my description => Lists the toplevel main thread tasks that executed during page load."
	},
	"metrics": {
		"id": "metrics",
		"title": "Metrics",
		"description": "my description => Collects all available metrics."
	},
	"performance-budget": {
		"id": "performance-budget",
		"title": "Performance budget",
		"description": "my description => Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more about performance budgets](https://developers.google.com/web/tools/lighthouse/audits/budgets)."
	},
	"timing-budget": {
		"id": "timing-budget",
		"title": "Timing budget",
		"description": "my description => Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more about performance budgets](https://developers.google.com/web/tools/lighthouse/audits/budgets)."
	},
	"resource-summary": {
		"id": "resource-summary",
		"title": "Resources Summary",
		"description": "my description => Aggregates all network requests and groups them by type"
	},
	"third-party-summary": {
		"id": "third-party-summary",
		"title": "Minimize third-party usage",
		"description": "my description => Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn how to minimize third-party impact](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/)."
	},
	"third-party-facades": {
		"id": "third-party-facades",
		"title": "Lazy load third-party resources with facades",
		"description": "my description => Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn how to defer third-parties with a facade](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/)."
	},
	"largest-contentful-paint-element": {
		"id": "largest-contentful-paint-element",
		"title": "Largest Contentful Paint element",
		"description": "my description => This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)"
	},
	"lcp-lazy-loaded": {
		"id": "lcp-lazy-loaded",
		"title": "Largest Contentful Paint image was not lazily loaded",
		"description": "my description => Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more about optimal lazy loading](https://web.dev/articles/lcp-lazy-loading)."
	},
	"layout-shift-elements": {
		"id": "layout-shift-elements",
		"title": "Avoid large layout shifts",
		"description": "my description => These DOM elements were most affected by layout shifts. Some layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)"
	},
	"long-tasks": {
		"id": "long-tasks",
		"title": "Avoid long main-thread tasks",
		"description": "my description => Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/articles/long-tasks-devtools)"
	},
	"no-unload-listeners": {
		"id": "no-unload-listeners",
		"title": "Avoids `unload` event listeners",
		"description": "my description => The `unload` event does not fire reliably and listening for it can prevent browser optimizations like the Back-Forward Cache. Use `pagehide` or `visibilitychange` events instead. [Learn more about unload event listeners](https://web.dev/articles/bfcache#never_use_the_unload_event)"
	},
	"non-composited-animations": {
		"id": "non-composited-animations",
		"title": "Avoid non-composited animations",
		"description": "my description => Animations which are not composited can be janky and increase CLS. [Learn how to avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/)"
	},
	"unsized-images": {
		"id": "unsized-images",
		"title": "Image elements do not have explicit `width` and `height`",
		"description": "my description => Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)"
	},
	"valid-source-maps": {
		"id": "valid-source-maps",
		"title": "Page has valid source maps",
		"description": "my description => Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more about source maps](https://developer.chrome.com/docs/devtools/javascript/source-maps/)."
	},
	"prioritize-lcp-image": {
		"id": "prioritize-lcp-image",
		"title": "Preload Largest Contentful Paint image",
		"description": "my description => If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP. [Learn more about preloading LCP elements](https://web.dev/articles/optimize-lcp#optimize_when_the_resource_is_discovered)."
	},
	"csp-xss": {
		"id": "csp-xss",
		"title": "Ensure CSP is effective against XSS attacks",
		"description": "my description => A strong Content Security Policy (CSP) significantly reduces the risk of cross-site scripting (XSS) attacks. [Learn how to use a CSP to prevent XSS](https://developer.chrome.com/docs/lighthouse/best-practices/csp-xss/)"
	},
	"script-treemap-data": {
		"id": "script-treemap-data",
		"title": "Script Treemap Data",
		"description": "my description => Used for treemap app"
	},
	"pwa-cross-browser": {
		"id": "pwa-cross-browser",
		"title": "Site works cross-browser",
		"description": "my description => To reach the most number of users, sites should work across every major browser. [Learn about cross-browser compatibility](https://developer.chrome.com/docs/lighthouse/pwa/pwa-cross-browser/)."
	},
	"pwa-page-transitions": {
		"id": "pwa-page-transitions",
		"title": "Page transitions don't feel like they block on the network",
		"description": "my description => Transitions should feel snappy as you tap around, even on a slow network. This experience is key to a user's perception of performance. [Learn more about page transitions](https://developer.chrome.com/docs/lighthouse/pwa/pwa-page-transitions/)."
	},
	"pwa-each-page-has-url": {
		"id": "pwa-each-page-has-url",
		"title": "Each page has a URL",
		"description": "my description => Ensure individual pages are deep linkable via URL and that URLs are unique for the purpose of shareability on social media. [Learn more about providing deep links](https://developer.chrome.com/docs/lighthouse/pwa/pwa-each-page-has-url/)."
	},
	"accesskeys": {
		"id": "accesskeys",
		"title": "`[accesskey]` values are unique",
		"description": "my description => Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more about access keys](https://dequeuniversity.com/rules/axe/4.8/accesskeys)."
	},
	"aria-allowed-attr": {
		"id": "aria-allowed-attr",
		"title": "`[aria-*]` attributes match their roles",
		"description": "my description => Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn how to match ARIA attributes to their roles](https://dequeuniversity.com/rules/axe/4.8/aria-allowed-attr)."
	},
	"aria-allowed-role": {
		"id": "aria-allowed-role",
		"title": "Values assigned to `role=\"\"` are not valid ARIA roles.",
		"description": "my description => ARIA `role`s enable assistive technologies to know the role of each element on the web page. If the `role` values are misspelled, not existing ARIA `role` values, or abstract roles, then the purpose of the element will not be communicated to users of assistive technologies. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.8/aria-allowed-role)."
	},
	"aria-command-name": {
		"id": "aria-command-name",
		"title": "`button`, `link`, and `menuitem` elements have accessible names",
		"description": "my description => When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.8/aria-command-name)."
	},
	"aria-dialog-name": {
		"id": "aria-dialog-name",
		"title": "Elements with `role=\"dialog\"` or `role=\"alertdialog\"` have accessible names.",
		"description": "my description => ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements. [Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.8/aria-dialog-name)."
	},
	"aria-hidden-body": {
		"id": "aria-hidden-body",
		"title": "`[aria-hidden=\"true\"]` is not present on the document `<body>`",
		"description": "my description => Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `<body>`. [Learn how `aria-hidden` affects the document body](https://dequeuniversity.com/rules/axe/4.8/aria-hidden-body)."
	},
	"aria-hidden-focus": {
		"id": "aria-hidden-focus",
		"title": "`[aria-hidden=\"true\"]` elements contain focusable descendents",
		"description": "my description => Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn how `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.8/aria-hidden-focus)."
	},
	"aria-input-field-name": {
		"id": "aria-input-field-name",
		"title": "ARIA input fields have accessible names",
		"description": "my description => When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.8/aria-input-field-name)."
	},
	"aria-meter-name": {
		"id": "aria-meter-name",
		"title": "ARIA `meter` elements have accessible names",
		"description": "my description => When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.8/aria-meter-name)."
	},
	"aria-progressbar-name": {
		"id": "aria-progressbar-name",
		"title": "ARIA `progressbar` elements have accessible names",
		"description": "my description => When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.8/aria-progressbar-name)."
	},
	"aria-required-attr": {
		"id": "aria-required-attr",
		"title": "`[role]`s have all required `[aria-*]` attributes",
		"description": "my description => Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.8/aria-required-attr)."
	},
	"aria-required-children": {
		"id": "aria-required-children",
		"title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children.",
		"description": "my description => Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.8/aria-required-children)."
	},
	"aria-required-parent": {
		"id": "aria-required-parent",
		"title": "`[role]`s are contained by their required parent element",
		"description": "my description => Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more about ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.8/aria-required-parent)."
	},
	"aria-roles": {
		"id": "aria-roles",
		"title": "`[role]` values are valid",
		"description": "my description => ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more about valid ARIA roles](https://dequeuniversity.com/rules/axe/4.8/aria-roles)."
	},
	"aria-text": {
		"id": "aria-text",
		"title": "Elements with the `role=text` attribute do not have focusable descendents.",
		"description": "my description => Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced. [Learn more about the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.8/aria-text)."
	},
	"aria-toggle-field-name": {
		"id": "aria-toggle-field-name",
		"title": "ARIA toggle fields have accessible names",
		"description": "my description => When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.8/aria-toggle-field-name)."
	},
	"aria-tooltip-name": {
		"id": "aria-tooltip-name",
		"title": "ARIA `tooltip` elements have accessible names",
		"description": "my description => When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.8/aria-tooltip-name)."
	},
	"aria-treeitem-name": {
		"id": "aria-treeitem-name",
		"title": "ARIA `treeitem` elements have accessible names",
		"description": "my description => When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.8/aria-treeitem-name)."
	},
	"aria-valid-attr-value": {
		"id": "aria-valid-attr-value",
		"title": "`[aria-*]` attributes have valid values",
		"description": "my description => Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more about valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.8/aria-valid-attr-value)."
	},
	"aria-valid-attr": {
		"id": "aria-valid-attr",
		"title": "`[aria-*]` attributes are valid and not misspelled",
		"description": "my description => Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more about valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.8/aria-valid-attr)."
	},
	"button-name": {
		"id": "button-name",
		"title": "Buttons have an accessible name",
		"description": "my description => When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.8/button-name)."
	},
	"bypass": {
		"id": "bypass",
		"title": "The page contains a heading, skip link, or landmark region",
		"description": "my description => Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more about bypass blocks](https://dequeuniversity.com/rules/axe/4.8/bypass)."
	},
	"color-contrast": {
		"id": "color-contrast",
		"title": "Background and foreground colors do not have a sufficient contrast ratio.",
		"description": "my description => Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.8/color-contrast)."
	},
	"definition-list": {
		"id": "definition-list",
		"title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
		"description": "my description => When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.8/definition-list)."
	},
	"dlitem": {
		"id": "dlitem",
		"title": "Definition list items are wrapped in `<dl>` elements",
		"description": "my description => Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.8/dlitem)."
	},
	"document-title": {
		"id": "document-title",
		"title": "Document has a `<title>` element",
		"description": "my description => The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more about document titles](https://dequeuniversity.com/rules/axe/4.8/document-title)."
	},
	"duplicate-id-active": {
		"id": "duplicate-id-active",
		"title": "`[id]` attributes on active, focusable elements are unique",
		"description": "my description => All focusable elements must have a unique `id` to ensure that they're visible to assistive technologies. [Learn how to fix duplicate `id`s](https://dequeuniversity.com/rules/axe/4.8/duplicate-id-active)."
	},
	"duplicate-id-aria": {
		"id": "duplicate-id-aria",
		"title": "ARIA IDs are unique",
		"description": "my description => The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.8/duplicate-id-aria)."
	},
	"empty-heading": {
		"id": "empty-heading",
		"title": "All heading elements contain content.",
		"description": "my description => A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.8/empty-heading)."
	},
	"form-field-multiple-labels": {
		"id": "form-field-multiple-labels",
		"title": "No form fields have multiple labels",
		"description": "my description => Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn how to use form labels](https://dequeuniversity.com/rules/axe/4.8/form-field-multiple-labels)."
	},
	"frame-title": {
		"id": "frame-title",
		"title": "`<frame>` or `<iframe>` elements have a title",
		"description": "my description => Screen reader users rely on frame titles to describe the contents of frames. [Learn more about frame titles](https://dequeuniversity.com/rules/axe/4.8/frame-title)."
	},
	"heading-order": {
		"id": "heading-order",
		"title": "Heading elements are not in a sequentially-descending order",
		"description": "my description => Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.8/heading-order)."
	},
	"html-has-lang": {
		"id": "html-has-lang",
		"title": "`<html>` element has a `[lang]` attribute",
		"description": "my description => If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-has-lang)."
	},
	"html-lang-valid": {
		"id": "html-lang-valid",
		"title": "`<html>` element has a valid value for its `[lang]` attribute",
		"description": "my description => Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-lang-valid)."
	},
	"html-xml-lang-mismatch": {
		"id": "html-xml-lang-mismatch",
		"title": "`<html>` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.",
		"description": "my description => If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-xml-lang-mismatch)."
	},
	"identical-links-same-purpose": {
		"id": "identical-links-same-purpose",
		"title": "Identical links have the same purpose.",
		"description": "my description => Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.8/identical-links-same-purpose)."
	},
	"image-alt": {
		"id": "image-alt",
		"title": "Image elements have `[alt]` attributes",
		"description": "my description => Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.8/image-alt)."
	},
	"image-redundant-alt": {
		"id": "image-redundant-alt",
		"title": "Image elements do not have `[alt]` attributes that are redundant text.",
		"description": "my description => Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.8/image-redundant-alt)."
	},
	"input-button-name": {
		"id": "input-button-name",
		"title": "Input buttons have discernible text.",
		"description": "my description => Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button. [Learn more about input buttons](https://dequeuniversity.com/rules/axe/4.8/input-button-name)."
	},
	"input-image-alt": {
		"id": "input-image-alt",
		"title": "`<input type=\"image\">` elements have `[alt]` text",
		"description": "my description => When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.8/input-image-alt)."
	},
	"label-content-name-mismatch": {
		"id": "label-content-name-mismatch",
		"title": "Elements with visible text labels have matching accessible names.",
		"description": "my description => Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.8/label-content-name-mismatch)."
	},
	"label": {
		"id": "label",
		"title": "Form elements have associated labels",
		"description": "my description => Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.8/label)."
	},
	"landmark-one-main": {
		"id": "landmark-one-main",
		"title": "Document has a main landmark.",
		"description": "my description => One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.8/landmark-one-main)."
	},
	"link-name": {
		"id": "link-name",
		"title": "Links do not have a discernible name",
		"description": "my description => Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.8/link-name)."
	},
	"link-in-text-block": {
		"id": "link-in-text-block",
		"title": "Links are distinguishable without relying on color.",
		"description": "my description => Low-contrast text is difficult or impossible for many users to read. Link text that is discernible improves the experience for users with low vision. [Learn how to make links distinguishable](https://dequeuniversity.com/rules/axe/4.8/link-in-text-block)."
	},
	"list": {
		"id": "list",
		"title": "Lists do not contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
		"description": "my description => Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.8/list)."
	},
	"listitem": {
		"id": "listitem",
		"title": "List items (`<li>`) are contained within `<ul>`, `<ol>` or `<menu>` parent elements",
		"description": "my description => Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.8/listitem)."
	},
	"meta-refresh": {
		"id": "meta-refresh",
		"title": "The document does not use `<meta http-equiv=\"refresh\">`",
		"description": "my description => Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.8/meta-refresh)."
	},
	"meta-viewport": {
		"id": "meta-viewport",
		"title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
		"description": "my description => Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.8/meta-viewport)."
	},
	"object-alt": {
		"id": "object-alt",
		"title": "`<object>` elements have alternate text",
		"description": "my description => Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more about alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.8/object-alt)."
	},
	"select-name": {
		"id": "select-name",
		"title": "Select elements do not have associated label elements.",
		"description": "my description => Form elements without effective labels can create frustrating experiences for screen reader users. [Learn more about the `select` element](https://dequeuniversity.com/rules/axe/4.8/select-name)."
	},
	"skip-link": {
		"id": "skip-link",
		"title": "Skip links are focusable.",
		"description": "my description => Including a skip link can help users skip to the main content to save time. [Learn more about skip links](https://dequeuniversity.com/rules/axe/4.8/skip-link)."
	},
	"tabindex": {
		"id": "tabindex",
		"title": "No element has a `[tabindex]` value greater than 0",
		"description": "my description => A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more about the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.8/tabindex)."
	},
	"table-duplicate-name": {
		"id": "table-duplicate-name",
		"title": "Tables have different content in the summary attribute and `<caption>`.",
		"description": "my description => The summary attribute should describe the table structure, while `<caption>` should have the onscreen title. Accurate table mark-up helps users of screen readers. [Learn more about summary and caption](https://dequeuniversity.com/rules/axe/4.8/table-duplicate-name)."
	},
	"table-fake-caption": {
		"id": "table-fake-caption",
		"title": "Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption.",
		"description": "my description => Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.8/table-fake-caption)."
	},
	"target-size": {
		"id": "target-size",
		"title": "Touch targets have sufficient size and spacing.",
		"description": "my description => Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.8/target-size)."
	},
	"td-has-header": {
		"id": "td-has-header",
		"title": "`<td>` elements in a large `<table>` have one or more table headers.",
		"description": "my description => Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.8/td-has-header)."
	},
	"td-headers-attr": {
		"id": "td-headers-attr",
		"title": "Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.",
		"description": "my description => Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more about the `headers` attribute](https://dequeuniversity.com/rules/axe/4.8/td-headers-attr)."
	},
	"th-has-data-cells": {
		"id": "th-has-data-cells",
		"title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
		"description": "my description => Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.8/th-has-data-cells)."
	},
	"valid-lang": {
		"id": "valid-lang",
		"title": "`[lang]` attributes have a valid value",
		"description": "my description => Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/valid-lang)."
	},
	"video-caption": {
		"id": "video-caption",
		"title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
		"description": "my description => When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more about video captions](https://dequeuniversity.com/rules/axe/4.8/video-caption)."
	},
	"custom-controls-labels": {
		"id": "custom-controls-labels",
		"title": "Custom controls have associated labels",
		"description": "my description => Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/)."
	},
	"custom-controls-roles": {
		"id": "custom-controls-roles",
		"title": "Custom controls have ARIA roles",
		"description": "my description => Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/)."
	},
	"focus-traps": {
		"id": "focus-traps",
		"title": "User focus is not accidentally trapped in a region",
		"description": "my description => A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/)."
	},
	"focusable-controls": {
		"id": "focusable-controls",
		"title": "Interactive controls are keyboard focusable",
		"description": "my description => Custom interactive controls are keyboard focusable and display a focus indicator. [Learn how to make custom controls focusable](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/)."
	},
	"interactive-element-affordance": {
		"id": "interactive-element-affordance",
		"title": "Interactive elements indicate their purpose and state",
		"description": "my description => Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/)."
	},
	"logical-tab-order": {
		"id": "logical-tab-order",
		"title": "The page has a logical tab order",
		"description": "my description => Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/)."
	},
	"managed-focus": {
		"id": "managed-focus",
		"title": "The user's focus is directed to new content added to the page",
		"description": "my description => If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/)."
	},
	"offscreen-content-hidden": {
		"id": "offscreen-content-hidden",
		"title": "Offscreen content is hidden from assistive technology",
		"description": "my description => Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/)."
	},
	"use-landmarks": {
		"id": "use-landmarks",
		"title": "HTML5 landmark elements are used to improve navigation",
		"description": "my description => Landmark elements (`<main>`, `<nav>`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/)."
	},
	"visual-order-follows-dom": {
		"id": "visual-order-follows-dom",
		"title": "Visual order on the page follows DOM order",
		"description": "my description => DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/)."
	},
	"uses-long-cache-ttl": {
		"id": "uses-long-cache-ttl",
		"title": "Serve static assets with an efficient cache policy",
		"description": "my description => A long cache lifetime can speed up repeat visits to your page. [Learn more about efficient cache policies](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/)."
	},
	"total-byte-weight": {
		"id": "total-byte-weight",
		"title": "Avoids enormous network payloads",
		"description": "my description => Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/)."
	},
	"offscreen-images": {
		"id": "offscreen-images",
		"title": "Defer offscreen images",
		"description": "my description => Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/)."
	},
	"render-blocking-resources": {
		"id": "render-blocking-resources",
		"title": "Eliminate render-blocking resources",
		"description": "my description => Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/)."
	},
	"unminified-css": {
		"id": "unminified-css",
		"title": "Minify CSS",
		"description": "my description => Minifying CSS files can reduce network payload sizes. [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/)."
	},
	"unminified-javascript": {
		"id": "unminified-javascript",
		"title": "Minify JavaScript",
		"description": "my description => Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/)."
	},
	"unused-css-rules": {
		"id": "unused-css-rules",
		"title": "Reduce unused CSS",
		"description": "my description => Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/)."
	},
	"unused-javascript": {
		"id": "unused-javascript",
		"title": "Reduce unused JavaScript",
		"description": "my description => Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/)."
	},
	"modern-image-formats": {
		"id": "modern-image-formats",
		"title": "Serve images in next-gen formats",
		"description": "my description => Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more about modern image formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/)."
	},
	"uses-optimized-images": {
		"id": "uses-optimized-images",
		"title": "Efficiently encode images",
		"description": "my description => Optimized images load faster and consume less cellular data. [Learn how to efficiently encode images](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/)."
	},
	"uses-text-compression": {
		"id": "uses-text-compression",
		"title": "Enable text compression",
		"description": "my description => Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more about text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/)."
	},
	"uses-responsive-images": {
		"id": "uses-responsive-images",
		"title": "Properly size images",
		"description": "my description => Serve images that are appropriately-sized to save cellular data and improve load time. [Learn how to size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/)."
	},
	"efficient-animated-content": {
		"id": "efficient-animated-content",
		"title": "Use video formats for animated content",
		"description": "my description => Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more about efficient video formats](https://developer.chrome.com/docs/lighthouse/performance/efficient-animated-content/)"
	},
	"duplicated-javascript": {
		"id": "duplicated-javascript",
		"title": "Remove duplicate modules in JavaScript bundles",
		"description": "my description => Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. "
	},
	"legacy-javascript": {
		"id": "legacy-javascript",
		"title": "Avoid serving legacy JavaScript to modern browsers",
		"description": "my description => Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)"
	},
	"doctype": {
		"id": "doctype",
		"title": "Page has the HTML doctype",
		"description": "my description => Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more about the doctype declaration](https://developer.chrome.com/docs/lighthouse/best-practices/doctype/)."
	},
	"charset": {
		"id": "charset",
		"title": "Properly defines charset",
		"description": "my description => A character encoding declaration is required. It can be done with a `<meta>` tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more about declaring the character encoding](https://developer.chrome.com/docs/lighthouse/best-practices/charset/)."
	},
	"dom-size": {
		"id": "dom-size",
		"title": "Avoid an excessive DOM size",
		"description": "my description => A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/)."
	},
	"geolocation-on-start": {
		"id": "geolocation-on-start",
		"title": "Avoids requesting the geolocation permission on page load",
		"description": "my description => Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more about the geolocation permission](https://developer.chrome.com/docs/lighthouse/best-practices/geolocation-on-start/)."
	},
	"inspector-issues": {
		"id": "inspector-issues",
		"title": "No issues in the `Issues` panel in Chrome Devtools",
		"description": "my description => Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue."
	},
	"no-document-write": {
		"id": "no-document-write",
		"title": "Avoids `document.write()`",
		"description": "my description => For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn how to avoid document.write()](https://developer.chrome.com/docs/lighthouse/best-practices/no-document-write/)."
	},
	"js-libraries": {
		"id": "js-libraries",
		"title": "Detected JavaScript libraries",
		"description": "my description => All front-end JavaScript libraries detected on the page. [Learn more about this JavaScript library detection diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/js-libraries/)."
	},
	"notification-on-start": {
		"id": "notification-on-start",
		"title": "Avoids requesting the notification permission on page load",
		"description": "my description => Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more about responsibly getting permission for notifications](https://developer.chrome.com/docs/lighthouse/best-practices/notification-on-start/)."
	},
	"paste-preventing-inputs": {
		"id": "paste-preventing-inputs",
		"title": "Allows users to paste into input fields",
		"description": "my description => Preventing input pasting is a bad practice for the UX, and weakens security by blocking password managers.[Learn more about user-friendly input fields](https://developer.chrome.com/docs/lighthouse/best-practices/paste-preventing-inputs/)."
	},
	"uses-http2": {
		"id": "uses-http2",
		"title": "Use HTTP/2",
		"description": "my description => HTTP/2 offers many benefits over HTTP/1.1, including binary headers and multiplexing. [Learn more about HTTP/2](https://developer.chrome.com/docs/lighthouse/best-practices/uses-http2/)."
	},
	"uses-passive-event-listeners": {
		"id": "uses-passive-event-listeners",
		"title": "Uses passive listeners to improve scrolling performance",
		"description": "my description => Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more about adopting passive event listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/)."
	},
	"meta-description": {
		"id": "meta-description",
		"title": "Document has a meta description",
		"description": "my description => Meta descriptions may be included in search results to concisely summarize page content. [Learn more about the meta description](https://developer.chrome.com/docs/lighthouse/seo/meta-description/)."
	},
	"http-status-code": {
		"id": "http-status-code",
		"title": "Page has successful HTTP status code",
		"description": "my description => Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more about HTTP status codes](https://developer.chrome.com/docs/lighthouse/seo/http-status-code/)."
	},
	"font-size": {
		"id": "font-size",
		"title": "Document uses legible font sizes",
		"description": "my description => Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more about legible font sizes](https://developer.chrome.com/docs/lighthouse/seo/font-size/)."
	},
	"link-text": {
		"id": "link-text",
		"title": "Links have descriptive text",
		"description": "my description => Descriptive link text helps search engines understand your content. [Learn how to make links more accessible](https://developer.chrome.com/docs/lighthouse/seo/link-text/)."
	},
	"crawlable-anchors": {
		"id": "crawlable-anchors",
		"title": "Links are not crawlable",
		"description": "my description => Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn how to make links crawlable](https://support.google.com/webmasters/answer/9112205)"
	},
	"is-crawlable": {
		"id": "is-crawlable",
		"title": "Page isn’t blocked from indexing",
		"description": "my description => Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more about crawler directives](https://developer.chrome.com/docs/lighthouse/seo/is-crawlable/)."
	},
	"robots-txt": {
		"id": "robots-txt",
		"title": "robots.txt is valid",
		"description": "my description => If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more about robots.txt](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/)."
	},
	"tap-targets": {
		"id": "tap-targets",
		"title": "Tap targets are not sized appropriately",
		"description": "my description => Interactive elements like buttons and links should be large enough (48x48px), or have enough space around them, to be easy enough to tap without overlapping onto other elements. [Learn more about tap targets](https://developer.chrome.com/docs/lighthouse/seo/tap-targets/)."
	},
	"hreflang": {
		"id": "hreflang",
		"title": "Document has a valid `hreflang`",
		"description": "my description => hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more about `hreflang`](https://developer.chrome.com/docs/lighthouse/seo/hreflang/)."
	},
	"plugins": {
		"id": "plugins",
		"title": "Document avoids plugins",
		"description": "my description => Search engines can't index plugin content, and many devices restrict plugins or don't support them. [Learn more about avoiding plugins](https://developer.chrome.com/docs/lighthouse/seo/plugins/)."
	},
	"canonical": {
		"id": "canonical",
		"title": "Document has a valid `rel=canonical`",
		"description": "my description => Canonical links suggest which URL to show in search results. [Learn more about canonical links](https://developer.chrome.com/docs/lighthouse/seo/canonical/)."
	},
	"structured-data": {
		"id": "structured-data",
		"title": "Structured data is valid",
		"description": "my description => Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more about Structured Data](https://developer.chrome.com/docs/lighthouse/seo/structured-data/)."
	},
	"bf-cache": {
		"id": "bf-cache",
		"title": "Page prevented back/forward cache restoration",
		"description": "my description => Many navigations are performed by going back to a previous page, or forwards again. The back/forward cache (bfcache) can speed up these return navigations. [Learn more about the bfcache](https://developer.chrome.com/docs/lighthouse/performance/bf-cache/)"
	}
}

export const actualAudits = {
	"is-on-https": {
		"id": "is-on-https",
		"title": "Uses HTTPS",
		"description": "All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more about HTTPS](https://developer.chrome.com/docs/lighthouse/pwa/is-on-https/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"viewport": {
		"id": "viewport",
		"title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
		"description": "A `<meta name=\"viewport\">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/). [Learn more about using the viewport meta tag](https://developer.chrome.com/docs/lighthouse/pwa/viewport/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"warnings": [],
		"metricSavings": {
			"INP": 0
		},
		"guidanceLevel": 3
	},
	"first-contentful-paint": {
		"id": "first-contentful-paint",
		"title": "First Contentful Paint",
		"description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
		"score": 0.97,
		"scoreDisplayMode": "numeric",
		"numericValue": 1371.3600000000004,
		"numericUnit": "millisecond",
		"displayValue": "1.4 s",
		"scoringOptions": {
			"p10": 1800,
			"median": 3000
		}
	},
	"largest-contentful-paint": {
		"id": "largest-contentful-paint",
		"title": "Largest Contentful Paint",
		"description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
		"score": 0.37,
		"scoreDisplayMode": "numeric",
		"numericValue": 4493.037,
		"numericUnit": "millisecond",
		"displayValue": "4.5 s",
		"scoringOptions": {
			"p10": 2500,
			"median": 4000
		}
	},
	"first-meaningful-paint": {
		"id": "first-meaningful-paint",
		"title": "First Meaningful Paint",
		"description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more about the First Meaningful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/).",
		"score": 0.97,
		"scoreDisplayMode": "numeric",
		"numericValue": 1847.8975000000005,
		"numericUnit": "millisecond",
		"displayValue": "1.8 s"
	},
	"speed-index": {
		"id": "speed-index",
		"title": "Speed Index",
		"description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
		"score": 0.93,
		"scoreDisplayMode": "numeric",
		"numericValue": 3047.495519748255,
		"numericUnit": "millisecond",
		"displayValue": "3.0 s",
		"scoringOptions": {
			"p10": 3387,
			"median": 5800
		}
	},
	"screenshot-thumbnails": {
		"id": "screenshot-thumbnails",
		"title": "Screenshot Thumbnails",
		"description": "This is what the load of your site looked like.",
		"score": null,
		"scoreDisplayMode": "informative",
		"details": {
			"type": "filmstrip",
			"scale": 3000,
			"items": [
				{
					"timing": 375,
					"timestamp": 512005661705,
					"data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2MBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIAfIA+gMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APQKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//9k="
				},
				{
					"timing": 750,
					"timestamp": 512006036705,
					"data": "data:image/jpeg;base64,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"
				},
				{
					"timing": 1125,
					"timestamp": 512006411705,
					"data": "data:image/jpeg;base64,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"
				},
				{
					"timing": 1500,
					"timestamp": 512006786705,
					"data": "data:image/jpeg;base64,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"
				},
				{
					"timing": 1875,
					"timestamp": 512007161705,
					"data": "data:image/jpeg;base64,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"
				},
				{
					"timing": 2250,
					"timestamp": 512007536705,
					"data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHyAPoDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAQGAwUHAggB/8QAVRAAAgEDAgQDAwcGCQkFBwUAAQIDAAQRBRIGEyExIkFRBxRhFyMyUnGBkRUzQnKTsQgWNFNUc5Sh0SQ3VmJmdaSz44KSwdPwGDVDV4Oy0iUmVaLh/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA1EQACAQICBwQKAgMBAAAAAAAAAQIDEQQhBRITMUFRkRRhcdEGFRYiUlOBoeHwMrEjJMHx/9oADAMBAAIRAxEAPwD6ppSuXanx1q2me0dNEuhbHT3mRA2wh9rgY659TWE5qFrnThsJUxTkqe+Kb+iOo0qge1bjK74WisE0wQtczsxYSruAUAeWR5n+6tJxfx5r2iaboMipai4vLfmzh4zgN06AZ6d6xlWjG9+B00NFYivGnKCXv3tny3nWqVA0c3EsC3M9wZFnjRlj2ACM9ScHuc5Hf0qfW1ZnnyWq7ClKUMRSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlCQASSAB5mgFKx8+L+dj/AO8Kc+L+dj/7woDJSgIIBByD50oBXEfbzZNba5pmqRAgyIULD6yHI/f/AHV26ouoadZalGseoWkFzGp3KsyBwD69a11ae0jqnfo3G9hxEa7V0r3XijgXF+ofxx440iG38UbxwR+vVsMx+7P91bn2+KE1DR1UYVYmAH3iutWvD2jWlwk9rpVlDMhyrpAoZT8DitdxZBbzTW5uNNtbsjIDTRB8fAZ7Vw4ycMLQnVqvLLcr8T1aGl4rEUNlD3aaatfe3e7ubnRf/dFl/Up+6plY7cAQRgIIwFHgH6PwrJXoxd1c+ck7tsUpSqQUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAVr+Ioo59B1CKaxbUIngdWtFIBnGPoDJA69u9bCo+pWpvbC4tluJ7ZpoygmgYLJHkY3KSCAR5dKA4v/ABe0X/5P3/7aL/zKfxe0X/5P3/7aL/zKu3yf3P8Apvxd/a4v/Lp8n9z/AKb8Xf2uL/y6z1iFs0KNIdD06KKzaxjS3jVbViCYAFGIzgkeHt38qnVgsLc2ljbWzTzXDQxrGZpiDJJgY3MQBljjJ6d6z1gUUp19RTr6igFKdfUU6+ooBSnX1FOvqKAUp19RTr6igFKdfUU6+ooBSnX1FOvqKAUp19RTr6igFKdfUU6+ooBSnX1FOvqKAUp19RTr6igFKdfUU6+ooBSnX1FOvqKAUp19RTr6igFKdfUU6+ooBSnX1FOvqKAUp19RTr6igFMj1pVA4g0nUpb7UdPhtXl0tll1OJgAUMxjKiAqfpZkPN9M0QL/AJGQMjJ7Uqk67p17dahE0MTe9Q6YslixXwJPHKrsh9N2Ih8QG+Na2FOIormW9gTULee+ZLyO3ESMjOzlTHOSCUCQrEOhXruwSelWwOkUyM4z1rmTtxN81dSHVWv/AHdkuNsMax2zvNDvWEiNiyhVY5Ic4HQ5ziNY6fxHJqz6xfyanFP7vBbPJHbwvJHFzJw5jBT6RCxMwA/TJx0UBYHVqVQtO/jXLOlxdXN5GkL26pByYgLiNrqRWaTw5D8jlsQpUA+XlXnSf4x3nD2vwawLmWeSxIRHjVds7I4ZEIVdw+jj6Q9GPXCwL/mlcu1yHid7+zmsRqEl7azXBSB4YxbRJyJFjZX25LEEdGYjcSCAMVllu+L0tIeQdRlZJXaN2hQGZRy8K4MecdZOpEZwPM4JWB0sMCoYEFT1znpX7VBm017vg2GG6tpZLb8oTTJF7vz1WAyymLfCerpgp4R1HhPTbWssrPiGzKTRDUrJJLa3h93gVZUijSaQOyBwxVuWUdUYkjeVAbaAFgdRpVAP8a5LK6liu79TBEogV4YVecGaVS7DYfGIgjBQB1xle6150u44o/Kml+9PfyWm4qwaFE5il28Tnl56LjoRF2BG45FLA6DSqDrDcXQ3l/caZLcTBrqWCC2eKPlLCLYskgO3OeaNoJOOuCPOoc11xbHYRch9SmlSSVo3MKKZQBGVVwYs4JMg7RnA7k4JWB0qlVR4tdHDMzC9uzqU94gBEUeYIjcKp2jbjpHk5bPmfhWgl/jpaqVhu726Ehuo2aWGIGJI7qNY3XanVmhMjdQ2SOg8qWB0qlafhiW+/i/E+qmaS6UyZMkYV3UO20lQB1K48gfUA9KlaPbyQWe+4ULdTsZpsHOGPlnzwML9iioCdSlKAUpSgFKUoBSlKAUpSgFKUoBUeW9tYrd55bmBIEYo0jSAKrA4IJ7Zz0qRVI1vh7UrjV74WoU6dJHJfQnmbWS8MRiVQPq4O/P1utAXCS8to5IY5LiFZJhmJWcAv2+iPPuO3qKyJLHI8iI6s0Z2uAclTgHB9OhB++qnrOiXt7eMUGJW01UgnJyILiKRZFz8Gbafjy/srULoGv8AP972XEV9clLkGC9KRW87SEyc1QQJVEfLQdGyExhc5q2B0QyIJFjLKJGBYLnqQMZOPvH4isZurcXa2pniFyyGQQlxvKg43be+M+dc4k4e4hMQbbfNfGAx3U7agxWV2miZ2hUSKY1Ko3hDR+Q6Y64tP4R1tLiS+vzfyTvDbwTLDqckcksSSTZUHmYBCmE5zk+PxZZiVgdSrzI6RxtJIyoigszMcAAdyTVC07h7XhPFdXl3e863aAW0YvnKrF7zIXWRQ22RhAUUswOSOhJ61+aBoXEEWha9a6pNNPNd2XLXnTlw05Vw7Jl32qcr9Qf6i+awL400SNEryorSnEYLAFzgnA9egJ+wVkrmGtcM8Q3N7FPY+9R6hFJcMLqS+JgCNC6RBIt3gYbgpIUHOTk5rzLoPFgs4I7ea8+ZmeWHfeNuUfNkB/njkZEmAzSjrjABwFgdHl1GyhsffZry3js8A895VCYPbxE4rNDNFMqtDKkisocFWBBU9iPgfWqgmkXbcO24a2naYalPeokUiJLArySspUP4CwDjKt06nzArSxcK6xHIbpoZ455oIYplsrwwKY0nkLoFVwqSNGydUAG7mYK7slYHTaVz1+HNdmsLordahDLHCqWcTX7sQpmlLK5Djc/JZFDFuhxhsjdXjStE4kg1XSZZ5bx7e3YjbJdsQEMjE7xzTltpGN3Oz0HhxupYHQopopjIIpEcxtscKwO1sA4PocEdPjUebUrGC9js5r22ju5ACkDyqHYHsQpOT2P4VTdQ4e1u61PV7gXN7GoMs1gsV60a83bFy9yhgCMq/hbI6nI61k4n0O/vta1wwaelxFqOm29pDcO6BYJEeclzk7srzFYbQeo7jvSwLtNLHCm+aRI0yFyxwMkgAfaSQPtNefeYNkL8+LZOQIm3jEhIyNvr0BPSubvw5xTLq073VzLcQPeJK26f5to1u4pI9qliAVjVgcKnX6+c1s9E4c1TS5NFWKa6MEa27XaS3bSKrrFMrhQSQFy0fhXA6A46UsC8uyoMuwUZAyTjqTgD8a/ag3lvJc6habl/yWHMpO76UnZRjzAyx+0LU6oBSlKAUpSgFKUoBSlUr2xcTy8J8B31/aHbduRbwN9V2z1+4An7qJXB54y9qHC/Cdw1rqN6ZLwd7e3XmMv2+Q++qcf4Q/DGf/d+qf8AcT/8q+WriaW4nkmnkaSWRizOxyWJ8zWOt2zRLn1T/wC0Rwx//H6p/wBxP/yrYRe3LQJIkdbHUcMAwyqef/ar5Gq22P8AIrf+rX91HBIXPuSoU+q2EFq9zNdwpAkhhZy3QODgr9uQam1T9Y4XvbvWL6W3ngWxmhknRHZt6Xpi5IcYGAmz793XFaSlkn1Oygnt4ZrmNJbgbolJ+mMqOn3uo+0is8NzDPLPHDKjvA4jlVTkoxUNg+hwwP3iqzq/D91e3UgVgol01YFuAesE8bh42Hmcsc//AExWq/ijq5k57yWnvswSVpkuJV91nMrPI0ahfGCpVBnBIjAPSqC+tNGs6QFwJXVnVPMqpAJ+7cv41h9+tfyh7jz0N5y+cYQfEEyQGI8gSCPuPpVCbg3Vzboha0a45HKuLlruUtdMZY2Zyu3apKoeniBJCkFRWPTuA9QgkNzeNaXVw0cEUim4kXnRo8xKM4QdNrw+WCY8EAUsgdKrxPNHbwSTTuscUal3djgKAMkmqPp3B+oRTJc3d0j3MLwG3IuJCII1uZJHjBI6jlOsYJHi29cCnD/CWq2Oi61aXl8J5b2z5AZ5t6tLtcNIcRqRncMnxE479BlYF0ku7eOS2jklRXuWKwgn6ZCliB9wJ+6s9c31jgnV7ydJLWe2t7pJLh/fhdScxleJ0RAm3C7d4XIPQDI6kivEvBOu+5xQwXsa8mZ5oS10cwk8vAXEQAHhc4Cgjd3wTSyBe59Z06305L+4vIorRyFWRztBYnG3B65z0x3rPZ39peorWdzDOrRrMpjcNlGztbp5HBwfgarcGh3h4fhjMEfvJv5r4xvcNC0IkkkYBZI84YCQA9wfEOxzWmj4J1MOLiZrGa7kjhS4cSNEZVSeRyhKoMhkdQWwMlTlcMaWQOjUqgvwbqEtjdhrlYrgxLHaql1IywrzpGZMsp6GN1TcVOBkAY6HzpXCGr2ep6ZcvdJJFasRskuSwRC7EhQsa9dpx0KjyIYAUsC9wXEU7SrDIrmJ+W4H6LYBwfuI/GsE+qWME9xBNdwpNbwe8yozgFIuvjI+r4W6/Cqlf8IX15qWr3UlzGTKJXsfn5ByZSsYRiAMDBRvXv8AE144x4NvtY1TWNR064tYLyfTo7K2eUtjvOJVcAfQZZVwRnDKDjoMrIF8ByMjtWK7uYbO0murqVIbeFGkkkc4VFAyST6ACufHgzXV1W9vRqYllaSSeEvcFUZhKskKOojztXaFPiPTOB4iBMh4Q1ROFeI9Klv0uZL2xeztJJXY43JISznHTxysOmfCq+fSlkC2aVq2n6vFJJpl5BdJG2xzE4bYcZwfQ49azJfW0l49ok6G5QEtGD4hgKT/AHOv/eFUjXOFNa1e4W4ae3s8LDDJbwTllnjQS/TZo8Z3SKQCpHh79enmx4GvCjjVLlbh/dnRXNw5fmmKBFZmAXdgxMc/qnGeyyBfYLiK4EhhcOEcxtjyYdxXpJEdpFRgWjO1gP0TgHB+4g/fWr4esbywtLlb2VJppbiSYFWJGGOQOo6VK0q1a0s1WYqbhyZJmUkguxycZ8vIfACoCZSlKAUpSgFce/hTf5uLX/eMX/LkrsNce/hTf5uLX/eUX/Lkqx3oHyfSlWDTeEdVv9OjvkW1gtZc8p7m5jh5gBwSoYgkZ6ZrpMSv1bbH+RW/9Wv7qqbDDEHHTp0q2WP8it/6tf3VJA+5K18+sWcMLSSSN0lMG0IS28eWMZ7DP2de1bCq/qPDpu9SurhbhUhnhYGLl5xMU2c3OfqeHFcrvwN1JQb992Nlc6raW1xBDM5V5QGXwnpllUZ9MlgB9/pWSHULWa4lhSZeZFJymB6ZbaGwPXoR2rW32htcyyAyAQzWfu0hHRlZTlGX7MsftArXHhKRuslzbySyogmlaDxBxI0jNH4vDksfXGB3xUblyNsYUWs5WZZHv7VJ+S06B9rMevRQuM5Pl9IVh/LFj7+9mLheckQmf6qoc4JPbrg1XP4nSCGONbi2+ajEfMNv85KBIr5ds9W8PfyJJ88V+2nBptwHM8E0q8rAkhyp2PI2Dk5xiQY69CgPXtUvLkZ7LD6rbnn4fctnvEO9E5se9xlRuGWHwrxLeW8VtPO0qmKAEyFTnbgZPaq5ZcIR24Znljkm3xOj8rHL2TvKVXr0Xx7QPICvWk8Kmw0+/tRcAm5tltw+GPYMNxBYj9LsMef3Ly5GDp0Un7+61st/PwN7JqVpHc29u0y86ckIvn9Et19OinvWYXUBWNhNGVkOEO4YY/D1qp6jwY16SpuYEXfM/MWD51uYhXDNu6gZ/AAdMZrzLwY7x7FuokBkaT6DNtJ2dQS2f0PgMkHHTrNaXI2Kjh3b/JbnkWN9ZtEsYrotIUkkMSokZdy4JBXC5ORtbPpg1+2ms2F2xWG5XesYmZXBVlU5GSDjH0TkHqMda16aHKdHjtma3MpuXuZFkTmISzs+AehGC3Rhg9B9lQhwlKEUyXiTy7YgzzRFi2yVnAJJyRhtvUk+FTk1by5GChRad5WzLQbmAAEzR4I3A7h1HfP9x/Ci3MDGMLNGTIMphh4h8PWqz/FCN7W6SSSDnSoFRki2iP515CB1ztO4A4Izivyz4Ta1vbW4SeIGJtxGxm6by2BuYjz74yDkjvil5chsqFn7+fgWNb63MjoZAjK/Lw/hycA9M9+/lUbUdastPn5M7ytKE5jLFE8hRPrNtBwOhxnvg+hrVXXCiXN1qM8ksbPcrIIy0WTEWCAEHPkUBqfdaZdrqtzfaddRQyXMKQyCWLeAULFWHUfXbI8+nbrm3kY6lG6979y8e/gbJLqByQs0ZIUP0YfRPY/ZX573bYQ8+LDnCncPF1x0++q1Nwk0vPSS5idZGmcytD86/MUgqzZ6qM9sdlUfo9ceq8FR3s180c0UMc9vcQxIIciFpEiXcOvkYyfL6VS8uRVTo3V5/YtgniLugkQshAYbuoJ7Zr8e5gRlV5o1LEhQWHUjoaqi8JXCai14t7FzNzMByiAxMyyDIBx2XHqckmo2ocN3wYKkcF3LLLG7zGFVEeLhpTtJfI6MfI9vjTWfIyVGk2kp/YtB1rThapcNdRrE7KgJPXcxwoI8s14vNdsbS/NpM0vNVUZisLsqByQpZgMDJB7+lamThGL3aBITbrLHsLMYARIyyh8nr+sP+0a2MmgW8+vT6jdEyB4oY1i3MFBRnbJAOG+kO46YpeRHHDp5NtZ/8t/02Nte29ykTQyqebGJVGcEqexx3r0LqAojiaMq52qdwwx9B6mqjdcFyzlB78iqsXLyIe45BiwRnr1O7r9lfuo8GNfks8tpESsibIYWRBuCDd4XBJ8H7u2OrWlyMlRw91epl4bi50r8UYUDviv2szjFce/hTf5uLX/eUX/LkrsNce/hTf5uLX/eUX/Lkqx3oHyeDgg4zXXLMrrGm8LWV1pWi/5akwtAIJ2W3UM3RnEvm4PTyBzXI66r7N53GjRWl6YINFmL+8z/AJZMLqOozyg4I9MAeKuiRicskGJGHToT27Va7H+RW/8AVr+6qpKFEjhDlcnB+FWux/kVv/Vr+6kgfclKUrmMhSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBXHv4U3+bi1/3lF/y5K7DXHv4U3+bi1/3lF/y5Ksd6B8n12LgyQxaLw7COZbwOswudONoXOpkuwBDYwfJfERt25FcdroSajxpf8AD1i8+vJZ6e0bx2/vF8sDTIGO7AJBYA5GfhiuhmJz+QYkcbdvU+H0q12P8it/6tf3VU2GCRnP2VbLH+RW/wDVr+6kgfclc80bi3VI/a7q3Cms8k2jW4utOkCbGZehK9/F3YZ/1DXQ6497ftN1SzuNA4u4bilk1XTpWgKxRGQlHU4JA64ByP8At1ojnkZES84813V4+O7rTtWstJ0TSZI7W1vpLcyYkMiqx6BsggH9E/TWuv6HLJcaLp801wlzLJbxu86IUWQlQSwU9ge+PKuLXnCdxo38Gi8sUtJn1S9WK7uI0QtI0jzRnBHfIUKCP9U106DQ4tc9nmn6RqDXMEctlAshhblyKVVTgHyORR2BaK53q3FuqaN7X9L0O/MA0HVbc+7SbMMswH0S2evUDp/ripvCXs10jhfWF1KwvdWmnVGTbc3XMTB+GK1Pt70S6veGLPWdIgeXV9Eu47uARqWYjcAwAHfrtb/s0Vr2B+jju6k9qWs6c09rb8L6JaCS9uXX/wCKQMLvz06tjH+oasPDPtE4V4m1A2OjavFPd4LCJkaMsB327gM/dXFf4ka5qfsU1bUUtZ21zVdSOpXNsUKyPGrMNoU9SclnA7nPTyqeCeNuN+DG4Z4WvtFXRzvvbie2ECog2/NgjuBggefi7d6y1UQuvtE9q2g6bo2tWWi67CvEEEbLCEiLgSA9slShPethpHtE0nSuCOHL7i7Vo47/AFCzSY/NkvISoy2xB0H3AVxS236H7Odf4Q1Pg7Up+IZJ3K3UdnzEPUYk39+mDjGQc9+prb3v5Z0uTgh1tL/ToF0OON7+y0sXN1zMN8z4h4fLp0+kfuaq3C50P2l+1bTtH4Ii1Lhq/tbq9v8AK2ZKMy+EqHJHkVDDo2OpHQ04L9oenWHBKanxbxbaahJLctGsyWxiOQqkxhAoLbc9Wx5jrXKbTQ9S/wDZ/wBYt5NLvBfDXNyRPbtzQu2LJAxnHQ9unSrv7QdNl0PjzhTiefQp9U0C2sxBNb20AkMEviPM2ds+Jep8175xSy3A6Ta8f8MXXDl1rtvq0UmmWpVZ5VVsxkkABkxuGSR5Vg0X2k8Ja3rEel6ZrMM97L+bTY6hzjOAxABOPLNcO1PR9S1jSvaLxDpmiXumaRfx28NtYtAUkmcTxEyCMDy2sSR5uepwatPEfDa2dx7IpdM0kxSwzwC6eC3IKD5onmED1LHr6n41NVA6Pq3tL4Q0nWJNL1DWoYryNgki7HZUY+TMAVB9cnp51s+NdWm0rgrWNW05o2mtrOS4hYjcpIUkH4ivmt9F1PQ7biLh3WoeKJ7m5ui6xafao8F+CQQ5kZSc+fnj4HNdx1jSrmy9ht3pfu8/vUWjNDyCwlkDCPG3KjDEdugo4pWB50D2jadaez7Qtc4w1C3tLjUIycKh8ZDEHai5OAMZPx+Nangn2hHX/aTxKkerxTcLWlklxbsyLGsfRN7FiA3Qls7j0rnttp97oPyc8RatoV7qWkWdg9vPapbl3gl3yEOUPY+NSM4+j9lY7fSNR4r1f2iSaFoN7pEeo2CNawTQGHmbZI2YeQBcKxxn9L76uqgdw0D2j8J8QaounaVrEM14+dkbI6b8d9pYAH7BXm49pnB9vrTaVNrlut4snJYFW2K/1S+No/GuJcK2FxrGt8G2vuvFkt3pc0bOt1bx28FiEKlgH2ZKnb2OCeg7mq7xFBr9zw7q+mTadqdtOuomQ6VZaSFtUUYHMMgG5jnoOpz0OSKaiuLn0r7UOJ5uD+CdQ1m1t0uLiHYsaPnbuZgoJx5DOcVRuEeLeOffNLvNXTSdZ0C+j5k8+l9WsQRnx/ZnqOvY9cird7RBq59nMv5G0611O7EUZls7uEyiZMDcNuRlh3Hn06dcVxLh7TVvvaFw5c8B8Na7oTpKDqgudwgVMguoLE5XAYYOM9ABUik0DpnA3th0ziHivU9KuZreKI3Cw6WyRybrpSWyWyMDsvfHerEvtR4MbWPyYNetveuZyuzcvdnGOZjb9+cVzeCwu9G45480aTR70S8ReHTL+G3zBCWSTBZ/0QC4yRnGDVTCSv7M14FXgnUf40e87feDaAIG5ueZzP1fDntjrnFXVTB3nXPaRwnoeqXWnarq8dve223mRGNyRuAIxhevRgelfms+0vhHRtVfTdR1qGK7QgOgR2CE+TMAQD9p6Vz/AIC4ami9tutNrVkboW2lW0aXU0JZGlWGBWZWIxno3br3qi3+kalodzxZo2sxcTzS3908qLp9okkOoKxypZ2UkHrnpnBz0yKKKFz6ohljmiSWF1kidQyuhyGB7EHzFcg/hTf5uLX/AHlF/wAuSuhcAafLpPBejWNxHNFLBbKhjmcO6f6pIABI7dB5Vz3+FN/m4tf95Rf8uSsY/wAinygMZGe3nXTdP4h4Xj0K1068eO8S05iwNdaYXdVZy30hKPXOPKuY12XRdNgvuHeH9QsNB0uC7jBitxd3LnmuzybGKjowLKVG49+nat8jE425BdivbPSrZY/yK3/q1/dVVlDCVw4wwY5HoatVj/Irf+rX91JA+5KUrV6Xq6Xt5qlq8Zgm0+YRuGYHcpUMrj4EH+41zGRtKVoeHeIDrRgdLUQwT2/vMbNMpcrzGVfB3wQA2e3XFRb3im4S91CPTtGub+305gl1LHKikNtDEIhOXIBHp8M1bAtFK0Fpxdo11rI0yO8iFw0Mcqh3VdxcnCAE53jGSuMjIrZ2uq6fd3c1ra31rPcw/nIY5lZ0+1QcioCZSoC61pbRTSrqVkY4UEkjidcIp7Mxz0B9TUm0u7e9tluLKeK5gcZSSJwyt9hHSgM1Kr8XFFueEptdmheJYVfmW5OXWRGKmP7dwx94qJp/GVve8QNpiizQwRhrl2vUyj7SzIqjq+3GGPTH3VbAtdK0OqcW6Lp+lLqJ1C1ntmlWFWgnRtzFgDg5x0zk+gBNTJNe0iKC3ml1WwSG4JEMjXCBZCDg7Tnr19KgNlSotzqVjazJFc3ttDK+3akkqqzbiQuAT5kED1xX5BqdhcXstnb3trLdw/nIElVnT7VByKAl0rFeXMNnaT3Vy4jghRpJHPZVAyT+AqrfxwuIrSLUrvQb230aQri5aRC6KxADvGDkL1HmSPSlgW6lQG1rSkuktm1KyW5dzGsRnTezA4KgZySD5VPoBSlKAUpSgFKUoBSlKAVx7+FN/m4tf95Rf8uSuw1x7+FN/m4tf95Rf8uSrHegfJ9dq4Dlng4d4f038oaio1QSukkFrDKlrtZx0dhuU9z07bs+dcVqbbarqNraSWttf3cNtJnfDHMyo2e+VBwa6GrmJN4u0qHSNXENrPJPbywRXEbyABsSIGwcdMjPlWzsf5Fb/wBWv7qqbMzEFmJIGOp8qtlj/Irf+rX91Rg+5KovHWk6nLqYbR43MerW/wCTb1k/+Eu4ESkeeEMo+8VeqVzp2Mit2mnPa8aiSGBksY9Kjt0cDwgrI3h/DFV3iS2lOqapI2h6pHqjEe5ajpBK81do2iQ7sZByDvGMDpXRqVbg50+m6qmps97ZO99f6LFam8hjUrFdjfuZiPo9XB3AY6Vj0uxluDwxaWWgXWl3emyo9zcyRKiqiqQ6BwfHvPpnvk10mlLg5b/Fq6tuAeHY7azuIpra5S5vI4Ikac9H8W1wQxVmBwQe3TsKsns/sJbVtWnkj1BI7mdXVr1I4mkIUAsI0UBPIdepxmrdSlwUC90O/bjBrCKBjoF3dR6rcSfoh0XBiPrudYn/ABrJqehtO/Ge7TZJkuhDyRFtjeQcpQ2xiMZznv0J6HvV7pS4OVfknUrzR9cP5MmuCJbOWGWe1S3uLgRyBnUqCFOFGAcDOcda2WEg1zUr684avr2zv7eNLZBaqzRBQQ8TKT4Mnxehz1NdDpS4Oe8IcNXdrqlnJqtvunt9HjhjlcbxC5mkbYCe5VSg+6tRwxoN/Dc6DbXUGsC5sJi0pMMEcEfRgziUJucNntkk569q6zSlwVTVOEpLrR9StF1jU5nuraSFVuZgyBiOhICjzrEvEetS2cNtBw5exauxVJOcoFtH1G5+YG8SgZIA6mrhSlwchijS507jCwi4duby+vNSukhuUhVkLbiFJcnwbD16/aPOusWUckNlBHO/MlSNVd/rMB1NebKytrETC1iWMTStPJj9J2OWb76kUbApSlQClKUApSlAKUpQCuQ/woonk9m0TIMiO/iZvgNrj95FderS8ZcP2/FHDV9pF30S4TCvjOxu6t9xxVTswfBFK33GPCmq8JatLYavbOhU+CUA7JF8ip860NdO8xFW2x/kVv8A1a/uqpVbbH+RW/8AVr+6pIH3JSlaTiLUp7KNkSHwOMCXd2P2V5uLxVPCUnWqbl9TdSpyqyUI7zd0qu8NanPcIlsYdyxjDS7uw8q2+p3MtpbGWKDnbfpDdjArThtI0cRhu1Rvq8cn9eGdu4yqUJU6mze8l0qnaVrdz79KBEZjO2Qm7G2rc7OISyoDJjO3Pn6ZrHR+k6OkKbqUr5dz/d2Za+HnQkoy4nulUy8124GpxyGIx8nKmMnvnvVrsJpLi2WSaHlM3ULnPSscDpahjak6VK949z/VnlZ55FrYWdGKlLiSKVqZ+ff3EtnMqQRKdxw5LSL5EdOgzj8Kz2FxcyTyQzRxskQwZkY9W9MY/wDGvTOcn0qBqNzcxSxxQxxhJfCJnYgK3kMYrBDz9PmhtIFWeNzu8TkMo/Sbsemf30BtqUpQClKUApSlAKUpQClKUApSlAKUpQClKUBF1LTrLU7cwajaQXUJ/QmjDj8DVYf2Y8FuxZuHLHJ6nCkf+NXGlLgpvyX8Ff6OWP4H/Gs6+zrhJVCroVoFAwAN3T++rXSrdgVC1TT11FI45HKorbiB51NrQcTa++lywWtpAk13MjyfOScuONFxudm8h1Faa1OFWDhUV4vebaMZymlT3mw0zTI9PkmMLHlyY8J8sVKuoufbSRBtu9SufStHwzxBJqc8lreQRw3SxrMjQycyOWM9mVvt6VP4k1RtG0W4vo7Y3TxFAsIfaXLMFAz99Y0aFKFPZU1aOeXiWsqkan+TeYbPQoLS4hmgdg8ec5/SzW4qt2vF9jcXjxBZeXyYJIiqM8kjSc3KcsDIK8o59OucYqbdawWttOl0uKO6N9KYk5khiC4R3OfCSCNhGMZz3xTD4SlhYuFGOqu4wnUlUd5u5jm4egmeaSSRzLI24MP0a3MSlI1UnJAxn1rRx8QtJFGiWTtfmSWOS1Eg3LywSxB7EHwAdvprnHWoh4mu1t7+R7KxX3EBpz76zKuRnaCIjlx2K48175rGhgqOHk5Uo2b39/7cs6s5pKTvY3s9k015zue8a7AhVOhPUnv/AOu1e7C1a1SVXlMpdy+4jB649KhT6tJaafp1xfWvJluWVJYhJu5JKlj1x4sYx2rAnFmkukbJLcMZGRUQWsu996sykLtyQQjnOMeE11Gs2t9bNcxIiyGMq4fcBk9KxQ2TRXqz+8SOoQpsfqepBzn7v76hLxRpDTQRi6O6YR7SYnABf6AY4wpPbBwe3rX5LxFbNo0GoWUctwlzJHFbq6NFzGcgKfEOi9c7sHoDjNAbulaK412TTY3k1y2is4kJJlSVpVZQhYlcICSMHIIHwzSfiiwSOflc95YlOVaCRAH2bwjMVwrFcHB69R6ipYG9pWptOIdOub5LJJz70xKBdjbS4XcVDYwSB5Z8j6GttQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKqvGmmO8sGqQ2wu1gjeG5tT150DY3AfEYBHrVqpUaurGylVdKakipcG6cz3B1Z7X3KAwi3s7XGDHCDnxDyJPl5CrDq9lBqFhJb3bMkJKuzAgY2sGHU/FRUytVxTYzajodxbWyq8jFG5bHAkCurFCfRgCv30irZFrVXVm5M1VnoGi3mpXmraPfEXM0qO01pMjrG6q4OAQQNwkbIIOSc9+tbNtChWxs7a2uLm3NrKZo5oypcuwcMTuUgk8xienc1qdRtry9n50WjXNpCWjS45NwkVzPGokwoKPgKrFD9MEjcPtg2ei660xuLqa+EkPI92T3w4CidyyyANh2ERQEnOeuCT1rI1FituHbW2guUhmuhJPC0TT8zMq7ixZ1bHRiWznt4V6dBX5ZcPQ2thDZG5uJbWGSOWOMrEgUo24DCIuRkAnPmKrc+j69b2kS2z30xuLce+B7wsVkEifR8akeAv0Rlzgdc98un2/EkFgkE8F3LK/JQSC4T5pUuZCS2ZCesRTsWJxgmlgWK508T6dCms3Yd45jJzVxGuWLBVAOegDhR5nArymgWMeqWt0JJfeIUjVFLjBEayIDjHpO2fu++iwRXOq3J05Lm6nv8AlZviuoLJHzFuYCWRQ55eFD4GFPTAGQasOmaDdWvEdvczpfzW8DXEULtfM2yNjGyFgX8QyJB1yfo5HQEAevyNw4mqlhqMS3UBWSWLnRbvmzuy2RuXHngjoOtb19FtZNDt9MJlEECRrFIrYdCmNjA+owDVZveGL67sdcMskhZ5rqW0thywGZ42RSW7jO49CR8ahy6bxS2rXUiC7W2k5iyBbr6UfNTaIyZMKxjDgEKmCepJ8VUFnu+GLe9t5Yr+8vrlpCd0kjqCAUKYAChQME9h375rLPw9BLc3ci3V3FHdsXngjcBJHMfL3Hpn6IHTOOgOKq+raVxBIIBpf5SggjR+THLdcySOTdkF25oBX0DGTAzkdcV0Bc7Ru7461AaOz4XsLPVRfwGQSB2kCYXG4rgnO3cfM4zjJzit7SlQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQCtNxjeXdhw7c3GnOkd2GjWNnXcoLSKvUffW5rFc28N1CYriNZIiQSrDIyCCP7wDQFItuNp21i6tTatJcBIIhaLk8mc88yhmVWJGIhg4Oeh7HNS7njyzs2Rby0ngO3myB+hij5akMwx5u3LA9QasN1oumXb3D3NjbyPcbDKzIMuUztJPqMnH21+to+msmxrG2KctItvLGNiHci/YD1Aq5A0+oXep3Ou6ZZ211+ThLYS3UqmNZQHVogFOcdBvPYiomlcZyagsAXTpsFY1mlQMVSR0VwR4cFPEvUsD17GrHqWjabqksUmo2VvdPECEMqBsA4yOvkcD8K/ZdI06W9ju5LK3a5jAVZCgyAOg/DJx6UyBS9N4rv47K8kvIQ8bScqO4jKqyP7os2Nm3BGd3U56kDGKu1xfLbPBG8N1K0gHiihLgfrEdBXj8jadyTF7lByy2/bs6btnLz9uzw/ZU8DAwKMFX4s1DU7D35rK5gjVNNnuYw0G4q8ZXqTu69CcdOnnmtVqHEep2dndauJVkhS5u7VbIxjA5KSkNu+lkmLJ64w3wzV2ubO3ug4uIUkDxtC24ZyjY3L9hwKjjR9OGoPfe5W/vbgq0uwbiCMH+7p9lLgrMl/q0OoW2lNqiyPdtCwu+QgaIOk7EKPon8yAMg/SPep2h6lqE+qWUF1cRSwtDeK22LaXeG4WMOTnzB7ADBz36Y2ScO6PHZyWqabarbyMHZBGMEjsfu8vSpltYWlqIBbW0UQgRoogigbFJBIHwJUfhS4JNKUqAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBWk4k15dIEcUUazXcqs6ozhFRV7u7HsoyK3dVPjHhn8pym8tYYppmga2uIXYpzojg4DDsQRkH7axne2R0YZU3USq7v398t5I4V4jOqcu2vEhS8MQlWSCQPFOucFkPwPTB6itzq1/Fpmny3c6uypgBEGWdiQFUfEkgffVU4K4YazNndXdolpHaRMlpa7+Y0W85dmbp4j2wOgq16rYRanYS2lwXVHwQyHDKwIKsD6ggH7qQba94yxkaUarVLd+97/AL3mrXiRLV3TXLV9McKroXYSLICwXAK+YZlBGP0h3zWZ+J9GSKKR75AsgYjKtlQpwxYYyoB75xjzrW6vw3eXcccrajLc3yzQbJGVUWGNJkdiqgY3HaCc99oHSkvC9w93IRqMwW5hlS6lCJukLlQQBjC4VcA+WOuazyOU22p6s9vdwWdjZve3c0bTBVcIqoCBuLH1JAA8/uqG3FlgLIyNujuwjO1rL0ZNrMrBiMgYZGGe3T4ipV3ou6W1n0+7lsri2hNurBQ6tGceFlPf6Iwe4+81FHC1sLG9thcTt73CIpJHwWJ5kkhftjJaRvhTIEuTiLSYzPzL2NeQcOSDj6QTocYOGIBxnBPWsA4q0k3UMKzttkikm5hjYKgQgMGJHhPU9D2x17jMS34OtLeZmil2x8xXRREgYYmSXBbGWGUA+zvk4NSJ+Glked4r24gaYz7igGcShcgHyIKKQftpkCZZ65a31/Bb2hMgkilkLEFShQxgqVIBB+cB6+X21qtM4ztLq6eKeNYEETzcxZlkwFcJhgOqsSwwMdevnUvQ+G4tKvjdLcNJIwkyBGqL4xEDgDtjkj8T3qF/E5SF36jPmKN44CkaLtDOrENgZYeEDBOME+tMgbM8TaOvJ3XyKZeqhlYEDdtJbp4cMMHOMHvWfTNXtr+WSFGC3CPKrRZyQElaPcfTJU4z8fQ1p4+DbdNO1C1N1IRewPA7BFXaGYsSoAwOrdvhWw0nQINLvrm4tZHX3p5JLiPA2yO8jOGP+sNxXPmMZ7CmQI+p8X6VZ2NzPFMbl4cARxKSXJbaNpxgjJwWGQPt6VJuNZlUWMdpYvc3d1CZ+UHCLGo25LM2D3YADGT6DBqCnCUQtYrZ76d7e3jWG2Qqo5UYdHwTjxH5tRk+Q9etbXU9Ne6uYLq1u5LS6hRow6qrhlYgkMp79VBHbH3mmQMMPENiWt4rp2tLubAMEykNGSSoDEdBkggHOG8s14j4q0WSQIl/GWJUDwt5nAOcds9CewPQnNYBwwBI2NRvGjmZHuVk2s0zI2QdxHhz2IHTAAGK9ScMwPY+68+QL7n7nuwM7c5z9tMge24s0NXdWv0BQkNlGwMEqxzjsCME9h54rPPxDpUElwk17GhtwTISDtGCAcHGDgkZAzjzqFJwrbvZvbm4lCtbXVrnAzidwzH7RjpUafgqzlmuGMxCSs8gAhTcrO25vHjJGSenx8+lMgbZOIdKeYRe+Irld/jUqANu7BJGAdvXB6464xUrTdStNSjd7KbmBDtYFSpU9xkEA9R1HrWuuOHlmlv098mSyvi7T26qviZo9h8RGQMYOPX4dKzaBokejicrIskkxXcywpGMLnHRQM9z/wD5TIG2pSlQClKUApSlAKUpQClKUArFc3ENrC01zKkUS93dgAPvrLVMvbNNb4u1KG9Cyiwt4za28nVCzgkyEeZyAPhWMnY3UaSqNuTskrv+v7ZbLK8tr6ETWdxFPEf042DD8RWeuZaFJHZ3fDs1qnI1OeVrLUrdU2B2EZYsVHTIIBBHkavPE2oS6Zos91bhOaGRFaT6KbnC7m+Azk/ZSEtYzxNDYysnk/O3/DaUqoXer3+gXi2lxcrq5mEZTeEheNnlSMBioxtO/I6Z8LdT5ep+MJIZJoTpcr3NtuNykTNIFC/UZUO4kfW2/Eis7HMW2lVOPi2Zt7fksmNmuEgKTbi7QyiM5ULkZzkY3HoemcZlvxIRotpex2oea4nNusIkOA4LA9l3H6B6BN3qBg4WBYaVW+Gtfutav5GFtFFYG1hnjJkJkDMzggjbjuh8/L49NPHq2s3L3sDalHBLZi5mMsduoWUI+FXDZwoHfrnqOopYF8pVQ13V9TbQ4b6xZrWZbc3Jt0SOR5BtU5IY9IwSQ2Bu7Y+Pm01m+nu7a+W7DWk197kLRY127dp8YbG7JI3dTjae3nSwLjSqnd8TGHjKOwEn+RqVtZF5Z/POpYNu9BhFx5mT4VptK4t1K80zRYeZH+UjcQtfEoBmB2jwVHbLCaMZ+D47UsDotKVo+L+I4+GNNF/c2V5c2wOJGtlVuX6FgSOnxqA3lK1+gan+WNLhvhaXNokw3JHcAB9vkSATjNbCgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBWm1zQIdUnhuo557O+iG1Lm3ID7T3U5yCPgRW5pUavvMoTlB60WaLSOHIrG+a+uru41C+27FmuCMovmFAAAz9lbuWNJYnjlRXjcFWVhkMD3BFeqUSS3FnUlUd5M0c/CujvYNZQ2MFvbvNHNIsUagSFGDAN06jpjHoakNw9o7QW8LaZZmK3JaJTEMIScnH2nqfWtpSrcwIMmkafLCYZLKBojv8JQEeM7n/ABPU/GvL6LpkmnR2D2FsbONtyQ8sbVPU5A8j1PX4mthSgIVrpVhaSxSWtnBDJFHyUZEAKpnO0fDPXFY7zQtKvQou9PtZgrtKN8YPib6R+/Az61saUBrr3QtKvv5Zp9rP4zJ85GG8RABP3gDPrgV7XSNPXUvygLK3F9jHPCDf2x3+zp9lTqUBHNlbGF4jBGY3k5rLt6F927d9uQDmscel2Ee3l2kC7UjjGEHRYzuQfYp6j0qZSgFfjKGUqwBU9CD51+0oBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFc29pLPa67aSxXDpJcQ8tJBKyC0IYfOkDoV8WDnvgCuk1X9b4Xt9X1Brie6uUjkiEE0EZAWVAScE4yO5zgjNYVIuSsjrwVaFGqpz3Z/v74PIqHBjPccaNFPePcXFqJWe75rFbvOAAq/RAXPUDscVf9fubiy0me6tEV5IMSshGdyAguB8du7HxxWs03hG003Ura4tLi5S3tt/JtSwMaFhg4J64+GcVY2AZSGAIPQg+dKcXFZmWPrwr1FKnut4fvPktyyRXLLW5LzXxFFIhsHeSKHbHnmGNVLtvz23MV6A/RNaa94o1exXUpZktmMcNxLBAYWVWVMlWWUMVfwjLL4WHkOlW2x0awsYrKO0tliSzVkgAJ8Abv59c486wLw5pKz3E3ualp1dXVmZkw/08KTtXd54AzWzI4iO/EaxTFbiwuY40mS2klyhVZWUEL0OSPEozjGT9pGCHi2KRrYHT7xDNHFMR4WKJISFJAJ9CSB2H4VOi4b0qK4jnW2YyIAAXldgSBgMQSQWA6bj1x51kl0HTZZLV3t/FbIsceJGA2qcqGAOGAPUbs4NMgbOlKVAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUArFd3MFnbSXF3NHDBGNzySMFVR6kntWWvnH248Uz6pxJLpEEpGn2JClVPR5MdSfs7Y+BrVWqqlHWZ6eidGT0liFRi7Le3yR1K+9rHCdrLy0v5LjHdoYXIH3kDP3VG+WHhX+euv2Br5qpXn9uqckfcr0OwKWcpdV5H0r8sPCv8APXX7A0+WHhX+euv2Br5qpTttTuHsfgfil1XkfSvyw8K/z11+wNPlh4V/nrr9ga4NdcL6lbcMW2vyLF+T7htiFXy2ckdRjp2NaOq8ZVW9I10vRXRta7pzk7OzzW9b1uPpX5YeFf566/YGnyw8K/z11+wNfNVZ7OzuL2Qx2sTyuACQo9WCj/8Asyj76ixtR8EZy9EdHxV5Skl4ryPo75YeFf566/YGnyw8K/z11+wNfNVKdtqdxfY/A/FLqvI+lflh4V/nrr9ga/R7YOFc/nrof/QavmmlO21O4ex+B+KXVeR9e8O8W6HxESukahFPKo3NFgq4HrtIBre18WWF5cafeQ3VlM8NxEwZHQ4INfWXA/EK8QcI2WrTFUkaM88AYCupIb7umfsNdeGxG1ye8+X09oH1ZarTleDyz3pm11bVLHSLU3GpXMdvD23Oe59APM/ZVTl9qPDKSFVuZ5AP0lhbB/EVxbjLiK54k1qa7nduQCVgj8kTy6ep860VfbYb0epumnXk9Z8FwPzPE6eqa7VFK3efQfyqcNfz1x+xNPlU4a/nrj9ia43wdwzdcSagIovm7VCDNO30UH+PwrzxZw9LoV4QkguLJyeTcJ2bBwQfQj0q+qMBtdjrvW8V5E9a47ZbbVWr4fk7N8qnDX89cfsTT5VOGv564/YmvnyvUaPJIqRqzuxwqqMkn0Fb/Z/Cri+q8jR69xPJdH5n0D8qnDX89cfsTT5VOGv564/Ymvn3Y2/Zg7s4x55rJc201rJsuI2jfr0b4Ej94NT2fwl7az6ryL69xVr2XR+Z375VOGv564/YmnyqcNfz1x+xNfPlZGt5UjZ3jZVXbkkY+kCV/EAmj9H8Kt7fVeRPXuKfBdH5nf8A5VOGv564/YmnyqcNfz1x+xNfPlKvs9hecuq8h6+xPJdPyfQsftS4ZdwrXE6A/pNC2B+Aq16Pq+n6zbc/TLqK5iBwSh6g+hHcffXyfW34V1664d1iG9tWOAcSx56SJ5g1oxPo9T1G6Enrd/E34fT1TXSrJW7j6npWO3mS4t45om3RyKHUjzB7Vkr5I+pFfJvtP02TS+O9XilyebO1whPmsh3f3ZI+6vrKqh7QeBbHjG1j50htr6EERXKruIB/RYeY/d+OefE0nVhZbz3fR/ScNHYrXq/xkrPu7z5UpXRbn2O8VxSFY4rOZfJkuAAfxArF8kXF39Dtv7SteXsKnws/R1prASV1Wj1Of0roHyRcXf0O2/tK0+SLi7+h239pWmwqfCy+ucB86PVGu0vUX1rhVOG5b4WskEpmthIwWKXPdGPkc5IJ6V44v4Hv+F9Ns728uLaWK5YIBE24htuSPs6d62nyRcXf0O2/tK17f2UcZOio8ELIvZTdKQPuzWzZzatKLueesbhKdXWo4mKg221k7t7875Fe0DU7G00maCd3hn5rSMVtkmFwhTAjO4jAByfTrnuBVnm4r0BZIntYpFKuuCLcIyxia3cIcMQcCN+wAyeg86jfJFxd/Q7b+0rT5IuLv6Hbf2lasVWirKP2Ndeeiq89eddb7/yX/v3Of0roHyRcXf0O2/tK0+SLi7+h239pWtWwqfCz1PXOA+dHqjn9K6B8kXF39Dtv7StPki4u/olt/aVpsKnwseucB86PVHP6+mPZJo80XsxhgmOx71ZJFz+ir5C/3YP31UuDPYzMl4lzxRNCYo2DLawMWEn6zdMD4Dv6125EWNFRFCoowFAwAPSu7B0JU3ryPjPSjTVDGU44XDvWSd2/tZdT5GuoJLW5lgnUpLExR1PkQcEVjrvvH/s6h4gne/02RLbUCPGGHglPqfQ/HrXO39lvEysQLe3ceonXB/Gv0rC6Xw1aCc5KL4pn4tidFYilNxjFyXBoy8F65a3ulJw1qjx2sDzK6ThcBsHJV8evbNZuPdZ0qwsJOHOH4o3gEpknnbxZfPZT8O2ah/JdxP8A0WH9uv8AjT5LuJ/6LD+3X/GtH+jttrtVa97XyvzN3+7sdlsnfde2duRreCuU8tzC8qW8jGNhOyxkBQTuXxsOhyO3pjsa3F3xLpVvdF7ONAYrreFjgyWAmLF1fdgZXp9HPXHasPyXcT/0WH9uv+NPku4n/osP7df8azqzwdWo5yqq3K6MKcMXTgoRpPxsyBp+rWEN7qLS3Eu6WaOSO693V2KLnchUnpnI8/0evepz8TaYssbC3Mim6EsytECXj3SEjr3+kvTzxX78l3E/9Fh/br/jT5LuJ/6LD+3X/Gk5YGbu6q6oRhjYqypvozzPr2lSEhHEMqhC1xHZBueBuyhVnP1h1J6469hWJNfsZTHJdyzSSskSZaBW5DLC8ZYZPi8RVvL+6s/yXcT/ANFh/br/AI0+S7if+iw/t1/xqXwNrbVdUXVxvy30Zhm4h09eTFEhdNxFzI0Cgzjlhc46469fuB71reKNRsb+3sBZZ5satzPmhGozjAHUnpg+ePQDrW4+S7if+iw/t1/xp8l3E/8ARYf26/41sp1cDTkpKqrrvRhOnjJxcXTefcyj16ijeWVI41LO5Cqo7knsKu6ey3idmANvbqPUzr0/Cr/wD7NotDuY9Q1aVLm/TrHGg+biPrn9I/cMf31lidL4ajByjJSfBIxw+isRVmoyi0ubLzodm2n6NY2bHc1vAkRPqQoFTaUr4Nu7uz7dJRVkKE1+E4rDJJioUyl68mQVGBklPgGR6+Vevd5T+mtAZuYPWnMHrWD3aX66092l+utAZ+YPWnMHrWD3aX66092l+utAZ+YPWnMHrWD3aX66092l+utAZ+YPWnMHrWD3aX66092l+utAZ+YPWnMHrWD3aX66092l+utAZ+YPWnMHrWD3aX66092l+utAZ+YPWnMHrWD3aX66092l+utAZ+YPWnMHrWD3aX66092l+utAZ+YPWnMHrWD3aX66092l+utAZ+YPWnMHrWD3aX66092l+utAZ+YPWnMHrWD3aX66092l+utAZ+YPWgkFYPdpfrrX77tJ9daAkB69A5qGyyx9SMj1FZIpc0BJpXlTmvVAYpGwKwRpzpDn6A7/ABr1cN4ay2q7YF9T1oDKAAAAMAUpSgFKUoBSlKAUpSgFKUoBSlCcDJ7UApVI1njGFNRSxhu4YJZATGjMOZIB5gHyqqcF+0G71biDUrSa3uYPcJdj8x94cZI9Oh6Zrw56eoKUtWLcY2vLK1m7XV3dq/I7FgptK7zfA7FSo6XUTLG6PvWT6JUZqQOor2YzjP8Aizkaa3ilKVmQUpSgFKUoBSlKAVG1Oae3sZprS395nRcrFu27vvqTUbU4J7mwmhtbg20zrhZQu4r91AaXTuKE1W9trfTbWWQkbrov4Bbjtg9Opz5VubmLb84nT6w/8a09hwvFpl7a3Gm3MsJUbbkN4hcD1Oexz51YiMgg9jQEeF8is+ahQeFip8jipWaAj3P0akwfmI/1R+6o112qTB+Yj/VH7qA90pSgFKUoBSlKAUpSgFKUoBUPWJDFpdy47hDiplY7mFbiCSJ/ouMGtVeMp05RhvadjKDSkmzius8LafqfEVhrFwZferNQECthWx1GfsJNful6rNqmnanLaWT21zDLLCizDHMZR0b7CcVH9o3CuqXt/ZJb6tLpyW7FjtBxJ2wQQe9YNV4hkTXotDTTrt4bmIg30fRUJB+H99fl06FWUI06j1pxTyd1qKLzWdlK/cfSxavrRVk+PNv+jbeye/4izapxExS6eZvAMDwY6ZA6d812aubeyzhWfSYYpJ57ieKLcY3uTl2z/wCArpNfe6EhNUZzkrKUm0krK3cuC7jxcc466it6Wfj4ilKV7JxClKUApSlAKUpQClKUApSlAQU/PyfrGpNRk/PyfrGpNAYLrtUmD8xH+qP3VGuu1SYPzEf6o/dQHulQ9auZrLRr+6tIDc3EFvJLHCO8jKpIX7yMVRIOLLq2uLVNP1az4l95giLhWSJYJnniiXxRg7UbmuQrBm+aPU9cAdHpVPvuMZbTTdOmktrKG4up7i3drq85VvE0O8N86U65MZx4RkZPTGK1i+0qOaytjbWCflC4PhspbkJIoMKSKWG0kA8xRnHxoDodKqHFXGY4avdOtr+zBa6j5zyrKeXDHH1uHLFeyKVYebZ8qrGqe0y/FjeiLTrayuIYkfMt9HuQmOOQ70IyFw5Xdg46HGD0A6tSuZze01lvXtGsrQBZXtzcwXwkV2CqQYhsJYeLBYgKGVlJ6dY7e0jULC71G3urOwnaKdxEHvkgKxrBFIA5ZQNzczI7DAfyXqB1SlV3ijiZdG023u7aCO8E85tEUTBRzyGCISAQC0iiP4FqrOne078pXtglppWy2umjCyXV0sDMGmaFtqsPEVZGyAeo246sBQHSKVRtf9oEOl3N/aRwWst/bXLwLBLeJCWVbUT8wlvork7cnp558qi6H7Rm1bVNPtYtPt1juGCO7XgRslpFJjR1UyAGPrj/AFsZ29QL/cW8VzHsnjWRPRhkVEi0bTonDx2cKsOoO2qRqntKax1u80z8nW7yxTiFGF6NoGWG+Rtu2P6OME53MoIGc1mj9oNwujS6vdaXBHp8TRRM0V6JWMklssqhdq7WBeSONSG6ls9K1yo05vWlFN+BkpySsmdApXNtN9oU5uLm2urOBZred1kSe9VZJP8AKZYdluOWBKV5XY4PiUZJOaw23tSkdLOSfTLKOOeSNSy6mkhUOEI8CguWG/tjHY5GemwxOn0rn+ucXX+l63qw5DTJb3EVtb2xdY1lDQq/MLFScFpCvT+a+3PscdznUpNOltLC2uYWCSma/wBgkJnaICDKDmEBQxB29WUdc5oC+0rkmj+1dk4U0ebULeK41WaKJZl5wjJJso7gzMoXwx7nwTjCjJ64xW1sONNSn1OWCKGyvJZb5rWFYbwG3VQkRJ5gj3MRlj26HK+WaA6NSqBZe0J7nU9PtWs7KI3FxBavG9788Gkh5hZI9njQfR3ZGSG6DFe14m1mz1jWRcWkd5bQ3MixxRS4aOGKBJG2ry8s7FxgFsZOMgDJAvlK523tAvWtrx7TTtLvJLWze/ka21IvFsVFYoHEf5zxfRx2KnPXFSNZ4u1O34e1O5jtbK2vtO1S1sp985aHlyNAzPuKAgbJupI6YJ646gXylcxm471Oxske/to3Et7OsEtvOMvHHfLBtYGPAGHUZBJIB6qTmlx7QNSmfS4ltbCynnubASQ++B5nSfDERoyDcNp27sjqGx9HJA6dSo9jcSXMG+a0ntGzjlzFC32+BmH99SKAgp+fk/WNSajJ+fk/WNSaAwXXapMH5iP9UfuqNddqkwfmI/1R+6gPdY0t4U3bIY13tvbCgZb1Px+NZKrfHOlXOr2umw2lva3HLvUmkS6TfFtCP9IZ6jJHrg4ODigLBJBDLGY5Io3jJ3bWUEZznOPt61hh9zuZZpIlglkR+VIwAJDL+iT6jP8AfXOZPZreSSENf2QhMMsfgtyhQSQSxcpOuRGpkBAJPRQOmMnPqPA0seuW40yGG3tbm9Lzz28SpttCqmS3kGRkM0cargHAz27kDo0kUcoxIiOMFfEM9D3FeWtoGkLtDGXK7CxUZK98Z9K53rvBN/rnEmuT/wCSWkE8kLQ3ZjLXGFhClUYHopJIYEds98gj3L7NIZLhoS9n+TpeXvxCRNEqwiNoYmBAWN/Ex+Lv3LZAF8WG05yQLbIGhTcnzOFQNkeE4xnocgHPr3rHZNp+qWcN7bJBcW86rJHJy/pAfRPUeWenpVA+Tm/a7tr651CzvLtSktzFPATBdyA3Gd657ATrt74MS/dF0/2V3FrY+6SX9rMpsjbc0xyB0Jtfd9i4b83+ng56k9M4YAdFuX0zRLKPnJFbWr3KgYj8POlk6E4HQtI/c+bfGv2a90uK+ht5JLcXSSCKNNoLI7qzAD0yFY/dVPvuBrv+MV3e6ZJp1tZXIiiaFYCCEV4Cxz1wQkJCgYXLA4BUlper8Cw6jxa2qTR2ElrNLBNMklvmRjEjrt3dip3KcH6o7+QFq1F7Cztri/1D3eKGGJnmnlAASMAkkk+QGf76/A9hHqNvZqsK3awtJEgTBWMEKcHHQZZRj41zK89lF5e21zaXOq2ptprRrXf7tl0U2pgC9/EqttkAJ7gYxjJsnEPBR1pbaRzZW9zb6a9pDy4vDBKXjYSR/VC8vpjrQFpvPcIZES6jhDXsghAZAeawUsAenXop7+lSjDEVKmNCpIJG0YJGMH+4fhXLb32cX0NhqLQXME8/Lm5bBWE1yWinAMhLbS2Zh1x6nIzgS7j2eXctza3EU2lWjxXSTcu3tCIo1UxZKISQHbldTjIyMMMEsB0X3eHmI/Jj3oSVbaMqT3IPx86wTrYWvIWZLaLmz/NBlA3SkE9P9bofjVY1/hS/1O/vQt3ZjTbqV7ho5YpC+9rNrbblXXwdVbpg9xkd6wQcETDhnSbG5ksJ7rT9QN8ge2HKwXc7AABjCvjdjqQCRQFxuo7aITXc0CsyoN7rFvcquSBgAk4y2AM9zjvWQwQuyO0MZZSWUlRkE9yPSqNZcC3MHDevaZ71ZxSahpn5NR7aEopISRefIMnMjczr+r3Pljm9nMTXb3cT2qXbSNNzhD495vPeA2e+QuUz8fTpQF8FpbBgwt4QwUICEGQoBAH2YJ/Gv2O2giCiOGJAv0QqAY8ulcv4H9ndzDpugSa3Bp0DWsMPPtI4MmZlR/FKclWcM4wceROeoAkxeze7j0/kJf2kM6Rx2wuIYGWSdArpLLKd3WVklfr5NgknsALpc8N6bc65a6tPHM93aj5kGd+UhwRnl52Z8R64+PcCtsI0Dbgihic5x1/9dBVH4a4Ek0XUdSlS9RYriO4ijlhDpMBLJvBbxbcp9FTgnHbaMqcNhwXqenoslhc6TbTqEi5cVq6wsqxyIZCobJkO8E/BAM/pUBe0toI0KJDEqHOVCAA57/jXoxRlZFMaFZPpggYbpjr69OlVG24LWDhLUNKjmiS8vTuluhGTzMNkK4yCy48JGR0J7ZrUp7OGeS6uJ5bJJ5fHbxwwkRWT742+ZBPh/N5JGMszHpnFAXmwlsNRtUmtESSDujGIgHOGyMjr5HI8/iKktbQM6O0MRdBhGKDKj0Hp2Fc/Hs5L2kkVzc28zizuIIGeInlSyRW6LKM9ipgY5HXxdK23CfCUuha5f3slxBKk5lIZEdZJOZKZPnPFtJXO0HBPfG0EigLfSlKAgp+fk/WNSajJ+fk/WNSaAwXXapMH5iP9UfuqNddqkwfmI/1R+6gKOvHk0k7RRabbSSPcS28CrfZbMd4lqTINngBMgYY3dAR3xnDL7RjGtwfybCDGzqoa7KnwSFG3Ly93cZAQP8cVbbfT9J0S1uZRHbW0LSNcTzSkDLFzIWZj6MxIz28qyQwaXfi95dvazh5OXc5iB3unk2R1I+NAUI+1aOWCOaz0pZkmnjt4A11sZmeaGLLAp0X54MCu7IAyBuFSo/aSG9736YiGxJS6RrxVdmFxNBiAMo5p3QMcZUncoALHFXVk019QnQpZvfLHHLKuFMoTceWzDvjcjbSfNTjtXu2hsrhLa7gt4T0MsMnKAZd/UkZGQTnr/fQFRt+LZ9b4bv5bVVsLgPbwrPDKs3KWcoBINyjqocthlx0HcVGb2jYeBF0+Am6YiAvehdoFwkB5/g+aOZAQBuzhh0IxV3l0yxlsLixks7c2dwGE0HLGyQN9LcOxznrWK90bTr2N0uLSFlklSaTCgcxkIK7vrdh38qApUHHd7NeagZLS0js7aK3ZOTc75Hc3csEmCUw0ZMXQ9Dgg92wuW7451CHTpbi50iO3iKsqyRXnMdX90a5XwmMDsu098HyI61efc7XEY92hxGuxByx4V6dB6DoOnwFRxLpsqRKTalZZngjVgo3yKGVlAPchUcYHkp8hQFN1T2jGwfUD7haS29vO9vFOl6xWVkSR5BgREqVEeD0K7iRu8JrA/tAuob0G4tIBDJJtgjjufJxb7DNlMoBzwSRkAbuhwM3a403R7aG4uLiy0+GIfPzSPEir4cnexI8upye3WssUGnzz3IjgtnljxbzfNjI8AOw9O21l6ehoCsWnGlxc3bRLptuYoJYIbiWO83qGluHgHL8HjAKZOdvcjuMVE4l4/m0641O1srCCSW2mktIzLc4cyram43GMKTy9oxnOc+WOtXWKKzjcWsUMSGNEIRY8AKCduOmOhBwPKvxUsrm8uG5MT3Ma8iV2j8W0gNtyR1HUHHagKxrXFNzwxpemjUrY317PCzkpMBvZChcDwKCRGXfGBkRkY861F77STNp2oS6faRoqW00tvNJPgti1a4jcKVClSu39LIOemATXQl92u1V15M6xuyhhhgrDKMPgR4lP3ivw2NoZA5tYC4j5IbljIj+pn6vw7UBS5faAYNUgsZ7K03NdC2klivTIgLcjaUxHlvz4zkKARgt1XOu0j2hX7WsjXdnZsWmgjt91yysVezSctJtjOD1bG0Y7jA25N/NtpkMtrbGGzjkDNLbxbVBBH0mQevi6kevxrxqsek2mnXFzqcNmllDEDK80a7EjTqM5HZep+FAVfT+MZl0nWryeISpbahDb2xkbaGWaOCRQWRWztM5TKg/QHfqa10PtR5mmNqf5HJ09WMbMlzufeLVrjopQArhCucg9Qcd8XL3vQ2F7YGSyZY7hYbm3IBAmlIZQy+rbwfvzWyS0tkACW8KgNvGEA64xn7cdKApsvFGqLoHE19FFpslzptwscaJdGSELyoXbLhATjex6qPw61J4e4yOravDZPZwxiY3KI0V0JWVoHCOXXaNqknKnJyMZC5xVogs7W3tzBb20MUBzmNIwqnPwHSsMq6fpNvc3zx29rFFFumlVAuI0HTOB2Az9lAUCf2h3KlLv3a392e2juo7eO8TcQ0NzJtlZlAjPzIBGcA/pHBzPtfaF7wybbK12ryuaPe2D5e4kgxGjRguQY8nO3vgZ87pHYWcbu0drbqzsXYrGAWY5BJ6dT1PX41gg0XTYLxbmGygSVI0iTagAjVS5G0dl/OP29aA51ovtWX8mWB1G1WaQW0L3U0bkFTyIppZCmzaFVJGboxPTGBnIs8/GRGl6XeQ2cKDULeW8jF7dC2UQptIyxU4dldTtOAPFk+Gt5f6Fpt9azW81rGiSxiF2hHLfZjG0MuCBgkdD2JFTJ7W3uI0juIIpURgyq6BgpHYjPmKAol/7RXtrmGGLS4p2ubo2kCreDcGF3HbEygIeWN0gYY3ZAPY9KiL7SLwanKkum2i222KKNTdNuE5uLiF8kRnKboCAQM9V6eLC9FNlamaSU20HNkKs78sZYr9Ek+ZHl6V5l0+ylUrLaW7qVZSGiUghjlh27E9T60Bz2b2kXk2n3k1ho8PgLW8Tvd7gZ/czcjwqvVPCVznPboMnF/0W6kvdJtLqcQiWaJXYQScxMkeTYGR91e4I7JnkW3S3LwyAOEC5jcIMA47HYR9xHlWaCGOCJYoI0jjXsiKAB9gFARE/PyfrGpNRk/PyfrGpNAYLrtUmD8xH+qP3VGuu1SYPzEf6o/dQGp4y0ReI+F9S0hzEPeoiimVN6hu6kjzwQDVPuPZ5ce6yvYPYWd3PI7SrGpMbRloyIeoxsHLIGVI652nJB6TSgKFwfwNNoWtyalO9lPNNZm0Zlj2tEBPPIgQgAY2TKhGFAES46dB54L4J1HQZpOfqEBV9PS0MsKnmNIEjUPk9fDsOASR4ugTqDf6UByDS+C9VvVnDWVtYwxJbRiKRAEvGjWdXkZWD4YmVGyVPUYySN1bSL2e6g+piS9vrae2IRZgUO65CzwSDf0ycLE64Zn+n5AkVJ1rj+Th7UuIX1S05+k6fcLEHt3BnXNqkoAi/Tyd/XIx06EAka659pGoSTRyw6alvaWfMlv1aUh2VUjZQgdFwCJlJLBexwceIgSl9n99HeXMvvVpcQNM0hgmXC3amTeEm2qOijoM7+wxtGVM6/wCBmu9D0W2Y2XvenXs10j8s7UEgmHgJyVK81WHfrGPtEe79pDWc1/Bc6O3O01ZDe8q43ohUQkCMhcvn3iPOQuMN6DM9eL7q80izurOySO8bUTYS208pjXfsY43MoYDO09UDf6tARLTgORuH9e0y8eySLUrFLRYIY2aFZFVx7wVY9XYspPn82viJ6171DgVrmK5ltGtNPvrhxmSBCQkXuiw8kdBmPeinb0GB2zWv1P2nrHZ37Q6dNGba3lEkuSwSdYncBTs2MvgIBLAn6uMmpEftJLXCW7aQVlubi4trEm5G2ZobsWrmQ7fmxvZCPpEgnpkAEDzY+z+f3ywfUJrSSzhuFmezVcx7QlwNgAVVxumVvoqOh6esnXeBJdV1fW7yW4gYXcM62ocEm3leG3RJB6FWgYgjqN3TzrPPx2YuFodWGnAyyXdxaGATM4BheVXYMiMSMRMRhcdepA61q7nj+7XTRNHbRhbm6aC2nEgdsiQHa8Y+iOWe+e+OnUEgfk/s5uFlRdPlsbaBLi4lVUjC7TLKJBKAFyJFGU8JUkAYZeor0/s7uo73Tp7S+hQQiLmgr9GRJTI0qHG7c4IQ4ZeirkkDbUrSfaE2t6Lq91pmmNHPb2Hv9qt0zIJYzv27sqCDlDkLuX0YnONlpHFlzd6jb2t1p8MSvMtpJLHdb8Tm3FxhVKgsmwjxd8/o48VAVe39mFytlEk8mmS3ES3EMbNE3gWWJE3hhht25N3fd4jlyfEbhw3w9JacMS6JrCWk9pKkqPHEoClJGfKYCqMbSBkAZ69B56S+9pEcCRLBpjTXMsl5EkXOwd0F6lr1AUsdxk34VScDABNT9B45i1fW4LKKxkSCZVC3GWIMhgWbb1QKRsbyYt/q460BXJfZjqNzaW63OuKt37vN7zcRREGS5xIsEnfsiTSAjucJ16VYNK4Oki0BtN1B7aSGS/S6Nug+aSMbcxgABcHaSQFUeI5B6k6ODj7XIb15NT0uzFlAL1p1t7gkrHDdiHeMr1YDPh6A4zlchayN7VojHuh0ecmV/wDJhIzIZI/HuYgpuyOW3RA49SAGKge39nt+Lhxb6nHDEYZIYZQuZLVTE0aohxu2jcGxuAyD0PQjBe+zu+udGubRjpT8+O4jSKRDy7UyJGokjCqo3AoT0Vfp985LWLh/jaDWdaubOO0kjt0WdorhicScmQRyd1C92BBVm6d9pwK0lv7UUksba4bSJlaRZJpYw7tyoUWJi2RHjOJkPXCee8jBIE7i3hm+1ziV1tXNtYyWJaack4NwodIQAGBI2yyFux8EeD6au79n+rtFqBsbywtFvoJ7b3NN4gtEkWAfNYA84WYjAGZSfLxbiLjs+8afb3OlyQzanK0dgqy7zMEkCSE9MLtUmTGTlVJ6EEVHteP5PyFHqEmniSF0jjjInHNlnZo0IMSqWC7pB1XccddvUZAnw8Im34RGlxe6yTtc+8ziRTy7o83eVk6ZIIwPPsOhAxWquuBL2dJlSXT4XlTwTxq++1HLK8iLJOIiep6ju2FHTE/S+PFvdZ0uwl09rcXodDI8jDZMrTApgoP6O58W1sY8PRtt2oDn2o8Aym8tH0qW0t4ILsXCoyZ2eGAMwBBG4mFuvRsvncPEGwaJ7OZIFgh1i4tr62jdDIjpn3grDMhlcAAF2Mqk5DHwdWbpjpFKAq3A3DDcNjUOZ7rJLeNDLJPEm15JFhRH3+uWVmBz+mc+ptNKUBptL1C21F7l7OUSLFcSQPjuroxDA/h+6tpVF9mXfib/AH5d/wD3Cr1UTujbWgqc3FGC67VJg/MR/qj91RrrtUmD8xH+qP3VTUe6UpQClKUBFOnWJvffDZ2xvO3P5S8ztj6WM9gBX5b6ZYW0XKtrG1ii8Q2RxKo8WN3QDzwM+uKl0oCJBplhbwiGCytYogjRhEiVVCsclcAdj5ivz8laf7itl7hae5r2g5K8sf8AZxjzP41MpQEJtI012Rn0+zZkiMCkwqSsZGCg6dFwSMdqxahomn3tlJbSW0SJIGUlI1BAdw79wfpMAT6nqetTLy6gsraS4u5UhgjG55HOAo9Sa5jrHtm0u1uXi03T575FOOaziJW+zIJ/ECsJ1Iw/kzrwmAxGMdqEHK3TruL9p/Duk2OkwabFYwvZwyNKkcyiQB2YszeLPUszH7+lSU0nTUkaRNPtFkZdrMIVBIznBOO2QD9tcm+XD/Z7/jf+nT5cP9nv+N/6da+00uZ6Ps3pL5X3j5nXrextLZ53trWCFp23SmOMKZD6tjuftrHb6Vp1tPHNbWFpDNGnLSSOFVZU+qCB0Hwrkvy4f7Pf8b/06fLh/s9/xv8A06dppcx7N6S+V94+Z1eXRdLmlnkl02yeScbZWaBCZB0OGOOv0V7+g9KyxadYw3IuYbO2juBGIhKsShwg7LnGcdB0rkfy4f7Pf8b/ANOny4f7Pf8AG/8ATp2mlzHs3pL5X3j5nW/yZYb5n9ytd8+ea3KXMmcZ3dOvYd/QVjk0bS5ROJNNsnFwweYNAp5jDsW6dT8TXKPlw/2e/wCN/wCnWa19t1s0gF3ok0SZ6mK4Eh/Aqv76dppczGXo7pGKu6X3j5nWIrG0hupbmG1gjuZQBJKsYDuB2BPc1gGi6WscaDTbIJHJzkUQJhX+sBjo3x71i4e17TuIbEXWlXKzx9mHZkPowPUGtpW5NPNHjzhKnJwmrNcDELaAcrEEQ5RLR+AeAkEEj06E/iajfkjTd8jfk+z3SxiGQ8hcugGNp6dVwB07dKnUqmJA/Iul/N//AKbZfNxmJPmE8KHuo6dB1PTtU+lKAUpSgFKUoCgezLvxN/vy7/8AuFXqtVpWnWumvdJZxiMTXEk8nXJZ3Ylif/XpW1qJWRtrTU5uSMF19GpMH5iP9UfuqPcDw1ntm3QIfQY/CqajJSlKAUpSgFKUoBSlKA4R7d+I57jWV0KF9trbKskoB+m7DIB+AGD9prlNXH2uW0lt7QNUEuTzCkin1UoP8CPuqnV49aTlUdz9c0NRhRwNJU+KT+rzZmtbae7l5VrBLPJgnZGhY4HngV+3Fpc2xYXNvNCVbYeYhXDYBx188EH76m6HdW0K31veyTQw3cPK50KB2Qh1bquRkHbg9asv8ZtIOktp0kE8iKFSO6aJTJtVUGdpJHi2lfguOvcGKMWs2Z1sTWp1dWMLr67ss77ueW/LvKNU630jUrm3Fxb6feSwHOJI4WZTj4gY8jVzutc0S6uLm5S3jeK3t98YlVY2adZCY8LuJYYcgjtgdgMVWre7tNOklto5nuIo9SgnSVUxvjj5gJxnoTuHSrqRTzZrjja1SD1KbUlbJpu/Pla108zSOrI7I6lWU4IIwQfSvUcUkpYRozlVLttGcAdyfhXQNM4r0T3prnVLeSSZpDuItkYPHzXbaeoP0WUenTqDgVhsuLdJtsmSwFykccccUTRKoYcjY6sR1wz4PnV2cfiMXj8TnFUHddH4ZFCpVr1/WNMu9AW0thI9ys5cO1usZK7nOWIJyfEOwHbzwKqla5K3E7sPWlWi5Sjq58f74Fj4C4jn4a4itrqNz7u7CO4QnoyE4J+0dxX1VXxrDG80qRRjc7sFUepJwK+xbSNobWGJ23MiBSfXAruwcm00fFemFGEalOqv5NO/0tb+zLSlK7T40UpSgFKUoBSlKAgp+fk/WNSajQHc7N9Yk1KxQHmVcg1gtJeXI0b9AT0+2pjDNQZosk1GVE+lQYZpIxhhvA/Gsvva+aPVISaVGa9jUEsrgDqSQP8AGvDajCrBMMZGUsqAjcwGM46/EfiKAmUqMLxMfQkH3D/GvwX0RLAByVOCBjp/fQEqlRvfE+pJ+ArzJfxRozyBlRRks2AAPxoCke1ngZ+JrSO+0xUGqW6lQp6c5Pq59R1x9pr57vbS4sbl7e8glgnQ4ZJFKkfjX1774n1JPwFQdVGlXcBGq2sE0KgsRcIrKAO56+QrmrYZVHrLJn0eifSKrgKexnHWjwzs1+D5JpX1N/Fvhf8A0d03+xx/4V+/xa4X/wBHdN/scf8AhWnsT5ns+2NP5T6/g+WKV9T/AMWuF/8AR3Tf7HH/AIVji4f4YkLf/tnT1UHoxtIiG+zH/jTsT5j2xp/KfX8Hy5Svp2PSuC5Fdo9I0V1Rd7lYISFXr1PoOh6/CpX8W+F/9HdN/scf+FOxPmPbGn8p9fwfLFfqgsQFBJPYCvqNOHeGWdlPDNgoHZjaRYb7MdfxqbYaboumuZNO0i2tpPWC3RCfwp2J8yP0xhbKk+v4OV+yb2e3TX8Gta7bmGCE77e3kGGdvJmHkB3Hnmu4VGF4hA8Eg+GB/jT3xPqSfgK66dNU1ZHyWkNIVdIVtrV+i4JEmlRvfE+pJ+Ary+oQp9PK9h1wO5wPPzPSthwkulRvfE+pJ+Ap74n1JPwFASaVG98T6kn4CnvifUf8BQEmo95NsTYp8bf3CvEly7A8tdvxNYY4yWLMck9yajZUjPbJhB9lSMV+RLhR9le6pBUd+5pSoyo8jsaqXtJuZ7TQoZLSeWCQ3CqWjcqcbW6ZFKVURlCvNUv3tkR766ZH0kOymZiGJtyST16nPWpHFF9dwaPwtPDdTxztZ3AMiSEMfzfmOvkPwpSsgSNa1O/j1TWUjvrpVjC7AsrAL87EOnXp0JH3mnDV7dG04wlNzOZVtEkD8w5D+7r4s+vQdaUpwB+2ep37XWjBr66IkicuDK3iPMmHXr16AfgKz6LqN9JwrFLJeXLymRwXaVi38nlPfPqAftApSgIlzqmoBuIMX10OVdqqYmbwDmyDA69BgAfdTjy5nNnopM0uZdGuC/jPjzEuc+uaUot4MMGq6h+R9Of3+73NdyKx5zZIAiwD17dT+JrJZ6rqDaraI1/dlW1GRCDM2ComQAd+2CRj40pQFn9ol3c2s2ji1uJoQ82H5bldw3J3x37n8apGmapqAitkF9dbDFISvObB+n8aUotwJPAd5dDh7iJhczbotOVkO85QiEYI9CMCt/pF/eSQcWF7u4YwykREyE8sc2QeHr06AdvSlKMGPVdQvE4pt4ku7hYi0uUEjBTh5sdM/AfgK98IX95PZ6M093cSNJfBHLyE7l93lODk9RkA/aKUqAx6PqF7JxJqEUl3cNGt3MqoZWIACz4AGe3QfgK0Vnq+pNLqIbULwhbCV1zO3RhChBHXvkk5+NKVQZ01XUfdNDPv93mS5mVzzm8QEkYAPXr0J/GvzTNRvX4iuC15csecU6ysfCLgADv2wSMfGlKA2Gs6lfR3tisd5cqrNFkLKwzlIM56/E/ia6dilKjAxX6O9KVAZB9E1+rSlRmSJCfRFftKVTE//9k="
				},
				{
					"timing": 2625,
					"timestamp": 512007911705,
					"data": "data:image/jpeg;base64,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"
				},
				{
					"timing": 3000,
					"timestamp": 512008286705,
					"data": "data:image/jpeg;base64,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"
				}
			]
		}
	},
	"final-screenshot": {
		"id": "final-screenshot",
		"title": "Final Screenshot",
		"description": "The last screenshot captured of the pageload.",
		"score": null,
		"scoreDisplayMode": "informative",
		"details": {
			"type": "screenshot",
			"timing": 1870,
			"timestamp": 512007157170,
			"data": "data:image/jpeg;base64,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"
		}
	},
	"total-blocking-time": {
		"id": "total-blocking-time",
		"title": "Total Blocking Time",
		"description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
		"score": 0.96,
		"scoreDisplayMode": "numeric",
		"numericValue": 134.33899999999994,
		"numericUnit": "millisecond",
		"displayValue": "130 ms",
		"scoringOptions": {
			"p10": 200,
			"median": 600
		}
	},
	"max-potential-fid": {
		"id": "max-potential-fid",
		"title": "Max Potential First Input Delay",
		"description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).",
		"score": 0.56,
		"scoreDisplayMode": "numeric",
		"numericValue": 231,
		"numericUnit": "millisecond",
		"displayValue": "230 ms",
		"details": {
			"type": "debugdata",
			"observedMaxDurationLoaf": {
				"args": {
					"data": {
						"blockingDuration": 73.331,
						"duration": 136.813,
						"numScripts": 1,
						"renderDuration": 7.625,
						"styleAndLayoutDuration": 7.6
					}
				},
				"cat": "devtools.timeline",
				"id2": {
					"local": "0x101001f4208"
				},
				"name": "LongAnimationFrame",
				"ph": "b",
				"pid": 51855,
				"scope": "devtools.timeline",
				"tid": 259,
				"ts": 512007010866
			},
			"observedMaxBlockingLoaf": {
				"args": {
					"data": {
						"blockingDuration": 73.331,
						"duration": 136.813,
						"numScripts": 1,
						"renderDuration": 7.625,
						"styleAndLayoutDuration": 7.6
					}
				},
				"cat": "devtools.timeline",
				"id2": {
					"local": "0x101001f4208"
				},
				"name": "LongAnimationFrame",
				"ph": "b",
				"pid": 51855,
				"scope": "devtools.timeline",
				"tid": 259,
				"ts": 512007010866
			},
			"observedLoafs": [
				{
					"startTime": 431.462,
					"duration": 193.191,
					"blockingDuration": 0
				},
				{
					"startTime": 858.219,
					"duration": 112.422,
					"blockingDuration": 0
				},
				{
					"startTime": 1142.404,
					"duration": 102.8,
					"blockingDuration": 0
				},
				{
					"startTime": 1724.161,
					"duration": 136.813,
					"blockingDuration": 73.331
				}
			]
		}
	},
	"cumulative-layout-shift": {
		"id": "cumulative-layout-shift",
		"title": "Cumulative Layout Shift",
		"description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
		"score": 1,
		"scoreDisplayMode": "numeric",
		"numericValue": 0.025739150159359535,
		"numericUnit": "unitless",
		"displayValue": "0.026",
		"scoringOptions": {
			"p10": 0.1,
			"median": 0.25
		},
		"details": {
			"type": "debugdata",
			"items": [
				{
					"cumulativeLayoutShiftMainFrame": 0.025739150159359535
				}
			]
		}
	},
	"errors-in-console": {
		"id": "errors-in-console",
		"title": "No browser errors logged to the console",
		"description": "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"server-response-time": {
		"id": "server-response-time",
		"title": "Initial server response time was short",
		"description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more about the Time to First Byte metric](https://developer.chrome.com/docs/lighthouse/performance/time-to-first-byte/).",
		"score": null,
		"scoreDisplayMode": "informative",
		"numericValue": 201.367,
		"numericUnit": "millisecond",
		"displayValue": "Root document took 200 ms",
		"metricSavings": {
			"FCP": 101.36699999999999,
			"LCP": 101.36699999999999
		},
		"details": {
			"type": "opportunity",
			"headings": [
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "responseTime",
					"valueType": "timespanMs",
					"label": "Time Spent"
				}
			],
			"items": [
				{
					"url": "https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home",
					"responseTime": 201.367
				}
			],
			"overallSavingsMs": 101.36699999999999
		},
		"guidanceLevel": 1
	},
	"interactive": {
		"id": "interactive",
		"title": "Time to Interactive",
		"description": "Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).",
		"score": 0.81,
		"scoreDisplayMode": "numeric",
		"numericValue": 4632.861000000001,
		"numericUnit": "millisecond",
		"displayValue": "4.6 s"
	},
	"user-timings": {
		"id": "user-timings",
		"title": "User Timing marks and measures",
		"description": "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more about User Timing marks](https://developer.chrome.com/docs/lighthouse/performance/user-timings/).",
		"score": null,
		"scoreDisplayMode": "notApplicable",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		},
		"guidanceLevel": 2
	},
	"critical-request-chains": {
		"id": "critical-request-chains",
		"title": "Avoid chaining critical requests",
		"description": "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn how to avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/).",
		"score": null,
		"scoreDisplayMode": "informative",
		"displayValue": "6 chains found",
		"details": {
			"type": "criticalrequestchain",
			"chains": {
				"9E3A369D18CC67D6BF81AA938839E7C0": {
					"request": {
						"url": "https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home",
						"startTime": 512005.290812,
						"endTime": 512005.79563,
						"responseReceivedTime": 512005.711792,
						"transferSize": 26631
					},
					"children": {
						"51855.2": {
							"request": {
								"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForMasterPro/css/bootstrap.min.css?v=6.68",
								"startTime": 512005.736494,
								"endTime": 512005.857514,
								"responseReceivedTime": 512005.85702900006,
								"transferSize": 5135
							}
						},
						"51855.3": {
							"request": {
								"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/css/common.min.css?v=6.68",
								"startTime": 512005.73723,
								"endTime": 512005.859304,
								"responseReceivedTime": 512005.85879800003,
								"transferSize": 12240
							},
							"children": {
								"51855.79": {
									"request": {
										"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/fonts/Vi-Regular.woff2",
										"startTime": 512005.913959,
										"endTime": 512006.295328,
										"responseReceivedTime": 512006.174544,
										"transferSize": 26076
									}
								},
								"51855.80": {
									"request": {
										"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/fonts/Vi-Bold.woff2",
										"startTime": 512005.914135,
										"endTime": 512006.29522,
										"responseReceivedTime": 512006.1743470001,
										"transferSize": 25915
									}
								}
							}
						},
						"51855.57": {
							"request": {
								"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/jquery-3.5.1.min.js?v=2.18",
								"startTime": 512005.797367,
								"endTime": 512006.143878,
								"responseReceivedTime": 512006.07144400006,
								"transferSize": 32296
							}
						},
						"51855.58": {
							"request": {
								"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/slick.min.js?v=2.18",
								"startTime": 512005.862888,
								"endTime": 512006.163815,
								"responseReceivedTime": 512006.1633709999,
								"transferSize": 11803
							}
						},
						"51855.59": {
							"request": {
								"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/lazy.min.js?v=2.18",
								"startTime": 512005.86331799993,
								"endTime": 512006.067059,
								"responseReceivedTime": 512006.06656099996,
								"transferSize": 1756
							}
						}
					}
				}
			},
			"longestChain": {
				"duration": 1004.5159999728203,
				"length": 3,
				"transferSize": 26076
			}
		},
		"guidanceLevel": 1
	},
	"redirects": {
		"id": "redirects",
		"title": "Avoid multiple page redirects",
		"description": "Redirects introduce additional delays before the page can be loaded. [Learn how to avoid page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"displayValue": "",
		"metricSavings": {
			"LCP": 0,
			"FCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0
		},
		"guidanceLevel": 2
	},
	"installable-manifest": {
		"id": "installable-manifest",
		"title": "Web app manifest or service worker do not meet the installability requirements",
		"description": "Service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. With proper service worker and manifest implementations, browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement. [Learn more about manifest installability requirements](https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest/).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"numericValue": 1,
		"numericUnit": "element",
		"displayValue": "1 reason",
		"warnings": [],
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "reason",
					"valueType": "text",
					"label": "Failure reason"
				}
			],
			"items": [
				{
					"reason": "Page has no manifest <link> URL"
				}
			],
			"debugData": {
				"type": "debugdata",
				"manifestUrl": null
			}
		}
	},
	"splash-screen": {
		"id": "splash-screen",
		"title": "Is not configured for a custom splash screen",
		"description": "A themed splash screen ensures a high-quality experience when users launch your app from their homescreens. [Learn more about splash screens](https://developer.chrome.com/docs/lighthouse/pwa/splash-screen/).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"explanation": "Failures: No manifest was fetched.",
		"details": {
			"type": "debugdata",
			"items": [
				{
					"failures": [
						"No manifest was fetched"
					],
					"isParseFailure": true,
					"parseFailureReason": "No manifest was fetched"
				}
			]
		}
	},
	"themed-omnibox": {
		"id": "themed-omnibox",
		"title": "Does not set a theme color for the address bar.",
		"description": "The browser address bar can be themed to match your site. [Learn more about theming the address bar](https://developer.chrome.com/docs/lighthouse/pwa/themed-omnibox/).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"explanation": "Failures: No manifest was fetched,\nNo `<meta name=\"theme-color\">` tag found.",
		"details": {
			"type": "debugdata",
			"items": [
				{
					"failures": [
						"No manifest was fetched",
						"No `<meta name=\"theme-color\">` tag found"
					],
					"themeColor": null,
					"isParseFailure": true,
					"parseFailureReason": "No manifest was fetched"
				}
			]
		}
	},
	"maskable-icon": {
		"id": "maskable-icon",
		"title": "Manifest doesn't have a maskable icon",
		"description": "A maskable icon ensures that the image fills the entire shape without being letterboxed when installing the app on a device. [Learn about maskable manifest icons](https://developer.chrome.com/docs/lighthouse/pwa/maskable-icon-audit/).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"explanation": "No manifest was fetched"
	},
	"content-width": {
		"id": "content-width",
		"title": "Content is sized correctly for the viewport",
		"description": "If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn how to size content for the viewport](https://developer.chrome.com/docs/lighthouse/pwa/content-width/).",
		"score": 1,
		"scoreDisplayMode": "binary"
	},
	"image-aspect-ratio": {
		"id": "image-aspect-ratio",
		"title": "Displays images with incorrect aspect ratio",
		"description": "Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"label": ""
				},
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "displayedAspectRatio",
					"valueType": "text",
					"label": "Aspect Ratio (Displayed)"
				},
				{
					"key": "actualAspectRatio",
					"valueType": "text",
					"label": "Aspect Ratio (Actual)"
				}
			],
			"items": [
				{
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google-MB-banner-1280x421px-1-21-09-23-02-50-19.jpg",
					"node": {
						"type": "node",
						"lhId": "1-354-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.slick-track > div.slick-slide > a.allcategories > img",
						"boundingRect": {
							"top": 0,
							"bottom": 0,
							"left": 0,
							"right": 0,
							"width": 0,
							"height": 0
						},
						"snippet": "<img fetchpriority=\"high\" src=\"https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google…\" data-adobe-track-event-name=\"TRACK_EVENT_BANNER_INTERACTION\" data-track-event-component=\"Banner\" data-track-event-uid=\"N/A\" alt=\"Vi Max Postpaid\" width=\"1145\" height=\"375\">",
						"nodeLabel": "Vi Max Postpaid"
					},
					"displayedAspectRatio": "1145 x 375\n        (3.05)",
					"actualAspectRatio": "1145 x 377\n        (3.04)",
					"doRatiosMatch": false
				},
				{
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google-MB-banner-1280x421px-1-21-09-23-02-50-19.jpg",
					"node": {
						"type": "node",
						"lhId": "1-356-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,A,0,IMG",
						"selector": "div.slick-track > div#slick-slide01 > a.allcategories > img",
						"boundingRect": {
							"top": 0,
							"bottom": 0,
							"left": 0,
							"right": 0,
							"width": 0,
							"height": 0
						},
						"snippet": "<img fetchpriority=\"high\" src=\"https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google…\" data-adobe-track-event-name=\"TRACK_EVENT_BANNER_INTERACTION\" data-track-event-component=\"Banner\" data-track-event-uid=\"N/A\" alt=\"Vi Max Postpaid\" width=\"1145\" height=\"375\">",
						"nodeLabel": "Vi Max Postpaid"
					},
					"displayedAspectRatio": "1145 x 375\n        (3.05)",
					"actualAspectRatio": "1145 x 377\n        (3.04)",
					"doRatiosMatch": false
				},
				{
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google-MB-banner-1280x421px-1-21-09-23-02-50-19.jpg",
					"node": {
						"type": "node",
						"lhId": "1-358-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,4,DIV,0,A,0,IMG",
						"selector": "div.slick-track > div.slick-slide > a.allcategories > img",
						"boundingRect": {
							"top": 0,
							"bottom": 0,
							"left": 0,
							"right": 0,
							"width": 0,
							"height": 0
						},
						"snippet": "<img fetchpriority=\"high\" src=\"https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google…\" data-adobe-track-event-name=\"TRACK_EVENT_BANNER_INTERACTION\" data-track-event-component=\"Banner\" data-track-event-uid=\"N/A\" alt=\"Vi Max Postpaid\" width=\"1145\" height=\"375\">",
						"nodeLabel": "Vi Max Postpaid"
					},
					"displayedAspectRatio": "1145 x 375\n        (3.05)",
					"actualAspectRatio": "1145 x 377\n        (3.04)",
					"doRatiosMatch": false
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/8375_1672653162_unnamed2.png",
					"node": {
						"type": "node",
						"lhId": "1-432-IMG",
						"path": "1,HTML,1,BODY,7,DIV,0,UL,0,LI,0,A,0,IMG",
						"selector": "ul > li.scrollLink > a > img",
						"boundingRect": {
							"top": 0,
							"bottom": 0,
							"left": 0,
							"right": 0,
							"width": 0,
							"height": 0
						},
						"snippet": "<img src=\"https://cdn4.singleinterface.com/files/banner_images/127902/8375_167265316…\" alt=\"\" width=\"320\" height=\"32\">",
						"nodeLabel": "ul > li.scrollLink > a > img"
					},
					"displayedAspectRatio": "320 x 32\n        (10.00)",
					"actualAspectRatio": "48 x 180\n        (0.27)",
					"doRatiosMatch": false
				}
			]
		}
	},
	"image-size-responsive": {
		"id": "image-size-responsive",
		"title": "Serves images with low resolution",
		"description": "Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn how to provide responsive images](https://web.dev/articles/serve-responsive-images).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"label": ""
				},
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "displayedSize",
					"valueType": "text",
					"label": "Displayed size"
				},
				{
					"key": "actualSize",
					"valueType": "text",
					"label": "Actual size"
				},
				{
					"key": "expectedSize",
					"valueType": "text",
					"label": "Expected size"
				}
			],
			"items": [
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/3365_1672651428_29761668670398Group2389.png",
					"node": {
						"type": "node",
						"lhId": "1-431-IMG",
						"path": "1,HTML,1,BODY,6,DIV,0,UL,0,LI,0,A,0,IMG",
						"selector": "ul > li > a.scrollLink > img",
						"boundingRect": {
							"top": 114,
							"bottom": 294,
							"left": 364,
							"right": 412,
							"width": 48,
							"height": 180
						},
						"snippet": "<img src=\"https://cdn4.singleinterface.com/files/banner_images/127902/3365_167265142…\" alt=\"\" width=\"42\" height=\"201\">",
						"nodeLabel": "ul > li > a.scrollLink > img"
					},
					"displayedSize": "48 x 180",
					"actualSize": "48 x 180",
					"actualPixels": 8640,
					"expectedSize": "72 x 270",
					"expectedPixels": 19440
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/1096_1641969120_cookies.png",
					"node": {
						"type": "node",
						"lhId": "1-433-IMG",
						"path": "1,HTML,1,BODY,9,DIV,0,DIV,0,DIV,0,DIV,0,SPAN,0,IMG",
						"selector": "div.cookie-content > div.cookie-inner > span > img",
						"boundingRect": {
							"top": 597,
							"bottom": 637,
							"left": 182,
							"right": 230,
							"width": 48,
							"height": 40
						},
						"snippet": "<img src=\"https://cdn4.singleinterface.com/files/banner_images/127902/1096_164196912…\" alt=\"Cookie\" width=\"23\" height=\"23\">",
						"nodeLabel": "Cookie"
					},
					"displayedSize": "43 x 40",
					"actualSize": "43 x 40",
					"actualPixels": 1720,
					"expectedSize": "65 x 60",
					"expectedPixels": 3900
				},
				{
					"url": "https://cdn4.singleinterface.com/files/outlet/logo/127902/vi_logo_png.png",
					"node": {
						"type": "node",
						"lhId": "1-353-IMG",
						"path": "1,HTML,1,BODY,1,NAV,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.container > div.navbar-header > a.navbar-brand > img",
						"boundingRect": {
							"top": 16,
							"bottom": 53,
							"left": 15,
							"right": 59,
							"width": 44,
							"height": 37
						},
						"snippet": "<img src=\"https://cdn4.singleinterface.com/files/outlet/logo/127902/vi_logo_png.png\" alt=\"Vi - Vodafone Idea Store, Connaught Place\" data-track-event-name=\"logo\" data-track-event-click=\"Logo click\" width=\"44\" height=\"37\">",
						"nodeLabel": "Vi - Vodafone Idea Store, Connaught Place"
					},
					"displayedSize": "44 x 37",
					"actualSize": "44 x 37",
					"actualPixels": 1628,
					"expectedSize": "66 x 56",
					"expectedPixels": 3696
				}
			]
		}
	},
	"preload-fonts": {
		"id": "preload-fonts",
		"title": "Fonts with `font-display: optional` are preloaded",
		"description": "Preload `optional` fonts so first-time visitors may use them. [Learn more about preloading fonts](https://web.dev/articles/preload-optional-fonts)",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"deprecations": {
		"id": "deprecations",
		"title": "Avoids deprecated APIs",
		"description": "Deprecated APIs will eventually be removed from the browser. [Learn more about deprecated APIs](https://developer.chrome.com/docs/lighthouse/best-practices/deprecations/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"third-party-cookies": {
		"id": "third-party-cookies",
		"title": "Avoids third-party cookies",
		"description": "Support for third-party cookies will be removed in a future version of Chrome. [Learn more about phasing out third-party cookies](https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"mainthread-work-breakdown": {
		"id": "mainthread-work-breakdown",
		"title": "Minimizes main-thread work",
		"description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)",
		"score": null,
		"scoreDisplayMode": "informative",
		"numericValue": 1774.6000000000026,
		"numericUnit": "millisecond",
		"displayValue": "1.8 s",
		"metricSavings": {
			"TBT": 134.33899999999994
		},
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "groupLabel",
					"valueType": "text",
					"label": "Category"
				},
				{
					"key": "duration",
					"valueType": "ms",
					"granularity": 1,
					"label": "Time Spent"
				}
			],
			"items": [
				{
					"group": "scriptEvaluation",
					"groupLabel": "Script Evaluation",
					"duration": 598.4440000000014
				},
				{
					"group": "other",
					"groupLabel": "Other",
					"duration": 477.02800000000036
				},
				{
					"group": "styleLayout",
					"groupLabel": "Style & Layout",
					"duration": 468.4560000000004
				},
				{
					"group": "paintCompositeRender",
					"groupLabel": "Rendering",
					"duration": 93.91200000000057
				},
				{
					"group": "parseHTML",
					"groupLabel": "Parse HTML & CSS",
					"duration": 85.69200000000001
				},
				{
					"group": "scriptParseCompile",
					"groupLabel": "Script Parsing & Compilation",
					"duration": 45.312
				},
				{
					"group": "garbageCollection",
					"groupLabel": "Garbage Collection",
					"duration": 5.755999999999998
				}
			],
			"sortedBy": [
				"duration"
			]
		},
		"guidanceLevel": 1
	},
	"bootup-time": {
		"id": "bootup-time",
		"title": "JavaScript execution time",
		"description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/).",
		"score": null,
		"scoreDisplayMode": "informative",
		"numericValue": 625.2679999999996,
		"numericUnit": "millisecond",
		"displayValue": "0.6 s",
		"metricSavings": {
			"TBT": 109.48443027959699
		},
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "total",
					"granularity": 1,
					"valueType": "ms",
					"label": "Total CPU Time"
				},
				{
					"key": "scripting",
					"granularity": 1,
					"valueType": "ms",
					"label": "Script Evaluation"
				},
				{
					"key": "scriptParseCompile",
					"granularity": 1,
					"valueType": "ms",
					"label": "Script Parse"
				}
			],
			"items": [
				{
					"url": "https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home",
					"total": 633.3040000000008,
					"scripting": 33.72,
					"scriptParseCompile": 4.5360000000000005
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/jquery-3.5.1.min.js?v=2.18",
					"total": 569.42,
					"scripting": 307.3679999999996,
					"scriptParseCompile": 6.268
				},
				{
					"url": "Unattributable",
					"total": 232.13200000000072,
					"scripting": 9.791999999999996,
					"scriptParseCompile": 0
				},
				{
					"url": "https://www.googletagmanager.com/gtag/js?id=G-35QLTJGXWD&l=dataLayerGa4",
					"total": 120.94800000000001,
					"scripting": 104.528,
					"scriptParseCompile": 15.212
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForViUpdated/js/enterprises-common.min.js?v=2.18",
					"total": 108.28799999999997,
					"scripting": 90.74399999999997,
					"scriptParseCompile": 1.56
				},
				{
					"url": "https://www.googletagmanager.com/gtm.js?id=GTM-WCVRQMW&l=SIdataLayer",
					"total": 51.91199999999999,
					"scripting": 39.20799999999999,
					"scriptParseCompile": 12.332
				}
			],
			"summary": {
				"wastedMs": 625.2679999999996
			},
			"sortedBy": [
				"total"
			]
		},
		"guidanceLevel": 1
	},
	"uses-rel-preload": {
		"id": "uses-rel-preload",
		"title": "Preload key requests",
		"description": "Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn how to preload key requests](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preload/).",
		"score": null,
		"scoreDisplayMode": "notApplicable",
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0
		},
		"guidanceLevel": 3
	},
	"uses-rel-preconnect": {
		"id": "uses-rel-preconnect",
		"title": "Preconnect to required origins",
		"description": "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"displayValue": "",
		"warnings": [],
		"metricSavings": {
			"LCP": 0,
			"FCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0,
			"sortedBy": [
				"wastedMs"
			]
		},
		"guidanceLevel": 3
	},
	"font-display": {
		"id": "font-display",
		"title": "All text remains visible during webfont loads",
		"description": "Leverage the `font-display` CSS feature to ensure text is user-visible while webfonts are loading. [Learn more about `font-display`](https://developer.chrome.com/docs/lighthouse/performance/font-display/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"warnings": [],
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		},
		"guidanceLevel": 3
	},
	"diagnostics": {
		"id": "diagnostics",
		"title": "Diagnostics",
		"description": "Collection of useful page vitals.",
		"score": null,
		"scoreDisplayMode": "informative",
		"details": {
			"type": "debugdata",
			"items": [
				{
					"numRequests": 50,
					"numScripts": 9,
					"numStylesheets": 6,
					"numFonts": 2,
					"numTasks": 856,
					"numTasksOver10ms": 9,
					"numTasksOver25ms": 2,
					"numTasksOver50ms": 1,
					"numTasksOver100ms": 1,
					"numTasksOver500ms": 0,
					"rtt": 67.221,
					"throughput": 7807986.408207349,
					"maxRtt": 209.457,
					"maxServerLatency": 505.07250000000005,
					"totalByteWeight": 914649,
					"totalTaskTime": 443.6499999999993,
					"mainDocumentTransferSize": 26631
				}
			]
		}
	},
	"network-requests": {
		"id": "network-requests",
		"title": "Network Requests",
		"description": "Lists the network requests that were made during page load.",
		"score": null,
		"scoreDisplayMode": "informative",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "protocol",
					"valueType": "text",
					"label": "Protocol"
				},
				{
					"key": "networkRequestTime",
					"valueType": "ms",
					"granularity": 1,
					"label": "Network Request Time"
				},
				{
					"key": "networkEndTime",
					"valueType": "ms",
					"granularity": 1,
					"label": "Network End Time"
				},
				{
					"key": "transferSize",
					"valueType": "bytes",
					"displayUnit": "kb",
					"granularity": 1,
					"label": "Transfer Size"
				},
				{
					"key": "resourceSize",
					"valueType": "bytes",
					"displayUnit": "kb",
					"granularity": 1,
					"label": "Resource Size"
				},
				{
					"key": "statusCode",
					"valueType": "text",
					"label": "Status Code"
				},
				{
					"key": "mimeType",
					"valueType": "text",
					"label": "MIME Type"
				},
				{
					"key": "resourceType",
					"valueType": "text",
					"label": "Resource Type"
				}
			],
			"items": [
				{
					"url": "https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 0,
					"networkRequestTime": 2.2039999961853027,
					"networkEndTime": 507.02200001478195,
					"finished": true,
					"transferSize": 26631,
					"resourceSize": 194508,
					"statusCode": 200,
					"mimeType": "text/html",
					"resourceType": "Document",
					"priority": "VeryHigh",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForMasterPro/css/bootstrap.min.css?v=6.68",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 445.8029999732971,
					"networkRequestTime": 447.8860000371933,
					"networkEndTime": 568.9060000181198,
					"finished": true,
					"transferSize": 5135,
					"resourceSize": 23704,
					"statusCode": 200,
					"mimeType": "text/css",
					"resourceType": "Stylesheet",
					"priority": "VeryHigh",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/css/common.min.css?v=6.68",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 447.710000038147,
					"networkRequestTime": 448.6220000386238,
					"networkEndTime": 570.6959999799728,
					"finished": true,
					"transferSize": 12240,
					"resourceSize": 55398,
					"statusCode": 200,
					"mimeType": "text/css",
					"resourceType": "Stylesheet",
					"priority": "VeryHigh",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://www.googletagmanager.com/gtag/js?id=G-35QLTJGXWD&l=dataLayerGa4",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 448.0840000510216,
					"networkRequestTime": 574.9850000143051,
					"networkEndTime": 1194.1679999828339,
					"finished": true,
					"transferSize": 80155,
					"resourceSize": 224440,
					"statusCode": 200,
					"mimeType": "application/javascript",
					"resourceType": "Script",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "Google Tag Manager"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/outlet/logo/127902/vi_logo_png.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 448.68000000715256,
					"networkRequestTime": 577.716000020504,
					"networkEndTime": 1689.9290000200272,
					"finished": true,
					"transferSize": 2897,
					"resourceSize": 1580,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "High",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/vi-Banner-25-09-23-11-31-05.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 449.1579999923706,
					"networkRequestTime": 449.67700004577637,
					"networkEndTime": 1380.729000031948,
					"finished": true,
					"transferSize": 73347,
					"resourceSize": 71955,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "High",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google-MB-banner-1280x421px-1-21-09-23-02-50-19.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 449.5260000228882,
					"networkRequestTime": 450.7150000333786,
					"networkEndTime": 1661.3659999966621,
					"finished": true,
					"transferSize": 123989,
					"resourceSize": 122535,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "High",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/6809_1640676689_buypostpaid.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 449.94499999284744,
					"networkRequestTime": 578.0620000362396,
					"networkEndTime": 1693.4729999899864,
					"finished": true,
					"transferSize": 3462,
					"resourceSize": 2136,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/6562_1640676688_buyprepaid.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 450.07599997520447,
					"networkRequestTime": 578.3999999761581,
					"networkEndTime": 1699.50100004673,
					"finished": true,
					"transferSize": 3461,
					"resourceSize": 2136,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/3521_1640676688_getvip.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 450.2010000348091,
					"networkRequestTime": 1006.819000005722,
					"networkEndTime": 1705.4340000152588,
					"finished": true,
					"transferSize": 3793,
					"resourceSize": 2458,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/7605_1640676689_porttovi.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 450.3880000114441,
					"networkRequestTime": 1007.0410000085831,
					"networkEndTime": 1710.7490000128746,
					"finished": true,
					"transferSize": 3608,
					"resourceSize": 2283,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/8020_1640676687_internationalroaming.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 450.63100004196167,
					"networkRequestTime": 1007.1000000238419,
					"networkEndTime": 1722.1570000052452,
					"finished": true,
					"transferSize": 5835,
					"resourceSize": 4508,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/5713_1640676688_helpsupport.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 450.75200003385544,
					"networkRequestTime": 1007.1570000052452,
					"networkEndTime": 1723.723000049591,
					"finished": true,
					"transferSize": 4222,
					"resourceSize": 2896,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/3740_1646292393_311645174002Aboutus.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 450.8230000138283,
					"networkRequestTime": 451.1100000143051,
					"networkEndTime": 1683.5450000166893,
					"finished": true,
					"transferSize": 15252,
					"resourceSize": 13917,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Medium",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//4777_1677255333_SagittariansluckynumberGMB0.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 450.98900002241135,
					"networkRequestTime": 579.0160000324249,
					"networkEndTime": 1090.814000070095,
					"finished": true,
					"transferSize": 19479,
					"resourceSize": 18445,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostStatic332x249.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.09800004959106,
					"networkRequestTime": 579.2120000123978,
					"networkEndTime": 781.1520000100136,
					"finished": true,
					"transferSize": 34416,
					"resourceSize": 33364,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//5932_1677255791_5BestMobileGamesof2022GMB0.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.16299998760223,
					"networkRequestTime": 579.4290000200272,
					"networkEndTime": 1015.3030000329018,
					"finished": true,
					"transferSize": 17196,
					"resourceSize": 16162,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//2390_1677255855_MissedCallAlertsGMB1.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.2760000228882,
					"networkRequestTime": 579.6220000386238,
					"networkEndTime": 1091.120000064373,
					"finished": true,
					"transferSize": 29030,
					"resourceSize": 27987,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//1241_1677255937_4BenefitsofVisPostpaidFamilyPlansGMB332.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.335000038147,
					"networkRequestTime": 579.8110000491142,
					"networkEndTime": 1015.3930000066757,
					"finished": true,
					"transferSize": 21127,
					"resourceSize": 20093,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//7157_1677256028_ViMNPGMB.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.39400005340576,
					"networkRequestTime": 580.0170000195503,
					"networkEndTime": 1094.6570000052452,
					"finished": true,
					"transferSize": 41877,
					"resourceSize": 40807,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//3348_1677256165_SMPost332x249.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.4500000476837,
					"networkRequestTime": 580.2139999866486,
					"networkEndTime": 1090.9930000305176,
					"finished": true,
					"transferSize": 30983,
					"resourceSize": 29940,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//8086_1677256221_SMSatatic332x249.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.5110000371933,
					"networkRequestTime": 580.3720000386238,
					"networkEndTime": 1093.5330000519753,
					"finished": true,
					"transferSize": 37087,
					"resourceSize": 36026,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//8091_1677256292_Vi5places.ChristmasTravel.UKGMB.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.6230000257492,
					"networkRequestTime": 580.5509999990463,
					"networkEndTime": 1094.7300000190735,
					"finished": true,
					"transferSize": 71436,
					"resourceSize": 70339,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//9492_1677256430_5FreeEventstoExploreatDubaiShoppingFestival2022GMB.jpg",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.6850000023842,
					"networkRequestTime": 580.7460000514984,
					"networkEndTime": 1093.619000017643,
					"finished": true,
					"transferSize": 16491,
					"resourceSize": 15457,
					"statusCode": 200,
					"mimeType": "image/jpeg",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/images/fb_social.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.8250000476837,
					"networkRequestTime": 580.9220000505447,
					"networkEndTime": 1093.7390000224113,
					"finished": true,
					"transferSize": 1573,
					"resourceSize": 560,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/images/twitter_social.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.9050000309944,
					"networkRequestTime": 581.1730000376701,
					"networkEndTime": 1094.0360000133514,
					"finished": true,
					"transferSize": 2757,
					"resourceSize": 1743,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/images/whats-app_social.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 451.9650000333786,
					"networkRequestTime": 581.4060000181198,
					"networkEndTime": 1093.916000008583,
					"finished": true,
					"transferSize": 2723,
					"resourceSize": 1709,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://www.googletagmanager.com/gtm.js?id=GTM-WCVRQMW&l=SIdataLayer",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 458.6100000143051,
					"networkRequestTime": 581.6069999933243,
					"networkEndTime": 1209.9819999933243,
					"finished": true,
					"transferSize": 64035,
					"resourceSize": 178985,
					"statusCode": 200,
					"mimeType": "application/javascript",
					"resourceType": "Script",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "Google Tag Manager"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForMasterPro/css/slick.min.css?v=6.68",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 460.402999997139,
					"networkRequestTime": 582.8669999837875,
					"networkEndTime": 1094.3009999990463,
					"finished": true,
					"transferSize": 2000,
					"resourceSize": 3224,
					"statusCode": 200,
					"mimeType": "text/css",
					"resourceType": "Stylesheet",
					"priority": "VeryLow",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForMasterPro/css/qrcode_master.min.css?v=6.68",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 460.527999997139,
					"networkRequestTime": 582.9950000047684,
					"networkEndTime": 1094.4350000023842,
					"finished": true,
					"transferSize": 3176,
					"resourceSize": 9340,
					"statusCode": 200,
					"mimeType": "text/css",
					"resourceType": "Stylesheet",
					"priority": "VeryLow",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/css/cookie.min.css?v=6.68",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 460.5939999818802,
					"networkRequestTime": 583.3730000257492,
					"networkEndTime": 1094.369000017643,
					"finished": true,
					"transferSize": 1730,
					"resourceSize": 2130,
					"statusCode": 200,
					"mimeType": "text/css",
					"resourceType": "Stylesheet",
					"priority": "VeryLow",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForMasterPro/css/qrcode_master_updated.min.css?v=6.68",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 460.755999982357,
					"networkRequestTime": 583.5099999904633,
					"networkEndTime": 1094.5789999961853,
					"finished": true,
					"transferSize": 1958,
					"resourceSize": 2647,
					"statusCode": 200,
					"mimeType": "text/css",
					"resourceType": "Stylesheet",
					"priority": "VeryLow",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/3365_1672651428_29761668670398Group2389.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 508.2649999856949,
					"networkRequestTime": 633.2820000052452,
					"networkEndTime": 1438.5360000133514,
					"finished": true,
					"transferSize": 4061,
					"resourceSize": 2734,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "High",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/8375_1672653162_unnamed2.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 508.38300001621246,
					"networkRequestTime": 1007.2030000090599,
					"networkEndTime": 1725.5820000171661,
					"finished": true,
					"transferSize": 4135,
					"resourceSize": 2808,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/1096_1641969120_cookies.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 508.4510000348091,
					"networkRequestTime": 1007.3030000329018,
					"networkEndTime": 1732.3349999785423,
					"finished": true,
					"transferSize": 2339,
					"resourceSize": 1023,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "High",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/jquery-3.5.1.min.js?v=2.18",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 508.5189999938011,
					"networkRequestTime": 508.7590000629425,
					"networkEndTime": 855.2699999809265,
					"finished": true,
					"transferSize": 32296,
					"resourceSize": 89476,
					"statusCode": 200,
					"mimeType": "text/javascript",
					"resourceType": "Script",
					"priority": "Medium",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/slick.min.js?v=2.18",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 508.6850000023842,
					"networkRequestTime": 574.2799999713898,
					"networkEndTime": 875.2070000171661,
					"finished": true,
					"transferSize": 11803,
					"resourceSize": 42835,
					"statusCode": 200,
					"mimeType": "text/javascript",
					"resourceType": "Script",
					"priority": "Medium",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/lazy.min.js?v=2.18",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 508.75000005960464,
					"networkRequestTime": 574.7099999785423,
					"networkEndTime": 778.4510000348091,
					"finished": true,
					"transferSize": 1756,
					"resourceSize": 717,
					"statusCode": 200,
					"mimeType": "text/javascript",
					"resourceType": "Script",
					"priority": "Medium",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForViUpdated/js/enterprises-common.min.js?v=2.18",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 508.8270000219345,
					"networkRequestTime": 582.2490000128746,
					"networkEndTime": 782.0860000252724,
					"finished": true,
					"transferSize": 6442,
					"resourceSize": 22061,
					"statusCode": 200,
					"mimeType": "text/javascript",
					"resourceType": "Script",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/common.min.js?v=2.18",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 508.89600002765656,
					"networkRequestTime": 633.4340000152588,
					"networkEndTime": 787.4390000104904,
					"finished": true,
					"transferSize": 3971,
					"resourceSize": 8530,
					"statusCode": 200,
					"mimeType": "text/javascript",
					"resourceType": "Script",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForViUpdated/js/enterprises-home_page.min.js?v=2.18",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 508.95600003004074,
					"networkRequestTime": 633.682000041008,
					"networkEndTime": 782.6920000314713,
					"finished": true,
					"transferSize": 1907,
					"resourceSize": 1496,
					"statusCode": 200,
					"mimeType": "text/javascript",
					"resourceType": "Script",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/enterprises-gtm_datalayer.min.js?v=2.18",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 509.0149999856949,
					"networkRequestTime": 778.6909999847412,
					"networkEndTime": 882.0620000362396,
					"finished": true,
					"transferSize": 4579,
					"resourceSize": 17138,
					"statusCode": 200,
					"mimeType": "text/javascript",
					"resourceType": "Script",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/images/sprite-icon.png?v=1",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 588.6389999985695,
					"networkRequestTime": 588.9039999842644,
					"networkEndTime": 1094.1549999713898,
					"finished": true,
					"transferSize": 9877,
					"resourceSize": 8854,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "High",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/images/sprite-icon.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 589.5389999747276,
					"networkRequestTime": 589.7369999885559,
					"networkEndTime": 1094.2389999628067,
					"finished": true,
					"transferSize": 9877,
					"resourceSize": 8854,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "High",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/fonts/Vi-Regular.woff2",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 600.8330000042915,
					"networkRequestTime": 625.3510000705719,
					"networkEndTime": 1006.7199999690056,
					"finished": true,
					"transferSize": 26076,
					"resourceSize": 24968,
					"statusCode": 200,
					"mimeType": "text/plain",
					"resourceType": "Font",
					"priority": "VeryHigh",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/fonts/Vi-Bold.woff2",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 601.0360000133514,
					"networkRequestTime": 625.5270000696182,
					"networkEndTime": 1006.6120000481606,
					"finished": true,
					"transferSize": 25915,
					"resourceSize": 24816,
					"statusCode": 200,
					"mimeType": "text/plain",
					"resourceType": "Font",
					"priority": "VeryHigh",
					"experimentalFromMainFrame": true,
					"entity": "myvi.in"
				},
				{
					"url": "https://cdn4.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/images/common-icon.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 629.402999997139,
					"networkRequestTime": 1007.3939999938011,
					"networkEndTime": 1735.591000020504,
					"finished": true,
					"transferSize": 3278,
					"resourceSize": 1962,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Image",
					"priority": "Low",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://www.google-analytics.com/g/collect?v=2&tid=G-35QLTJGXWD&gtm=45je4130v9130116650&_p=1704681271536&gcd=11l1l1l1l1&dma=0&cid=575064227.1704681272&ul=en-gb&sr=412x823&uaa=&uab=64&uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.199%7CGoogle%2520Chrome%3B120.0.6099.199&uamb=1&uam=moto%20g%20power%20(2022)&uap=Android&uapv=11.0&uaw=0&_s=1&sid=1704681272&sct=1&seg=0&dl=https%3A%2F%2Fstores.myvi.in%2Fvi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884%2FHome&dt=Vi%20-%20Vodafone%20Idea%20store%2C%20Connaught%20Place%20%7C%20Official%20store&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=1228",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 1225.6970000267029,
					"networkRequestTime": 1226.1370000243187,
					"networkEndTime": 1603.570000052452,
					"finished": true,
					"transferSize": 253,
					"resourceSize": 0,
					"statusCode": 204,
					"mimeType": "text/plain",
					"resourceType": "Ping",
					"priority": "VeryLow",
					"experimentalFromMainFrame": true,
					"entity": "Google Analytics"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/outlet/fav_icon/127902/vi_fav_icon_1_png.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 1865.9550000429153,
					"networkRequestTime": 1866.2419999837875,
					"networkEndTime": 2066.4500000476837,
					"finished": true,
					"transferSize": 2983,
					"resourceSize": 1666,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Other",
					"priority": "High",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				},
				{
					"url": "https://cdn4.singleinterface.com/files/outlet/fav_icon/127902/vi_fav_icon_1_png.png",
					"sessionTargetType": "page",
					"protocol": "h2",
					"rendererStartTime": 2068.0139999985695,
					"networkRequestTime": 2068.518999993801,
					"networkEndTime": 2069.708999991417,
					"finished": true,
					"transferSize": 0,
					"resourceSize": 1666,
					"statusCode": 200,
					"mimeType": "image/png",
					"resourceType": "Other",
					"priority": "High",
					"experimentalFromMainFrame": true,
					"entity": "singleinterface.com"
				}
			],
			"debugData": {
				"type": "debugdata",
				"networkStartTimeTs": 512005288608
			}
		}
	},
	"network-rtt": {
		"id": "network-rtt",
		"title": "Network Round Trip Times",
		"description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more about the Round Trip Time](https://hpbn.co/primer-on-latency-and-bandwidth/).",
		"score": null,
		"scoreDisplayMode": "informative",
		"numericValue": 209.457,
		"numericUnit": "millisecond",
		"displayValue": "210 ms",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "origin",
					"valueType": "text",
					"label": "URL"
				},
				{
					"key": "rtt",
					"valueType": "ms",
					"granularity": 1,
					"label": "Time Spent"
				}
			],
			"items": [
				{
					"origin": "https://cdn4.singleinterface.com",
					"rtt": 209.457
				},
				{
					"origin": "https://stores.myvi.in",
					"rtt": 90.38199999999999
				},
				{
					"origin": "https://www.google-analytics.com",
					"rtt": 73.506
				},
				{
					"origin": "https://www.googletagmanager.com",
					"rtt": 72.59100000000001
				},
				{
					"origin": "https://prod2.singleinterface.com",
					"rtt": 67.221
				}
			],
			"sortedBy": [
				"rtt"
			]
		}
	},
	"network-server-latency": {
		"id": "network-server-latency",
		"title": "Server Backend Latencies",
		"description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more about server response time](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
		"score": null,
		"scoreDisplayMode": "informative",
		"numericValue": 505.07250000000005,
		"numericUnit": "millisecond",
		"displayValue": "510 ms",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "origin",
					"valueType": "text",
					"label": "URL"
				},
				{
					"key": "serverResponseTime",
					"valueType": "ms",
					"granularity": 1,
					"label": "Time Spent"
				}
			],
			"items": [
				{
					"origin": "https://cdn4.singleinterface.com",
					"serverResponseTime": 505.07250000000005
				},
				{
					"origin": "https://stores.myvi.in",
					"serverResponseTime": 205.555
				},
				{
					"origin": "https://www.googletagmanager.com",
					"serverResponseTime": 139.37199999999996
				},
				{
					"origin": "https://www.google-analytics.com",
					"serverResponseTime": 75.196
				},
				{
					"origin": "https://prod2.singleinterface.com",
					"serverResponseTime": 28.23599999999999
				}
			],
			"sortedBy": [
				"serverResponseTime"
			]
		}
	},
	"main-thread-tasks": {
		"id": "main-thread-tasks",
		"title": "Tasks",
		"description": "Lists the toplevel main thread tasks that executed during page load.",
		"score": null,
		"scoreDisplayMode": "informative",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "startTime",
					"valueType": "ms",
					"granularity": 1,
					"label": "Start Time"
				},
				{
					"key": "duration",
					"valueType": "ms",
					"granularity": 1,
					"label": "End Time"
				}
			],
			"items": [
				{
					"duration": 24.42,
					"startTime": 431.465
				},
				{
					"duration": 6.253,
					"startTime": 456.932
				},
				{
					"duration": 10.036,
					"startTime": 575.888
				},
				{
					"duration": 39.03,
					"startTime": 585.93
				},
				{
					"duration": 13.578,
					"startTime": 627.196
				},
				{
					"duration": 14.318,
					"startTime": 858.242
				},
				{
					"duration": 23.92,
					"startTime": 880.736
				},
				{
					"duration": 5.866,
					"startTime": 910.405
				},
				{
					"duration": 9.284,
					"startTime": 1021.786
				},
				{
					"duration": 11.811,
					"startTime": 1198.444
				},
				{
					"duration": 17.195,
					"startTime": 1211.074
				},
				{
					"duration": 7.967,
					"startTime": 1229.262
				},
				{
					"duration": 115.729,
					"startTime": 1737.597
				},
				{
					"duration": 7.758,
					"startTime": 1853.339
				}
			]
		}
	},
	"metrics": {
		"id": "metrics",
		"title": "Metrics",
		"description": "Collects all available metrics.",
		"score": null,
		"scoreDisplayMode": "informative",
		"numericValue": 4633,
		"numericUnit": "millisecond",
		"details": {
			"type": "debugdata",
			"items": [
				{
					"firstContentfulPaint": 1371,
					"firstMeaningfulPaint": 1848,
					"largestContentfulPaint": 4493,
					"interactive": 4633,
					"speedIndex": 3047,
					"totalBlockingTime": 134,
					"maxPotentialFID": 231,
					"cumulativeLayoutShift": 0.025739150159359535,
					"cumulativeLayoutShiftMainFrame": 0.025739150159359535,
					"timeToFirstByte": 806,
					"observedTimeOrigin": 0,
					"observedTimeOriginTs": 512005286705,
					"observedNavigationStart": 0,
					"observedNavigationStartTs": 512005286705,
					"observedFirstPaint": 968,
					"observedFirstPaintTs": 512006254434,
					"observedFirstContentfulPaint": 968,
					"observedFirstContentfulPaintTs": 512006254434,
					"observedFirstContentfulPaintAllFrames": 968,
					"observedFirstContentfulPaintAllFramesTs": 512006254434,
					"observedFirstMeaningfulPaint": 968,
					"observedFirstMeaningfulPaintTs": 512006254434,
					"observedLargestContentfulPaint": 1244,
					"observedLargestContentfulPaintTs": 512006530536,
					"observedLargestContentfulPaintAllFrames": 1244,
					"observedLargestContentfulPaintAllFramesTs": 512006530536,
					"observedTraceEnd": 4402,
					"observedTraceEndTs": 512009688516,
					"observedLoad": 1851,
					"observedLoadTs": 512007138041,
					"observedDomContentLoaded": 912,
					"observedDomContentLoadedTs": 512006198380,
					"observedCumulativeLayoutShift": 0.025739150159359535,
					"observedCumulativeLayoutShiftMainFrame": 0.025739150159359535,
					"observedFirstVisualChange": 637,
					"observedFirstVisualChangeTs": 512005923705,
					"observedLastVisualChange": 1870,
					"observedLastVisualChangeTs": 512007156705,
					"observedSpeedIndex": 924,
					"observedSpeedIndexTs": 512006210375
				},
				{
					"lcpInvalidated": false
				}
			]
		}
	},
	"performance-budget": {
		"id": "performance-budget",
		"title": "Performance budget",
		"description": "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more about performance budgets](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"timing-budget": {
		"id": "timing-budget",
		"title": "Timing budget",
		"description": "Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more about performance budgets](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"resource-summary": {
		"id": "resource-summary",
		"title": "Resources Summary",
		"description": "Aggregates all network requests and groups them by type",
		"score": null,
		"scoreDisplayMode": "informative",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "label",
					"valueType": "text",
					"label": "Resource Type"
				},
				{
					"key": "requestCount",
					"valueType": "numeric",
					"label": "Requests"
				},
				{
					"key": "transferSize",
					"valueType": "bytes",
					"label": "Transfer Size"
				}
			],
			"items": [
				{
					"resourceType": "total",
					"label": "Total",
					"requestCount": 50,
					"transferSize": 914649
				},
				{
					"resourceType": "image",
					"label": "Image",
					"requestCount": 29,
					"transferSize": 599608
				},
				{
					"resourceType": "script",
					"label": "Script",
					"requestCount": 9,
					"transferSize": 206944
				},
				{
					"resourceType": "font",
					"label": "Font",
					"requestCount": 2,
					"transferSize": 51991
				},
				{
					"resourceType": "document",
					"label": "Document",
					"requestCount": 1,
					"transferSize": 26631
				},
				{
					"resourceType": "stylesheet",
					"label": "Stylesheet",
					"requestCount": 6,
					"transferSize": 26239
				},
				{
					"resourceType": "other",
					"label": "Other",
					"requestCount": 3,
					"transferSize": 3236
				},
				{
					"resourceType": "media",
					"label": "Media",
					"requestCount": 0,
					"transferSize": 0
				},
				{
					"resourceType": "third-party",
					"label": "Third-party",
					"requestCount": 26,
					"transferSize": 463859
				}
			]
		}
	},
	"third-party-summary": {
		"id": "third-party-summary",
		"title": "Minimize third-party usage",
		"description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn how to minimize third-party impact](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
		"score": null,
		"scoreDisplayMode": "informative",
		"displayValue": "Third-party code blocked the main thread for 200 ms",
		"metricSavings": {
			"TBT": 207.0000000000004
		},
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "entity",
					"valueType": "text",
					"label": "Third-Party",
					"subItemsHeading": {
						"key": "url",
						"valueType": "url"
					}
				},
				{
					"key": "transferSize",
					"granularity": 1,
					"valueType": "bytes",
					"label": "Transfer Size",
					"subItemsHeading": {
						"key": "transferSize"
					}
				},
				{
					"key": "blockingTime",
					"granularity": 1,
					"valueType": "ms",
					"label": "Main-Thread Blocking Time",
					"subItemsHeading": {
						"key": "blockingTime"
					}
				}
			],
			"items": [
				{
					"mainThreadTime": 708.6559999999986,
					"blockingTime": 184.72799999999998,
					"transferSize": 319416,
					"tbtImpact": 187.72317223859358,
					"entity": "singleinterface.com",
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/jquery-3.5.1.min.js?v=2.18",
								"mainThreadTime": 569.4199999999986,
								"blockingTime": 158.408,
								"transferSize": 32296,
								"tbtImpact": 187.72317223859358
							},
							{
								"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForViUpdated/js/enterprises-common.min.js?v=2.18",
								"mainThreadTime": 108.28799999999993,
								"blockingTime": 26.319999999999993,
								"transferSize": 6442,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google-MB-banner-1280x421px-1-21-09-23-02-50-19.jpg",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 123989,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/vi-Banner-25-09-23-11-31-05.jpg",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 73347,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/banner_images/127902/3740_1646292393_311645174002Aboutus.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 15252,
								"tbtImpact": 0
							},
							{
								"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/slick.min.js?v=2.18",
								"mainThreadTime": 4.364000000000001,
								"blockingTime": 0,
								"transferSize": 11803,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/banner_images/127902/8020_1640676687_internationalroaming.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 5835,
								"tbtImpact": 0
							},
							{
								"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/enterprises-gtm_datalayer.min.js?v=2.18",
								"mainThreadTime": 21.891999999999996,
								"blockingTime": 0,
								"transferSize": 4579,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/banner_images/127902/5713_1640676688_helpsupport.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 4222,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/banner_images/127902/8375_1672653162_unnamed2.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 4135,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/banner_images/127902/3365_1672651428_29761668670398Group2389.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 4061,
								"tbtImpact": 0
							},
							{
								"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/common.min.js?v=2.18",
								"mainThreadTime": 3.8120000000000003,
								"blockingTime": 0,
								"transferSize": 3971,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/banner_images/127902/3521_1640676688_getvip.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 3793,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/banner_images/127902/7605_1640676689_porttovi.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 3608,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/banner_images/127902/6809_1640676689_buypostpaid.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 3462,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/banner_images/127902/6562_1640676688_buyprepaid.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 3461,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/images/common-icon.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 3278,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/outlet/fav_icon/127902/vi_fav_icon_1_png.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 2983,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/outlet/logo/127902/vi_logo_png.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 2897,
								"tbtImpact": 0
							},
							{
								"url": "https://cdn4.singleinterface.com/files/banner_images/127902/1096_1641969120_cookies.png",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 2339,
								"tbtImpact": 0
							},
							{
								"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForViUpdated/js/enterprises-home_page.min.js?v=2.18",
								"mainThreadTime": 0.484,
								"blockingTime": 0,
								"transferSize": 1907,
								"tbtImpact": 0
							},
							{
								"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/lazy.min.js?v=2.18",
								"mainThreadTime": 0.39599999999999996,
								"blockingTime": 0,
								"transferSize": 1756,
								"tbtImpact": 0
							}
						]
					}
				},
				{
					"mainThreadTime": 172.86000000000004,
					"blockingTime": 17.331999999999994,
					"transferSize": 144190,
					"tbtImpact": 19.276827761406828,
					"entity": "Google Tag Manager",
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"url": "https://www.googletagmanager.com/gtag/js?id=G-35QLTJGXWD&l=dataLayerGa4",
								"mainThreadTime": 120.94800000000004,
								"blockingTime": 17.331999999999994,
								"transferSize": 80155,
								"tbtImpact": 19.225215805890834
							},
							{
								"url": "https://www.googletagmanager.com/gtm.js?id=GTM-WCVRQMW&l=SIdataLayer",
								"mainThreadTime": 51.912000000000006,
								"blockingTime": 0,
								"transferSize": 64035,
								"tbtImpact": 0.051611955515995976
							}
						]
					}
				},
				{
					"mainThreadTime": 0,
					"blockingTime": 0,
					"transferSize": 253,
					"tbtImpact": 0,
					"entity": "Google Analytics",
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"url": "https://www.google-analytics.com/g/collect?v=2&tid=G-35QLTJGXWD&gtm=45je4130v9130116650&_p=1704681271536&gcd=11l1l1l1l1&dma=0&cid=575064227.1704681272&ul=en-gb&sr=412x823&uaa=&uab=64&uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.199%7CGoogle%2520Chrome%3B120.0.6099.199&uamb=1&uam=moto%20g%20power%20(2022)&uap=Android&uapv=11.0&uaw=0&_s=1&sid=1704681272&sct=1&seg=0&dl=https%3A%2F%2Fstores.myvi.in%2Fvi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884%2FHome&dt=Vi%20-%20Vodafone%20Idea%20store%2C%20Connaught%20Place%20%7C%20Official%20store&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=1228",
								"mainThreadTime": 0,
								"blockingTime": 0,
								"transferSize": 253,
								"tbtImpact": 0
							}
						]
					}
				}
			],
			"summary": {
				"wastedBytes": 463859,
				"wastedMs": 202.05999999999997
			},
			"isEntityGrouped": true
		},
		"guidanceLevel": 1
	},
	"third-party-facades": {
		"id": "third-party-facades",
		"title": "Lazy load third-party resources with facades",
		"description": "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn how to defer third-parties with a facade](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/).",
		"score": null,
		"scoreDisplayMode": "notApplicable",
		"metricSavings": {
			"TBT": 0
		},
		"guidanceLevel": 3
	},
	"largest-contentful-paint-element": {
		"id": "largest-contentful-paint-element",
		"title": "Largest Contentful Paint element",
		"description": "This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
		"score": 0,
		"scoreDisplayMode": "metricSavings",
		"displayValue": "4,490 ms",
		"metricSavings": {
			"LCP": 1993.0370000000003
		},
		"details": {
			"type": "list",
			"items": [
				{
					"type": "table",
					"headings": [
						{
							"key": "node",
							"valueType": "node",
							"label": "Element"
						}
					],
					"items": [
						{
							"node": {
								"type": "node",
								"lhId": "page-0-P",
								"path": "1,HTML,1,BODY,9,DIV,0,DIV,0,DIV,0,DIV,2,P",
								"selector": "div.container > div.cookie-content > div.cookie-inner > p",
								"boundingRect": {
									"top": 597,
									"bottom": 746,
									"left": 25,
									"right": 387,
									"width": 362,
									"height": 149
								},
								"snippet": "<p>",
								"nodeLabel": "On our website, we use services (including from third-party providers) that hel…"
							}
						}
					]
				},
				{
					"type": "table",
					"headings": [
						{
							"key": "phase",
							"valueType": "text",
							"label": "Phase"
						},
						{
							"key": "percent",
							"valueType": "text",
							"label": "% of LCP"
						},
						{
							"key": "timing",
							"valueType": "ms",
							"label": "Timing"
						}
					],
					"items": [
						{
							"phase": "TTFB",
							"timing": 805.5550000000001,
							"percent": "18%"
						},
						{
							"phase": "Load Delay",
							"timing": 0,
							"percent": "0%"
						},
						{
							"phase": "Load Time",
							"timing": 0,
							"percent": "0%"
						},
						{
							"phase": "Render Delay",
							"timing": 3687.482,
							"percent": "82%"
						}
					]
				}
			]
		},
		"guidanceLevel": 1
	},
	"lcp-lazy-loaded": {
		"id": "lcp-lazy-loaded",
		"title": "Largest Contentful Paint image was not lazily loaded",
		"description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more about optimal lazy loading](https://web.dev/articles/lcp-lazy-loading).",
		"score": null,
		"scoreDisplayMode": "notApplicable",
		"metricSavings": {
			"LCP": 0
		},
		"guidanceLevel": 3
	},
	"layout-shift-elements": {
		"id": "layout-shift-elements",
		"title": "Avoid large layout shifts",
		"description": "These DOM elements were most affected by layout shifts. Some layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)",
		"score": null,
		"scoreDisplayMode": "informative",
		"displayValue": "11 elements found",
		"metricSavings": {
			"CLS": 0.025739150159359535
		},
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"label": "Element"
				},
				{
					"key": "score",
					"valueType": "numeric",
					"granularity": 0.001,
					"label": "Layout shift impact"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "page-1-MAIN",
						"path": "1,HTML,1,BODY,2,MAIN",
						"selector": "body.home_page > main",
						"boundingRect": {
							"top": 73,
							"bottom": 5744,
							"left": 0,
							"right": 412,
							"width": 412,
							"height": 5672
						},
						"snippet": "<main>",
						"nodeLabel": "Vi (Vodafone Idea) Stores near me \nVi (Vodafone Idea) Stores in Delhi \nVi (Voda…"
					},
					"score": 0.014349199907399402
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-2-DIV",
						"path": "1,HTML,1,BODY,9,DIV",
						"selector": "body.home_page > div#cookie-consent-popup",
						"boundingRect": {
							"top": 576,
							"bottom": 823,
							"left": 0,
							"right": 412,
							"width": 412,
							"height": 247
						},
						"snippet": "<div id=\"cookie-consent-popup\" class=\"cookie-overlay\">",
						"nodeLabel": "×\n\nOn our website, we use services (including from third-party providers) that …"
					},
					"score": 0.007293353746849759
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-3-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,1,DIV",
						"selector": "main > div.container > div.row > div.col-md-6",
						"boundingRect": {
							"top": 592,
							"bottom": 1335,
							"left": 0,
							"right": 412,
							"width": 412,
							"height": 744
						},
						"snippet": "<div class=\"col-md-6 col-block\">",
						"nodeLabel": "rating & reviews\n3.1 \nview all\nMumba Devi Film production\nPosted on 18-12-2023\n…"
					},
					"score": 0.002701909616662948
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-4-LI",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,0,DIV,3,DIV,0,DIV,1,DIV,0,UL,7,LI",
						"selector": "div.card > div#speakableIntroContent > ul.list-unstyled > li.info-card",
						"boundingRect": {
							"top": 512,
							"bottom": 552,
							"left": 15,
							"right": 397,
							"width": 382,
							"height": 40
						},
						"snippet": "<li class=\"info-card call-direction\">",
						"nodeLabel": "call\nget directions"
					},
					"score": 0.0004517517192908526
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-5-LI",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,0,DIV,3,DIV,0,DIV,1,DIV,0,UL,6,LI",
						"selector": "div.card > div#speakableIntroContent > ul.list-unstyled > li.info-card",
						"boundingRect": {
							"top": 467,
							"bottom": 505,
							"left": 15,
							"right": 397,
							"width": 382,
							"height": 38
						},
						"snippet": "<li class=\"info-card cot-st\">",
						"nodeLabel": "\tVi Store"
					},
					"score": 0.0004312175502321775
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-6-DIV",
						"path": "1,HTML,1,BODY,1,NAV,0,DIV,0,DIV",
						"selector": "body.home_page > nav.navbar > div.container > div.navbar-header",
						"boundingRect": {
							"top": 16,
							"bottom": 56,
							"left": 15,
							"right": 129,
							"width": 114,
							"height": 40
						},
						"snippet": "<div class=\"navbar-header\">",
						"nodeLabel": "Vi - Vodafone Idea Store, Connaught Place"
					},
					"score": 0.0002081472966246589
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-7-LI",
						"path": "1,HTML,1,BODY,2,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,0,OL,2,LI",
						"selector": "div.row > div.col-md-12 > ol#breadcrumb > li.breadcrumb-item",
						"boundingRect": {
							"top": 135,
							"bottom": 161,
							"left": 15,
							"right": 288,
							"width": 273,
							"height": 25
						},
						"snippet": "<li class=\"breadcrumb-item\">",
						"nodeLabel": "Vi (Vodafone Idea) Stores in New Delhi "
					},
					"score": 0.00013449343189739566
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-8-LI",
						"path": "1,HTML,1,BODY,2,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,0,OL,0,LI",
						"selector": "div.row > div.col-md-12 > ol#breadcrumb > li.breadcrumb-item",
						"boundingRect": {
							"top": 85,
							"bottom": 110,
							"left": 15,
							"right": 262,
							"width": 247,
							"height": 25
						},
						"snippet": "<li class=\"breadcrumb-item\">",
						"nodeLabel": "Vi (Vodafone Idea) Stores near me "
					},
					"score": 0.00012046354151960978
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-9-DIV",
						"path": "1,HTML,1,BODY,1,NAV,0,DIV,1,DIV",
						"selector": "body.home_page > nav.navbar > div.container > div.mobile-trigger",
						"boundingRect": {
							"top": 27,
							"bottom": 45,
							"left": 367,
							"right": 397,
							"width": 30,
							"height": 17
						},
						"snippet": "<div class=\"mobile-trigger\">",
						"nodeLabel": "body.home_page > nav.navbar > div.container > div.mobile-trigger"
					},
					"score": 0.000032180667570259766
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-10-::before",
						"path": "1,HTML,1,BODY,1,NAV,0,DIV,1,DIV,0,SPAN,0,::before",
						"selector": "div.container > div.mobile-trigger > span.toggle > ::before",
						"boundingRect": {
							"top": 26,
							"bottom": 29,
							"left": 367,
							"right": 397,
							"width": 30,
							"height": 3
						},
						"snippet": "<::before>",
						"nodeLabel": "div.container > div.mobile-trigger > span.toggle > ::before"
					},
					"score": 0.000008216340656236537
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-11-::after",
						"path": "1,HTML,1,BODY,1,NAV,0,DIV,1,DIV,0,SPAN,0,::after",
						"selector": "div.container > div.mobile-trigger > span.toggle > ::after",
						"boundingRect": {
							"top": 42,
							"bottom": 45,
							"left": 367,
							"right": 397,
							"width": 30,
							"height": 3
						},
						"snippet": "<::after>",
						"nodeLabel": "div.container > div.mobile-trigger > span.toggle > ::after"
					},
					"score": 0.000008216340656236537
				}
			]
		},
		"guidanceLevel": 2
	},
	"long-tasks": {
		"id": "long-tasks",
		"title": "Avoid long main-thread tasks",
		"description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/articles/long-tasks-devtools)",
		"score": null,
		"scoreDisplayMode": "informative",
		"displayValue": "5 long tasks found",
		"metricSavings": {
			"TBT": 134.33899999999994
		},
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "startTime",
					"valueType": "ms",
					"granularity": 1,
					"label": "Start Time"
				},
				{
					"key": "duration",
					"valueType": "ms",
					"granularity": 1,
					"label": "Duration"
				}
			],
			"items": [
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/jquery-3.5.1.min.js?v=2.18",
					"duration": 231,
					"startTime": 5048.341
				},
				{
					"url": "https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home",
					"duration": 98,
					"startTime": 1198.1990000000003
				},
				{
					"url": "https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home",
					"duration": 78,
					"startTime": 1361.1990000000003
				},
				{
					"url": "https://www.googletagmanager.com/gtag/js?id=G-35QLTJGXWD&l=dataLayerGa4",
					"duration": 69,
					"startTime": 3802.3810000000003
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/jquery-3.5.1.min.js?v=2.18",
					"duration": 57,
					"startTime": 2576.435
				}
			],
			"sortedBy": [
				"duration"
			],
			"skipSumming": [
				"startTime"
			],
			"debugData": {
				"type": "debugdata",
				"urls": [
					"https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/jquery-3.5.1.min.js?v=2.18",
					"https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home",
					"https://www.googletagmanager.com/gtag/js?id=G-35QLTJGXWD&l=dataLayerGa4"
				],
				"tasks": [
					{
						"urlIndex": 0,
						"startTime": 5048.3,
						"duration": 231,
						"other": 231
					},
					{
						"urlIndex": 1,
						"startTime": 1198.2,
						"duration": 98,
						"other": 98,
						"scriptEvaluation": 0
					},
					{
						"urlIndex": 1,
						"startTime": 1361.2,
						"duration": 78,
						"other": 78,
						"paintCompositeRender": 0,
						"styleLayout": 0
					},
					{
						"urlIndex": 2,
						"startTime": 3802.4,
						"duration": 69,
						"other": 69,
						"scriptEvaluation": 0
					},
					{
						"urlIndex": 0,
						"startTime": 2576.4,
						"duration": 57,
						"other": 57,
						"scriptEvaluation": 0
					}
				]
			}
		},
		"guidanceLevel": 1
	},
	"no-unload-listeners": {
		"id": "no-unload-listeners",
		"title": "Avoids `unload` event listeners",
		"description": "The `unload` event does not fire reliably and listening for it can prevent browser optimizations like the Back-Forward Cache. Use `pagehide` or `visibilitychange` events instead. [Learn more about unload event listeners](https://web.dev/articles/bfcache#never_use_the_unload_event)",
		"score": 1,
		"scoreDisplayMode": "binary"
	},
	"non-composited-animations": {
		"id": "non-composited-animations",
		"title": "Avoid non-composited animations",
		"description": "Animations which are not composited can be janky and increase CLS. [Learn how to avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/)",
		"score": null,
		"scoreDisplayMode": "informative",
		"displayValue": "13 animated elements found",
		"metricSavings": {
			"CLS": 0
		},
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"subItemsHeading": {
						"key": "failureReason",
						"valueType": "text"
					},
					"label": "Element"
				},
				{
					"key": null,
					"valueType": "text",
					"subItemsHeading": {
						"key": "animation",
						"valueType": "text"
					},
					"label": "Name"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "page-13-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div#slick-slide30",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 39,
							"right": 373,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-current slick-active\" style=\"width: 334px;\" data-slick-index=\"0\" aria-hidden=\"false\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide30\" aria-describedby=\"slick-slide-control30\">",
						"nodeLabel": "Here’s your chance to win the hottest prizes. Comment #Vi20FANFest with the rig…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-14-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,5,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div#slick-slide34",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 1447,
							"right": 1781,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide\" style=\"width: 334px;\" data-slick-index=\"4\" aria-hidden=\"true\" tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide34\" aria-describedby=\"slick-slide-control34\">",
						"nodeLabel": "Get in on the action now. Comment the right answer with #Vi20FANfest &amp; stan…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-15-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,2,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div#slick-slide31",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 391,
							"right": 725,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide\" style=\"width: 334px;\" data-slick-index=\"1\" aria-hidden=\"true\" tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide31\" aria-describedby=\"slick-slide-control31\">",
						"nodeLabel": "Here’s your chance to win the hottest prizes. Comment #Vi20FANFest with the rig…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-16-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,4,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div#slick-slide33",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 1095,
							"right": 1429,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide\" style=\"width: 334px;\" data-slick-index=\"3\" aria-hidden=\"true\" tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide33\" aria-describedby=\"slick-slide-control33\">",
						"nodeLabel": "Get in on the action now. Comment the right answer with #Vi20FANfest &amp; stan…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-17-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,6,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div#slick-slide35",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 1799,
							"right": 2133,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide\" style=\"width: 334px;\" data-slick-index=\"5\" aria-hidden=\"true\" tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide35\" aria-describedby=\"slick-slide-control35\">",
						"nodeLabel": "Look into each other's eyes instead of a screen this #ValentinesDay. #LookUp fo…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-18-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,3,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div#slick-slide32",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 743,
							"right": 1077,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide\" style=\"width: 334px;\" data-slick-index=\"2\" aria-hidden=\"true\" tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide32\" aria-describedby=\"slick-slide-control32\">",
						"nodeLabel": "Get in on the action now. Comment the right answer with #Vi20FANfest &amp; stan…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-19-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,7,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div.card",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 2151,
							"right": 2485,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-cloned\" style=\"width: 334px;\" data-slick-index=\"6\" id=\"\" aria-hidden=\"true\" tabindex=\"-1\">",
						"nodeLabel": "Here’s your chance to win the hottest prizes. Comment #Vi20FANFest with the rig…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-20-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,12,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div.card",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 3911,
							"right": 4245,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-cloned\" style=\"width: 334px;\" data-slick-index=\"11\" id=\"\" aria-hidden=\"true\" tabindex=\"-1\">",
						"nodeLabel": "Look into each other's eyes instead of a screen this #ValentinesDay. #LookUp fo…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-21-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div.card",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": -313,
							"right": 21,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-cloned\" style=\"width: 334px;\" data-slick-index=\"-1\" id=\"\" aria-hidden=\"true\" tabindex=\"-1\">",
						"nodeLabel": "Look into each other's eyes instead of a screen this #ValentinesDay. #LookUp fo…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-22-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,8,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div.card",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 2503,
							"right": 2837,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-cloned\" style=\"width: 334px;\" data-slick-index=\"7\" id=\"\" aria-hidden=\"true\" tabindex=\"-1\">",
						"nodeLabel": "Here’s your chance to win the hottest prizes. Comment #Vi20FANFest with the rig…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-23-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,10,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div.card",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 3207,
							"right": 3541,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-cloned\" style=\"width: 334px;\" data-slick-index=\"9\" id=\"\" aria-hidden=\"true\" tabindex=\"-1\">",
						"nodeLabel": "Get in on the action now. Comment the right answer with #Vi20FANfest &amp; stan…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-24-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,11,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div.card",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 3559,
							"right": 3893,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-cloned\" style=\"width: 334px;\" data-slick-index=\"10\" id=\"\" aria-hidden=\"true\" tabindex=\"-1\">",
						"nodeLabel": "Get in on the action now. Comment the right answer with #Vi20FANfest &amp; stan…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "page-25-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,9,DIV",
						"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div.card",
						"boundingRect": {
							"top": 4948,
							"bottom": 5222,
							"left": 2855,
							"right": 3189,
							"width": 334,
							"height": 275
						},
						"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-cloned\" style=\"width: 334px;\" data-slick-index=\"8\" id=\"\" aria-hidden=\"true\" tabindex=\"-1\">",
						"nodeLabel": "Get in on the action now. Comment the right answer with #Vi20FANfest &amp; stan…"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"failureReason": "Unsupported CSS Property: visibility",
								"animation": "visibility"
							}
						]
					}
				}
			]
		},
		"guidanceLevel": 2
	},
	"unsized-images": {
		"id": "unsized-images",
		"title": "Image elements do not have explicit `width` and `height`",
		"description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
		"score": 0.5,
		"scoreDisplayMode": "metricSavings",
		"metricSavings": {
			"CLS": 0
		},
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"label": ""
				},
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				}
			],
			"items": [
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//9492_1677256430_5FreeEventstoExploreatDubaiShoppingFestival2022GMB.jpg",
					"node": {
						"type": "node",
						"lhId": "1-371-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,0,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": -327,
							"right": -25,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Visit Dubai (Dubai shopping festival)\" src=\"https://stores.myvi.in///files/Blog_images/127902//9492_1677256430_5FreeEv…\">",
						"nodeLabel": "Visit Dubai (Dubai shopping festival)"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//4777_1677255333_SagittariansluckynumberGMB0.jpg",
					"node": {
						"type": "node",
						"lhId": "1-372-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,1,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 55,
							"right": 357,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Get a Phone Number with Your Lucky Number - Sagittarius\" src=\"https://stores.myvi.in///files/Blog_images/127902//4777_1677255333_Sagitta…\">",
						"nodeLabel": "Get a Phone Number with Your Lucky Number - Sagittarius"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostStatic332x249.jpg",
					"node": {
						"type": "node",
						"lhId": "1-373-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,2,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 437,
							"right": 739,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Christmas Special Games (List of games related to snow, celebrations etc.)\" src=\"https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostSt…\">",
						"nodeLabel": "Christmas Special Games (List of games related to snow, celebrations etc.)"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//5932_1677255791_5BestMobileGamesof2022GMB0.jpg",
					"node": {
						"type": "node",
						"lhId": "1-374-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,3,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 819,
							"right": 1121,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Best of 2022 OR Best Games of the Year (Top 5 popular games that you can p…\" src=\"https://stores.myvi.in///files/Blog_images/127902//5932_1677255791_5BestMo…\">",
						"nodeLabel": "Best of 2022 OR Best Games of the Year (Top 5 popular games that you can play: …"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//2390_1677255855_MissedCallAlertsGMB1.jpg",
					"node": {
						"type": "node",
						"lhId": "1-375-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,4,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 1201,
							"right": 1503,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Vi Missed Call Alert (See link in Dec Listicle Ideas for more info)\" src=\"https://stores.myvi.in///files/Blog_images/127902//2390_1677255855_MissedC…\">",
						"nodeLabel": "Vi Missed Call Alert (See link in Dec Listicle Ideas for more info)"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//1241_1677255937_4BenefitsofVisPostpaidFamilyPlansGMB332.jpg",
					"node": {
						"type": "node",
						"lhId": "1-376-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,5,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 1583,
							"right": 1885,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Vi Postpaid Family Plans\" src=\"https://stores.myvi.in///files/Blog_images/127902//1241_1677255937_4Benefi…\">",
						"nodeLabel": "Vi Postpaid Family Plans"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//7157_1677256028_ViMNPGMB.jpg",
					"node": {
						"type": "node",
						"lhId": "1-377-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,6,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 1965,
							"right": 2267,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Mobile Number Portability with Vi\" src=\"https://stores.myvi.in///files/Blog_images/127902//7157_1677256028_ViMNPGM…\">",
						"nodeLabel": "Mobile Number Portability with Vi"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//3348_1677256165_SMPost332x249.jpg",
					"node": {
						"type": "node",
						"lhId": "1-378-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,7,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 2347,
							"right": 2649,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Best-selling Vi postpaid plans with free SIM home delivery (How Free SIM D…\" src=\"https://stores.myvi.in///files/Blog_images/127902//3348_1677256165_SMPost3…\">",
						"nodeLabel": "Best-selling Vi postpaid plans with free SIM home delivery (How Free SIM Delive…"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//8086_1677256221_SMSatatic332x249.jpg",
					"node": {
						"type": "node",
						"lhId": "1-379-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,8,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 2729,
							"right": 3031,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"What is the Difference Between 4G and 5G?\" src=\"https://stores.myvi.in///files/Blog_images/127902//8086_1677256221_SMSatat…\">",
						"nodeLabel": "What is the Difference Between 4G and 5G?"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//8091_1677256292_Vi5places.ChristmasTravel.UKGMB.jpg",
					"node": {
						"type": "node",
						"lhId": "1-380-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,9,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 3111,
							"right": 3413,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Places to visit in UK (Christmas)\" src=\"https://stores.myvi.in///files/Blog_images/127902//8091_1677256292_Vi5plac…\">",
						"nodeLabel": "Places to visit in UK (Christmas)"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//9492_1677256430_5FreeEventstoExploreatDubaiShoppingFestival2022GMB.jpg",
					"node": {
						"type": "node",
						"lhId": "1-381-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,10,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 3493,
							"right": 3795,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Visit Dubai (Dubai shopping festival)\" src=\"https://stores.myvi.in///files/Blog_images/127902//9492_1677256430_5FreeEv…\">",
						"nodeLabel": "Visit Dubai (Dubai shopping festival)"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//4777_1677255333_SagittariansluckynumberGMB0.jpg",
					"node": {
						"type": "node",
						"lhId": "1-382-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,11,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 3875,
							"right": 4177,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Get a Phone Number with Your Lucky Number - Sagittarius\" src=\"https://stores.myvi.in///files/Blog_images/127902//4777_1677255333_Sagitta…\">",
						"nodeLabel": "Get a Phone Number with Your Lucky Number - Sagittarius"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostStatic332x249.jpg",
					"node": {
						"type": "node",
						"lhId": "1-383-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,12,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 4257,
							"right": 4559,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Christmas Special Games (List of games related to snow, celebrations etc.)\" src=\"https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostSt…\">",
						"nodeLabel": "Christmas Special Games (List of games related to snow, celebrations etc.)"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//5932_1677255791_5BestMobileGamesof2022GMB0.jpg",
					"node": {
						"type": "node",
						"lhId": "1-384-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,13,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 4639,
							"right": 4941,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Best of 2022 OR Best Games of the Year (Top 5 popular games that you can p…\" src=\"https://stores.myvi.in///files/Blog_images/127902//5932_1677255791_5BestMo…\">",
						"nodeLabel": "Best of 2022 OR Best Games of the Year (Top 5 popular games that you can play: …"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//2390_1677255855_MissedCallAlertsGMB1.jpg",
					"node": {
						"type": "node",
						"lhId": "1-385-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,14,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 5021,
							"right": 5323,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Vi Missed Call Alert (See link in Dec Listicle Ideas for more info)\" src=\"https://stores.myvi.in///files/Blog_images/127902//2390_1677255855_MissedC…\">",
						"nodeLabel": "Vi Missed Call Alert (See link in Dec Listicle Ideas for more info)"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//1241_1677255937_4BenefitsofVisPostpaidFamilyPlansGMB332.jpg",
					"node": {
						"type": "node",
						"lhId": "1-386-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,15,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 5403,
							"right": 5705,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Vi Postpaid Family Plans\" src=\"https://stores.myvi.in///files/Blog_images/127902//1241_1677255937_4Benefi…\">",
						"nodeLabel": "Vi Postpaid Family Plans"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//7157_1677256028_ViMNPGMB.jpg",
					"node": {
						"type": "node",
						"lhId": "1-387-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,16,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 5785,
							"right": 6087,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Mobile Number Portability with Vi\" src=\"https://stores.myvi.in///files/Blog_images/127902//7157_1677256028_ViMNPGM…\">",
						"nodeLabel": "Mobile Number Portability with Vi"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//3348_1677256165_SMPost332x249.jpg",
					"node": {
						"type": "node",
						"lhId": "1-388-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,17,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 6167,
							"right": 6469,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Best-selling Vi postpaid plans with free SIM home delivery (How Free SIM D…\" src=\"https://stores.myvi.in///files/Blog_images/127902//3348_1677256165_SMPost3…\">",
						"nodeLabel": "Best-selling Vi postpaid plans with free SIM home delivery (How Free SIM Delive…"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//8086_1677256221_SMSatatic332x249.jpg",
					"node": {
						"type": "node",
						"lhId": "1-389-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,18,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 6549,
							"right": 6851,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"What is the Difference Between 4G and 5G?\" src=\"https://stores.myvi.in///files/Blog_images/127902//8086_1677256221_SMSatat…\">",
						"nodeLabel": "What is the Difference Between 4G and 5G?"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//8091_1677256292_Vi5places.ChristmasTravel.UKGMB.jpg",
					"node": {
						"type": "node",
						"lhId": "1-390-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,19,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 6931,
							"right": 7233,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Places to visit in UK (Christmas)\" src=\"https://stores.myvi.in///files/Blog_images/127902//8091_1677256292_Vi5plac…\">",
						"nodeLabel": "Places to visit in UK (Christmas)"
					}
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//9492_1677256430_5FreeEventstoExploreatDubaiShoppingFestival2022GMB.jpg",
					"node": {
						"type": "node",
						"lhId": "1-391-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,20,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 7313,
							"right": 7615,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Visit Dubai (Dubai shopping festival)\" src=\"https://stores.myvi.in///files/Blog_images/127902//9492_1677256430_5FreeEv…\">",
						"nodeLabel": "Visit Dubai (Dubai shopping festival)"
					}
				}
			]
		},
		"guidanceLevel": 3
	},
	"valid-source-maps": {
		"id": "valid-source-maps",
		"title": "Page has valid source maps",
		"description": "Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more about source maps](https://developer.chrome.com/docs/devtools/javascript/source-maps/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"prioritize-lcp-image": {
		"id": "prioritize-lcp-image",
		"title": "Preload Largest Contentful Paint image",
		"description": "If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP. [Learn more about preloading LCP elements](https://web.dev/articles/optimize-lcp#optimize_when_the_resource_is_discovered).",
		"score": null,
		"scoreDisplayMode": "notApplicable",
		"metricSavings": {
			"LCP": 0
		},
		"guidanceLevel": 3
	},
	"csp-xss": {
		"id": "csp-xss",
		"title": "Ensure CSP is effective against XSS attacks",
		"description": "A strong Content Security Policy (CSP) significantly reduces the risk of cross-site scripting (XSS) attacks. [Learn how to use a CSP to prevent XSS](https://developer.chrome.com/docs/lighthouse/best-practices/csp-xss/)",
		"score": null,
		"scoreDisplayMode": "informative",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "description",
					"valueType": "text",
					"subItemsHeading": {
						"key": "description"
					},
					"label": "Description"
				},
				{
					"key": "directive",
					"valueType": "code",
					"subItemsHeading": {
						"key": "directive"
					},
					"label": "Directive"
				},
				{
					"key": "severity",
					"valueType": "text",
					"subItemsHeading": {
						"key": "severity"
					},
					"label": "Severity"
				}
			],
			"items": [
				{
					"directive": "script-src",
					"description": "Host allowlists can frequently be bypassed. Consider using CSP nonces or hashes instead, along with `'strict-dynamic'` if necessary.",
					"severity": "High"
				},
				{
					"directive": "script-src",
					"description": "`'unsafe-inline'` allows the execution of unsafe in-page scripts and event handlers. Consider using CSP nonces or hashes to allow scripts individually.",
					"severity": "High"
				},
				{
					"directive": "script-src",
					"description": "Avoid using plain URL schemes (https:) in this directive. Plain URL schemes allow scripts to be sourced from an unsafe domain.",
					"severity": "High"
				},
				{
					"directive": "object-src",
					"description": "Avoid using plain URL schemes (https:) in this directive. Plain URL schemes allow scripts to be sourced from an unsafe domain.",
					"severity": "High"
				}
			]
		}
	},
	"script-treemap-data": {
		"id": "script-treemap-data",
		"title": "Script Treemap Data",
		"description": "Used for treemap app",
		"score": null,
		"scoreDisplayMode": "informative",
		"details": {
			"type": "treemap-data",
			"nodes": [
				{
					"name": "https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home",
					"resourceBytes": 1635,
					"unusedBytes": 655,
					"children": [
						{
							"name": "(inline) window.SIdataLa…",
							"resourceBytes": 184,
							"unusedBytes": 0
						},
						{
							"name": "(inline) !function(a, b,…",
							"resourceBytes": 374,
							"unusedBytes": 0
						},
						{
							"name": "(inline) window.dataLaye…",
							"resourceBytes": 319,
							"unusedBytes": 0
						},
						{
							"name": "(inline) function getUrl…",
							"resourceBytes": 678,
							"unusedBytes": 655
						},
						{
							"name": "(inline) this.media='all…",
							"resourceBytes": 16,
							"unusedBytes": 0
						},
						{
							"name": "(inline) this.media='all…",
							"resourceBytes": 16,
							"unusedBytes": 0
						},
						{
							"name": "(inline) this.media='all…",
							"resourceBytes": 16,
							"unusedBytes": 0
						},
						{
							"name": "(inline) this.media='all…",
							"resourceBytes": 16,
							"unusedBytes": 0
						},
						{
							"name": "(inline) this.media='all…",
							"resourceBytes": 16,
							"unusedBytes": 0
						}
					]
				},
				{
					"name": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/jquery-3.5.1.min.js?v=2.18",
					"resourceBytes": 89476,
					"unusedBytes": 35760
				},
				{
					"name": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/slick.min.js?v=2.18",
					"resourceBytes": 42835,
					"unusedBytes": 12175
				},
				{
					"name": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/lazy.min.js?v=2.18",
					"resourceBytes": 717,
					"unusedBytes": 0
				},
				{
					"name": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForViUpdated/js/enterprises-common.min.js?v=2.18",
					"resourceBytes": 22061,
					"unusedBytes": 16919
				},
				{
					"name": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/common.min.js?v=2.18",
					"resourceBytes": 8530,
					"unusedBytes": 6100
				},
				{
					"name": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForViUpdated/js/enterprises-home_page.min.js?v=2.18",
					"resourceBytes": 1496,
					"unusedBytes": 469
				},
				{
					"name": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/enterprises-gtm_datalayer.min.js?v=2.18",
					"resourceBytes": 17138,
					"unusedBytes": 16495
				},
				{
					"name": "https://www.googletagmanager.com/gtag/js?id=G-35QLTJGXWD&l=dataLayerGa4",
					"resourceBytes": 224440,
					"unusedBytes": 86468
				},
				{
					"name": "https://www.googletagmanager.com/gtm.js?id=GTM-WCVRQMW&l=SIdataLayer",
					"resourceBytes": 178985,
					"unusedBytes": 92643
				}
			]
		}
	},
	"pwa-cross-browser": {
		"id": "pwa-cross-browser",
		"title": "Site works cross-browser",
		"description": "To reach the most number of users, sites should work across every major browser. [Learn about cross-browser compatibility](https://developer.chrome.com/docs/lighthouse/pwa/pwa-cross-browser/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"pwa-page-transitions": {
		"id": "pwa-page-transitions",
		"title": "Page transitions don't feel like they block on the network",
		"description": "Transitions should feel snappy as you tap around, even on a slow network. This experience is key to a user's perception of performance. [Learn more about page transitions](https://developer.chrome.com/docs/lighthouse/pwa/pwa-page-transitions/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"pwa-each-page-has-url": {
		"id": "pwa-each-page-has-url",
		"title": "Each page has a URL",
		"description": "Ensure individual pages are deep linkable via URL and that URLs are unique for the purpose of shareability on social media. [Learn more about providing deep links](https://developer.chrome.com/docs/lighthouse/pwa/pwa-each-page-has-url/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"accesskeys": {
		"id": "accesskeys",
		"title": "`[accesskey]` values are unique",
		"description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more about access keys](https://dequeuniversity.com/rules/axe/4.8/accesskeys).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"aria-allowed-attr": {
		"id": "aria-allowed-attr",
		"title": "`[aria-*]` attributes match their roles",
		"description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn how to match ARIA attributes to their roles](https://dequeuniversity.com/rules/axe/4.8/aria-allowed-attr).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"aria-allowed-role": {
		"id": "aria-allowed-role",
		"title": "Values assigned to `role=\"\"` are not valid ARIA roles.",
		"description": "ARIA `role`s enable assistive technologies to know the role of each element on the web page. If the `role` values are misspelled, not existing ARIA `role` values, or abstract roles, then the purpose of the element will not be communicated to users of assistive technologies. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.8/aria-allowed-role).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"subItemsHeading": {
						"key": "relatedNode",
						"valueType": "node"
					},
					"label": "Failing Elements"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-0-LI",
						"path": "1,HTML,1,BODY,2,MAIN,3,SECTION,0,DIV,0,DIV,0,DIV,2,UL,0,DIV,0,DIV,1,LI",
						"selector": "ul#speakableNearbyOutletsContent > div.slick-list > div.slick-track > li#slick-slide40",
						"boundingRect": {
							"top": 1656,
							"bottom": 1944,
							"left": 15,
							"right": 397,
							"width": 382,
							"height": 288
						},
						"snippet": "<li class=\"slide-item slick-slide slick-current slick-active\" style=\"width: 382px;\" data-slick-index=\"0\" aria-hidden=\"false\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide40\" aria-describedby=\"slick-slide-control40\">",
						"nodeLabel": "Vi - Vodafone Idea mini Store\n\nTalk Nd Text\n\n\tNo 9873/6, Multani Dhanda, Paharg…",
						"explanation": "Fix any of the following:\n  ARIA role tabpanel is not allowed for given element"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-1-LI",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,1,LI",
						"selector": "ul.list-unstyled > div.slick-list > div.slick-track > li#slick-slide50",
						"boundingRect": {
							"top": 4404,
							"bottom": 4756,
							"left": 15,
							"right": 397,
							"width": 382,
							"height": 351
						},
						"snippet": "<li class=\"slide-item slick-slide slick-current slick-active\" style=\"width: 382px;\" data-slick-index=\"0\" aria-hidden=\"false\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide50\" aria-describedby=\"slick-slide-control50\">",
						"nodeLabel": "Published on 24.02.2023\n\nGet a Phone Number with Your Lucky Number - Sagittarius",
						"explanation": "Fix any of the following:\n  ARIA role tabpanel is not allowed for given element"
					}
				}
			],
			"debugData": {
				"type": "debugdata",
				"impact": "minor",
				"tags": [
					"cat.aria",
					"best-practice"
				]
			}
		}
	},
	"aria-command-name": {
		"id": "aria-command-name",
		"title": "`button`, `link`, and `menuitem` elements have accessible names",
		"description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.8/aria-command-name).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"aria-dialog-name": {
		"id": "aria-dialog-name",
		"title": "Elements with `role=\"dialog\"` or `role=\"alertdialog\"` have accessible names.",
		"description": "ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements. [Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.8/aria-dialog-name).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"aria-hidden-body": {
		"id": "aria-hidden-body",
		"title": "`[aria-hidden=\"true\"]` is not present on the document `<body>`",
		"description": "Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `<body>`. [Learn how `aria-hidden` affects the document body](https://dequeuniversity.com/rules/axe/4.8/aria-hidden-body).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"aria-hidden-focus": {
		"id": "aria-hidden-focus",
		"title": "`[aria-hidden=\"true\"]` elements contain focusable descendents",
		"description": "Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn how `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.8/aria-hidden-focus).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"subItemsHeading": {
						"key": "relatedNode",
						"valueType": "node"
					},
					"label": "Failing Elements"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-2-LI",
						"path": "1,HTML,1,BODY,2,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,UL,0,LI",
						"selector": "div#tabslide1 > div#collapse1 > ul#js-tabslide_1 > li#slick-slide20",
						"boundingRect": {
							"top": 2895,
							"bottom": 3025,
							"left": 15,
							"right": 206,
							"width": 191,
							"height": 129
						},
						"snippet": "<li class=\"slide-item\" style=\"\" aria-hidden=\"true\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide20\" aria-describedby=\"slick-slide-control20\">",
						"nodeLabel": "Buy Postpaid",
						"explanation": "Fix all of the following:\n  Focusable content should have tabindex=\"-1\" or be removed from the DOM"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-3-LI",
						"path": "1,HTML,1,BODY,2,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,UL,1,LI",
						"selector": "div#tabslide1 > div#collapse1 > ul#js-tabslide_1 > li#slick-slide21",
						"boundingRect": {
							"top": 2895,
							"bottom": 3025,
							"left": 206,
							"right": 397,
							"width": 191,
							"height": 129
						},
						"snippet": "<li class=\"slide-item\" style=\"\" aria-hidden=\"true\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide21\">",
						"nodeLabel": "Buy Prepaid",
						"explanation": "Fix all of the following:\n  Focusable content should have tabindex=\"-1\" or be removed from the DOM"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-4-LI",
						"path": "1,HTML,1,BODY,2,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,UL,2,LI",
						"selector": "div#tabslide1 > div#collapse1 > ul#js-tabslide_1 > li#slick-slide22",
						"boundingRect": {
							"top": 3025,
							"bottom": 3154,
							"left": 15,
							"right": 206,
							"width": 191,
							"height": 129
						},
						"snippet": "<li class=\"slide-item\" style=\"\" aria-hidden=\"true\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide22\">",
						"nodeLabel": "Get VIP Number",
						"explanation": "Fix all of the following:\n  Focusable content should have tabindex=\"-1\" or be removed from the DOM"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-5-LI",
						"path": "1,HTML,1,BODY,2,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,UL,3,LI",
						"selector": "div#tabslide1 > div#collapse1 > ul#js-tabslide_1 > li#slick-slide23",
						"boundingRect": {
							"top": 3025,
							"bottom": 3154,
							"left": 206,
							"right": 397,
							"width": 191,
							"height": 129
						},
						"snippet": "<li class=\"slide-item\" style=\"\" aria-hidden=\"true\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide23\">",
						"nodeLabel": "Port Number",
						"explanation": "Fix all of the following:\n  Focusable content should have tabindex=\"-1\" or be removed from the DOM"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-6-LI",
						"path": "1,HTML,1,BODY,2,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,UL,4,LI",
						"selector": "div#tabslide1 > div#collapse1 > ul#js-tabslide_1 > li#slick-slide24",
						"boundingRect": {
							"top": 3154,
							"bottom": 3304,
							"left": 15,
							"right": 206,
							"width": 191,
							"height": 150
						},
						"snippet": "<li class=\"slide-item\" style=\"\" aria-hidden=\"true\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide24\">",
						"nodeLabel": "International Roaming",
						"explanation": "Fix all of the following:\n  Focusable content should have tabindex=\"-1\" or be removed from the DOM"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-7-LI",
						"path": "1,HTML,1,BODY,2,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,UL,5,LI",
						"selector": "div#tabslide1 > div#collapse1 > ul#js-tabslide_1 > li#slick-slide25",
						"boundingRect": {
							"top": 3154,
							"bottom": 3304,
							"left": 206,
							"right": 397,
							"width": 191,
							"height": 150
						},
						"snippet": "<li class=\"slide-item\" style=\"\" aria-hidden=\"true\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide25\">",
						"nodeLabel": "Help & Support",
						"explanation": "Fix all of the following:\n  Focusable content should have tabindex=\"-1\" or be removed from the DOM"
					}
				}
			],
			"debugData": {
				"type": "debugdata",
				"impact": "serious",
				"tags": [
					"cat.name-role-value",
					"wcag2a",
					"wcag412",
					"TTv5",
					"TT6.a",
					"EN-301-549",
					"EN-9.4.1.2"
				]
			}
		}
	},
	"aria-input-field-name": {
		"id": "aria-input-field-name",
		"title": "ARIA input fields have accessible names",
		"description": "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.8/aria-input-field-name).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"aria-meter-name": {
		"id": "aria-meter-name",
		"title": "ARIA `meter` elements have accessible names",
		"description": "When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.8/aria-meter-name).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"aria-progressbar-name": {
		"id": "aria-progressbar-name",
		"title": "ARIA `progressbar` elements have accessible names",
		"description": "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.8/aria-progressbar-name).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"aria-required-attr": {
		"id": "aria-required-attr",
		"title": "`[role]`s have all required `[aria-*]` attributes",
		"description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.8/aria-required-attr).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"aria-required-children": {
		"id": "aria-required-children",
		"title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children.",
		"description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.8/aria-required-children).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"subItemsHeading": {
						"key": "relatedNode",
						"valueType": "node"
					},
					"label": "Failing Elements"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-8-DIV",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV",
						"selector": "div.row > div.col-md-6 > div.store-information > div#storeInfoPanel",
						"boundingRect": {
							"top": 612,
							"bottom": 1267,
							"left": 31,
							"right": 381,
							"width": 350,
							"height": 656
						},
						"snippet": "<div class=\"panel-group\" id=\"storeInfoPanel\" role=\"tablist\" aria-multiselectable=\"true\">",
						"nodeLabel": "rating & reviews\n3.1 \nview all\nMumba Devi Film production\nPosted on 18-12-2023\n…",
						"explanation": "Fix any of the following:\n  Element has children which are not allowed: [role=tabpanel], h3[tabindex]\n  Element uses aria-busy=\"true\" while showing a loader"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-9-DIV",
									"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV",
									"selector": "div.store-information > div#storeInfoPanel > div.panel > div#storeInfo1",
									"boundingRect": {
										"top": 654,
										"bottom": 1141,
										"left": 31,
										"right": 381,
										"width": 350,
										"height": 488
									},
									"snippet": "<div id=\"storeInfo1\" class=\"panel-collapse collapse active\" role=\"tabpanel\" data-parent=\"#storeInfoPanel\">",
									"nodeLabel": "3.1 \nview all\nMumba Devi Film production\nPosted on 18-12-2023\n\nToday I visited …"
								}
							},
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-10-H3",
									"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,H3",
									"selector": "div#storeInfoPanel > div.panel > div#panel1 > h3.panel-title",
									"boundingRect": {
										"top": 612,
										"bottom": 636,
										"left": 31,
										"right": 381,
										"width": 350,
										"height": 24
									},
									"snippet": "<h3 class=\"panel-title\">",
									"nodeLabel": "rating & reviews"
								}
							},
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-11-H3",
									"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,H3",
									"selector": "div#storeInfoPanel > div.panel > div#panel2 > h3.panel-title",
									"boundingRect": {
										"top": 1159,
										"bottom": 1183,
										"left": 31,
										"right": 381,
										"width": 350,
										"height": 24
									},
									"snippet": "<h3 class=\"panel-title\">",
									"nodeLabel": "parking options"
								}
							}
						]
					}
				}
			],
			"debugData": {
				"type": "debugdata",
				"impact": "critical",
				"tags": [
					"cat.aria",
					"wcag2a",
					"wcag131",
					"EN-301-549",
					"EN-9.1.3.1"
				]
			}
		}
	},
	"aria-required-parent": {
		"id": "aria-required-parent",
		"title": "`[role]`s are contained by their required parent element",
		"description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more about ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.8/aria-required-parent).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"aria-roles": {
		"id": "aria-roles",
		"title": "`[role]` values are valid",
		"description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more about valid ARIA roles](https://dequeuniversity.com/rules/axe/4.8/aria-roles).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"aria-text": {
		"id": "aria-text",
		"title": "Elements with the `role=text` attribute do not have focusable descendents.",
		"description": "Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced. [Learn more about the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.8/aria-text).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"aria-toggle-field-name": {
		"id": "aria-toggle-field-name",
		"title": "ARIA toggle fields have accessible names",
		"description": "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.8/aria-toggle-field-name).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"aria-tooltip-name": {
		"id": "aria-tooltip-name",
		"title": "ARIA `tooltip` elements have accessible names",
		"description": "When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.8/aria-tooltip-name).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"aria-treeitem-name": {
		"id": "aria-treeitem-name",
		"title": "ARIA `treeitem` elements have accessible names",
		"description": "When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.8/aria-treeitem-name).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"aria-valid-attr-value": {
		"id": "aria-valid-attr-value",
		"title": "`[aria-*]` attributes have valid values",
		"description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more about valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.8/aria-valid-attr-value).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"aria-valid-attr": {
		"id": "aria-valid-attr",
		"title": "`[aria-*]` attributes are valid and not misspelled",
		"description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more about valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.8/aria-valid-attr).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"button-name": {
		"id": "button-name",
		"title": "Buttons have an accessible name",
		"description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.8/button-name).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"bypass": {
		"id": "bypass",
		"title": "The page contains a heading, skip link, or landmark region",
		"description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more about bypass blocks](https://dequeuniversity.com/rules/axe/4.8/bypass).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"color-contrast": {
		"id": "color-contrast",
		"title": "Background and foreground colors do not have a sufficient contrast ratio.",
		"description": "Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.8/color-contrast).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"subItemsHeading": {
						"key": "relatedNode",
						"valueType": "node"
					},
					"label": "Failing Elements"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-12-SPAN",
						"path": "1,HTML,1,BODY,1,NAV,0,DIV,2,DIV,1,UL,0,LI,0,A,0,SPAN",
						"selector": "ul.navber-links > li.nav-item > a.active > span",
						"boundingRect": {
							"top": 49,
							"bottom": 69,
							"left": 526,
							"right": 569,
							"width": 43,
							"height": 20
						},
						"snippet": "<span>",
						"nodeLabel": "Home",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.24 (foreground color: #ed2736, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-13-DIV",
									"path": "1,HTML,1,BODY,1,NAV,0,DIV,2,DIV",
									"selector": "body.home_page > nav.navbar > div.container > div.navbar-right",
									"boundingRect": {
										"top": 0,
										"bottom": 823,
										"left": 504,
										"right": 824,
										"width": 320,
										"height": 823
									},
									"snippet": "<div class=\"navbar-right nav-groups\">",
									"nodeLabel": "Home\nTimeline\nMap\nFAQ\nContact Us\nMy Vi Store"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-14-SPAN",
						"path": "1,HTML,1,BODY,2,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,0,OL,3,LI,0,SPAN",
						"selector": "div.col-md-12 > ol#breadcrumb > li.breadcrumb-item > span",
						"boundingRect": {
							"top": 164,
							"bottom": 182,
							"left": 15,
							"right": 317,
							"width": 302,
							"height": 18
						},
						"snippet": "<span>",
						"nodeLabel": "Vi (Vodafone Idea) Stores in Connaught Place",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.24 (foreground color: #ed2736, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-15-BODY",
									"path": "1,HTML,1,BODY",
									"selector": "body.home_page",
									"boundingRect": {
										"top": 0,
										"bottom": 6943,
										"left": 0,
										"right": 412,
										"width": 412,
										"height": 6943
									},
									"snippet": "<body class=\"home_page ethemeforviupdated\">",
									"nodeLabel": "body.home_page"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-16-SPAN",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,0,DIV,3,DIV,0,DIV,1,DIV,0,UL,7,LI,0,A,1,SPAN",
						"selector": "ul.list-unstyled > li.info-card > a.action-call > span",
						"boundingRect": {
							"top": 523,
							"bottom": 541,
							"left": 110,
							"right": 133,
							"width": 23,
							"height": 18
						},
						"snippet": "<span>",
						"nodeLabel": "call",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.39 (foreground color: #ffffff, background color: #ed1b24, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-17-A",
									"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,0,DIV,3,DIV,0,DIV,1,DIV,0,UL,7,LI,0,A",
									"selector": "div#speakableIntroContent > ul.list-unstyled > li.info-card > a.action-call",
									"boundingRect": {
										"top": 512,
										"bottom": 552,
										"left": 15,
										"right": 202,
										"width": 187,
										"height": 40
									},
									"snippet": "<a href=\"tel:+918291087925\" class=\"action-call action-icon\" onclick=\"clickEventGa('home_page', 'click_to_call', '128884')\">",
									"nodeLabel": "call"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-18-SPAN",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,0,DIV,3,DIV,0,DIV,1,DIV,0,UL,7,LI,1,A,1,SPAN",
						"selector": "ul.list-unstyled > li.info-card > a.action-direction > span",
						"boundingRect": {
							"top": 523,
							"bottom": 541,
							"left": 270,
							"right": 363,
							"width": 93,
							"height": 18
						},
						"snippet": "<span>",
						"nodeLabel": "get directions",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.6 (foreground color: #ffffff, background color: #1787f5, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-19-A",
									"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,0,DIV,3,DIV,0,DIV,1,DIV,0,UL,7,LI,1,A",
									"selector": "div#speakableIntroContent > ul.list-unstyled > li.info-card > a.action-direction",
									"boundingRect": {
										"top": 512,
										"bottom": 552,
										"left": 210,
										"right": 397,
										"width": 187,
										"height": 40
									},
									"snippet": "<a href=\"https://maps.google.com/maps?cid=3682038044728764854\" target=\"_blank\" class=\"action-direction action-icon\" onclick=\"clickEventGa('home_page', 'directions', '128884')\">",
									"nodeLabel": "get directions"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-20-SPAN",
						"path": "1,HTML,1,BODY,2,MAIN,3,SECTION,0,DIV,0,DIV,0,DIV,2,UL,0,DIV,0,DIV,1,LI,0,DIV,0,DIV,0,DIV,5,DIV,0,A,1,SPAN",
						"selector": "div.card-body > div.outlet-actions > a.btn > span",
						"boundingRect": {
							"top": 1903,
							"bottom": 1920,
							"left": 82,
							"right": 169,
							"width": 87,
							"height": 17
						},
						"snippet": "<span>",
						"nodeLabel": "get directions",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.24 (foreground color: #ffffff, background color: #ed2736, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-21-A",
									"path": "1,HTML,1,BODY,2,MAIN,3,SECTION,0,DIV,0,DIV,0,DIV,2,UL,0,DIV,0,DIV,1,LI,0,DIV,0,DIV,0,DIV,5,DIV,0,A",
									"selector": "div.card-container > div.card-body > div.outlet-actions > a.btn",
									"boundingRect": {
										"top": 1895,
										"bottom": 1928,
										"left": 55,
										"right": 193,
										"width": 138,
										"height": 32
									},
									"snippet": "<a class=\"btn btn-direction\" href=\"https://maps.google.com/maps?cid=6661026481223353510\" target=\"_blank\" onclick=\"clickEventGa('home_page', 'directions', '128886')\" data-track-event-click=\"Navigate\" tabindex=\"0\">",
									"nodeLabel": " get directions"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-22-INPUT",
						"path": "1,HTML,1,BODY,2,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,FORM,1,DIV,5,DIV,0,DIV,1,DIV,0,INPUT",
						"selector": "div.lead-form-inputs > div.input-group > div.input-field > input#nameService",
						"boundingRect": {
							"top": 2155,
							"bottom": 2215,
							"left": 46,
							"right": 366,
							"width": 320,
							"height": 60
						},
						"snippet": "<input name=\"name\" id=\"nameService\" placeholder=\"name*\" maxlength=\"100\" class=\"form-control\" type=\"text\">",
						"nodeLabel": "div.lead-form-inputs > div.input-group > div.input-field > input#nameService",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.53 (foreground color: #898888, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-23-INPUT",
						"path": "1,HTML,1,BODY,2,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,FORM,1,DIV,5,DIV,1,DIV,1,DIV,0,INPUT",
						"selector": "div.lead-form-inputs > div.input-group > div.input-field > input#emailModal",
						"boundingRect": {
							"top": 2250,
							"bottom": 2310,
							"left": 46,
							"right": 366,
							"width": 320,
							"height": 60
						},
						"snippet": "<input name=\"email\" id=\"emailModal\" placeholder=\"email id*\" maxlength=\"100\" class=\"input float-input\" type=\"email\">",
						"nodeLabel": "div.lead-form-inputs > div.input-group > div.input-field > input#emailModal",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.53 (foreground color: #898888, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-24-INPUT",
						"path": "1,HTML,1,BODY,2,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,FORM,1,DIV,5,DIV,2,DIV,1,DIV,0,INPUT",
						"selector": "div.lead-form-inputs > div.input-group > div.input-field > input#sendMailToBusinessOwnerMobileNumberService",
						"boundingRect": {
							"top": 2345,
							"bottom": 2405,
							"left": 46,
							"right": 366,
							"width": 320,
							"height": 60
						},
						"snippet": "<input name=\"mobile_number\" id=\"sendMailToBusinessOwnerMobileNumberService\" placeholder=\"mobile number*\" maxlength=\"13\" class=\"form-control\" type=\"tel\">",
						"nodeLabel": "div.lead-form-inputs > div.input-group > div.input-field > input#sendMailToBusinessOwnerMobileNumberService",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.53 (foreground color: #898888, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-25-INPUT",
						"path": "1,HTML,1,BODY,2,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,FORM,1,DIV,5,DIV,5,DIV,0,DIV,0,INPUT",
						"selector": "div.lead-form-inputs > div.input-group > div.lead-form-action > input.btn",
						"boundingRect": {
							"top": 2650,
							"bottom": 2705,
							"left": 46,
							"right": 366,
							"width": 320,
							"height": 55
						},
						"snippet": "<input type=\"submit\" class=\"btn btn-primary submitBtn submitBtnLead\" value=\"Submit\">",
						"nodeLabel": "div.lead-form-inputs > div.input-group > div.lead-form-action > input.btn",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.24 (foreground color: #ffffff, background color: #ed2736, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-26-SPAN",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,1,LI,0,DIV,1,DIV,0,P,0,SPAN",
						"selector": "div.card > div.card-container > p.posted_date > span.publish",
						"boundingRect": {
							"top": 4663,
							"bottom": 4678,
							"left": 65,
							"right": 134,
							"width": 69,
							"height": 15
						},
						"snippet": "<span class=\"publish\">",
						"nodeLabel": "Published on",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.61 (foreground color: #a0a0a0, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-27-DIV",
									"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,1,LI,0,DIV",
									"selector": "div.slick-list > div.slick-track > li#slick-slide50 > div.card",
									"boundingRect": {
										"top": 4419,
										"bottom": 4756,
										"left": 55,
										"right": 357,
										"width": 302,
										"height": 336
									},
									"snippet": "<div class=\"card\">",
									"nodeLabel": "Published on 24.02.2023\n\nGet a Phone Number with Your Lucky Number - Sagittarius"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-28-A",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,P,0,SPAN,1,A",
						"selector": "div.card-body > p.card-text > span.timeline-message > a.inner",
						"boundingRect": {
							"top": 5037,
							"bottom": 5055,
							"left": 59,
							"right": 353,
							"width": 294,
							"height": 18
						},
						"snippet": "<a onclick=\"clickEventGa('home_page', 'timeline_external_link', '128884')\" rel=\"nofollow\" class=\"inner\" href=\"https://t.co/eNs3gh2s3s\" target=\"_blank\" data-adobe-track-event-name=\"TRACK_EVENT_TIMELINE_CTA_CLICK\" data-track-event-uid=\"N/A\" data-track-event-component=\"Social Timeline\" data-track-event-click=\"https://t.co/eNs3gh2s3s\" tabindex=\"0\">",
						"nodeLabel": "https://t.co/eNs3gh2s3s",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.97 (foreground color: #007bff, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-29-DIV",
									"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV",
									"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div#slick-slide30",
									"boundingRect": {
										"top": 4948,
										"bottom": 5222,
										"left": 39,
										"right": 373,
										"width": 334,
										"height": 275
									},
									"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-current slick-active\" style=\"width: 334px;\" data-slick-index=\"0\" aria-hidden=\"false\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide30\" aria-describedby=\"slick-slide-control30\">",
									"nodeLabel": "Here’s your chance to win the hottest prizes. Comment #Vi20FANFest with the rig…"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-30-A",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,P,1,SPAN,0,A",
						"selector": "div.card-body > p.card-text > span.hashtags > a",
						"boundingRect": {
							"top": 5067,
							"bottom": 5085,
							"left": 59,
							"right": 353,
							"width": 294,
							"height": 18
						},
						"snippet": "<a onclick=\"clickEventGa('home_page', 'timeline_hashtag', '128884')\" href=\"https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecomm…\" data-adobe-track-event-name=\"TRACK_EVENT_TIMELINE_CTA_CLICK\" data-track-event-uid=\"N/A\" data-track-event-component=\"Social Timeline\" data-track-event-title=\"N/A\" data-track-event-click=\"#Vi20FANFest\" tabindex=\"0\">",
						"nodeLabel": "#Vi20FANFest",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.97 (foreground color: #007bff, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-29-DIV",
									"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV",
									"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div#slick-slide30",
									"boundingRect": {
										"top": 4948,
										"bottom": 5222,
										"left": 39,
										"right": 373,
										"width": 334,
										"height": 275
									},
									"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-current slick-active\" style=\"width: 334px;\" data-slick-index=\"0\" aria-hidden=\"false\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide30\" aria-describedby=\"slick-slide-control30\">",
									"nodeLabel": "Here’s your chance to win the hottest prizes. Comment #Vi20FANFest with the rig…"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-31-A",
						"path": "1,HTML,1,BODY,3,FOOTER,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,UL,0,LI,1,A",
						"selector": "div#speakableOtherStoresContent > ul.list-unstyled > li > a",
						"boundingRect": {
							"top": 5948,
							"bottom": 5966,
							"left": 229,
							"right": 262,
							"width": 33,
							"height": 18
						},
						"snippet": "<a onclick=\"clickEventGa('home_page', 'state', '128884')\" href=\"https://stores.myvi.in/location/delhi\">",
						"nodeLabel": "Delhi",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.83 (foreground color: #007bff, background color: #fefaf6, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-32-DIV",
									"path": "1,HTML,1,BODY,3,FOOTER,0,DIV",
									"selector": "body.home_page > footer > div.section",
									"boundingRect": {
										"top": 5662,
										"bottom": 6883,
										"left": 0,
										"right": 412,
										"width": 412,
										"height": 1221
									},
									"snippet": "<div class=\"section store-information footer-information\">",
									"nodeLabel": "categories\nTelecommunications Service Provider\nMobile Network Operator\nInternet…"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-33-A",
						"path": "1,HTML,1,BODY,3,FOOTER,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,UL,1,LI,1,A",
						"selector": "div#speakableOtherStoresContent > ul.list-unstyled > li > a",
						"boundingRect": {
							"top": 5983,
							"bottom": 6001,
							"left": 229,
							"right": 295,
							"width": 67,
							"height": 18
						},
						"snippet": "<a onclick=\"clickEventGa('home_page', 'city', '128884')\" href=\"https://stores.myvi.in/location/delhi/new-delhi\">",
						"nodeLabel": "New Delhi",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.83 (foreground color: #007bff, background color: #fefaf6, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-32-DIV",
									"path": "1,HTML,1,BODY,3,FOOTER,0,DIV",
									"selector": "body.home_page > footer > div.section",
									"boundingRect": {
										"top": 5662,
										"bottom": 6883,
										"left": 0,
										"right": 412,
										"width": 412,
										"height": 1221
									},
									"snippet": "<div class=\"section store-information footer-information\">",
									"nodeLabel": "categories\nTelecommunications Service Provider\nMobile Network Operator\nInternet…"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-34-A",
						"path": "1,HTML,1,BODY,3,FOOTER,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,UL,0,LI,0,DIV,0,A",
						"selector": "ul.list-unstyled > li > div.pluscode-location-item > a.state-link",
						"boundingRect": {
							"top": 6070,
							"bottom": 6088,
							"left": 15,
							"right": 113,
							"width": 98,
							"height": 18
						},
						"snippet": "<a target=\"_blank\" onclick=\"clickEventGa('home_page', 'pluscode', '128884')\" class=\"state-link\" href=\"https://plus.codes/7JWVJ6MC+HJ\" data-track-event-section-title=\"Branch Information\" data-track-event-sub-section-title=\"Get Direction To Vodafone Idea Limited\">",
						"nodeLabel": "7JWVJ6MC+HJ",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.83 (foreground color: #007bff, background color: #fefaf6, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-32-DIV",
									"path": "1,HTML,1,BODY,3,FOOTER,0,DIV",
									"selector": "body.home_page > footer > div.section",
									"boundingRect": {
										"top": 5662,
										"bottom": 6883,
										"left": 0,
										"right": 412,
										"width": 412,
										"height": 1221
									},
									"snippet": "<div class=\"section store-information footer-information\">",
									"nodeLabel": "categories\nTelecommunications Service Provider\nMobile Network Operator\nInternet…"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-35-A",
						"path": "1,HTML,1,BODY,3,FOOTER,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,UL,0,LI,1,DIV,0,A",
						"selector": "ul.list-unstyled > li > div.pluscode-location-item > a.state-link",
						"boundingRect": {
							"top": 6094,
							"bottom": 6112,
							"left": 15,
							"right": 162,
							"width": 147,
							"height": 18
						},
						"snippet": "<a target=\"_blank\" onclick=\"clickEventGa('home_page', 'pluscode', '128884')\" class=\"state-link\" href=\"https://plus.codes/7JWVJ6MC+HJ\" data-track-event-section-title=\"Branch Information\" data-track-event-sub-section-title=\"Get Direction To Vodafone Idea Limited\">",
						"nodeLabel": "New Delhi, Delhi, India",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.83 (foreground color: #007bff, background color: #fefaf6, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-32-DIV",
									"path": "1,HTML,1,BODY,3,FOOTER,0,DIV",
									"selector": "body.home_page > footer > div.section",
									"boundingRect": {
										"top": 5662,
										"bottom": 6883,
										"left": 0,
										"right": 412,
										"width": 412,
										"height": 1221
									},
									"snippet": "<div class=\"section store-information footer-information\">",
									"nodeLabel": "categories\nTelecommunications Service Provider\nMobile Network Operator\nInternet…"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-36-BUTTON",
						"path": "1,HTML,1,BODY,9,DIV,0,DIV,0,DIV,1,DIV,0,BUTTON",
						"selector": "div.container > div.cookie-content > div.cookie-cta > button#accept",
						"boundingRect": {
							"top": 760,
							"bottom": 808,
							"left": 134,
							"right": 278,
							"width": 143,
							"height": 48
						},
						"snippet": "<button class=\"btn btn-primary mt-3 accept-cookies\" id=\"accept\">",
						"nodeLabel": "Okay,Thanks",
						"explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.24 (foreground color: #ffffff, background color: #ed2736, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
					}
				}
			],
			"debugData": {
				"type": "debugdata",
				"impact": "serious",
				"tags": [
					"cat.color",
					"wcag2aa",
					"wcag143",
					"TTv5",
					"TT13.c",
					"EN-301-549",
					"EN-9.1.4.3",
					"ACT"
				]
			}
		}
	},
	"definition-list": {
		"id": "definition-list",
		"title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
		"description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.8/definition-list).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"dlitem": {
		"id": "dlitem",
		"title": "Definition list items are wrapped in `<dl>` elements",
		"description": "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.8/dlitem).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"document-title": {
		"id": "document-title",
		"title": "Document has a `<title>` element",
		"description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more about document titles](https://dequeuniversity.com/rules/axe/4.8/document-title).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"duplicate-id-active": {
		"id": "duplicate-id-active",
		"title": "`[id]` attributes on active, focusable elements are unique",
		"description": "All focusable elements must have a unique `id` to ensure that they're visible to assistive technologies. [Learn how to fix duplicate `id`s](https://dequeuniversity.com/rules/axe/4.8/duplicate-id-active).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"duplicate-id-aria": {
		"id": "duplicate-id-aria",
		"title": "ARIA IDs are unique",
		"description": "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.8/duplicate-id-aria).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"empty-heading": {
		"id": "empty-heading",
		"title": "All heading elements contain content.",
		"description": "A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.8/empty-heading).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"form-field-multiple-labels": {
		"id": "form-field-multiple-labels",
		"title": "No form fields have multiple labels",
		"description": "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn how to use form labels](https://dequeuniversity.com/rules/axe/4.8/form-field-multiple-labels).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"frame-title": {
		"id": "frame-title",
		"title": "`<frame>` or `<iframe>` elements have a title",
		"description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more about frame titles](https://dequeuniversity.com/rules/axe/4.8/frame-title).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"heading-order": {
		"id": "heading-order",
		"title": "Heading elements are not in a sequentially-descending order",
		"description": "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.8/heading-order).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"subItemsHeading": {
						"key": "relatedNode",
						"valueType": "node"
					},
					"label": "Failing Elements"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-10-H3",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,H3",
						"selector": "div#storeInfoPanel > div.panel > div#panel1 > h3.panel-title",
						"boundingRect": {
							"top": 612,
							"bottom": 636,
							"left": 31,
							"right": 381,
							"width": 350,
							"height": 24
						},
						"snippet": "<h3 class=\"panel-title\">",
						"nodeLabel": "rating & reviews",
						"explanation": "Fix any of the following:\n  Heading order invalid"
					}
				}
			],
			"debugData": {
				"type": "debugdata",
				"impact": "moderate",
				"tags": [
					"cat.semantics",
					"best-practice"
				]
			}
		}
	},
	"html-has-lang": {
		"id": "html-has-lang",
		"title": "`<html>` element has a `[lang]` attribute",
		"description": "If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-has-lang).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"html-lang-valid": {
		"id": "html-lang-valid",
		"title": "`<html>` element has a valid value for its `[lang]` attribute",
		"description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-lang-valid).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"html-xml-lang-mismatch": {
		"id": "html-xml-lang-mismatch",
		"title": "`<html>` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.",
		"description": "If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-xml-lang-mismatch).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"identical-links-same-purpose": {
		"id": "identical-links-same-purpose",
		"title": "Identical links have the same purpose.",
		"description": "Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.8/identical-links-same-purpose).",
		"score": null,
		"scoreDisplayMode": "informative",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"subItemsHeading": {
						"key": "relatedNode",
						"valueType": "node"
					},
					"label": "Failing Elements"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-19-A",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,0,DIV,3,DIV,0,DIV,1,DIV,0,UL,7,LI,1,A",
						"selector": "div#speakableIntroContent > ul.list-unstyled > li.info-card > a.action-direction",
						"boundingRect": {
							"top": 512,
							"bottom": 552,
							"left": 210,
							"right": 397,
							"width": 187,
							"height": 40
						},
						"snippet": "<a href=\"https://maps.google.com/maps?cid=3682038044728764854\" target=\"_blank\" class=\"action-direction action-icon\" onclick=\"clickEventGa('home_page', 'directions', '128884')\">",
						"nodeLabel": "get directions",
						"explanation": "Fix all of the following:\n  Check that links have the same purpose, or are intentionally ambiguous."
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-21-A",
									"path": "1,HTML,1,BODY,2,MAIN,3,SECTION,0,DIV,0,DIV,0,DIV,2,UL,0,DIV,0,DIV,1,LI,0,DIV,0,DIV,0,DIV,5,DIV,0,A",
									"selector": "div.card-container > div.card-body > div.outlet-actions > a.btn",
									"boundingRect": {
										"top": 1895,
										"bottom": 1928,
										"left": 55,
										"right": 193,
										"width": 138,
										"height": 32
									},
									"snippet": "<a class=\"btn btn-direction\" href=\"https://maps.google.com/maps?cid=6661026481223353510\" target=\"_blank\" onclick=\"clickEventGa('home_page', 'directions', '128886')\" data-track-event-click=\"Navigate\" tabindex=\"0\">",
									"nodeLabel": " get directions"
								}
							}
						]
					}
				}
			],
			"debugData": {
				"type": "debugdata",
				"impact": "minor",
				"tags": [
					"cat.semantics",
					"wcag2aaa",
					"wcag249"
				]
			}
		}
	},
	"image-alt": {
		"id": "image-alt",
		"title": "Image elements have `[alt]` attributes",
		"description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.8/image-alt).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"image-redundant-alt": {
		"id": "image-redundant-alt",
		"title": "Image elements do not have `[alt]` attributes that are redundant text.",
		"description": "Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.8/image-redundant-alt).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"input-button-name": {
		"id": "input-button-name",
		"title": "Input buttons have discernible text.",
		"description": "Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button. [Learn more about input buttons](https://dequeuniversity.com/rules/axe/4.8/input-button-name).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"input-image-alt": {
		"id": "input-image-alt",
		"title": "`<input type=\"image\">` elements have `[alt]` text",
		"description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.8/input-image-alt).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"label-content-name-mismatch": {
		"id": "label-content-name-mismatch",
		"title": "Elements with visible text labels have matching accessible names.",
		"description": "Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.8/label-content-name-mismatch).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"label": {
		"id": "label",
		"title": "Form elements have associated labels",
		"description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.8/label).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"landmark-one-main": {
		"id": "landmark-one-main",
		"title": "Document has a main landmark.",
		"description": "One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.8/landmark-one-main).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"link-name": {
		"id": "link-name",
		"title": "Links do not have a discernible name",
		"description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.8/link-name).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"subItemsHeading": {
						"key": "relatedNode",
						"valueType": "node"
					},
					"label": "Failing Elements"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-37-A",
						"path": "1,HTML,1,BODY,6,DIV,0,UL,0,LI,0,A",
						"selector": "div.desktop > ul > li > a.scrollLink",
						"boundingRect": {
							"top": 279,
							"bottom": 297,
							"left": 364,
							"right": 412,
							"width": 48,
							"height": 18
						},
						"snippet": "<a data-target=\"#scrollTillForm_1\" onclick=\"clickEventGa('home_page', 'external_link', '128884')\" class=\"scrollLink ga-id\" href=\"https://bit.ly/3EBhITH?utm_source=dealer_locator&amp;utm_medium=external_link\" target=\"_blank\" data-page-name=\"home_page\" data-ga-type=\"https://cdn4.singleinterface.com/files/banner_images/127902/3365_167265142…\" data-outlet-id=\"128884\" data-track-event-click=\"External Link\">",
						"nodeLabel": "div.desktop > ul > li > a.scrollLink",
						"explanation": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute"
					}
				}
			],
			"debugData": {
				"type": "debugdata",
				"impact": "serious",
				"tags": [
					"cat.name-role-value",
					"wcag2a",
					"wcag244",
					"wcag412",
					"section508",
					"section508.22.a",
					"TTv5",
					"TT6.a",
					"EN-301-549",
					"EN-9.2.4.4",
					"EN-9.4.1.2",
					"ACT"
				]
			}
		}
	},
	"link-in-text-block": {
		"id": "link-in-text-block",
		"title": "Links are distinguishable without relying on color.",
		"description": "Low-contrast text is difficult or impossible for many users to read. Link text that is discernible improves the experience for users with low vision. [Learn how to make links distinguishable](https://dequeuniversity.com/rules/axe/4.8/link-in-text-block).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"list": {
		"id": "list",
		"title": "Lists do not contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
		"description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.8/list).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"subItemsHeading": {
						"key": "relatedNode",
						"valueType": "node"
					},
					"label": "Failing Elements"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-38-UL",
						"path": "1,HTML,1,BODY,2,MAIN,3,SECTION,0,DIV,0,DIV,0,DIV,2,UL",
						"selector": "div.container > div.row > div.col-sm-12 > ul#speakableNearbyOutletsContent",
						"boundingRect": {
							"top": 1656,
							"bottom": 1960,
							"left": 15,
							"right": 397,
							"width": 382,
							"height": 304
						},
						"snippet": "<ul class=\"list-unstyled slick-container nearby-outlets js-nearby-outlets dyn-rating-…\" id=\"speakableNearbyOutletsContent\">",
						"nodeLabel": "Vi - Vodafone Idea Store\n\nVi Store Preet Vihar\n\n\tNo E 356, Nirman Vihar, Vikas …",
						"explanation": "Fix all of the following:\n  List element has direct children that are not allowed: div, [role=tablist]"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-39-DIV",
									"path": "1,HTML,1,BODY,2,MAIN,3,SECTION,0,DIV,0,DIV,0,DIV,2,UL,0,DIV",
									"selector": "div.row > div.col-sm-12 > ul#speakableNearbyOutletsContent > div.slick-list",
									"boundingRect": {
										"top": 1656,
										"bottom": 1960,
										"left": 15,
										"right": 397,
										"width": 382,
										"height": 304
									},
									"snippet": "<div class=\"slick-list draggable\">",
									"nodeLabel": "Vi - Vodafone Idea Store\n\nVi Store Preet Vihar\n\n\tNo E 356, Nirman Vihar, Vikas …"
								}
							},
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-40-UL",
									"path": "1,HTML,1,BODY,2,MAIN,3,SECTION,0,DIV,0,DIV,0,DIV,2,UL,1,UL",
									"selector": "div.row > div.col-sm-12 > ul#speakableNearbyOutletsContent > ul.slick-dots",
									"boundingRect": {
										"top": 1967,
										"bottom": 1988,
										"left": 15,
										"right": 397,
										"width": 382,
										"height": 22
									},
									"snippet": "<ul class=\"slick-dots\" style=\"\" role=\"tablist\">",
									"nodeLabel": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-41-UL",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL",
						"selector": "div.container > div.row > div.col-md-12 > ul.list-unstyled",
						"boundingRect": {
							"top": 4404,
							"bottom": 4814,
							"left": 15,
							"right": 397,
							"width": 382,
							"height": 410
						},
						"snippet": "<ul class=\"list-unstyled slick-container blogs-slides js-blogs slick-initialized slic…\">",
						"nodeLabel": "Published on 24.02.2023\n\nVisit Dubai (Dubai shopping festival)\n\nPublished on 24…",
						"explanation": "Fix all of the following:\n  List element has direct children that are not allowed: div, [role=tablist]"
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-42-DIV",
									"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV",
									"selector": "div.row > div.col-md-12 > ul.list-unstyled > div.slick-list",
									"boundingRect": {
										"top": 4404,
										"bottom": 4814,
										"left": 15,
										"right": 397,
										"width": 382,
										"height": 410
									},
									"snippet": "<div class=\"slick-list draggable\">",
									"nodeLabel": "Published on 24.02.2023\n\nVisit Dubai (Dubai shopping festival)\n\nPublished on 24…"
								}
							},
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-43-UL",
									"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,3,UL",
									"selector": "div.row > div.col-md-12 > ul.list-unstyled > ul.slick-dots",
									"boundingRect": {
										"top": 4820,
										"bottom": 4842,
										"left": 15,
										"right": 397,
										"width": 382,
										"height": 22
									},
									"snippet": "<ul class=\"slick-dots\" style=\"\" role=\"tablist\">",
									"nodeLabel": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
								}
							}
						]
					}
				}
			],
			"debugData": {
				"type": "debugdata",
				"impact": "serious",
				"tags": [
					"cat.structure",
					"wcag2a",
					"wcag131",
					"EN-301-549",
					"EN-9.1.3.1"
				]
			}
		}
	},
	"listitem": {
		"id": "listitem",
		"title": "List items (`<li>`) are contained within `<ul>`, `<ol>` or `<menu>` parent elements",
		"description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.8/listitem).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"meta-refresh": {
		"id": "meta-refresh",
		"title": "The document does not use `<meta http-equiv=\"refresh\">`",
		"description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.8/meta-refresh).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"meta-viewport": {
		"id": "meta-viewport",
		"title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
		"description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.8/meta-viewport).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"object-alt": {
		"id": "object-alt",
		"title": "`<object>` elements have alternate text",
		"description": "Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more about alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.8/object-alt).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"select-name": {
		"id": "select-name",
		"title": "Select elements do not have associated label elements.",
		"description": "Form elements without effective labels can create frustrating experiences for screen reader users. [Learn more about the `select` element](https://dequeuniversity.com/rules/axe/4.8/select-name).",
		"score": 0,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"subItemsHeading": {
						"key": "relatedNode",
						"valueType": "node"
					},
					"label": "Failing Elements"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-44-SELECT",
						"path": "1,HTML,1,BODY,2,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,FORM,1,DIV,5,DIV,3,DIV,1,DIV,0,SELECT",
						"selector": "div.lead-form-inputs > div.input-group > div.input-field > select#saveCustomCityService",
						"boundingRect": {
							"top": 2440,
							"bottom": 2500,
							"left": 46,
							"right": 366,
							"width": 320,
							"height": 60
						},
						"snippet": "<select name=\"city\" id=\"saveCustomCityService\" class=\"form-control\">",
						"nodeLabel": "select city*\nAbohar\nAgartala\nAgra\nAhmedabad\nAhmednagar\nAizawl\nAjmer\nAkola\nAlapp…",
						"explanation": "Fix any of the following:\n  Form element does not have an implicit (wrapped) <label>\n  Form element does not have an explicit <label>\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element's default semantics were not overridden with role=\"none\" or role=\"presentation\""
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-45-SELECT",
						"path": "1,HTML,1,BODY,2,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,FORM,1,DIV,5,DIV,4,DIV,1,DIV,0,SELECT",
						"selector": "div.lead-form-inputs > div.input-group > div.input-field > select#saveCustomModelService",
						"boundingRect": {
							"top": 2535,
							"bottom": 2595,
							"left": 46,
							"right": 366,
							"width": 320,
							"height": 60
						},
						"snippet": "<select name=\"applied_for\" id=\"saveCustomModelService\" class=\"form-control\">",
						"nodeLabel": "select product\nBuy Postpaid\nBuy Prepaid\nGet VIP Number\nPort Number\nInternationa…",
						"explanation": "Fix any of the following:\n  Form element does not have an implicit (wrapped) <label>\n  Form element does not have an explicit <label>\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element's default semantics were not overridden with role=\"none\" or role=\"presentation\""
					}
				}
			],
			"debugData": {
				"type": "debugdata",
				"impact": "critical",
				"tags": [
					"cat.forms",
					"wcag2a",
					"wcag412",
					"section508",
					"section508.22.n",
					"TTv5",
					"TT5.c",
					"EN-301-549",
					"EN-9.4.1.2",
					"ACT"
				]
			}
		}
	},
	"skip-link": {
		"id": "skip-link",
		"title": "Skip links are focusable.",
		"description": "Including a skip link can help users skip to the main content to save time. [Learn more about skip links](https://dequeuniversity.com/rules/axe/4.8/skip-link).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"tabindex": {
		"id": "tabindex",
		"title": "No element has a `[tabindex]` value greater than 0",
		"description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more about the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.8/tabindex).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"table-duplicate-name": {
		"id": "table-duplicate-name",
		"title": "Tables have different content in the summary attribute and `<caption>`.",
		"description": "The summary attribute should describe the table structure, while `<caption>` should have the onscreen title. Accurate table mark-up helps users of screen readers. [Learn more about summary and caption](https://dequeuniversity.com/rules/axe/4.8/table-duplicate-name).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"table-fake-caption": {
		"id": "table-fake-caption",
		"title": "Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption.",
		"description": "Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.8/table-fake-caption).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"target-size": {
		"id": "target-size",
		"title": "Touch targets have sufficient size and spacing.",
		"description": "Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.8/target-size).",
		"score": null,
		"scoreDisplayMode": "informative",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"subItemsHeading": {
						"key": "relatedNode",
						"valueType": "node"
					},
					"label": "Failing Elements"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-46-BUTTON",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,2,DIV,0,DIV,2,DIV,0,DIV,1,UL,1,LI,0,BUTTON",
						"selector": "div#banner_carousel_bs_res > ul.slick-dots > li.slick-active > button#slick-slide-control11",
						"boundingRect": {
							"top": 1489,
							"bottom": 1499,
							"left": 199,
							"right": 209,
							"width": 10,
							"height": 10
						},
						"snippet": "<button type=\"button\" role=\"tab\" id=\"slick-slide-control11\" aria-controls=\"slick-slide11\" aria-label=\"2 of 2\" tabindex=\"0\" aria-selected=\"true\">",
						"nodeLabel": "2",
						"explanation": "Fix any of the following:\n  Target has insufficient size (10px by 10px, should be at least 24px by 24px)\n  Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 0px instead of at least 24px."
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-47-DIV",
									"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,2,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,2,DIV",
									"selector": "div#banner_carousel_bs_res > div.slick-list > div.slick-track > div#slick-slide11",
									"boundingRect": {
										"top": 1347,
										"bottom": 1473,
										"left": 15,
										"right": 397,
										"width": 382,
										"height": 126
									},
									"snippet": "<div class=\"slick-slide slick-current slick-active\" data-slick-index=\"1\" aria-hidden=\"false\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide11\" aria-describedby=\"slick-slide-control11\" style=\"width: 382px;\">",
									"nodeLabel": "Vi Max Postpaid"
								}
							},
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-48-BUTTON",
									"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,2,DIV,0,DIV,2,DIV,0,DIV,1,UL,0,LI,0,BUTTON",
									"selector": "div#banner_carousel_bs_res > ul.slick-dots > li > button#slick-slide-control10",
									"boundingRect": {
										"top": 1489,
										"bottom": 1499,
										"left": 183,
										"right": 193,
										"width": 10,
										"height": 10
									},
									"snippet": "<button type=\"button\" role=\"tab\" id=\"slick-slide-control10\" aria-controls=\"slick-slide10\" aria-label=\"1 of 2\" tabindex=\"-1\">",
									"nodeLabel": "1"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-28-A",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,P,0,SPAN,1,A",
						"selector": "div.card-body > p.card-text > span.timeline-message > a.inner",
						"boundingRect": {
							"top": 5037,
							"bottom": 5055,
							"left": 59,
							"right": 353,
							"width": 294,
							"height": 18
						},
						"snippet": "<a onclick=\"clickEventGa('home_page', 'timeline_external_link', '128884')\" rel=\"nofollow\" class=\"inner\" href=\"https://t.co/eNs3gh2s3s\" target=\"_blank\" data-adobe-track-event-name=\"TRACK_EVENT_TIMELINE_CTA_CLICK\" data-track-event-uid=\"N/A\" data-track-event-component=\"Social Timeline\" data-track-event-click=\"https://t.co/eNs3gh2s3s\" tabindex=\"0\">",
						"nodeLabel": "https://t.co/eNs3gh2s3s",
						"explanation": "Fix any of the following:\n  Target has insufficient size (294px by 18px, should be at least 24px by 24px)\n  Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 18px instead of at least 24px."
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-29-DIV",
									"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV",
									"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div#slick-slide30",
									"boundingRect": {
										"top": 4948,
										"bottom": 5222,
										"left": 39,
										"right": 373,
										"width": 334,
										"height": 275
									},
									"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-current slick-active\" style=\"width: 334px;\" data-slick-index=\"0\" aria-hidden=\"false\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide30\" aria-describedby=\"slick-slide-control30\">",
									"nodeLabel": "Here’s your chance to win the hottest prizes. Comment #Vi20FANFest with the rig…"
								}
							}
						]
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-30-A",
						"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,P,1,SPAN,0,A",
						"selector": "div.card-body > p.card-text > span.hashtags > a",
						"boundingRect": {
							"top": 5067,
							"bottom": 5085,
							"left": 59,
							"right": 353,
							"width": 294,
							"height": 18
						},
						"snippet": "<a onclick=\"clickEventGa('home_page', 'timeline_hashtag', '128884')\" href=\"https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecomm…\" data-adobe-track-event-name=\"TRACK_EVENT_TIMELINE_CTA_CLICK\" data-track-event-uid=\"N/A\" data-track-event-component=\"Social Timeline\" data-track-event-title=\"N/A\" data-track-event-click=\"#Vi20FANFest\" tabindex=\"0\">",
						"nodeLabel": "#Vi20FANFest",
						"explanation": "Fix any of the following:\n  Target has insufficient size (294px by 18px, should be at least 24px by 24px)\n  Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 18px instead of at least 24px."
					},
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"relatedNode": {
									"type": "node",
									"lhId": "1-29-DIV",
									"path": "1,HTML,1,BODY,2,MAIN,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV",
									"selector": "div#speakableTimelineContent > div.slick-list > div.slick-track > div#slick-slide30",
									"boundingRect": {
										"top": 4948,
										"bottom": 5222,
										"left": 39,
										"right": 373,
										"width": 334,
										"height": 275
									},
									"snippet": "<div class=\"card social-icon-pintlink slick-slide slick-current slick-active\" style=\"width: 334px;\" data-slick-index=\"0\" aria-hidden=\"false\" tabindex=\"0\" role=\"tabpanel\" id=\"slick-slide30\" aria-describedby=\"slick-slide-control30\">",
									"nodeLabel": "Here’s your chance to win the hottest prizes. Comment #Vi20FANFest with the rig…"
								}
							}
						]
					}
				}
			],
			"debugData": {
				"type": "debugdata",
				"impact": "serious",
				"tags": [
					"cat.sensory-and-visual-cues",
					"wcag22aa",
					"wcag258"
				]
			}
		}
	},
	"td-has-header": {
		"id": "td-has-header",
		"title": "`<td>` elements in a large `<table>` have one or more table headers.",
		"description": "Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.8/td-has-header).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"td-headers-attr": {
		"id": "td-headers-attr",
		"title": "Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.",
		"description": "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more about the `headers` attribute](https://dequeuniversity.com/rules/axe/4.8/td-headers-attr).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"th-has-data-cells": {
		"id": "th-has-data-cells",
		"title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
		"description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.8/th-has-data-cells).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"valid-lang": {
		"id": "valid-lang",
		"title": "`[lang]` attributes have a valid value",
		"description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/valid-lang).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"video-caption": {
		"id": "video-caption",
		"title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
		"description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more about video captions](https://dequeuniversity.com/rules/axe/4.8/video-caption).",
		"score": null,
		"scoreDisplayMode": "notApplicable"
	},
	"custom-controls-labels": {
		"id": "custom-controls-labels",
		"title": "Custom controls have associated labels",
		"description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"custom-controls-roles": {
		"id": "custom-controls-roles",
		"title": "Custom controls have ARIA roles",
		"description": "Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"focus-traps": {
		"id": "focus-traps",
		"title": "User focus is not accidentally trapped in a region",
		"description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"focusable-controls": {
		"id": "focusable-controls",
		"title": "Interactive controls are keyboard focusable",
		"description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn how to make custom controls focusable](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"interactive-element-affordance": {
		"id": "interactive-element-affordance",
		"title": "Interactive elements indicate their purpose and state",
		"description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"logical-tab-order": {
		"id": "logical-tab-order",
		"title": "The page has a logical tab order",
		"description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"managed-focus": {
		"id": "managed-focus",
		"title": "The user's focus is directed to new content added to the page",
		"description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"offscreen-content-hidden": {
		"id": "offscreen-content-hidden",
		"title": "Offscreen content is hidden from assistive technology",
		"description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"use-landmarks": {
		"id": "use-landmarks",
		"title": "HTML5 landmark elements are used to improve navigation",
		"description": "Landmark elements (`<main>`, `<nav>`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"visual-order-follows-dom": {
		"id": "visual-order-follows-dom",
		"title": "Visual order on the page follows DOM order",
		"description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"uses-long-cache-ttl": {
		"id": "uses-long-cache-ttl",
		"title": "Serve static assets with an efficient cache policy",
		"description": "A long cache lifetime can speed up repeat visits to your page. [Learn more about efficient cache policies](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/).",
		"score": 0.5,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 31643.299999999992,
		"numericUnit": "byte",
		"displayValue": "21 resources found",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "cacheLifetimeMs",
					"valueType": "ms",
					"label": "Cache TTL",
					"displayUnit": "duration"
				},
				{
					"key": "totalBytes",
					"valueType": "bytes",
					"label": "Transfer Size",
					"displayUnit": "kb",
					"granularity": 1
				}
			],
			"items": [
				{
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google-MB-banner-1280x421px-1-21-09-23-02-50-19.jpg",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 123989,
					"wastedBytes": 12398.899999999998
				},
				{
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/vi-Banner-25-09-23-11-31-05.jpg",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 73347,
					"wastedBytes": 7334.699999999998
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/jquery-3.5.1.min.js?v=2.18",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 32296,
					"wastedBytes": 3229.5999999999995
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/3740_1646292393_311645174002Aboutus.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 15252,
					"wastedBytes": 1525.1999999999996
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/slick.min.js?v=2.18",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 11803,
					"wastedBytes": 1180.2999999999997
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForViUpdated/js/enterprises-common.min.js?v=2.18",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 6442,
					"wastedBytes": 644.1999999999998
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/8020_1640676687_internationalroaming.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 5835,
					"wastedBytes": 583.4999999999999
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/enterprises-gtm_datalayer.min.js?v=2.18",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 4579,
					"wastedBytes": 457.8999999999999
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/5713_1640676688_helpsupport.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 4222,
					"wastedBytes": 422.19999999999993
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/8375_1672653162_unnamed2.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 4135,
					"wastedBytes": 413.4999999999999
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/3365_1672651428_29761668670398Group2389.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 4061,
					"wastedBytes": 406.0999999999999
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/common.min.js?v=2.18",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 3971,
					"wastedBytes": 397.0999999999999
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/3521_1640676688_getvip.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 3793,
					"wastedBytes": 379.2999999999999
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/7605_1640676689_porttovi.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 3608,
					"wastedBytes": 360.7999999999999
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/6809_1640676689_buypostpaid.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 3462,
					"wastedBytes": 346.19999999999993
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/6562_1640676688_buyprepaid.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 3461,
					"wastedBytes": 346.0999999999999
				},
				{
					"url": "https://cdn4.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/images/common-icon.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 3278,
					"wastedBytes": 327.79999999999995
				},
				{
					"url": "https://cdn4.singleinterface.com/files/outlet/logo/127902/vi_logo_png.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 2897,
					"wastedBytes": 289.69999999999993
				},
				{
					"url": "https://cdn4.singleinterface.com/files/banner_images/127902/1096_1641969120_cookies.png",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 2339,
					"wastedBytes": 233.89999999999995
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForViUpdated/js/enterprises-home_page.min.js?v=2.18",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 1907,
					"wastedBytes": 190.69999999999996
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/lazy.min.js?v=2.18",
					"debugData": {
						"type": "debugdata",
						"max-age": 604800,
						"public": true
					},
					"cacheLifetimeMs": 604800000,
					"cacheHitProbability": 0.9,
					"totalBytes": 1756,
					"wastedBytes": 175.59999999999997
				}
			],
			"summary": {
				"wastedBytes": 31643.299999999992
			},
			"sortedBy": [
				"totalBytes"
			],
			"skipSumming": [
				"cacheLifetimeMs"
			]
		},
		"guidanceLevel": 3
	},
	"total-byte-weight": {
		"id": "total-byte-weight",
		"title": "Avoids enormous network payloads",
		"description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).",
		"score": null,
		"scoreDisplayMode": "informative",
		"numericValue": 914649,
		"numericUnit": "byte",
		"displayValue": "Total size was 893 KiB",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "totalBytes",
					"valueType": "bytes",
					"label": "Transfer Size"
				}
			],
			"items": [
				{
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google-MB-banner-1280x421px-1-21-09-23-02-50-19.jpg",
					"totalBytes": 123989
				},
				{
					"url": "https://www.googletagmanager.com/gtag/js?id=G-35QLTJGXWD&l=dataLayerGa4",
					"totalBytes": 80155
				},
				{
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/vi-Banner-25-09-23-11-31-05.jpg",
					"totalBytes": 73347
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//8091_1677256292_Vi5places.ChristmasTravel.UKGMB.jpg",
					"totalBytes": 71436
				},
				{
					"url": "https://www.googletagmanager.com/gtm.js?id=GTM-WCVRQMW&l=SIdataLayer",
					"totalBytes": 64035
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//7157_1677256028_ViMNPGMB.jpg",
					"totalBytes": 41877
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//8086_1677256221_SMSatatic332x249.jpg",
					"totalBytes": 37087
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostStatic332x249.jpg",
					"totalBytes": 34416
				},
				{
					"url": "https://prod2.singleinterface.com/VendorpageTheme/Enterprise/EThemeForMasterPro/js/jquery-3.5.1.min.js?v=2.18",
					"totalBytes": 32296
				},
				{
					"url": "https://stores.myvi.in///files/Blog_images/127902//3348_1677256165_SMPost332x249.jpg",
					"totalBytes": 30983
				}
			],
			"sortedBy": [
				"totalBytes"
			]
		},
		"guidanceLevel": 1
	},
	"offscreen-images": {
		"id": "offscreen-images",
		"title": "Defer offscreen images",
		"description": "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/).",
		"score": 0.5,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"displayValue": "Potential savings of 94 KiB",
		"warnings": [],
		"metricSavings": {
			"FCP": 0,
			"LCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"label": ""
				},
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "totalBytes",
					"valueType": "bytes",
					"label": "Resource Size"
				},
				{
					"key": "wastedBytes",
					"valueType": "bytes",
					"label": "Potential Savings"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-373-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,2,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 437,
							"right": 739,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Christmas Special Games (List of games related to snow, celebrations etc.)\" src=\"https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostSt…\">",
						"nodeLabel": "Christmas Special Games (List of games related to snow, celebrations etc.)"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostStatic332x249.jpg",
					"requestStartTime": 512005867.82,
					"totalBytes": 33364,
					"wastedBytes": 33364,
					"wastedPercent": 100
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-375-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,4,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 1201,
							"right": 1503,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Vi Missed Call Alert (See link in Dec Listicle Ideas for more info)\" src=\"https://stores.myvi.in///files/Blog_images/127902//2390_1677255855_MissedC…\">",
						"nodeLabel": "Vi Missed Call Alert (See link in Dec Listicle Ideas for more info)"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//2390_1677255855_MissedCallAlertsGMB1.jpg",
					"requestStartTime": 512005868.23,
					"totalBytes": 27987,
					"wastedBytes": 27987,
					"wastedPercent": 100
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-372-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,1,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 55,
							"right": 357,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Get a Phone Number with Your Lucky Number - Sagittarius\" src=\"https://stores.myvi.in///files/Blog_images/127902//4777_1677255333_Sagitta…\">",
						"nodeLabel": "Get a Phone Number with Your Lucky Number - Sagittarius"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//4777_1677255333_SagittariansluckynumberGMB0.jpg",
					"requestStartTime": 512005867.624,
					"totalBytes": 18445,
					"wastedBytes": 18445,
					"wastedPercent": 100
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-374-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,3,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 819,
							"right": 1121,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Best of 2022 OR Best Games of the Year (Top 5 popular games that you can p…\" src=\"https://stores.myvi.in///files/Blog_images/127902//5932_1677255791_5BestMo…\">",
						"nodeLabel": "Best of 2022 OR Best Games of the Year (Top 5 popular games that you can play: …"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//5932_1677255791_5BestMobileGamesof2022GMB0.jpg",
					"requestStartTime": 512005868.037,
					"totalBytes": 16162,
					"wastedBytes": 16162,
					"wastedPercent": 100
				}
			],
			"overallSavingsMs": 0,
			"overallSavingsBytes": 95958,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 0
				}
			}
		},
		"guidanceLevel": 2
	},
	"render-blocking-resources": {
		"id": "render-blocking-resources",
		"title": "Eliminate render-blocking resources",
		"description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).",
		"score": 0,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 70,
		"numericUnit": "millisecond",
		"displayValue": "Potential savings of 70 ms",
		"metricSavings": {
			"FCP": 70,
			"LCP": 70
		},
		"details": {
			"type": "opportunity",
			"headings": [
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "totalBytes",
					"valueType": "bytes",
					"label": "Transfer Size"
				},
				{
					"key": "wastedMs",
					"valueType": "timespanMs",
					"label": "Potential Savings"
				}
			],
			"items": [
				{
					"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForViUpdated/css/common.min.css?v=6.68",
					"totalBytes": 12240,
					"wastedMs": 173
				}
			],
			"overallSavingsMs": 70
		},
		"guidanceLevel": 2
	},
	"unminified-css": {
		"id": "unminified-css",
		"title": "Minify CSS",
		"description": "Minifying CSS files can reduce network payload sizes. [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"displayValue": "",
		"metricSavings": {
			"FCP": 0,
			"LCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0,
			"overallSavingsBytes": 0,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 0
				}
			}
		},
		"guidanceLevel": 3
	},
	"unminified-javascript": {
		"id": "unminified-javascript",
		"title": "Minify JavaScript",
		"description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"displayValue": "",
		"warnings": [],
		"metricSavings": {
			"FCP": 0,
			"LCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0,
			"overallSavingsBytes": 0,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 0
				}
			}
		},
		"guidanceLevel": 3
	},
	"unused-css-rules": {
		"id": "unused-css-rules",
		"title": "Reduce unused CSS",
		"description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"displayValue": "",
		"metricSavings": {
			"FCP": 0,
			"LCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0,
			"overallSavingsBytes": 0,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 0
				}
			}
		},
		"guidanceLevel": 2
	},
	"unused-javascript": {
		"id": "unused-javascript",
		"title": "Reduce unused JavaScript",
		"description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
		"score": 0,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 1090,
		"numericUnit": "millisecond",
		"displayValue": "Potential savings of 62 KiB",
		"metricSavings": {
			"FCP": 0,
			"LCP": 310
		},
		"details": {
			"type": "opportunity",
			"headings": [
				{
					"key": "url",
					"valueType": "url",
					"subItemsHeading": {
						"key": "source",
						"valueType": "code"
					},
					"label": "URL"
				},
				{
					"key": "totalBytes",
					"valueType": "bytes",
					"subItemsHeading": {
						"key": "sourceBytes"
					},
					"label": "Transfer Size"
				},
				{
					"key": "wastedBytes",
					"valueType": "bytes",
					"subItemsHeading": {
						"key": "sourceWastedBytes"
					},
					"label": "Potential Savings"
				}
			],
			"items": [
				{
					"url": "https://www.googletagmanager.com/gtm.js?id=GTM-WCVRQMW&l=SIdataLayer",
					"totalBytes": 63957,
					"wastedBytes": 33104,
					"wastedPercent": 51.7602033689974
				},
				{
					"url": "https://www.googletagmanager.com/gtag/js?id=G-35QLTJGXWD&l=dataLayerGa4",
					"totalBytes": 79825,
					"wastedBytes": 30753,
					"wastedPercent": 38.52610942790947
				}
			],
			"overallSavingsMs": 1090,
			"overallSavingsBytes": 63857,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 310
				}
			}
		},
		"guidanceLevel": 2
	},
	"modern-image-formats": {
		"id": "modern-image-formats",
		"title": "Serve images in next-gen formats",
		"description": "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more about modern image formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/).",
		"score": 0.5,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 1630,
		"numericUnit": "millisecond",
		"displayValue": "Potential savings of 347 KiB",
		"warnings": [],
		"metricSavings": {
			"FCP": 0,
			"LCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"label": ""
				},
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "totalBytes",
					"valueType": "bytes",
					"label": "Resource Size"
				},
				{
					"key": "wastedBytes",
					"valueType": "bytes",
					"label": "Potential Savings"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-363-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,2,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,4,DIV,0,A,0,IMG",
						"selector": "div.slick-track > div.slick-slide > a.allcategories > img",
						"boundingRect": {
							"top": 1347,
							"bottom": 1473,
							"left": 779,
							"right": 1161,
							"width": 382,
							"height": 126
						},
						"snippet": "<img fetchpriority=\"high\" src=\"https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google…\" data-adobe-track-event-name=\"TRACK_EVENT_BANNER_INTERACTION\" data-track-event-component=\"Banner\" data-track-event-uid=\"N/A\" alt=\"Vi Max Postpaid\" width=\"1145\" height=\"375\">",
						"nodeLabel": "Vi Max Postpaid"
					},
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google-MB-banner-1280x421px-1-21-09-23-02-50-19.jpg",
					"fromProtocol": true,
					"isCrossOrigin": true,
					"totalBytes": 122535,
					"wastedBytes": 80832.3,
					"wastedWebpBytes": 74027
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-390-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,19,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 6931,
							"right": 7233,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Places to visit in UK (Christmas)\" src=\"https://stores.myvi.in///files/Blog_images/127902//8091_1677256292_Vi5plac…\">",
						"nodeLabel": "Places to visit in UK (Christmas)"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//8091_1677256292_Vi5places.ChristmasTravel.UKGMB.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 70339,
					"wastedBytes": 58303.15,
					"wastedWebpBytes": 56425
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-362-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,2,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,3,DIV,0,A,0,IMG",
						"selector": "div.slick-track > div.slick-slide > a.allcategories > img",
						"boundingRect": {
							"top": 1347,
							"bottom": 1472,
							"left": 397,
							"right": 779,
							"width": 382,
							"height": 125
						},
						"snippet": "<img fetchpriority=\"high\" src=\"https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/vi-Ban…\" data-adobe-track-event-name=\"TRACK_EVENT_BANNER_INTERACTION\" data-track-event-component=\"Banner\" data-track-event-uid=\"N/A\" alt=\"Your Family Plan\" width=\"1145\" height=\"375\">",
						"nodeLabel": "Your Family Plan"
					},
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/vi-Banner-25-09-23-11-31-05.jpg",
					"fromProtocol": true,
					"isCrossOrigin": true,
					"totalBytes": 71955,
					"wastedBytes": 35143.05,
					"wastedWebpBytes": 25787
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-387-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,16,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 5785,
							"right": 6087,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Mobile Number Portability with Vi\" src=\"https://stores.myvi.in///files/Blog_images/127902//7157_1677256028_ViMNPGM…\">",
						"nodeLabel": "Mobile Number Portability with Vi"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//7157_1677256028_ViMNPGMB.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 40807,
					"wastedBytes": 33857.85,
					"wastedWebpBytes": 32711
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-389-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,18,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 6549,
							"right": 6851,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"What is the Difference Between 4G and 5G?\" src=\"https://stores.myvi.in///files/Blog_images/127902//8086_1677256221_SMSatat…\">",
						"nodeLabel": "What is the Difference Between 4G and 5G?"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//8086_1677256221_SMSatatic332x249.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 36026,
					"wastedBytes": 25861.2,
					"wastedWebpBytes": 24564
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-383-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,12,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 4257,
							"right": 4559,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Christmas Special Games (List of games related to snow, celebrations etc.)\" src=\"https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostSt…\">",
						"nodeLabel": "Christmas Special Games (List of games related to snow, celebrations etc.)"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostStatic332x249.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 33364,
					"wastedBytes": 24053.1,
					"wastedWebpBytes": 22738
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-385-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,14,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 5021,
							"right": 5323,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Vi Missed Call Alert (See link in Dec Listicle Ideas for more info)\" src=\"https://stores.myvi.in///files/Blog_images/127902//2390_1677255855_MissedC…\">",
						"nodeLabel": "Vi Missed Call Alert (See link in Dec Listicle Ideas for more info)"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//2390_1677255855_MissedCallAlertsGMB1.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 27987,
					"wastedBytes": 22506.8,
					"wastedWebpBytes": 21899
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-388-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,17,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 6167,
							"right": 6469,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Best-selling Vi postpaid plans with free SIM home delivery (How Free SIM D…\" src=\"https://stores.myvi.in///files/Blog_images/127902//3348_1677256165_SMPost3…\">",
						"nodeLabel": "Best-selling Vi postpaid plans with free SIM home delivery (How Free SIM Delive…"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//3348_1677256165_SMPost332x249.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 29940,
					"wastedBytes": 20649.7,
					"wastedWebpBytes": 19388
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-386-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,15,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 5403,
							"right": 5705,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Vi Postpaid Family Plans\" src=\"https://stores.myvi.in///files/Blog_images/127902//1241_1677255937_4Benefi…\">",
						"nodeLabel": "Vi Postpaid Family Plans"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//1241_1677255937_4BenefitsofVisPostpaidFamilyPlansGMB332.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 20093,
					"wastedBytes": 15340.05,
					"wastedWebpBytes": 14875
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-382-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,11,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 3875,
							"right": 4177,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Get a Phone Number with Your Lucky Number - Sagittarius\" src=\"https://stores.myvi.in///files/Blog_images/127902//4777_1677255333_Sagitta…\">",
						"nodeLabel": "Get a Phone Number with Your Lucky Number - Sagittarius"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//4777_1677255333_SagittariansluckynumberGMB0.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 18445,
					"wastedBytes": 14612.8,
					"wastedWebpBytes": 14317
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-384-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,13,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 4639,
							"right": 4941,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Best of 2022 OR Best Games of the Year (Top 5 popular games that you can p…\" src=\"https://stores.myvi.in///files/Blog_images/127902//5932_1677255791_5BestMo…\">",
						"nodeLabel": "Best of 2022 OR Best Games of the Year (Top 5 popular games that you can play: …"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//5932_1677255791_5BestMobileGamesof2022GMB0.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 16162,
					"wastedBytes": 12611.15,
					"wastedWebpBytes": 12288
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-391-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,20,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 7313,
							"right": 7615,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Visit Dubai (Dubai shopping festival)\" src=\"https://stores.myvi.in///files/Blog_images/127902//9492_1677256430_5FreeEv…\">",
						"nodeLabel": "Visit Dubai (Dubai shopping festival)"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//9492_1677256430_5FreeEventstoExploreatDubaiShoppingFestival2022GMB.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 15457,
					"wastedBytes": 11989.5,
					"wastedWebpBytes": 11567
				}
			],
			"overallSavingsMs": 1630,
			"overallSavingsBytes": 355760.65,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 0
				}
			}
		},
		"guidanceLevel": 3
	},
	"uses-optimized-images": {
		"id": "uses-optimized-images",
		"title": "Efficiently encode images",
		"description": "Optimized images load faster and consume less cellular data. [Learn how to efficiently encode images](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/).",
		"score": 0.5,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 870,
		"numericUnit": "millisecond",
		"displayValue": "Potential savings of 187 KiB",
		"warnings": [],
		"metricSavings": {
			"FCP": 0,
			"LCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"label": ""
				},
				{
					"key": "url",
					"valueType": "url",
					"label": "URL"
				},
				{
					"key": "totalBytes",
					"valueType": "bytes",
					"label": "Resource Size"
				},
				{
					"key": "wastedBytes",
					"valueType": "bytes",
					"label": "Potential Savings"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-390-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,19,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 6931,
							"right": 7233,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Places to visit in UK (Christmas)\" src=\"https://stores.myvi.in///files/Blog_images/127902//8091_1677256292_Vi5plac…\">",
						"nodeLabel": "Places to visit in UK (Christmas)"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//8091_1677256292_Vi5places.ChristmasTravel.UKGMB.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 70339,
					"wastedBytes": 44458
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-363-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,1,DIV,0,DIV,2,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,4,DIV,0,A,0,IMG",
						"selector": "div.slick-track > div.slick-slide > a.allcategories > img",
						"boundingRect": {
							"top": 1347,
							"bottom": 1473,
							"left": 779,
							"right": 1161,
							"width": 382,
							"height": 126
						},
						"snippet": "<img fetchpriority=\"high\" src=\"https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google…\" data-adobe-track-event-name=\"TRACK_EVENT_BANNER_INTERACTION\" data-track-event-component=\"Banner\" data-track-event-uid=\"N/A\" alt=\"Vi Max Postpaid\" width=\"1145\" height=\"375\">",
						"nodeLabel": "Vi Max Postpaid"
					},
					"url": "https://cdn4.singleinterface.com/files/enterprise/coverphoto/127902/Google-MB-banner-1280x421px-1-21-09-23-02-50-19.jpg",
					"fromProtocol": true,
					"isCrossOrigin": true,
					"totalBytes": 122535,
					"wastedBytes": 33337
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-387-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,16,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 5785,
							"right": 6087,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Mobile Number Portability with Vi\" src=\"https://stores.myvi.in///files/Blog_images/127902//7157_1677256028_ViMNPGM…\">",
						"nodeLabel": "Mobile Number Portability with Vi"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//7157_1677256028_ViMNPGMB.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 40807,
					"wastedBytes": 25964
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-385-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,14,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 5021,
							"right": 5323,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Vi Missed Call Alert (See link in Dec Listicle Ideas for more info)\" src=\"https://stores.myvi.in///files/Blog_images/127902//2390_1677255855_MissedC…\">",
						"nodeLabel": "Vi Missed Call Alert (See link in Dec Listicle Ideas for more info)"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//2390_1677255855_MissedCallAlertsGMB1.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 27987,
					"wastedBytes": 15807
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-389-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,18,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 6549,
							"right": 6851,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"What is the Difference Between 4G and 5G?\" src=\"https://stores.myvi.in///files/Blog_images/127902//8086_1677256221_SMSatat…\">",
						"nodeLabel": "What is the Difference Between 4G and 5G?"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//8086_1677256221_SMSatatic332x249.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 36026,
					"wastedBytes": 13706
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-383-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,12,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 4257,
							"right": 4559,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Christmas Special Games (List of games related to snow, celebrations etc.)\" src=\"https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostSt…\">",
						"nodeLabel": "Christmas Special Games (List of games related to snow, celebrations etc.)"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//296_1677255600_SMPostStatic332x249.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 33364,
					"wastedBytes": 13122
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-382-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,11,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 3875,
							"right": 4177,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Get a Phone Number with Your Lucky Number - Sagittarius\" src=\"https://stores.myvi.in///files/Blog_images/127902//4777_1677255333_Sagitta…\">",
						"nodeLabel": "Get a Phone Number with Your Lucky Number - Sagittarius"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//4777_1677255333_SagittariansluckynumberGMB0.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 18445,
					"wastedBytes": 9721
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-388-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,17,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 6167,
							"right": 6469,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Best-selling Vi postpaid plans with free SIM home delivery (How Free SIM D…\" src=\"https://stores.myvi.in///files/Blog_images/127902//3348_1677256165_SMPost3…\">",
						"nodeLabel": "Best-selling Vi postpaid plans with free SIM home delivery (How Free SIM Delive…"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//3348_1677256165_SMPost332x249.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 29940,
					"wastedBytes": 9662
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-386-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,15,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 5403,
							"right": 5705,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Vi Postpaid Family Plans\" src=\"https://stores.myvi.in///files/Blog_images/127902//1241_1677255937_4Benefi…\">",
						"nodeLabel": "Vi Postpaid Family Plans"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//1241_1677255937_4BenefitsofVisPostpaidFamilyPlansGMB332.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 20093,
					"wastedBytes": 9430
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-384-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,13,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 4639,
							"right": 4941,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Best of 2022 OR Best Games of the Year (Top 5 popular games that you can p…\" src=\"https://stores.myvi.in///files/Blog_images/127902//5932_1677255791_5BestMo…\">",
						"nodeLabel": "Best of 2022 OR Best Games of the Year (Top 5 popular games that you can play: …"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//5932_1677255791_5BestMobileGamesof2022GMB0.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 16162,
					"wastedBytes": 8157
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-391-IMG",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,2,UL,1,DIV,0,DIV,20,LI,0,DIV,0,DIV,0,A,0,IMG",
						"selector": "div.card > div.image-wrap > a > img.card-img-top",
						"boundingRect": {
							"top": 4419,
							"bottom": 4646,
							"left": 7313,
							"right": 7615,
							"width": 302,
							"height": 227
						},
						"snippet": "<img class=\"card-img-top\" alt=\"Visit Dubai (Dubai shopping festival)\" src=\"https://stores.myvi.in///files/Blog_images/127902//9492_1677256430_5FreeEv…\">",
						"nodeLabel": "Visit Dubai (Dubai shopping festival)"
					},
					"url": "https://stores.myvi.in///files/Blog_images/127902//9492_1677256430_5FreeEventstoExploreatDubaiShoppingFestival2022GMB.jpg",
					"fromProtocol": true,
					"isCrossOrigin": false,
					"totalBytes": 15457,
					"wastedBytes": 7811
				}
			],
			"overallSavingsMs": 870,
			"overallSavingsBytes": 191175,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 0
				}
			}
		},
		"guidanceLevel": 2
	},
	"uses-text-compression": {
		"id": "uses-text-compression",
		"title": "Enable text compression",
		"description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more about text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"displayValue": "",
		"metricSavings": {
			"FCP": 0,
			"LCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0,
			"overallSavingsBytes": 0,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 0
				}
			}
		},
		"guidanceLevel": 3
	},
	"uses-responsive-images": {
		"id": "uses-responsive-images",
		"title": "Properly size images",
		"description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn how to size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"displayValue": "",
		"metricSavings": {
			"FCP": 0,
			"LCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0,
			"overallSavingsBytes": 0,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 0
				}
			}
		},
		"guidanceLevel": 2
	},
	"efficient-animated-content": {
		"id": "efficient-animated-content",
		"title": "Use video formats for animated content",
		"description": "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more about efficient video formats](https://developer.chrome.com/docs/lighthouse/performance/efficient-animated-content/)",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"displayValue": "",
		"metricSavings": {
			"FCP": 0,
			"LCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0,
			"overallSavingsBytes": 0,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 0
				}
			}
		},
		"guidanceLevel": 3
	},
	"duplicated-javascript": {
		"id": "duplicated-javascript",
		"title": "Remove duplicate modules in JavaScript bundles",
		"description": "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"displayValue": "",
		"metricSavings": {
			"FCP": 0,
			"LCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0,
			"overallSavingsBytes": 0,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 0
				}
			}
		},
		"guidanceLevel": 2
	},
	"legacy-javascript": {
		"id": "legacy-javascript",
		"title": "Avoid serving legacy JavaScript to modern browsers",
		"description": "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"displayValue": "",
		"metricSavings": {
			"FCP": 0,
			"LCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0,
			"overallSavingsBytes": 0,
			"sortedBy": [
				"wastedBytes"
			],
			"debugData": {
				"type": "debugdata",
				"metricSavings": {
					"FCP": 0,
					"LCP": 0
				}
			}
		},
		"guidanceLevel": 2
	},
	"doctype": {
		"id": "doctype",
		"title": "Page has the HTML doctype",
		"description": "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more about the doctype declaration](https://developer.chrome.com/docs/lighthouse/best-practices/doctype/).",
		"score": 1,
		"scoreDisplayMode": "binary"
	},
	"charset": {
		"id": "charset",
		"title": "Properly defines charset",
		"description": "A character encoding declaration is required. It can be done with a `<meta>` tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more about declaring the character encoding](https://developer.chrome.com/docs/lighthouse/best-practices/charset/).",
		"score": 1,
		"scoreDisplayMode": "binary"
	},
	"dom-size": {
		"id": "dom-size",
		"title": "Avoid an excessive DOM size",
		"description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).",
		"score": 0,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 2690,
		"numericUnit": "element",
		"displayValue": "2,690 elements",
		"metricSavings": {
			"TBT": 102
		},
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "statistic",
					"valueType": "text",
					"label": "Statistic"
				},
				{
					"key": "node",
					"valueType": "node",
					"label": "Element"
				},
				{
					"key": "value",
					"valueType": "numeric",
					"label": "Value"
				}
			],
			"items": [
				{
					"statistic": "Total DOM Elements",
					"value": {
						"type": "numeric",
						"granularity": 1,
						"value": 2690
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-265-SPAN",
						"path": "1,HTML,1,BODY,2,MAIN,3,SECTION,0,DIV,0,DIV,0,DIV,2,UL,0,DIV,0,DIV,0,LI,0,DIV,0,DIV,0,DIV,4,DIV,1,DIV,0,DIV,0,DIV,0,SPAN",
						"selector": "div.nearby-text > div.category-services > div.intro-services > span.sprite-icon",
						"boundingRect": {
							"top": 0,
							"bottom": 0,
							"left": 0,
							"right": 0,
							"width": 0,
							"height": 0
						},
						"snippet": "<span class=\"sprite-icon icon-service\">",
						"nodeLabel": "div.nearby-text > div.category-services > div.intro-services > span.sprite-icon"
					},
					"statistic": "Maximum DOM Depth",
					"value": {
						"type": "numeric",
						"granularity": 1,
						"value": 18
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-44-SELECT",
						"path": "1,HTML,1,BODY,2,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,FORM,1,DIV,5,DIV,3,DIV,1,DIV,0,SELECT",
						"selector": "div.lead-form-inputs > div.input-group > div.input-field > select#saveCustomCityService",
						"boundingRect": {
							"top": 2440,
							"bottom": 2500,
							"left": 46,
							"right": 366,
							"width": 320,
							"height": 60
						},
						"snippet": "<select name=\"city\" id=\"saveCustomCityService\" class=\"form-control\">",
						"nodeLabel": "select city*\nAbohar\nAgartala\nAgra\nAhmedabad\nAhmednagar\nAizawl\nAjmer\nAkola\nAlapp…"
					},
					"statistic": "Maximum Child Elements",
					"value": {
						"type": "numeric",
						"granularity": 1,
						"value": 504
					}
				}
			]
		},
		"guidanceLevel": 1
	},
	"geolocation-on-start": {
		"id": "geolocation-on-start",
		"title": "Avoids requesting the geolocation permission on page load",
		"description": "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more about the geolocation permission](https://developer.chrome.com/docs/lighthouse/best-practices/geolocation-on-start/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"inspector-issues": {
		"id": "inspector-issues",
		"title": "No issues in the `Issues` panel in Chrome Devtools",
		"description": "Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue.",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"no-document-write": {
		"id": "no-document-write",
		"title": "Avoids `document.write()`",
		"description": "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn how to avoid document.write()](https://developer.chrome.com/docs/lighthouse/best-practices/no-document-write/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		},
		"guidanceLevel": 2
	},
	"js-libraries": {
		"id": "js-libraries",
		"title": "Detected JavaScript libraries",
		"description": "All front-end JavaScript libraries detected on the page. [Learn more about this JavaScript library detection diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/js-libraries/).",
		"score": null,
		"scoreDisplayMode": "informative",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "name",
					"valueType": "text",
					"label": "Name"
				},
				{
					"key": "version",
					"valueType": "text",
					"label": "Version"
				}
			],
			"items": [
				{
					"name": "jQuery",
					"version": "3.5.1",
					"npm": "jquery"
				}
			],
			"debugData": {
				"type": "debugdata",
				"stacks": [
					{
						"id": "jquery",
						"version": "3.5.1"
					},
					{
						"id": "jquery-fast"
					}
				]
			}
		}
	},
	"notification-on-start": {
		"id": "notification-on-start",
		"title": "Avoids requesting the notification permission on page load",
		"description": "Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more about responsibly getting permission for notifications](https://developer.chrome.com/docs/lighthouse/best-practices/notification-on-start/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"paste-preventing-inputs": {
		"id": "paste-preventing-inputs",
		"title": "Allows users to paste into input fields",
		"description": "Preventing input pasting is a bad practice for the UX, and weakens security by blocking password managers.[Learn more about user-friendly input fields](https://developer.chrome.com/docs/lighthouse/best-practices/paste-preventing-inputs/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"uses-http2": {
		"id": "uses-http2",
		"title": "Use HTTP/2",
		"description": "HTTP/2 offers many benefits over HTTP/1.1, including binary headers and multiplexing. [Learn more about HTTP/2](https://developer.chrome.com/docs/lighthouse/best-practices/uses-http2/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"numericValue": 0,
		"numericUnit": "millisecond",
		"metricSavings": {
			"LCP": 0,
			"FCP": 0
		},
		"details": {
			"type": "opportunity",
			"headings": [],
			"items": [],
			"overallSavingsMs": 0
		},
		"guidanceLevel": 3
	},
	"uses-passive-event-listeners": {
		"id": "uses-passive-event-listeners",
		"title": "Uses passive listeners to improve scrolling performance",
		"description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more about adopting passive event listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/).",
		"score": 1,
		"scoreDisplayMode": "metricSavings",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		},
		"guidanceLevel": 3
	},
	"meta-description": {
		"id": "meta-description",
		"title": "Document has a meta description",
		"description": "Meta descriptions may be included in search results to concisely summarize page content. [Learn more about the meta description](https://developer.chrome.com/docs/lighthouse/seo/meta-description/).",
		"score": 1,
		"scoreDisplayMode": "binary"
	},
	"http-status-code": {
		"id": "http-status-code",
		"title": "Page has successful HTTP status code",
		"description": "Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more about HTTP status codes](https://developer.chrome.com/docs/lighthouse/seo/http-status-code/).",
		"score": 1,
		"scoreDisplayMode": "binary"
	},
	"font-size": {
		"id": "font-size",
		"title": "Document uses legible font sizes",
		"description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more about legible font sizes](https://developer.chrome.com/docs/lighthouse/seo/font-size/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"displayValue": "99.91% legible text",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "source",
					"valueType": "source-location",
					"label": "Source"
				},
				{
					"key": "selector",
					"valueType": "code",
					"label": "Selector"
				},
				{
					"key": "coverage",
					"valueType": "text",
					"label": "% of Page Text"
				},
				{
					"key": "fontSize",
					"valueType": "text",
					"label": "Font Size"
				}
			],
			"items": [
				{
					"source": {
						"type": "source-location",
						"url": "https://stores.myvi.in/VendorpageTheme/Enterprise/EThemeForMasterPro/css/slick.min.css?v=6.68",
						"urlProvider": "network",
						"line": 0,
						"column": 2574
					},
					"selector": ".slick-dots li button",
					"coverage": "0.08%",
					"fontSize": "0px"
				},
				{
					"source": {
						"type": "code",
						"value": "User Agent Stylesheet"
					},
					"selector": "sup",
					"coverage": "0.01%",
					"fontSize": "11.6667px"
				},
				{
					"source": {
						"type": "code",
						"value": "Legible text"
					},
					"selector": "",
					"coverage": "99.91%",
					"fontSize": "≥ 12px"
				}
			]
		}
	},
	"link-text": {
		"id": "link-text",
		"title": "Links have descriptive text",
		"description": "Descriptive link text helps search engines understand your content. [Learn how to make links more accessible](https://developer.chrome.com/docs/lighthouse/seo/link-text/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"crawlable-anchors": {
		"id": "crawlable-anchors",
		"title": "Links are not crawlable",
		"description": "Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn how to make links crawlable](https://support.google.com/webmasters/answer/9112205)",
		"score": 0,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "node",
					"valueType": "node",
					"label": "Uncrawlable Link"
				}
			],
			"items": [
				{
					"node": {
						"type": "node",
						"lhId": "1-81-A",
						"path": "1,HTML,1,BODY,2,MAIN,3,SECTION,0,DIV,0,DIV,0,DIV,1,DIV,0,A",
						"selector": "div.row > div.col-sm-12 > div.custome-slick-arrow > a.sprite-icon",
						"boundingRect": {
							"top": 0,
							"bottom": 0,
							"left": 0,
							"right": 0,
							"width": 0,
							"height": 0
						},
						"snippet": "<a class=\"sprite-icon arrow-prev arrow-prev-nearbyOutlets\">",
						"nodeLabel": "div.row > div.col-sm-12 > div.custome-slick-arrow > a.sprite-icon"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-82-A",
						"path": "1,HTML,1,BODY,2,MAIN,3,SECTION,0,DIV,0,DIV,0,DIV,1,DIV,1,A",
						"selector": "div.row > div.col-sm-12 > div.custome-slick-arrow > a.sprite-icon",
						"boundingRect": {
							"top": 0,
							"bottom": 0,
							"left": 0,
							"right": 0,
							"width": 0,
							"height": 0
						},
						"snippet": "<a class=\"sprite-icon arrow-next arrow-next-nearbyOutlets\">",
						"nodeLabel": "div.row > div.col-sm-12 > div.custome-slick-arrow > a.sprite-icon"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-132-A",
						"path": "1,HTML,1,BODY,2,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A",
						"selector": "div#tabslide1 > div#collapse1 > div.custome-slick-arrow > a.sprite-icon",
						"boundingRect": {
							"top": 0,
							"bottom": 0,
							"left": 0,
							"right": 0,
							"width": 0,
							"height": 0
						},
						"snippet": "<a class=\"sprite-icon arrow-prev arrow-prev-feature_1\">",
						"nodeLabel": "div#tabslide1 > div#collapse1 > div.custome-slick-arrow > a.sprite-icon"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-133-A",
						"path": "1,HTML,1,BODY,2,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,A",
						"selector": "div#tabslide1 > div#collapse1 > div.custome-slick-arrow > a.sprite-icon",
						"boundingRect": {
							"top": 0,
							"bottom": 0,
							"left": 0,
							"right": 0,
							"width": 0,
							"height": 0
						},
						"snippet": "<a class=\"sprite-icon arrow-next arrow-next-feature_1\">",
						"nodeLabel": "div#tabslide1 > div#collapse1 > div.custome-slick-arrow > a.sprite-icon"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-147-A",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,A",
						"selector": "div.row > div.col-md-12 > div.custome-slick-arrow > a.btn",
						"boundingRect": {
							"top": 0,
							"bottom": 0,
							"left": 0,
							"right": 0,
							"width": 0,
							"height": 0
						},
						"snippet": "<a class=\"btn btn-o-primary arrow-prev arrow-prev-blog\">",
						"nodeLabel": "div.row > div.col-md-12 > div.custome-slick-arrow > a.btn"
					}
				},
				{
					"node": {
						"type": "node",
						"lhId": "1-148-A",
						"path": "1,HTML,1,BODY,2,MAIN,7,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,A",
						"selector": "div.row > div.col-md-12 > div.custome-slick-arrow > a.btn",
						"boundingRect": {
							"top": 0,
							"bottom": 0,
							"left": 0,
							"right": 0,
							"width": 0,
							"height": 0
						},
						"snippet": "<a class=\"btn btn-o-primary arrow-next arrow-next-blog\">",
						"nodeLabel": "div.row > div.col-md-12 > div.custome-slick-arrow > a.btn"
					}
				}
			]
		}
	},
	"is-crawlable": {
		"id": "is-crawlable",
		"title": "Page isn’t blocked from indexing",
		"description": "Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more about crawler directives](https://developer.chrome.com/docs/lighthouse/seo/is-crawlable/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"warnings": [],
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"robots-txt": {
		"id": "robots-txt",
		"title": "robots.txt is valid",
		"description": "If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more about robots.txt](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"tap-targets": {
		"id": "tap-targets",
		"title": "Tap targets are not sized appropriately",
		"description": "Interactive elements like buttons and links should be large enough (48x48px), or have enough space around them, to be easy enough to tap without overlapping onto other elements. [Learn more about tap targets](https://developer.chrome.com/docs/lighthouse/seo/tap-targets/).",
		"score": 0.51,
		"scoreDisplayMode": "binary",
		"displayValue": "57% appropriately sized tap targets",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "tapTarget",
					"valueType": "node",
					"label": "Tap Target"
				},
				{
					"key": "size",
					"valueType": "text",
					"label": "Size"
				},
				{
					"key": "overlappingTarget",
					"valueType": "node",
					"label": "Overlapping Target"
				}
			],
			"items": [
				{
					"tapTarget": {
						"type": "node",
						"lhId": "1-58-A",
						"path": "1,HTML,1,BODY,2,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,0,OL,0,LI,0,A",
						"selector": "div.col-md-12 > ol#breadcrumb > li.breadcrumb-item > a.ga-id",
						"boundingRect": {
							"top": 89,
							"bottom": 106,
							"left": 15,
							"right": 242,
							"width": 227,
							"height": 17
						},
						"snippet": "<a class=\"ga-id breadcrumb_text_class\" href=\"https://stores.myvi.in/?lat=28.633876&amp;long=77.221526\" data-page-name=\"home_page\" data-ga-type=\"storelocator\" data-outlet-id=\"128884\" onclick=\"clickEventGa('home_page', 'bd_storelocator', '128884')\">",
						"nodeLabel": "Vi (Vodafone Idea) Stores near me"
					},
					"overlappingTarget": {
						"type": "node",
						"lhId": "1-59-A",
						"path": "1,HTML,1,BODY,2,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,0,OL,1,LI,0,A",
						"selector": "div.col-md-12 > ol#breadcrumb > li.breadcrumb-item > a.state-link",
						"boundingRect": {
							"top": 114,
							"bottom": 131,
							"left": 15,
							"right": 235,
							"width": 220,
							"height": 17
						},
						"snippet": "<a data-page-name=\"home_page\" data-ga-type=\"state\" data-outlet-id=\"128884\" class=\"state-link ga-id breadcrumb_text_class\" onclick=\"clickEventGa('home_page', 'bd_state', '128884')\" href=\"https://stores.myvi.in/location/delhi\">",
						"nodeLabel": "Vi (Vodafone Idea) Stores in Delhi"
					},
					"tapTargetScore": 864,
					"overlappingTargetScore": 372,
					"overlapScoreRatio": 0.4305555555555556,
					"size": "226x18",
					"width": 226,
					"height": 18
				},
				{
					"tapTarget": {
						"type": "node",
						"lhId": "1-59-A",
						"path": "1,HTML,1,BODY,2,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,0,OL,1,LI,0,A",
						"selector": "div.col-md-12 > ol#breadcrumb > li.breadcrumb-item > a.state-link",
						"boundingRect": {
							"top": 114,
							"bottom": 131,
							"left": 15,
							"right": 235,
							"width": 220,
							"height": 17
						},
						"snippet": "<a data-page-name=\"home_page\" data-ga-type=\"state\" data-outlet-id=\"128884\" class=\"state-link ga-id breadcrumb_text_class\" onclick=\"clickEventGa('home_page', 'bd_state', '128884')\" href=\"https://stores.myvi.in/location/delhi\">",
						"nodeLabel": "Vi (Vodafone Idea) Stores in Delhi"
					},
					"overlappingTarget": {
						"type": "node",
						"lhId": "1-60-A",
						"path": "1,HTML,1,BODY,2,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,0,OL,2,LI,0,A",
						"selector": "div.col-md-12 > ol#breadcrumb > li.breadcrumb-item > a.state-link",
						"boundingRect": {
							"top": 139,
							"bottom": 157,
							"left": 15,
							"right": 268,
							"width": 253,
							"height": 17
						},
						"snippet": "<a data-page-name=\"home_page\" data-ga-type=\"city\" data-outlet-id=\"128884\" class=\"state-link ga-id breadcrumb_text_class\" onclick=\"clickEventGa('home_page', 'bd_city', '128884')\" href=\"https://stores.myvi.in/location/delhi/new-delhi\">",
						"nodeLabel": "Vi (Vodafone Idea) Stores in New Delhi"
					},
					"tapTargetScore": 864,
					"overlappingTargetScore": 372,
					"overlapScoreRatio": 0.4305555555555556,
					"size": "220x18",
					"width": 220,
					"height": 18
				}
			]
		}
	},
	"hreflang": {
		"id": "hreflang",
		"title": "Document has a valid `hreflang`",
		"description": "hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more about `hreflang`](https://developer.chrome.com/docs/lighthouse/seo/hreflang/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"plugins": {
		"id": "plugins",
		"title": "Document avoids plugins",
		"description": "Search engines can't index plugin content, and many devices restrict plugins or don't support them. [Learn more about avoiding plugins](https://developer.chrome.com/docs/lighthouse/seo/plugins/).",
		"score": 1,
		"scoreDisplayMode": "binary",
		"details": {
			"type": "table",
			"headings": [],
			"items": []
		}
	},
	"canonical": {
		"id": "canonical",
		"title": "Document has a valid `rel=canonical`",
		"description": "Canonical links suggest which URL to show in search results. [Learn more about canonical links](https://developer.chrome.com/docs/lighthouse/seo/canonical/).",
		"score": 1,
		"scoreDisplayMode": "binary"
	},
	"structured-data": {
		"id": "structured-data",
		"title": "Structured data is valid",
		"description": "Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more about Structured Data](https://developer.chrome.com/docs/lighthouse/seo/structured-data/).",
		"score": null,
		"scoreDisplayMode": "manual"
	},
	"bf-cache": {
		"id": "bf-cache",
		"title": "Page prevented back/forward cache restoration",
		"description": "Many navigations are performed by going back to a previous page, or forwards again. The back/forward cache (bfcache) can speed up these return navigations. [Learn more about the bfcache](https://developer.chrome.com/docs/lighthouse/performance/bf-cache/)",
		"score": 0,
		"scoreDisplayMode": "binary",
		"displayValue": "1 failure reason",
		"details": {
			"type": "table",
			"headings": [
				{
					"key": "reason",
					"valueType": "text",
					"subItemsHeading": {
						"key": "frameUrl",
						"valueType": "url"
					},
					"label": "Failure reason"
				},
				{
					"key": "failureType",
					"valueType": "text",
					"label": "Failure type"
				}
			],
			"items": [
				{
					"reason": "Pages whose main resource has cache-control:no-store cannot enter back/forward cache.",
					"failureType": "Not actionable",
					"subItems": {
						"type": "subitems",
						"items": [
							{
								"frameUrl": "https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home"
							}
						]
					},
					"protocolReason": "MainResourceHasCacheControlNoStore"
				}
			]
		},
		"guidanceLevel": 2
	}
}

