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
            let krik = document.createElement("div")
            krik.classList.add("krik")
            let name = document.createElement("h3")
            name.classList.add("krik-name")
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


const showAll = document.querySelector(".show-all")
const showAllBtn = document.querySelector(".show-all-btn")

document.addEventListener("click", (e)=> {
    if((e.target.matches("h3") && e.target.getAttribute("class") == "krik-name")) {
        let name = e.target.textContent
        getKrikByName(name)
        showAll.classList.remove("dn")
    }
})

showAllBtn.addEventListener("click", ()=> {
    getAllKriks()
    showAll.classList.add("dn")
})

getAllKriks()