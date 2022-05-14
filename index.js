function createCounter(val = 0) {
  let value = val;
  let id = Math.floor(Math.random() * 1e20);

  let container = document.createElement("div");
  container.className = "container";
  let field = document.querySelector(".entry");

  let counter = document.createElement("input");
  let buttonIncr = document.createElement("button");
  buttonIncr.className = `buttonIncr${id}`;
  buttonIncr.innerHTML = "+";
  buttonIncr.style.backgroundColor = "rgba(17, 238, 65, 0.459)";

  let buttonDecr = document.createElement("button");
  buttonDecr.className = `buttonDecr${id}`;
  buttonDecr.innerHTML = "-";
  buttonDecr.style.backgroundColor = "rgba(238, 24, 17, 0.534)";

  counter.value = value;
  field.append(container);
  container.append(buttonDecr, counter, buttonIncr);

  function countControls() {
    document.querySelector(`.buttonIncr${id}`).addEventListener("click", () => {
      counter.value = ++value;
    });

    document.querySelector(`.buttonDecr${id}`).addEventListener("click", () => {
      counter.value = --value;
    });
  }
  countControls.count = value;

  countControls.increment = () => {
    counter.value = ++value;
    countControls.count = value;
  };

  countControls.decrement = () => {
    counter.value = --value;
    countControls.count = value;
  };
  countControls.setRange = (min, max) => {
    document.querySelector(`.buttonIncr${id}`).addEventListener("click", () => {
      if (counter.value >= max) {
        document.querySelector(`.buttonIncr${id}`).disabled = true;
        document.querySelector(`.buttonDecr${id}`).disabled = false;
      } else {
        document.querySelector(`.buttonIncr${id}`).disabled = false;
        document.querySelector(`.buttonDecr${id}`).disabled = false;
      }
    });
    document.querySelector(`.buttonDecr${id}`).addEventListener("click", () => {
      if (counter.value <= min) {
        document.querySelector(`.buttonIncr${id}`).disabled = false;
        document.querySelector(`.buttonDecr${id}`).disabled = true;
      } else {
        document.querySelector(`.buttonIncr${id}`).disabled = false;
        document.querySelector(`.buttonDecr${id}`).disabled = false;
      }
    });
  };
  return countControls;
}
let res = createCounter();
let res2 = createCounter(3);
let res3 = createCounter(123);

res();
console.log(res.count);
res.setRange(-2, 7);
res2();
res3();
console.log(res3.count);
res.decrement();
res.decrement();
res3.increment();
console.log(res.count);
console.log(res3.count);
