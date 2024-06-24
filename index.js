import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",  (req, res) => {
  res.render("index.ejs")
});

app.get("/standings", async (req, res) => {
  try {
// const response = await axios.get("https://api.apispreadsheets.com/data/RqIsV4hH8iD3H8Lf/");
    let result = response.data.data;
    console.log(result);
    res.render("standings.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("standings.ejs", {
      error: error.message,
    });
  }
});

app.get("/division2", async (req, res) => {
  try{
// const response = await axios.get("https://api.apispreadsheets.com/data/pN06M7EApvVCDUai/");
    let result = response.data.data;
    console.log(result);
    res.render("division2.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("division2.ejs", {
      error: error.message,
    });
  }
});

app.get("/division3", async (req, res) => {
  try{
//const response = await axios.get(" ");
    let result = response.data.data;
    console.log(result);
    res.render("division3.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("division3.ejs", {
      error: error.message,
    });
  }
});

// here down fixtures api settings

app.get("/fixtures", async (req, res) => {
  try{
// const response = await axios.get("https://api.apispreadsheets.com/data/2mzjgIsASCtQpwoO/");
    let result = response.data.data;
    console.log(result);
    res.render("fixtures.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("fixtures.ejs", {
      error: error.message,
    });
  }
});

app.get("/fixtures2", async (req, res) => {
  try{
  //  const response = await axios.get("https://api.apispreadsheets.com/data/2mzjgIsASCtQpwoO/");
    let result = response.data.data;
    console.log(result);
    res.render("fixtures2.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("fixtures2.ejs", {
      error: error.message,
    });
  }
});

app.get("/fixtures3", async (req, res) => {
  try{
// const response = await axios.get("https://api.apispreadsheets.com/data/2mzjgIsASCtQpwoO/");
    let result = response.data.data;
    console.log(result);
    res.render("fixtures3.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("fixtures3.ejs", {
      error: error.message,
    });
  }
});

app.get("/fixtures", (req, res) => {
    res.render("fixtures.ejs")
});

app.get("/blog", (req, res) => {  
    res.render("blog.ejs")
});

app.get("/about", (req, res) => {
    res.render("about.ejs")
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });