# expense_categoriser
A small python (javascript?) program that goes through my monthly expenses and assigns categories.

monthly expenses are exported from banking website in .csv format.

This program will go through each line of the .csv file, and read the transaction details.
Each transaction will be assinged a category, based on matching it's description to an existing database of known descriptions.

The existing database of known transactions and their corresponding categories will be saved to a seperate .csv file for future use.
(For security the .csv files are all stored locally.)


Pseudo-code steps:

1
	Open .csv file with known categories and convert into a list. (ExpenseCategories)

	Create a new list from the expense categories. (ExpenseOutput)

	Open .csv with expenses, and load into a different list. (ExpenseInput)

2
	Loop through each expense in the ExpenseInput list
		If the expense matches known expense.
			Add the amount to the relevant expense in ExpenseOutput
		Else
			Prompt user to select the expense category from the list of known expenses, or create a new expense category.
			Then add the amount to the relevant expense in ExpenseOutput.

3
	Export the ExpenseOutput as a .csv file.
	Overwrite the existing ExpenseCategories file to contain the latest info.





