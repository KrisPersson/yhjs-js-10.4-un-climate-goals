import { callAPI } from "./api.js"

const elem = {
    goalsContainerList: document.querySelector('.goals-container__list')
}

callAPI()   

export { elem }