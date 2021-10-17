const csvFilesContent = [];

readFileAsync = (file) => {
	return new Promise((resolve, reject) => {
		let reader = new FileReader();
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.onerror = reject;
		reader.readAsText(file);
	})
}

parseFile = (myString) => {
	console.log(expenseTable.items);
	let stringLines = myString.split('\n');
	for (let j = 0; j < stringLines.length; j++) {
		let splitLine = stringLines[j].split(',');
		if (j === 0) {
			if (splitLine[0] !== 'Card' || splitLine[3] !== 'Details') {
				console.log("Error: Headers not as expected");
				return;
			}
		}
		if (j > 0) {
			csvFilesContent.push({
				card: splitLine[0],
				type: splitLine[1],
				amount: splitLine[2],
				details: splitLine[3],
				transactionDate: splitLine[4],
				processedDate: splitLine[5],
				foreignCurrencyAmount: splitLine[6],
				conversionCharge: splitLine[7],
				category: '',
				subCategory: ''
			});
		}
	}
}

const csvSelector = Vue.createApp({
	data() {
		return {
			csvFiles: []
		}
	},
	methods: {
		loadCSV(event) {
			console.log('loading CSV');
			this.csvFiles = event.target.files;
			// console.log(this.csvFiles)
		},
		async parseCSV() {

			for (let i = 0; i < this.csvFiles.length; i++) {
				console.log('Started parsing CSV ' + (i+1) + ' of ' + this.csvFiles.length);
				let respt = await readFileAsync(this.csvFiles[i]);
				console.log('Done parsing CSV ' + (i+1) + ' of ' + this.csvFiles.length)
				parseFile(respt);
				expenseTable.updateItems(csvFilesContent);
			}
		}
	}
}).mount('#csvSelector1')

const expenseTable = Vue.createApp({
	data() {
		return {
			items: [],
			visible: false
		}
	},
	methods: {
		updateItems(itms) {
			if (itms.length) {
				this.items = itms;
				this.visible = true;
			}
		}
	}
})

expenseTable.mount('#expenseTable');




