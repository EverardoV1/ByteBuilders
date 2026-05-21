import express from 'express'
import path, {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import cors from "cors";


const allowedOrigins = process.env.FRONTEND_ORIGIN
  ? process.env.FRONTEND_ORIGIN.split(',').map((origin) => origin.trim())
  : ["http://localhost:3000", "https://nominatim.openstreetmap.org", "https://bytebuilders-0ntq.onrender.com","https://bytebuilders-hj0q.onrender.com/"];

//Allows communication between frontend client and database server,
//  without flagging CORS communication issues in the web browser
const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
};


const app = express()
app.use(cors(corsOptions))
app.enable('trust proxy');


const PORT = process.env.PORT || 5003

// Get the file path from URL of currModule
const __filename = fileURLToPath(import.meta.url)
// Retrieve Dir name
const __dirname = dirname(__filename)

//MIDDLEWARE
app.use(express.json())


/*
//Hands over HTML from /public Dir
app.use(express.static(path.join(__dirname, '../public')))
// Now Display HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
*/

//Temporary redirect back to the actual frontend
app.get('/', (req, res) => {
    res.redirect("https://bytebuilders-hj0q.onrender.com")
})

//ROUTES
app.use('/auth', authRoutes)
app.use('/appointments', appointmentRoutes)





app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});


