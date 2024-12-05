import { listen } from "./app";
const port = 5555
import 'dotenv/config';

listen(port, () => {
  console.log(`servidor na porta: ${port}`)
})

console.log(port)