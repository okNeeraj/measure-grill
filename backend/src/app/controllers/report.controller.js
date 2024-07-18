"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.report = void 0;
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const reportStatic_1 = require("../../mock/reportStatic");
function filterAudit(lhReport) {
    const auditList = {};
    Object.values(lhReport.audits).forEach((audit) => {
        var _a;
        const auditType = (_a = audit.details) === null || _a === void 0 ? void 0 : _a.type;
        const auditScore = audit.score; // [null, '0 to 1']
        const auditScoreMode = audit === null || audit === void 0 ? void 0 : audit.scoreDisplayMode; // ['binary', 'numeric', 'notApplicable', 'manual', 'informative']
        if (auditScoreMode !== 'informative'
            && auditScoreMode !== 'notApplicable'
            && auditScoreMode !== 'manual'
            && auditScoreMode !== 'error'
            // && auditScoreMode === 'binary'
            && auditScore !== 1
        // auditScoreMode === 'metricSavings'
        // auditScore === 1
        // true
        ) {
            auditList[audit.id] = audit;
        }
    });
    return auditList;
}
const filterCategory = (lhReport) => {
    const categoryList = {
        "performance": null,
        "accessibility": null,
        "best-practices": null,
        "seo": null,
        "pwa": null
    };
    Object.values(lhReport.categories).forEach((category) => {
        const { id, auditRefs } = category;
        categoryList[id] = category;
        // const filteredAuditRefs = auditRefs.filter((audit: any) => {
        // 	return audit
        // });
        // categoryList[id] = filteredAuditRefs
    });
    return categoryList;
};
exports.report = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filteredCategory = filterCategory(reportStatic_1.REPORT_STATIC[1]['lighthouseResult']);
    const filteredAudit = filterAudit(reportStatic_1.REPORT_STATIC[1]['lighthouseResult']);
    res.status(200).json({
        message: "ok",
        lighthouseVersion: '11.4.0',
        // totalAudits: filteredAudit.length,
        data: reportStatic_1.REPORT_STATIC[1]['lighthouseResult']
    });
}));
