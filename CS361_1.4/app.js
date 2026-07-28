const records = JSON.parse(localStorage.getItem("records")) || {
    income: 0,
    expense: 0,
    categories: {}
};

document.getElementById("totalIncome").textContent =
    "$" + records.income.toFixed(2);

document.getElementById("totalExpense").textContent =
    "$" + records.expense.toFixed(2);

const savings = records.income - records.expense;

const names = Object.keys(records.categories);
const amounts = Object.values(records.categories);

const chartNames = names.concat("Savings");
const chartAmounts = amounts.concat(savings);

new Chart(document.getElementById("pieChart"), {
    type: "pie",

    data: {
        labels: chartNames.map(function (name, index) {
            return name + ": $" + chartAmounts[index];
        }),

        datasets: [{
            data: chartAmounts
        }]
    },

    options: {
        onClick: function (event, elements) {
            const category = chartNames[elements[0].index];

            if (category !== "Savings") {
                records.categories[category] = Number(prompt(
                    "New amount:",
                    records.categories[category]
                ));

                records.expense = Object.values(records.categories)
                    .reduce((a, b) => a + b);

                localStorage.setItem(
                    "records",
                    JSON.stringify(records)
                );

                location.reload();
            }
        }
    }
});

document.getElementById("clearData").addEventListener(
    "click",
    function () {
        if (confirm("Are you sure you want to clear all data?")) {
            localStorage.removeItem("records");
            location.reload();
        }
    }
);