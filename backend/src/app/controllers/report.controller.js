import asyncHandler from "../../utils/asyncHandler.js";
import { REPORT_STATIC } from "../../mock/reportStatic.js";
import { REPORT_MOCK } from "../../mock/reportMock.js";
import {
	actualAudits,
	auditsMeta
} from '../../constants/auditsMeta.js';

import {
	getAudits,
	auditHelper
} from "../helpers/audit.helper.js";

function filterData(report) {
	const data = report[1]['lighthouseResult'];
	const auditList = []
	Object.values(data.audits).forEach((audit) => {
		const auditType = audit.details?.type;
		const auditScore = audit.score; // [null, '0 to 1']
		const auditScoreMode = audit?.scoreDisplayMode; // ['binary', 'numeric', 'notApplicable', 'manual', 'informative']
		if (
			auditScoreMode !== 'informative'
			&& auditScoreMode !== 'notApplicable'
			&& auditScoreMode !== 'manual'
			&& auditScoreMode !== 'error'
			&& auditScoreMode === 'binary'
			&& auditScore !== 1
			// auditScoreMode === 'metricSavings'
			// auditScore === 1
			// true
		) {
			auditList.push(audit)
		}
	});

	return auditList;
}

const filterAudits = () => {

}

export const report = asyncHandler(async (req, res) => {
	const filteredData = filterData(REPORT_STATIC);
	// const result = getAudits(actualAudits)
	res.status(200).json({
		message: "ok",
		lighthouseVersion: REPORT_STATIC[1]['lighthouseResult']['lighthouseVersion'],
		totalAudits: filteredData.length,
		data: {
			categories: null,
			audits: filteredData
		},
	})
})

