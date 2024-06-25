function solution(a, b) {
  console.log(a.length);
  if (a.length > b.length) {
    console.log(b + a + b);
  } else {
    a + b + a;
  }
}

solution("111", "22");
