"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, crmController_1.getContacts)
        // POST endpoint
        .post(crmController_1.addNewContact);
    app.route('/contact/:contactId')
        // get specific contact
        .get(crmController_1.getContactWithID)
        // put request
        .put(crmController_1.updateContact)
        // delete request
        .delete(crmController_1.deleteContact);
};
exports.default = routes;
