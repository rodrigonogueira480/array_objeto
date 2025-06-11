fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    return response.json() // retorna uma promise
  })
  .then(function(data) {
    console.log(data)
  })