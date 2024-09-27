import express, {Router} from "express";
import axios from "axios";
import bodyParser from "body-parser";
import serverless from "serverless-http";
import expressValidator, {check, validationResult} from "express-validator";
import nodemailer from "nodemailer";
import pg from "pg";
import 'dotenv/config'

const app = express();
const port = 3000;
const router = Router();

app.set('view engine', 'ejs');

const config = {
  connectionString: process.env.connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
}


app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
export const handler = serverless(app);

const adminPass = process.env.AdminPassKey;
const adminUser = process.env.adminUserKey;
const transporterPass = process.env.transporterPassKey;
const fixturesApiKey = process.env.fixturesApiKey;
const div1ApiKey = process.env.div1ApiKey;
const div2ApiKey = process.env.div2ApiKey;
const div3ApiKey = process.env.div3ApiKey;
const div4ApiKey = process.env.div4ApiKey;
const div5ApiKey = process.env.div5ApiKey;
const fixtures1ApiKey = process.env.fixtures1ApiKey;
const fixtures2ApiKey = process.env.fixtures2ApiKey;
const fixtures3ApiKey = process.env.fixtures3ApiKey;
const fixtures4ApiKey = process.env.fixtures4ApiKey;
const fixtures5ApiKey = process.env.fixtures5ApiKey;




const db = new pg.Client(config);
db.connect();



// admin password check

let userIsAuthorised = false;

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  const userName = req.body["name"];
  if (password == adminPass && userName == adminUser) {
userIsAuthorised = true;
} else {
  userIsAuthorised = false;
}
next();
}

app.use(passwordCheck);

app.post("/check", async (req, res) => {
  if (userIsAuthorised) {
    try {
      const result = await db.query("SELECT * FROM swansea_blog ORDER BY id DESC");
      const items = result.rows;
  
      res.render("edit_blog.ejs", {
        listTitle: "Today",
        listItems: items,
      });
    } catch (err) {
      console.log(err);
    };
} else {
  res.render("admin.ejs")
}})

app.get("/admin", (req, res) => {
  res.render("admin.ejs");
})



//Home page



app.get("/", async (req, res) => {
  try{
 // const response = await axios.get(`https://api.apispreadsheets.com/data/2mzjgIsASCtQpwoO/${fixturesApiKey}`);
        let result = response.data.data;
        res.render("index.ejs", { data: result });
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
});



// Standings pages



app.get("/standings", async (req, res) => {
  try {
const response = await axios.get(`https://api.apispreadsheets.com/data/RqIsV4hH8iD3H8Lf/${div1ApiKey}`);
    let result = response.data.data;
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
 const response = await axios.get(`https://api.apispreadsheets.com/data/pN06M7EApvVCDUai/${div2ApiKey}`);
    let result = response.data.data;
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
const response = await axios.get(`https://api.apispreadsheets.com/data/5GVfjqVLGyKT3ygw/${div3ApiKey}`);
    let result = response.data.data;
    res.render("division3.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("division3.ejs", {
      error: error.message,
    });
  }
});

app.get("/division4", async (req, res) => {
  try{
const response = await axios.get(`https://api.apispreadsheets.com/data/ZPDJGEeFkGy724aE/${div4ApiKey}`);
    let result = response.data.data;
    res.render("division4.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("division4.ejs", {
      error: error.message,
    });
  }
});

app.get("/division5", async (req, res) => {
  try{
    const response = await axios.get(`https://api.apispreadsheets.com/data/7QiBlicJRAM5vGRc/${div5ApiKey}`);
    let result = response.data.data;
    res.render("division5.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("division5.ejs", {
      error: error.message,
    });
  }
});


// here down fixtures api settings



app.get("/fixtures", async (req, res) => {
  try{
// const response = await axios.get(`https://api.apispreadsheets.com/data/2mzjgIsASCtQpwoO/${fixturesApiKey}`);
 const response = await axios.get(`https://api.apispreadsheets.com/data/3RU53Dl3YhgEHrZV/${fixtures1ApiKey}`);
    let result = response.data.data;
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
// const response = await axios.get(`https://api.apispreadsheets.com/data/2mzjgIsASCtQpwoO/${fixturesApiKey}`);
const response = await axios.get(`https://api.apispreadsheets.com/data/L1H8Pq9z3l2Q9Y40/${fixtures2ApiKey}`);
    let result = response.data.data;
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
const response = await axios.get(`https://api.apispreadsheets.com/data/2mzjgIsASCtQpwoO/${fixturesApiKey}`);
// const response = await axios.get(`https://api.apispreadsheets.com/data/3RU53Dl3YhgEHrZV/${fixtures3ApiKey}`);
    let result = response.data.data;
    res.render("fixtures3.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("fixtures3.ejs", {
      error: error.message,
    });
  }
});

