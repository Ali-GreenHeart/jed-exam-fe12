const url = 'https://restcountries.com/v3.1/name/azerbaijan'

axios.get(url).then(({ data }) => {
    const country = data[0]

})
