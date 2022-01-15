const data = JSON.parse(localStorage.scores)
const sortedData = data.sort((a, b) => b[1] - a[1])
console.log(sortedData)