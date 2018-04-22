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
		price += parseInt(carrotsInput.value)*3
	}
	totalCostDiv.innerHTML = '<div>Price: $'+price+' </div>'
})

carrotsInput.addEventListener('keyup', function(e){	
	let numberofCarrots = parseInt(carrotsInput.value)
		if(numberofCarrots %3 != 0){
			totalCostDiv.prop( "disabled", true );
		} else {
			totalCostDiv.prop( "disabled", false );
		}
	}
)