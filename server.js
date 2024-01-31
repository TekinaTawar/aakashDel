const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 80;

// In-memory storage for payment details
let paymentDetails = {
  lastPaymentDate: null,
  paymentAmount: null,
  paymentDueDate: null
};

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Endpoint to get the payment details
app.get('/payment-details', (req, res) => {
  res.json(paymentDetails);
});

// Endpoint to update the payment details
app.post('/update-payment-details', (req, res) => {
  const { lastPaymentDate, paymentAmount, paymentDueDate } = req.body;

  // Update variables
  paymentDetails = {
    lastPaymentDate,
    paymentAmount,
    paymentDueDate
  };

  res.json({
    success: true,
    message: 'Payment details updated successfully.'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
