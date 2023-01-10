const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

//create express app
app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3005
// database connection
mongoose.connect(process.env.MONGO_URI,
    () => console.log("db connected successfully"))


// database schema
const KrikSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true })

let Krik = mongoose.model("Krik", KrikSchema)

function isValidKrik(body) {
    //there is a name in the body and it is not empty
    return (body.name && body.name.trim() != "" && body.content && body.content.trim() != "")
}

// app.get("/", (req, res) => {
//     res.json("Hello I am working")
// })

app.post("/krik", async (req, res) => {
    if (isValidKrik(req.body)) {
        let name = req.body.name.toString()
        let content = req.body.content.toString()

        try {
            let krik = await Krik.create({
                name,
                content
            })
            res.json(krik)
        } catch (err) {
            res.json({ err })
        }

    } else {
        res.status(400)
        res.json({ message: "Invalid request" })
    }
})

app.get("/krik", async (req, res) => {
    let name = req.query.name
    let kriks;

    try {
        if (name) {
            //.sort with createdAt -1 will place the latest data at the "top"
            kriks = await Krik.find({ name: name }).sort({ createdAt: -1 })
        } else {
            kriks = await Krik.find({}).sort({ createdAt: -1 })
        }

        res.json({ kriks, count: kriks.length })
    } catch (err) {
        res.json({ err })
    }
})

app.listen(PORT, () => console.log("Listening on port 3005"))