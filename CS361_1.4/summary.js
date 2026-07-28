let chart;

document.getElementById("viewReport").addEventListener("click", function () {
    document.getElementById("totalExpense").textContent =
        "Total Expense: $500";

    document.getElementById("totalIncome").textContent =
        "Total Income: $1000";

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(document.getElementById("pieChart"), {
        type: "pie",

        data: {
            labels: ["Other", "Food", "Fun", "Savings"],

            datasets: [{
                data: [200, 150, 150, 500]
            }]
        }
    });
});