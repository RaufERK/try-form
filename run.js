const dateInput = document.querySelector('#dateInput')
console.log('INPUT-->', dateInput.value)

const testDate = new Date('2019.12.31')

const date = testDate.toLocaleDateString()
const year = date.slice(-4)
const month = date.slice(3, 5)
const day = date.slice(0, 2)

dateInput.value = `${year}-${month}-${day}`
