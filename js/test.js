const XO = (str) => {
  if (str.match(/o/gi) === null && str.match(/x/gi) === null) {
    return true;
  }
  return str.match(/o/gi).length === str.match(/x/gi).length;
};



XO("oOxx");
