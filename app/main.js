import HerosController from "./Controllers/HerosController.js";

class App {
  herosController = new HerosController();
}

window["app"] = new App();
