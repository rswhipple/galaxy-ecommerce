# Galaxy E-commerce

You should still be able to do groceries while in Space ;)

# Galaxy E-Commerce Application

Welcome to the Galaxy E-Commerce application! This project is built using Node.js, Express, MongoDB, and EJS with a Galaxy theme (Wow, really?). Follow the instructions below to set up and run the application.

## Prerequisites

Make sure you have the following software installed on your machine:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **MongoDB** (v6.0 or later)
- **Git** (for cloning the repository)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/galaxy-ecommerce.git
   cd galaxy-ecommerce
   ```

2. Install dependencies
```
npm install
```

3. Use the `.env` file, to change ports for both the application and the connection to the DB (in case you need it)

## Running the Application

1. Start Mongo DB (Check how to install it on your OS)

### Windows
```
"C:\Program Files\MongoDB\Server\<version>\bin\mongod.exe" --dbpath C:\data\db

```

### MacOs/Linux (On MacOs, you can also use `brew` to install and run MongoDB) 
```
mongod --dbpath /data/db
```

2. Start the application
```
npm start
```

## Project Structure

```
galaxy-ecommerce/
│
├── public/             # Static files (CSS, images, etc.)
│   └── styles.css      # Main stylesheet
│
├── src/
│   ├── controllers/    # Controllers for handling requests
│   ├── models/         # Mongoose models for MongoDB
│   ├── routes/         # Express routes
│   └── views/          # EJS templates for rendering pages
│
├── .env                # Environment variables
├── index.js            # Entry point of the application
├── package.json        # Node.js dependencies and scripts
└── README.md           # Project documentation

```

This project is open source and available under the [MIT License](https://opensource.org/license/mit)
