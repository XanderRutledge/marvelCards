import store from "../store.js";
import Hero from "../Models/Hero.js";


const _herosApi = axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/public/characters?apikey=53496df3cd682930aa9108759e347171&&limit=100",
    timeout: 15000
})


const _myHerosApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/xander/heroes",
    timeout: 15000
})


class HerosService {
    constructor() {
        this.getHeros();
        this.getMyHeros();
    }

    getHeros() {
        _herosApi.get('')
            .then(res => {
                let heros = res.data.data.results.map(heroData => new Hero(heroData))
                store.commit("heros", heros)
            })
    }

    getMyHeros() {
        _myHerosApi.get('')
            .then(res => {
                let heros = res.data.data.map(heroData => new Hero(heroData))
                store.commit("myHeros", heros)
            })
    }

    buy(id) {
        let heroId = store.State.heros.find(h => h.id == id)
        _myHerosApi.post("", heroId)
            .then(res => {
                this.getMyHeros();
            })
            .catch(e => console.error(e))
    }

    sell(id) {
        _myHerosApi.delete(id)
            .then(res => {
                this.getMyHeros();
            })
            .catch(e => console.error(e))
    }

}

const herosService = new HerosService();
export default herosService;
