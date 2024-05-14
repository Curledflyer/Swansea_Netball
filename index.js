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
  const response = await axios.get("https://api.apispreadsheets.com/data/0C0MwsTSwiqOPsoM/");
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
  const response = await axios.get("https://api.apispreadsheets.com/data/db6yzcGGBbVtqqTQ/");
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
   const response = await axios.get("https://api.apispreadsheets.com/data/bKckHV7wETljfDJP/");
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

app.get("/fixtures", (req, res) => {
    res.render("fixtures.ejs")
});

app.get("/news", (req, res) => {
    res.render("news.ejs")
});

app.get("/about", (req, res) => {
    res.render("about.ejs")
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });