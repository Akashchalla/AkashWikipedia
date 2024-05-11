let inp = document.getElementById("searchInput");
let out = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");


function createOut(result) {
    let {
        title,
        link,
        description
    } = result;

    let con1 = document.createElement("div");
    con1.classList.add("result-item");
    out.appendChild(con1);

    let titleEl = document.createElement("a");
    titleEl.textContent = title;
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.classList.add("result-title");
    con1.appendChild(titleEl);

    let brakeEl = document.createElement("br");
    con1.appendChild(brakeEl);

    let linkEl = document.createElement("a");
    linkEl.href = link;
    linkEl.target = "_blank";
    linkEl.textContent = link;
    linkEl.classList.add("result-url");
    con1.appendChild(linkEl);

    let brakeEl2 = document.createElement("br");
    con1.appendChild(brakeEl2);

    let paraEl = document.createElement("p");
    paraEl.textContent = description;
    paraEl.classList.add("link-description");
    con1.appendChild(paraEl);


}


function displayOut(search_results) {
    spinnerEl.classList.add("d-none");
    for (let result of search_results) {
        createOut(result);
    }
}

inp.addEventListener("keydown", function(event) {
    let inpVal = inp.value;


    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");
        out.textContent = "";
        let options = {
            method: "GET"
        };
        fetch("https://apis.ccbp.in/wiki-search?search=" + inpVal, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayOut(search_results);
                console.log(jsonData);
            });
    }
})