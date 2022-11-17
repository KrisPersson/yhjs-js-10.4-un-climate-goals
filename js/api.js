import { renderGoals, addListeners } from "./functions.js"

const BASE_URL = "https://unstats.un.org/SDGAPI/"
const EXT_URL = "v1/sdg/Goal/List"
const PROPS_URL = "?includechildren=true"

async function callAPI() {
    try {
        const response = await fetch(BASE_URL + EXT_URL + PROPS_URL)
        const data = await response.json()
        // console.log(data)
        renderGoals(data)
        addListeners(document.querySelectorAll('.list__li'))
    } catch (error) {
        console.log(error)
    }
}

export { callAPI }