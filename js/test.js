function noSpace(x) {
  console.log(x);
  let y = 0;
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
    if (x[i].length > 0) {
      y += x[i];
    }
  }
  console.log(y);
}

noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");
