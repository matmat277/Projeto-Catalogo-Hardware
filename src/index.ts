import Database from "./databases/Database";
import ComponentService from "./Services/services";
import MainController from "./controller/MainController";
import MainScreen from "./view/MainScreen";

// Dependências
const database = new Database();
const componentService = new ComponentService(database);
const controller = new MainController(componentService);

new MainScreen(controller);
