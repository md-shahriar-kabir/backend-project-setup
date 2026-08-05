import { app } from "./app.js"
import dotenv from 'dotenv'
import http, {type Server} from 'http'

dotenv.config()


const port = process.env.PORT || 5000

let server: Server

const bootstrap = async() =>{
    try{
        const httpServer = http.createServer()
        server = httpServer.listen(port, ()=>{
        console.log("http Sever is running")
    })

    // gracefully Shutdown
    process.on('SIGTERM', ()=>{
        server.close(()=>{
            console.log('sigterm gracefully shutdown')
            process.exit(0)
        })
    })
    process.on('SIGINT', ()=>{
        server.close(()=>{
            console.log('sigint gracefully shutdown')
            process.exit(0)
        })
    })
    process.on('uncaughtException', (error)=>{
        server.close(()=>{
            console.log('uncaughtException gracefully shutdown')
            process.exit(1)
        })
    })
    process.on('unhandledRejection', (error)=>{
        server.close(()=>{
            console.log('unhandledRejection gracefully shutdown')
            process.exit(1)
        })
    })

    }
    catch(error){
        console.log('Server Stopped', error)
    }
}


app.listen(port,()=>{
    console.log("Sever is running!")
})