const API_URL = "http://localhost:3005/krik"

const krikContainer = document.querySelector(".krik-container")
const krikForm = document.querySelector(".krik-form")

krikForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    let formData = new FormData(krikForm)
    let payload = {
        name: formData.get("name"),
        content: formData.get("content")
    }
    let response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    if (response.status == 200) {
        krikForm.reset()
        getAllKriks()
    } else {
        return
    }

})

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
            //initializing date here as a variable
            let dateString = new Date(record.createdAt).toDateString()
            krikContainer.innerHTML += `
            <div class="krik">
                <h3 class="krik-name">${record.name}</h3>
                <div class="krik-content">
                    <p>${record.content}</p>
                    <span class="date">${dateString}</span>
                </div>
                `
        })
        return krikContainer
    } else {
        return;
    }

}


const showAll = document.querySelector(".show-all")
const showAllBtn = document.querySelector(".show-all-btn")

document.addEventListener("click", (e) => {
    if ((e.target.matches("h3") && e.target.getAttribute("class") == "krik-name")) {
        let name = e.target.textContent
        getKrikByName(name)
        showAll.classList.remove("dn")
    }
})

showAllBtn.addEventListener("click", () => {
    getAllKriks()
    showAll.classList.add("dn")
})

getAllKriks()