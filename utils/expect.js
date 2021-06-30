const expectToBe = (obj, value) => {
    expectToBe(obj).toBe(value);
};

const expectStr = (obj, substr) => {
    expect(obj).toEqual(expect.stringContaining(substr));
};

const expectNum = obj => {
    expect(obj).toEqual(expect.any(Number));
};

module.exports = { expectToBe, expectStr, expectnum };