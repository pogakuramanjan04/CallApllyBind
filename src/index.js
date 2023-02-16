// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// CALL APPLLY AND BIND
const o = {
  name: "ram"
};
function f1() {
  function f2() {
    // console.log(this); //
    function f3() {
      //   console.log(this); //
    }
    f3.call(o); // apply or call to make transfer the context
  }
  f2();
}
f1();

function ram() {
  console.log(this, "bind this");
}
ram(); // undefined

let bf = ram.bind(o); // ram object
bf();
