/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';

interface Audit {
	id: string;
	title: string;
	score: number;
	scoreDisplayMode: null | string | boolean
}

const useAudit = (categories: string[]) => {
	const report = useSelector((store: unknown) => (store as any).lighthouse.report);
	if (!report) return [];

	const { audits } = report;

	const filteredAudits: Audit[] = categories
		.map((category: string) => audits[category])
		.filter((audit: Audit | undefined) => audit && audit.score !== null && audit.score !== 1)
		.sort((a, b) => a.score - b.score);

	return filteredAudits;
};

export default useAudit;
