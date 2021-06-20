const romanToInt = (s: string): number => {
  const Romans = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  const arr = s.split("");

  let result = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (Romans[arr[i] + arr[i + 1]]) {
      result = result + Romans[arr[i] + arr[i + 1]];
      i += 1;
    } else {
      result = result + Romans[arr[i]];
    }
  }

  return result;
};

export default romanToInt;
