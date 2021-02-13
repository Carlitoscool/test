"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mock = void 0;
function mock(...mockedMethods) {
    const partiallyMocked = {};
    mockedMethods.forEach(mockedMethod => (partiallyMocked[mockedMethod] = jest.fn()));
    return partiallyMocked;
}
exports.mock = mock;
//# sourceMappingURL=unit-test-mock.js.map