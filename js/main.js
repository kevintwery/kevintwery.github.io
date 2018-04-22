var checkoutButton = document.querySelector('.checkoutButton')

checkoutButton.addEventListener('click', function(e){
	let applesInput = document.querySelector('.apples')
	let bananasInput = document.querySelector('.bananas')
	let carrotsInput = document.querySelector('.carrots')
	let price = 0
	if(applesInput && applesInput.value.length > 0){
		price += parseInt(applesInput.value)*2
	}
	if(bananasInput && bananasInput.value.length > 0){
		price += parseInt(bananasInput.value)*1.5
	}
	if(carrotsInput && carrotsInput.value.length > 0){
		price += parseInt(carrotsInput.value)*3
	}
	document.querySelector('.totalCost').innerHTML = '<div>Price: $'+price+' </div>'
})
