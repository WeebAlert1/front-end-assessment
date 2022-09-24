console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("From has been summited");
}

let cat = document.querySelector('img');

function catAlert(evt) {
	evt.preventDefault();

	alert("Good job petting the Cat!");
}

cat.addEventListener('mouseover', catAlert);



let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);