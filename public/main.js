import ListModel from "./src/js/model/ListModel.js";
import ListController from "./src/js/controller/ListController.js";
const model = new ListModel();
const controller = new ListController(model);