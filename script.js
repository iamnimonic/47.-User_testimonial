const API_URL = 'https://testimonialapi.toolcarton.com/api'
const img_el = document.querySelector('.img')
const name_el = document.querySelector('.name')
const designation_el = document.querySelector('.designation')
const message_el = document.querySelector('.message')

let current_user = 0

getData()

setInterval(() => {
    if (current_user < 10) {
        current_user ++
        getData()
    }
    else {
        current_user = 0
        getData()
    }
}, 10000)

async function getData() {

    const {data} = await axios({
        url: API_URL,
        method: 'GET'
    })

    setData(data)

}

function setData(data) {
    message_el.innerHTML = data[current_user].message
    img_el.src = data[current_user].avatar
    name_el.innerHTML = data[current_user].name
    designation_el.innerHTML = data[current_user].designation
}

function nextUser() {
    current_user++
    console.log(current_user)
}