app.get("/fixtures4", async (req, res) => {
  try{
const response = await axios.get(`https://api.apispreadsheets.com/data/2mzjgIsASCtQpwoO/${fixturesApiKey}`);
// const response = await axios.get(`https://api.apispreadsheets.com/data/3RU53Dl3YhgEHrZV/${fixtures4ApiKey}`);
    let result = response.data.data;
    res.render("fixtures4.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("fixtures4.ejs", {
      error: error.message,
    });
  }
});

app.get("/fixtures5", async (req, res) => {
  try{
const response = await axios.get(`https://api.apispreadsheets.com/data/2mzjgIsASCtQpwoO/${fixturesApiKey}`);
// const response = await axios.get(`https://api.apispreadsheets.com/data/3RU53Dl3YhgEHrZV/${fixtures5ApiKey}`);
    let result = response.data.data;
    res.render("fixtures5.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("fixtures5.ejs", {
      error: error.message,
    });
  }
});



// Contact page with form



app.get("/contact", (req, res) => {
    res.render("contact.ejs", { errors: ''})
});


app.post('/send', 
[
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Invalid Email Address'),
  check('subject').notEmpty().withMessage('Subject is required'),
  check('message').notEmpty().withMessage('Message is required')
], (request, response) => {

  const errors = validationResult(request);

    if (!errors.isEmpty())
    {
      response.render('contact', { errors : errors.mapped() });
    } else {
      const transporter = nodemailer.createTransport({
            service : 'Gmail',
            auth : {  user: 'swanseanetballuk@gmail.com',
					            pass : transporterPass
            }
			});

			const mail_option = {
				from : `<${request.body.name}>`,
				to : 'robin@holdnomore.co.uk',
				subject : request.body.subject,
				text :`
Name: ${request.body.name}
Email: ${request.body.email}
Message: ${request.body.message}`
			};

			transporter.sendMail(mail_option, (error, info) => {
				if(error)
				{
					console.log(error);
				}
				else
				{
					response.redirect('/success');
				}
      });
    }
  });

    app.get('/success', (request, response) => {

      response.send('<h1>Your Message was Successfully Sent!</h1>');
});


//blog updates and rendering


app.post("/add", async (req, res) => {
  const inputContent = req.body["blog_post"];
  const inputTitle = req.body["title"]

    try {
      await db.query(
        "INSERT INTO swansea_blog (content, title) VALUES ($1, $2)",
        [inputContent, inputTitle]
      );
      const result = await db.query("SELECT * FROM swansea_blog ORDER BY id DESC");
    const items = result.rows;
    res.render("edit_blog.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;

  try {
    await db.query("UPDATE swansea_blog SET title = $1 WHERE id = $2", [item, id]);
    const result = await db.query("SELECT * FROM swansea_blog ORDER BY id DESC");
    const items = result.rows;
    res.render("edit_blog.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/editPost", async (req, res) => {
  const id = req.body.updatedItemId;
  const post = req.body.updatedItemContent;

  try {
    await db.query("UPDATE swansea_blog SET content = $1 WHERE id = $2", [post, id]);
    const result = await db.query("SELECT * FROM swansea_blog ORDER BY id DESC");
    const items = result.rows;
    res.render("edit_blog.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM swansea_blog WHERE id = $1", [id]);
    const result = await db.query("SELECT * FROM swansea_blog ORDER BY id DESC");
    const items = result.rows;
    res.render("edit_blog.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.log(err);
  }
});


async function checkBlog() {
  const result = await db.query("SELECT title, content FROM swansea_blog");
let blogTitle = [];
result.rows.forEach((post) => {

  let array = [];
    array.push(post.title);
    array.push(post.content);
   // array.push(post.date)
    blogTitle.push(array);
  }); 
return blogTitle;
};



async function checkPost() {
  const result = await db.query("SELECT content FROM swansea_blog");
  let blogPost = [];
  result.rows.forEach((title) => {
    blogPost.push(title.content);
  })
  return blogPost;
}
  

// GET blog page
 app.get("/blog", async (req, res) => {
  const blogTitle = await checkBlog();
  const blogPost = await checkPost();

  res.render("blog.ejs", { blogTitle: blogTitle, blogPost: blogPost});
  
}); 

// run server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });