// I want to design a database from below JSON with below instruction -
// 	1. Inside lighthouseResult -> I have two Objects Audits and Categories
// 2. Inside Audits -> Multiple recoreds added with key like paste - preventing - inputs, network - rtt etc.
// 3. Inside each category -> auditRefs contain all key in id, which is key of audit
// 4. No.of audit can be more than 1000 its not predictable
// 5. AuditRefs also can be many

const lh = {
	"lighthouseResult": {
		"audits": {
			"paste-preventing-inputs": {
				"id": "paste-preventing-inputs",
				"title": "Allows users to paste into input fields",
				"description": "Preventing input pasting is a bad practice for the UX, and weakens security by blocking password managers.[Learn more about user-friendly input fields](https://developer.chrome.com/docs/lighthouse/best-practices/paste-preventing-inputs/).",
				"score": 1,
				"scoreDisplayMode": "binary",
				"details": {
					"headings": [],
					"type": "table",
					"items": []
				}
			},
			"interactive-element-affordance": {
				"id": "interactive-element-affordance",
				"title": "Interactive elements indicate their purpose and state",
				"description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).",
				"score": null,
				"scoreDisplayMode": "manual"
			},
			"network-rtt": {
				"id": "network-rtt",
				"title": "Network Round Trip Times",
				"description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more about the Round Trip Time](https://hpbn.co/primer-on-latency-and-bandwidth/).",
				"score": null,
				"scoreDisplayMode": "informative",
				"displayValue": "130 ms",
				"details": {
					"sortedBy": [
						"rtt"
					],
					"items": [
						{
							"origin": "https://stores.myvi.in",
							"rtt": 133
						},
						{
							"rtt": 0,
							"origin": "https://www.googletagmanager.com"
						},
						{
							"origin": "https://cdn4.singleinterface.com",
							"rtt": 0
						},
						{
							"origin": "https://prod2.singleinterface.com",
							"rtt": 0
						}
					],
					"headings": [
						{
							"label": "URL",
							"key": "origin",
							"valueType": "text"
						},
						{
							"key": "rtt",
							"granularity": 1,
							"valueType": "ms",
							"label": "Time Spent"
						}
					],
					"type": "table"
				},
				"numericValue": 133,
				"numericUnit": "millisecond"
			}
		},
		"categories": {
			"performance": {
				"id": "performance",
				"title": "Performance",
				"score": 0.76,
				"auditRefs": [
					{
						"id": "first-contentful-paint",
						"weight": 10,
						"group": "metrics",
						"acronym": "FCP",
						"relevantAudits": [
							"server-response-time",
							"render-blocking-resources",
							"redirects",
							"critical-request-chains",
						]
					},
					{
						"id": "largest-contentful-paint",
						"weight": 25,
						"group": "metrics",
						"acronym": "LCP",
						"relevantAudits": [
							"server-response-time",
							"render-blocking-resources",
							"total-byte-weight",
							"lcp-lazy-loaded"
						]
					}
				]
			},
			"accessibility": {
				"id": "accessibility",
				"title": "Accessibility",
				"description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developer.chrome.com/docs/lighthouse/accessibility/). Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so [manual testing](https://web.dev/how-to-review/) is also encouraged.",
				"score": 0.82,
				"manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://web.dev/how-to-review/).",
				"auditRefs": [
					{
						"id": "accesskeys",
						"weight": 0,
						"group": "a11y-navigation"
					},
					{
						"id": "aria-allowed-attr",
						"weight": 10,
						"group": "a11y-aria"
					}
				]
			}
		}
	}
}

