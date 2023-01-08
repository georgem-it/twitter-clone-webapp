const API_URL = "http://localhost:3005/krik"

const krikContainer = document.querySelector(".krik-container")


// POST create krik

async function createKrik(body) {

}

// GET all kriks

async function getAllKriks() {
    let response = await fetch(API_URL)
    let kriks = await response.json()

    //function to display kriks
    displayKriks(kriks)
    console.log(kriks)
}

// GET by name

async function getKrikByName(name) {
    let response = await fetch(API_URL + `?name=${name}`)
    let kriks = await response.json()

    //function to display kriks
    displayKriks(kriks)
}

function displayKriks(data) {
    krikContainer.innerHTML = ""
    if (data.count > 0) {
        data.kriks.forEach((record) => {
            let krik = document.createElement("div")
            krik.classList.add("krik")
            let name = document.createElement("h3")
            name.textContent = record.name
            let krikContent = document.createElement("div")
            krikContent.classList.add("krik-content")
            let content = document.createElement("p")
            content.textContent = record.content

            krikContent.appendChild(content)
            let date = document.createElement("span")
            date.textContent = new Date(record.createdAt).toDateString()
            krikContent.appendChild(date)

            krik.appendChild(name)
            krik.appendChild(krikContent)

            krikContainer.appendChild(krik)
        })
    } else {
        return;
    }

}

getAllKriks()