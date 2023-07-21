const express = require('express');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

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

// Handle POST request for the /payment route
app.post("/payment", (req, res) => {
  // Process the payment details and create an invoice if needed
  // You can access the form data from req.body and perform necessary actions
  const { name, email, address, paymentMethod } = req.body;

  // You can pass the data to the invoice template and render it
  res.render("invoice", { name, email, address, paymentMethod });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
