import { MESSAGE } from '../constant/index';


const nonEmptyLength = (model, key) => {
  let subject = model[key]
  if (subject==='' || subject===null) {
    return { key, message: MESSAGE.NON_EMPTY };
  }
  if (typeof subject === "string") {
    return subject.trim().length < 1 ? { key, message: MESSAGE.NON_EMPTY } : null;
  }
  if (Array.isArray(subject) && subject.length < 1) {
    return { key, message: "List cannot be empty" };
  }
  return null;
};


class StateValidator {
  constructor(stateRuleMap) {
    this.ruleMap = stateRuleMap;
    this.rules = {nonEmptyLength};
  }

  addRule(ruleName, ruleFunction) {
    this.rules[ruleName] = ruleFunction;
  }
  validateField(state, field) {

    let isValid = true
    let feildErrors = {}
    let validationRules = this.ruleMap[field] ? this.ruleMap[field].split(",") : [];
    for (let ruleIndex = 0; ruleIndex < validationRules.length; ruleIndex++) {
      let ruleName = validationRules[ruleIndex].trim();
      let ruleFunction = this.rules[ruleName];
      if (ruleFunction === undefined) {
        continue
      }
      let error = ruleFunction(state, field);
      if (error === null) {
        continue;
      }
      if (!feildErrors[error.key]) {
        feildErrors[error.key] = [];
      }

      feildErrors[error.key].push(error.message);
      isValid = false;
    }
    return isValid
      ? { valid: isValid }
      : { valid: isValid, errors: feildErrors };
  }

  validateState(state) {
    let validationErrors = {};
    let isValid = true;
    for (let stateField in this.ruleMap) {
      let fieldResults = this.validateField(state, stateField)
      if (fieldResults.valid) {
        continue
      }
      isValid = false
      validationErrors = { ...validationErrors, ...fieldResults.errors }
    }
    return isValid
      ? { valid: isValid }
      : { valid: isValid, errors: validationErrors };
  }
}

export default StateValidator;