"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditHelper = exports.getAudits = void 0;
const getAudits = (originalObject) => {
    const filteredObject = {};
    for (const key in originalObject) {
        if (originalObject.hasOwnProperty(key)) {
            const { id, title, description } = originalObject[key];
            const customDesc = `my description => ${description}`;
            filteredObject[key] = { id, title, description: customDesc };
        }
    }
    return filteredObject;
};
exports.getAudits = getAudits;
const auditHelper = () => {
    return 'Iam auditHelper!';
};
exports.auditHelper = auditHelper;
