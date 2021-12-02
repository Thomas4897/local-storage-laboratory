//! =====================================================

const stringSaveForm = document.querySelector("#string-saver-form");
const stringInput = document.querySelector("#string-saver-input");
const savedString = document.querySelector("#saved-string");

const counter = document.querySelector("#counter");
let hitCounter = localStorage.getItem("count");

const listForm = document.querySelector("#list-builder-form");
const listInput = document.querySelector("#list-builder-input");
const listOfItems = document.querySelector("#list");

const clearAll = document.querySelector("#clear-all");

//! Challenge 1: String saver =====================================================
//! When the page is loaded, load information from local storage

const savedStringValue = localStorage.getItem("savedStringValue");

if (savedStringValue === null) {
	savedString.innerText = "Nothing stored in local storage.";
} else {
	savedString.innerText = savedStringValue;
}

//! When the form is submitted, save something to local storage=====================

stringSaveForm.addEventListener("submit", function (event) {
	event.preventDefault();

	localStorage.setItem("savedStringValue", stringInput.value);
});

//! Challenge 2: Page load counter ================================================

if (hitCounter === null) {
	hitCounter = 0;
} else {
	hitCounter++;
}

console.log(hitCounter);

localStorage.setItem("count", hitCounter);
counter.innerHTML = localStorage["count"];

//! Challenge 3: List builder ====================================================

//? On page load, display the logged in user's username
const itemList = localStorage.getItem("lists");

//! JSON.parse(localStorage.lists)[0]["listInputValue"]
if (itemList === null) {
	list.innerHTML = "List is Empty";
} else {
	for (const item of JSON.parse(localStorage.lists)) {
		let node = document.createElement("LI");
		let textnode = document.createTextNode(item["listInputValue"]);

		node.appendChild(textnode);

		listOfItems.appendChild(node);
	}
}

//? When the create account form is submitted
listForm.addEventListener("submit", function (event) {
	event.preventDefault();
	listInputValue = listInput.value;

	//? Make a new user with the text inputs' values
	const newlistItem = {
		listInputValue,
	};

	//? Add the new user to our saved user array
	let lists = localStorage.getItem("lists");

	if (lists === null) {
		lists = [newlistItem];
		localStorage.setItem("lists", JSON.stringify(lists));
	} else {
		lists = JSON.parse(lists);
		lists.push(newlistItem);
		localStorage.setItem("lists", JSON.stringify(lists));
	}
});

clearAll.addEventListener("click", function (event) {
	event.preventDefault();

	localStorage.clear();
});
