import herosService from "../Services/HerosService.js";
import store from "../store.js";


function _drawHeros() {
    let heros = store.State.heros;
    let template = ''
    heros.forEach(h => template += h.Template)
    document.getElementById("heros").innerHTML = template
}

function _drawMyHeros() {
    let myHeros = store.State.myHeros;
    let template = ''
    myHeros.forEach(h => template += h.myTemplate)
    document.getElementById("myHeros").innerHTML = template
}


export default class HerosController {
    constructor() {
        store.subscribe("heros", _drawHeros);
        store.subscribe("myHeros", _drawMyHeros);
    }


    buy(id) {
        herosService.buy(id)
    }

    sell(id) {
        herosService.sell(id)

    }
}
