var checkoutButton = document.querySelector('.checkoutButton')

var applesInput = document.querySelector('.apples')
var bananasInput = document.querySelector('.bananas')
var carrotsInput = document.querySelector('.carrots')
var totalCostDiv = document.querySelector('.totalCost')

checkoutButton.addEventListener('click', function(e){	
	let price = 0
	if(applesInput && applesInput.value.length > 0){
		price += parseInt(applesInput.value)*2
	}
	if(bananasInput && bananasInput.value.length > 0){
		price += parseInt(bananasInput.value)*1.5
	}
	if(carrotsInput && carrotsInput.value.length > 0){
		let wasError = showCarrotErrorMessage()
		if(!wasError){
			price += parseInt(carrotsInput.value)*3
		} else {
			price = 'N/A'
		}
	}
	totalCostDiv.innerHTML = '<div>Price: $'+price+' </div>'
})

carrotsInput.addEventListener('keyup', function(e){	
	showCarrotErrorMessage()
})

function showCarrotErrorMessage(){
	var checkoutButton = document.querySelector('.checkoutButton')
	var carrotsnonMultipleOf3Error = document.querySelector('.carrotsnonMultipleOf3Error')
	let numberofCarrots = parseInt(carrotsInput.value)
	if(carrotsInput && carrotsInput.value.length > 0 && numberofCarrots %3 != 0){
		checkoutButton.classList.add("disabled");
		carrotsnonMultipleOf3Error.style.display = 'block'
		return true
	} else {
		checkoutButton.classList.remove( "disabled")
		carrotsnonMultipleOf3Error.style.display = 'none'
		return false
	}
}
