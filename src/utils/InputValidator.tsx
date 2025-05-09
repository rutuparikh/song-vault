import constants from '../config/constants.json';

export const tokenValidator = (value: string) => {


    const validValues = new Set(constants["chords"]);

    var tokens = value.trim().split(" ");

    const lastToken = tokens[tokens.length - 1];

    if (lastToken && !validValues.has(lastToken)) {
      return lastToken;
    } else {
      return "";
    }

}
