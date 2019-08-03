import StateValidator from "./stateValidator";
describe("StateValidatorUnique", () => {
  it("should fail if positive value is not given", () => {});

  it("should chaeck non empty length", () => {
    let state = { length: 1 };
    let ruleMap = { length: "notEmpty" };

    let validator = new StateValidator(ruleMap);
    let result = validator.validateState(state);

    expect(result.valid).toBe(true);
  });


});
