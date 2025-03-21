import constants from '../config/constants.json';

export const tokenValidator = (value, tokenType) => {


    const validValues = new Set(constants[`${tokenType}`]);

    const tokens = value.trim().split(" ");

    const lastToken = tokens[tokens.length - 1];

    if (lastToken && !validValues.has(lastToken)) {
      return `Invalid value: "${lastToken}"`;
    } else {
      return "";
    }

}