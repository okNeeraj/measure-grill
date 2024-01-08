import asyncHandler from "../../utils/asyncHandler.js";
import { REPORT_STATIC } from "../../mock/reportStatic.js";
import { REPORT_MOCK } from "../../mock/reportMock.js";

function filterData(report) {
	const data = report[1]['lighthouseResult'];
	const auditList = []
	Object.values(data.audits).forEach((audit) => {
		const auditType = audit.details?.type;
		const auditScore = audit.score; // [null, '0 to 1']
		const auditScoreMode = audit?.scoreDisplayMode; // ['binary', 'numeric', 'notApplicable', 'manual', 'informative']
		if (
			auditScoreMode !== 'notApplicable'
			&& auditScoreMode !== 'manual'
			&& auditScoreMode !== 'informative'
			&& auditScore !== 1
		) {
			auditList.push(audit)
		}
		// if (!auditList.includes(auditType)) {
		// 	auditList.push(auditType)
		// }

	});

	return auditList;
}

export const report = asyncHandler(async (req, res) => {
	const filteredData = filterData(REPORT_STATIC);
	res.status(200).json({
		message: "ok",
		totalAudits: filteredData.length,
		data: filteredData,
	})
})

