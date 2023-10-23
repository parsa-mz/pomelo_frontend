
# Pomelo Transaction App

A simple web application that allows users to input transaction information in JSON format and submits it to a backend API. The application then processes and displays the response.

## Features

- Input transaction information as JSON.
- Submit the data to a backend API.
- Display the processed data in a human-readable format.
- Smooth scrolling to results after submission.
- Modern UI with proper headers and footers.

## Getting Started

### Prerequisites

- Node.js and npm (usually come together)
- A running backend server accepting POST requests at `http://localhost:8000/`.

### Installation


1. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Navigate to `http://localhost:3000` in your browser to access the application.

## Usage

1. Navigate to the main page.
2. Enter the transaction information in the provided text area in valid JSON format.
3. Click the "Submit" button.
4. View the processed results displayed below the input area.

## Example input 
```
{
    "creditLimit": 1000,
    "events": [
        {
            "eventType": "TXN_AUTHED",
            "eventTime": 1,
            "txnId": "t1",
            "amount": 123
        },
        {
            "eventType": "TXN_SETTLED",
            "eventTime": 2,
            "txnId": "t1",
            "amount": 456
        },
        {
            "eventType": "PAYMENT_INITIATED",
            "eventTime": 3,
            "txnId": "p1",
            "amount": -456
        },
        {
            "eventType": "PAYMENT_POSTED",
            "eventTime": 4,
            "txnId": "p1"
        }
    ]
}


```

## License
Parsa Mazaheri
