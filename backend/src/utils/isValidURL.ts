export const isValidURL = (url: string) => {
	const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
	return urlRegex.test(url);
}
