const url = 'https://restcountries.com/v3.1/name/azerbaijan'

const root = document.getElementById('root')
const nameElem = document.getElementById('name')
const flagElem = document.getElementById('flag')
const areaElem = document.getElementById('area')
const gerbElem = document.getElementById('gerb')
const capitalElem = document.getElementById('capital')

axios.get(url).then(({ data }) => {
    const country = data[0]

    nameElem.textContent = country.name.common
    flagElem.src = country.flags.png
    areaElem.textContent = country.area
    gerbElem.src = country.coatOfArms.png
    capitalElem.textContent = country.capital[0]
})
