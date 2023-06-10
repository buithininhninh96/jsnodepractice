//__________________________________________________
//IMPORTING MODULES & DECLARING VARIABLES

const path = require('path')
const express = require("express")

const app = express()

const folderRes = "res_files"
const fileLorem = "Lorem.txt"
const fileNewTxt = "result.txt"

const filePathLorem = path.join(__dirname, folderRes, fileLorem)
const filePathNew = path.join(__dirname, folderRes, fileNewTxt)

//const newText = "Extracted content from " + fileLorem + " file:\n"

//__________________________________________________
//CREATING FUCTIONS

//__________________________________________________
//EXPRESSJS PRACTICE

//needed view engine to output a ejs file which is similar to html
app.set("view engine", "ejs")

//allows ejs to use files in public folder
app.use(express.static("public"));

//this is great for displaying specific message when user goes to certain page.
app.get("/", (req, res) => {

    console.log("This should display on the terminal as the page loads.")
    
    //.send is usually used for testing purposes:
    //res.send("This should display on the browser.") 
    //console.log("status sent")
    
    //sends status of page, in this case, an error:
    //res.sendStatus(404) 
    
    //sends status as well as a nice customzed emssage as well:
    //res.status(404).send("ERROR 404: File not found.")
    
    //have no idea what json does tbh, but it was on a tutorial:
    //>>>>>>>>>>!REMINDER! lookin into it, miso<<<<<<<<<<<<
    //res.json({message: "error"})
    
    //will allow user to download content secified with path. 
    //(this will not work if theres other res methods active. ) 
    //res.download(filePathLorem)
    //console.log("download prompted")

    //renders a ejs file
    res.render('index', { username: "//username//" })
})

const userRouter = require("./routes/users")
app.use("/user", userRouter)

app.listen(3000)