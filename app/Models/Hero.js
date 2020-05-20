

export default class Hero {
    constructor(data) {
        this.id = data._id || data.id
        this.name = data.name
        this.thumbnail = data.thumbnail
        this.img = data.img || data.thumbnail.path + '.' + data.thumbnail.extension
        this.description = data.description || "N/A"
    }

    get Template() {
        return `<div class="card my-2">
                    <img class="card-img-top" src="${this.img}" alt="">
                    <div class="card-body">
                        <h4 class="card-title">${this.name}</h4>
                        <p class="card-text">Description: ${this.description} </p>
                        <button class="btn btn-success" onclick="app.herosController.buy(${this.id})">BUY</button>
                    </div>
                </div>`
    }

    get myTemplate() {

        return /*html*/`<div class="card my-2">
                    <img class="card-img-top" src="${this.img}" alt="">
                    <div class="card-body">
                        <h4 class="card-title">${this.name} </h4>
                        <p class="card-text">Description: ${this.description}</p>
                        <button class="btn btn-danger" onclick="app.herosController.sell('${this.id}')">SELL</button>
                    </div>
                </div>`
    }






}