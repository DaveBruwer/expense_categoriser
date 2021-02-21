const expenseInput = document.getElementById('expenseInput');
const categories = document.getElementById('categories');
const submitBtn = document.getElementById('submitBtn');  

const logData = () => {
	if (expenseInput.value.endsWith(".csv") && categories.value.endsWith(".csv")) {
		console.log(expenseInput.value);
		console.log(expenseInput.value.endsWith(".csv"));
	} else {
		window.alert('please select a only .csv files');
	}
}



submitBtn.addEventListener("click", logData);