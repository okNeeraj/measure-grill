import { INDICATE_CLASS } from "./constant";

export const performanceImpact = (score: number | string) => {
	const socoreIndicate = typeof score === 'number'
		? score <= 49 ? 'poor' : score <= 89 ? 'improvement' : score <= 100 ? 'good' : ''
		: 'nodata';

	return INDICATE_CLASS[socoreIndicate]
}
