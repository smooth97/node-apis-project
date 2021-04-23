"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        // Create a new contact
        app.route("/contact").post(this.contactController.addNewContact);
        // Get all contacts
        app.route("/contact").get(this.contactController.getContacts);
        // get a specific contact
        app
            .route("/contact/:contactId")
            .get(this.contactController.getContactWithID);
        // update a specific contact
        app.route("/contact/:contactId").put(this.contactController.updateContact);
        // delete a specific contact
        app
            .route("/contact/:contactId")
            .delete(this.contactController.deleteContact);
        // also like
        // app
        //   .route("/contact/:contactId")
        //   .get(this.contactController.getContactWithID)
        //   .put(this.contactController.updateContact)
        //   .delete(this.contactController.deleteContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map