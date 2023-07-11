function swapCase(string) {
    let newWord = ''
    for (let symbol of string) {
        if (symbol === symbol.toUpperCase()) {
            newWord = newWord + symbol.toLowerCase()
        } else {
            newWord = newWord + symbol.toUpperCase()
        }
    }
    console.log(newWord)
}


swapCase('aBcD') // AbCd
swapCase('jAvaScRIPt')
swapCase('jeDAcAdemY')
