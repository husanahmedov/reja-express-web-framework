const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://roger:eEaaUF2fv1CZiuOi@reja.eeuhdxz.mongodb.net/?retryWrites=true&w=majority&appName=Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, client) => {
    if (error) console.log("ERROR: ", error);
    else {
      console.log("Mongodb connnection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;

      server.listen(PORT, () => {
        console.log(
          `This is succesfully runned on server ${PORT} http://localhost:${PORT}`
        );
      });
    }
  }
);
