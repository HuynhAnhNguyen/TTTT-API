const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

const db = require('./config/db'); // Khai báo để sử dụng kết nối với database

// Connect to db
db.connectToDatabase();

// Khai báo để sử dụng các file static
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));

// Sử dụng middleware để phân tích cú pháp các yêu cầu có thân (request body)
app.use(bodyParser.json());


// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
