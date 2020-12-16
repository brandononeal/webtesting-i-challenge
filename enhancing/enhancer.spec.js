const enhancer = require("./enhancer.js");

const item = {
  enhancement: 13,
  durability: 37,
};

describe("sanity check", () => {
  it("works", () => {
    expect(true).toBe(true);
  });
});

describe("success", () => {
  it("succeeds", async () => {
    const success = await enhancer.success(item);
    expect(success.enhancement).toBe(14);
  });
});

describe("failure", () => {
  it("fails", async () => {
    const failure = await enhancer.fail(item);
    expect(failure.durability).toBe(32);
  });
});

describe("repair", () => {
  it("repairs", async () => {
    const repair = await enhancer.repair(item);
    expect(repair.durability).toBe(100);
  });
});
