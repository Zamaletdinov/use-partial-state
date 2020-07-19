"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function usePartialState(initialValue) {
    var _a = react_1.useState(initialValue), state = _a[0], setState = _a[1];
    var partialSetState = react_1.useCallback(function (updated) {
        setState(function (prev) {
            return prev ? __assign(__assign({}, prev), updated) : __assign({}, updated);
        });
    }, []);
    return [state, setState, partialSetState];
}
exports.usePartialState = usePartialState;
