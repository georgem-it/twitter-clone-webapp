const API_URL = "http://localhost:3005/krik"

// POST create krik

async function createKrik(body) {

}

// GET all kriks

async function getAllKriks() {
    let response = await fetch(API_URL)
    let kriks = await response.json()

    console.log(kriks)
}

// GET by name

async function getKrikByName(name) {
    
}

getAllKriks()