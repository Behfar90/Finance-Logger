import HasFormatter from "../interfaces/hasFormatter";

export default class ListTemplate {
    constructor(
        private container: HTMLUListElement
    ){}
    
    render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        h4.innerText = heading
        p.innerText = item.format()
        li.append(h4)
        li.append(p)

        pos === 'start'
        ?   this.container.prepend(li)
        :   this.container.append(li)
    }
}