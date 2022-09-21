// Create Elements
const body = document.querySelector("body");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const p2 = document.createElement("p");
const button = document.createElement("button");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");

// Add Class to body
body.classList.add("container", "position-relative");

// Add h1 element
h1.textContent = "My Favourite Destinations";
h1.classList.add("text-center", "p-2", "mt-4", "fs-1");

// Add Paragraph
p.textContent = "Toggle the list of my favourite destinations";
p.classList.add("p-2", "mt-4", "fs-5", "mx-4", "bg-info");

p2.classList.add("p-2", "mt-4", "fs-5", "mx-4", "bg-success", "bg-opacity-50");

// Add Button
button.classList.add("btn", "btn-primary", "mx-4", "mt-3");
button.textContent = "Show destinations";

// Add ul
ul.classList.add("list-group", "d-none");

// list items
li1.classList.add("mx-4", "list-group-item");
li1.textContent = "Rome";

li2.classList.add("mx-4", "list-group-item");
li2.textContent = "Athens";

li3.classList.add("mx-4", "list-group-item");
li3.textContent = "Bangkok";

li4.classList.add("mx-4", "list-group-item");
li4.textContent = "Amsterdam";

li5.classList.add("mx-4", "list-group-item");
li5.textContent = "Cala Gonone";

// for (let i = 0; i < 5; i++) {
//   const li = document.createElement("li");
//   li.textContent = "Rome";
// }

ul.append(li1, li2, li3, li4, li5);

// Append items
body.append(h1, p, ul, button);

button.addEventListener("click", () => {
  button.textContent = "Hide destinations";
  ul.classList.toggle("d-none");
  if (ul.classList.contains("d-none")) {
    button.textContent = "Show destinations";
    Array.from(ul.children).forEach((item) => {
      item.classList.remove("active");
    });
  }
});

ul.addEventListener("click", (e) => {
  //   e.target.classList.toggle("active");

  if (e.target.tagName === "LI") {
    // e.target.remove();
    Array.from(ul.children).forEach((item) => {
      item.classList.remove("active");
    });
    p2.textContent = `You selected ${e.target.textContent}`;
    ul.append(p2);

    e.target.classList.toggle("active");
  }
});
