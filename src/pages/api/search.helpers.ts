interface JsonTypes {
  [propName: string]: string | number;
}

const enforceAllValuesToBeString = (arr: Array<string | number>) => {
  return arr.map((x) => {
    return typeof x === 'string' ? x : JSON.stringify(x);
  });
};

const turnObjectToArrAndEraseGaps = (obj: JsonTypes) => {
  return Object.values(obj).filter((str) => str !== '');
};

const checkIfObjectContainsString = (obj: JsonTypes, str: string) => {
  let containgString = false;
  const tempArr = turnObjectToArrAndEraseGaps(obj);
  const arrOfStr = enforceAllValuesToBeString(tempArr);
  arrOfStr.forEach((element: string) => {
    if (element.includes(str)) {
      containgString = true;
    }
  });
  return containgString;
};

export const throwMeArrOfObjContaningGivenString = (
  arr: Array<JsonTypes>,
  str: string
) => {
  return arr.filter((arrElement) => {
    if (checkIfObjectContainsString(arrElement, str)) {
      return arrElement;
    }
  });
};

export const isJSON = (value: object) => {
  if (value != null && typeof value != 'string') {
    const valueS: string = JSON.stringify(value);
    try {
      JSON.parse(valueS);
      return true;
    } catch (e) {
      return false;
    }
  }
  return false;
};

export const validateGivenValueToSearchFormat = (val: string | number) => {
  let givenValue = val;
  if (typeof givenValue !== 'string') {
    givenValue = JSON.stringify(val);
  }
  return givenValue.toUpperCase();
};
