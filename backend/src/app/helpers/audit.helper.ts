export const getAudits = (originalObject) => {
	const filteredObject = {};
	for (const key in originalObject) {
		if (originalObject.hasOwnProperty(key)) {
			const { id, title, description } = originalObject[key];
			const customDesc = `my description => ${description}`
			filteredObject[key] = { id, title, description: customDesc };
		}
	}
	return filteredObject;
}

export const auditHelper = () => {
	return 'Iam auditHelper!'
}
