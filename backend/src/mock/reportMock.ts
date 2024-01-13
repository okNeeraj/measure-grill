export const REPORT_MOCK = [
	{
		id: 1,
		webId: 12,
		pageId: 1202,
		loadingExprience: {
			"metrics": {
				"CUMULATIVE_LAYOUT_SHIFT_SCORE": {
					"percentile": 0,
					"distributions": [
						{
							"min": 0,
							"max": 10,
							"proportion": 0.9804321239298811
						},
						{
							"min": 10,
							"max": 25,
							"proportion": 0.015491235222176918
						},
						{
							"min": 25,
							"proportion": 0.004076640847941296
						}
					],
					"category": "FAST"
				},
				"EXPERIMENTAL_TIME_TO_FIRST_BYTE": {
					"percentile": 1037,
					"distributions": [
						{
							"min": 0,
							"max": 800,
							"proportion": 0.6796036333608543
						},
						{
							"min": 800,
							"max": 1800,
							"proportion": 0.1973575557390573
						},
						{
							"min": 1800,
							"proportion": 0.12303881090008137
						}
					],
					"category": "AVERAGE"
				},
				"FIRST_CONTENTFUL_PAINT_MS": {
					"percentile": 1389,
					"distributions": [
						{
							"min": 0,
							"max": 1800,
							"proportion": 0.8256537982565295
						},
						{
							"min": 1800,
							"max": 3000,
							"proportion": 0.08551266085512572
						},
						{
							"min": 3000,
							"proportion": 0.08883354088833591
						}
					],
					"category": "FAST"
				},
				"FIRST_INPUT_DELAY_MS": {
					"percentile": 8,
					"distributions": [
						{
							"min": 0,
							"max": 100,
							"proportion": 0.9465930018416192
						},
						{
							"min": 100,
							"max": 300,
							"proportion": 0.03057090239410677
						},
						{
							"min": 300,
							"proportion": 0.022836095764272434
						}
					],
					"category": "FAST"
				},
				"INTERACTION_TO_NEXT_PAINT": {
					"percentile": 108,
					"distributions": [
						{
							"min": 0,
							"max": 200,
							"proportion": 0.8693333333333326
						},
						{
							"min": 200,
							"max": 500,
							"proportion": 0.08099999999999993
						},
						{
							"min": 500,
							"proportion": 0.04966666666666705
						}
					],
					"category": "FAST"
				},
				"LARGEST_CONTENTFUL_PAINT_MS": {
					"percentile": 1486,
					"distributions": [
						{
							"min": 0,
							"max": 2500,
							"proportion": 0.8747960848287105
						},
						{
							"min": 2500,
							"max": 4000,
							"proportion": 0.05954323001631322
						},
						{
							"min": 4000,
							"proportion": 0.06566068515497657
						}
					],
					"category": "FAST"
				}
			},
			"overall_category": "AVERAGE",
		},
		originLoadingExperience: {
			"metrics": {
				"CUMULATIVE_LAYOUT_SHIFT_SCORE": {
					"percentile": 0,
					"distributions": [
						{
							"min": 0,
							"max": 10,
							"proportion": 0.9802487198244314
						},
						{
							"min": 10,
							"max": 25,
							"proportion": 0.01207022677395755
						},
						{
							"min": 25,
							"proportion": 0.007681053401609351
						}
					],
					"category": "FAST"
				},
				"EXPERIMENTAL_TIME_TO_FIRST_BYTE": {
					"percentile": 277,
					"distributions": [
						{
							"min": 0,
							"max": 800,
							"proportion": 0.9559770937723682
						},
						{
							"min": 800,
							"max": 1800,
							"proportion": 0.03256979241231205
						},
						{
							"min": 1800,
							"proportion": 0.011453113815318472
						}
					],
					"category": "FAST"
				},
				"FIRST_CONTENTFUL_PAINT_MS": {
					"percentile": 503,
					"distributions": [
						{
							"min": 0,
							"max": 1800,
							"proportion": 0.97214076246334
						},
						{
							"min": 1800,
							"max": 3000,
							"proportion": 0.015395894428152432
						},
						{
							"min": 3000,
							"proportion": 0.012463343108504285
						}
					],
					"category": "FAST"
				},
				"FIRST_INPUT_DELAY_MS": {
					"percentile": 3,
					"distributions": [
						{
							"min": 0,
							"max": 100,
							"proportion": 0.9712681638044943
						},
						{
							"min": 100,
							"max": 300,
							"proportion": 0.020145310435931367
						},
						{
							"min": 300,
							"proportion": 0.008586525759577279
						}
					],
					"category": "FAST"
				},
				"INTERACTION_TO_NEXT_PAINT": {
					"percentile": 69,
					"distributions": [
						{
							"min": 0,
							"max": 200,
							"proportion": 0.9315111530003158
						},
						{
							"min": 200,
							"max": 500,
							"proportion": 0.050895381715362946
						},
						{
							"min": 500,
							"proportion": 0.01759346528432293
						}
					],
					"category": "FAST"
				},
				"LARGEST_CONTENTFUL_PAINT_MS": {
					"percentile": 836,
					"distributions": [
						{
							"min": 0,
							"max": 2500,
							"proportion": 0.9691403379867805
						},
						{
							"min": 2500,
							"max": 4000,
							"proportion": 0.016531961792799515
						},
						{
							"min": 4000,
							"proportion": 0.014327700220426298
						}
					],
					"category": "FAST"
				}
			},
			"overall_category": "FAST",
		},
		lighthouseResult: {
			"lighthouseVersion": "11.0.0",
			"userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/120.0.6099.71 Safari/537.36",
			"fetchTime": "2024-01-03T01:49:24.712Z",
			"environment": {
				"networkUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
				"hostUserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/120.0.6099.71 Safari/537.36",
				"benchmarkIndex": 385,
				"credits": {
					"axe-core": "4.7.2"
				}
			},
			"runWarnings": [],
			"configSettings": {
				"emulatedFormFactor": "desktop",
				"formFactor": "desktop",
				"locale": "en-US",
				"onlyCategories": [
					"pwa",
					"performance",
					"accessibility",
					"best-practices",
					"seo"
				],
				"channel": "lr"
			},
			audits: 6464,
			categories: {}
		},
		title: 'New Report',
		description: 'New report description',
	},

];
