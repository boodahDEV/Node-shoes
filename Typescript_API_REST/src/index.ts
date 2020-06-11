import app from "./app";
import "./database";
function main() {
  app.listen(app.get("port"));
  console.log("Server ejecutando en el puerto " +app.get("port"));
}


main();