"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./src/routes/crmRoutes");
const createMessage_1 = require("./src/controllers/createMessage");
const settings_1 = require("./settings");
const app = express();
let messages = new createMessage_1.default(settings_1.Settings.PORT);
const dataConnection = (user, pass) => {
    return `mongodb+srv://${user}:${pass}@nodejstypescripttest.mcisy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
};
const databaseUrl = dataConnection(settings_1.Settings.mongoDbUser, settings_1.Settings.mongoDbPass);
// mongoose connection
mongoose.connect(databaseUrl);
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
(0, crmRoutes_1.default)(app);
// generics
function nameCreator(name) {
    return name;
}
let myName = nameCreator('Filip,');
let ninja = {
    weapon: 'Shuriken',
    skills: 5,
    name: 'Filip'
};
// serving static files
app.use(express.static('public'));
app.get('/', (req, res) => res.send(messages.messagePrint()));
app.listen(settings_1.Settings.PORT, () => console.log(nameCreator(myName), messages.messagePrint()));
