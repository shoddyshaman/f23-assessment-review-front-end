console.log("hello world");

let imgTag = document.querySelector('img')

let compliments = ['You are awesome','Nobody got nothin on you','you are responsible for global warming, again']

function handleMouseover(evt){
	const randomIndex = Math.floor(Math.random() * compliments.length)
	let randomCompliment = compliments[randomIndex]
	return alert(randomCompliment)
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form was submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
imgTag.addEventListener('mouseover',handleMouseover)