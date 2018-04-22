var checkoutButton = document.querySelector('.checkoutButton')

checkoutButton.addEventListener('click', function(e){
	let applesInput = document.querySelector('.apples')
	let bananasInput = document.querySelector('.bananas')
	let carrotsInput = document.querySelector('.carrots')
	let price = 0
	if(applesInput){
		price += parseInt(applesInput.value)*2
	}
	if(bananasInput){
		price += parseInt(bananasInput.value)*1.5
	}
	if(carrotsInput){
		price += parseInt(carrotsInput.value)*3
	}
	document.querySelector('.totalCost').innerHTML = '<div>Price: $'+price+' </div>'
})
