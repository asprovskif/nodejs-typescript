import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import Messenger from "./src/controllers/createMessage";
import {Settings} from "./settings";

const app = express();

let messages = new Messenger(Settings.PORT);

const dataConnection = (user: string, pass: string): string => {
    return `mongodb+srv://${user}:${pass}@nodejstypescripttest.mcisy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
}

const databaseUrl: string = dataConnection(Settings.mongoDbUser, Settings.mongoDbPass);
// mongoose connection
mongoose.connect(databaseUrl);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// generics
function nameCreator<T>(name: T): T {
    return name;
}

let myName = nameCreator<string>('Filip,');

// declaration merging
interface Warriors {
    weapon: string;
    skills: number;
}

interface Warriors {
    name: string;
}

let ninja: Warriors = {
    weapon: 'Shuriken',
    skills: 5,
    name: 'Filip'
}

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(messages.messagePrint())
);

app.listen(Settings.PORT, () =>
    console.log( nameCreator(myName) ,messages.messagePrint())
);