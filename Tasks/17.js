function oddOrEven(array) {
    let sum = (array.length == 0) ? 0 :array.reduce((a, n) => {return a + n})
    return (sum % 2 == 0) ? "even" : "odd"
}