import { useSelector } from 'react-redux';

interface Audit {
	id: string;
	title: string;
	score: number;
	// Other properties...
}

const useAudit = (categories: string[]) => {
	const report = useSelector((store: unknown) => (store as any).lighthouse.report); // Adjust the type assertion as needed
	if (!report) return [];

	const { audits } = report;

	const filteredAudits: Audit[] = categories
		.map((category: string) => audits[category])
		.filter((audit: Audit | undefined) => audit)
		.sort((a, b) => a.score - b.score);

	return filteredAudits;
};

export default useAudit;
