function replace(s) {
  const str = s.split("");

  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      str[i] = "!";
    }
  }
  return str.join("");
}

replace("sssssoss");
// replace("Hi!") === "H!!";
// replace("!Hi! Hi!") === "!H!! H!!";
// replace("aeiou") === "!!!!!";
// replace("ABCDE") === "!BCD!";
