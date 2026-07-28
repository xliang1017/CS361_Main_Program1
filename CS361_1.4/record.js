const form = document.getElementById("recordForm");
const type = document.body.dataset.type;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let note = document.getElementById("note").value.trim();
    let records = JSON.parse(localStorage.getItem("records")) || {
        income: 0,
        expense: 0,
        categories: {}
    };

    if (type === "income") {
        records.income += 300;
    } else {
        if (note === "") {
            alert("No note entered. This expense will be categorized as Others.");
            note = "Others";
        }

        records.expense += 200;
        records.categories[note] =
            (records.categories[note] || 0) + 200;
    }

    localStorage.setItem("records", JSON.stringify(records));
    window.location.href = "homepage.html";
});