const status = document.getElementById("status");

const button = document.getElementById("searchButton");

button.addEventListener("click", async () => {

    const type = document.getElementById("searchType").value;

    const value = document.getElementById("searchValue").value.trim();

    if (!value) {

        alert("Enter search value.");

        return;

    }

    status.textContent = "Loading...";

    console.log(type, value);

    // здесь позже будет вызов Comlink API

});