//Importing app
import app from './app'
import { PORT } from '../config/index'

//function main 
const main = async () => {
    await app.listen(PORT);
    console.log(`server on port ${PORT}`)
}

//Init main
main()