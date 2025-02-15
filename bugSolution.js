function myFunction() {
  var x = 10; // Using var instead of let
  if (true) {
    var x = 20; // This x will overwrite the global x
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20, because var has function scope
}

//Or use different variable names to avoid shadowing:
function myFunction() {
  let x = 10;
  if (true) {
    let y = 20; 
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10
} 