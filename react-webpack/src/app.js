'use-strict'

function sum(numbers) { 
    return numbers.reduce((a,b) => {
        return a + b
    })
}

module.exports = sum