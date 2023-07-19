const express = require('express');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const payDetails = [];
// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get("/winner", (req, res) => {
  res.render("winner");
});

app.get("/smoker", (req, res) => {
    res.render("smoker");
  });
  
app.get("/about", (req, res) => {
    res.render("about");
});
  
app.get("/payment", (req, res) => {
    res.render("payment");
});

app.get("/invoice", (req, res) => {
    res.render("invoice");
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
