const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejs.q74gabi.mongodb.net/?appName=CursoNodeJs`
    );
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

module.exports = connectToDataBase;
