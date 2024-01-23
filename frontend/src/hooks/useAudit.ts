/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
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

	const auditsFailed: Audit[] = categories
		.map((category: string) => audits[category])
		.filter((audit: Audit | undefined) => audit && audit.score !== null && audit.score !== 1)
		.sort((a, b) => a.score - b.score);

	const auditsPassed: Audit[] = categories
		.map((category: string) => audits[category])
		.filter((audit: Audit | undefined) => audit && audit.score === 1);

	return { failed: auditsFailed, passed: auditsPassed };
};

export default useAudit;
