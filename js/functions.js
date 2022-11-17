import { elem } from "./index.js"

function renderGoals(data) {
    let acc = ``

    for (let i = 0; i < data.length; i++) {

        let targets = ``
        data[i].targets.forEach(target => {
            targets += `
                <li class="p-ul__li">${target.title}</li>
            `
        })

        acc += `
        <li id="li-id${data[i].code}" class="list__li">
            <h3 id="h-id${data[i].code}">${data[i].code}. ${data[i].title}</h3><i class="fa-solid fa-caret-down"></i>
            <section id="p-id${data[i].code}" class="li__p hidden">${data[i].description}
                <ul class="p-ul">${targets}</ul>
            </section>
        </li>
        `
    }

    elem.goalsContainerList.innerHTML = acc
}

function addListeners(arr) {
    arr.forEach((item) => {
        item.addEventListener('click', (event) => {
            if (event.target.parentNode.id[0] === 'l') {
                const node = event.target.parentNode.childNodes[4]
                node.classList.toggle('hidden')
                const icon = event.target.parentNode.childNodes[2]
                icon.classList.toggle('flip')
            }
        })
    })
}

export { renderGoals, addListeners }