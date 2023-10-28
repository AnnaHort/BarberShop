const findShort = (s) => {

  let arr = []

  const words = s.split(" ");
  
  words.forEach((word) => {
    const wordLength = word.length;
    arr.push(wordLength);
  });
  return(console.log(Math.min(...arr)));
};
findShort("Hello Anna! How are you?");
