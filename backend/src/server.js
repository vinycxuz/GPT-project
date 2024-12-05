const app = require("./app");
const port = 5555
require('dotenv/config')

app.listen(port, () => {
  console.log(`servidor na porta: ${port}`)
})

console.log(port)