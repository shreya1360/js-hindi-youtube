# project related to dom

## project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
console.log("Shreya");
const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "purple") {
      body.style.backgroundColor = event.target.id;
    }
  });
});
```
