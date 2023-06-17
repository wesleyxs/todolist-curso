const mongoose = require('mongoose');

const connectToDb = () => {
  mongoose
    .connect(
      process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("FUNCIONOOOOOOOOU");
    })
    .catch((err) => {
      console.log("Erro ao conectar ao MongoDB Atlas:", err);
    });
};

module.exports = connectToDb;
