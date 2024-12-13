# 🌐 NGO Website Server

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-121212?style=for-the-badge&logo=razorpay&logoColor=00aff0)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)

This project serves as the backend server for an **NGO Website** built with React, handling various functionalities such as payment integration, form submission processing, logging, and security features. The server is built using Node.js and interacts with multiple services to ensure a secure and efficient experience for users.
- **[Visit Dakshi Foundation](https://dakshifoundation.in)** - 'An Innovation for Change'.

## 📋 Features

### 1. 💳 Razorpay Integration
This server is integrated with [Razorpay](https://razorpay.com/) to handle secure payments. Users can make donations or payments through the Razorpay gateway. The server verifies each transaction, providing security and reliability in payment processing.

### 2. 📄 Custom Google Form Submission
The server processes custom form submissions and records data to a Google Sheet using the [Google Sheets API](https://developers.google.com/sheets/api). User data is collected through a form on the website, then submitted to the server. Using a Google Service Account, the server securely populates this data in the designated Google Sheet, ensuring data integrity and organization.

### 3. 🔒 CSRF Protection
CSRF protection is implemented to secure user interactions by verifying the authenticity of each request. This prevents malicious actors from executing unauthorized actions on behalf of other users, enhancing the overall security of the server.

### 4. 🚦 Rate Limiting
To prevent abuse and ensure optimal server performance, rate limiting is implemented. This restricts the number of requests a user can make to the server within a specified timeframe, providing protection against DoS attacks and maintaining server reliability.

### 5. 📊 Winston Logging
All significant events, errors, and transaction details are logged using [Winston](https://github.com/winstonjs/winston), providing a robust logging framework. This enables effective debugging and monitoring by logging critical operations within the server.
## 🛠️ Getting Started

### Prerequisites
- **Node.js** (v14.x or later)
- **Razorpay API keys**
- **Google Service Account** with access to the Google Sheets API

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RishiGaneshe/DF.git
    ```
2. **Install dependencies**:
    ```bash
    cd DF
    npm install
    ```
3. **Start the application**:
    ```bash
    npm node app.js
    ```

---

