"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manipulatePartyReputationUpstream = void 0;
// eslint-disable-next-line import/prefer-default-export
const manipulatePartyReputationUpstream = (data) => {
    const [mlData, rawData] = data;
    return mlData.map((partyReputationData) => {
        var _a;
        const { party } = partyReputationData;
        return Object.assign(Object.assign({}, partyReputationData), { rawData: ((_a = rawData.find((raw) => raw.party === party)) === null || _a === void 0 ? void 0 : _a.values) || [] });
    });
};
exports.manipulatePartyReputationUpstream = manipulatePartyReputationUpstream;
//# sourceMappingURL=utils.js.map