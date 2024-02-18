export interface ValidationItem {
	name: string;
	type: string;
	value: string;
	message?: string;
	status?: boolean;
}

const isValidURL = (url: string): boolean => {
	const urlPattern = new RegExp('^(https?://|http://)[^\\s/$.?#].[^\\s]*$');
	return urlPattern.test(url);
};


export const validate = (items: ValidationItem[]): Record<string, ValidationItem> => {
	const validationResults: Record<string, ValidationItem> = {};

	for (const item of items) {
		// eslint-disable-next-line prefer-const
		let validation: ValidationItem = {
			name: item.name,
			type: item.type,
			value: item.value,
			message: '',
			status: true
		};

		if (item.type === 'url') {
			validation.status = isValidURL(item.value);
			validation.message = validation.status ? 'Valid URL' : 'Invalid URL! Provide valid URL';
		}
		if (item.type === 'text') {
			validation.status = item.value !== '';
			validation.message = validation.status ? 'Valid URL' : 'Website name is required';
		}

		validationResults[item.name] = validation;
	}

	return validationResults;
}
