import asyncHandler from "../../utils/asyncHandler";
import { REPORT_STATIC } from "../../mock/reportStatic";
import { REPORT_MOCK } from "../../mock/reportMock";
import {
	actualAudits,
	auditsMeta
} from '../../constants/auditsMeta';

import {
	getAudits,
	auditHelper
} from "../helpers/audit.helper";

function filterAudit(lhReport: any) {
	const auditList = []
	Object.values(lhReport.audits).forEach((audit: any) => {
		const auditType = audit.details?.type;
		const auditScore = audit.score; // [null, '0 to 1']
		const auditScoreMode = audit?.scoreDisplayMode; // ['binary', 'numeric', 'notApplicable', 'manual', 'informative']
		if (
			// auditScoreMode !== 'informative'
			// && auditScoreMode !== 'notApplicable'
			// && auditScoreMode !== 'manual'
			// && auditScoreMode !== 'error'
			// && auditScoreMode === 'binary'
			// && auditScore !== 1
			// auditScoreMode === 'metricSavings'
			// auditScore === 1
			true
		) {
			auditList.push(audit)
		}
	});

	return auditList;
}

const filterCategory = (lhReport: any) => {
	const categoryList = {
		"performance": null,
		"accessibility": null,
		"best-practices": null,
		"seo": null,
		"pwa": null
	}

	Object.values(lhReport.categories).forEach((category: any) => {
		const { id, auditRefs } = category;
		categoryList[id] = category;
		// const filteredAuditRefs = auditRefs.filter((audit: any) => {
		// 	return audit
		// });
		// categoryList[id] = filteredAuditRefs
	});

	return categoryList;
}

export const report = asyncHandler(async (req, res) => {
	const filteredCategory = filterCategory(REPORT_STATIC[1]['lighthouseResult']);
	const filteredAudit = filterAudit(REPORT_STATIC[1]['lighthouseResult']);
	res.status(200).json({
		message: "ok",
		lighthouseVersion: '11.4.0',
		// totalAudits: filteredAudit.length,
		data: {
			categories: filteredCategory,
			audits: filteredAudit
		},
	})
})

