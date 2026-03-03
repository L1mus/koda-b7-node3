/*eslint no-constant-condition: "error"*/

if (false) {
  doSomethingUnfinished();
}

if (void x) {
  doSomethingUnfinished();
}

if ((x &&= false)) {
  doSomethingNever();
}

if (class {}) {
  doSomethingAlways();
}

if (new Boolean(x)) {
  doSomethingAlways();
}

if (Boolean(1)) {
  doSomethingAlways();
}

if (undefined) {
  doSomethingUnfinished();
}

if ((x ||= true)) {
  doSomethingAlways();
}

for (; -2; ) {
  doSomethingForever();
}

while (typeof x) {
  doSomethingForever();
}

do {
  doSomethingForever();
} while ((x = -1));

const result = 0 ? a : b;

if (input === "hello" || "bye") {
  output(input);
}

/*eslint no-duplicate-case: "error"*/

const a = 1,
  one = 1;

switch (a) {
  case 1:
    break;
  case 2:
    break;
  case 1: // duplicate test expression
    break;
  default:
    break;
}

switch (a) {
  case one:
    break;
  case 2:
    break;
  case one: // duplicate test expression
    break;
  default:
    break;
}

switch (a) {
  case "1":
    break;
  case "2":
    break;
  case "1": // duplicate test expression
    break;
  default:
    break;
}

/*eslint no-undef: "error"*/

const foo = someFunction();
const bar = a + 1;
