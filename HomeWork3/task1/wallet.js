

const income = [100, 500, 300, 8800, 1000, 450, 560];
const expenses = [270, 510, 2000, 600, 25, 150, 470,520];

let totalIncome = 0;
let totalExpenses = 0;

let balans = totalIncome - totalExpenses;

for (let i = 0; i < income.length; i++) {
    totalIncome = totalIncome + income[i];
}

for (let i = 0; i < expenses.length; i++) {
    totalExpenses = totalExpenses + expenses[i];
}

if (balans >= 0) {
    console.log("Hello,your account ballance is positive- " + balans);
} else {
    console.log("Sorry,your account is empty,please fill in your account- " + balans);
}