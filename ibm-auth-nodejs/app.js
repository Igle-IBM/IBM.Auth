require("dotenv").config();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const express = require("express");
const { createUser, getUserByEmail } = require('./model/user');


const app = express();

app.use(express.json());

// Register
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // Validate user input
  if (!(email && password)) {
    res.status(400).send("Todos los campos son necesarios.");
  }

  // Validate if user exist in our database
  const oldUser = await getUserByEmail(email);

  if (oldUser) {
    return res.status(409).send("El usuario con este correo ya existe, por favor inicie sesión.");
  }

  //Encrypt user password
  encryptedPassword = await bcrypt.hash(password, 10);

  // Create user in our database
  const user = await createUser(email, encryptedPassword);
  const token = generateToken(user);
  return res.status(201).send(token);
});

// Login
app.post("/login", async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      return res.status(400).send("Todos los campos son necesarios.");
    }
    // Validate if user exist in our database
    const user = await getUserByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      console.log(user);
      const token = generateToken(user);
      // const token = jwt.sign(
      //   { userId: user.id, email },
      //   process.env.TOKEN_KEY,
      //   {
      //     expiresIn: "2h",
      //   }
      // );

      // user
      return res.status(200).json(token);
    }
    return res.status(400).send("Credenciales invalidas.");
  } catch (err) {
    console.log(err);
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    email: user.email,
  };
  const options = {
    expiresIn: "90d",
  };
  return jwt.sign(payload, process.env.TOKEN_KEY, options);
}

module.exports = app;