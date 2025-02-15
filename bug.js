function myFunction() {
  let x = 10;
  if (true) {
    let x = 20; // This x is only accessible inside this block
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10, not 20
}