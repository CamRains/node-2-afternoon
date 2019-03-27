const express = require("express");
const messCont = require("./controllers/messages_controller");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

const messagesBaseUrl = "/api/messages";
app.get(messagesBaseUrl, messCont.read);
app.post(messagesBaseUrl, messCont.create);
app.put(`${messagesBaseUrl}/:id`, messCont.update);
app.delete(`${messagesBaseUrl}/:id`, messCont.delete);

const PORT = 3005;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
