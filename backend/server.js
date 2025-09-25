import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// Debug environment variables at startup
console.log('=== Environment Check ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
console.log('All env vars:', Object.keys(process.env).filter(key => 
    key.includes('MONGO') || key.includes('CLOUD') || key.includes('JWT')
));
console.log('========================');

// App Config
const app = express()
const port = process.env.PORT || 4000

// Initialize connections - don't await here for serverless
connectDB().catch(err => console.log('Initial DB connection failed:', err));
connectCloudinary();

// middlewares
app.use(express.json())

// Add debug logging for CORS
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    console.log('Origin:', req.headers.origin);
    console.log('User-Agent:', req.headers['user-agent']);
    next();
});

app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:5173',
        'http://localhost:5174',
        'https://style-sphere-frontend-ashen.vercel.app',
        'https://style-sphere-mu.vercel.app'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'token', 'Origin', 'X-Requested-With', 'Accept'],
    optionsSuccessStatus: 200 // For legacy browser support
}))

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

// Add error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// Handle 404 errors
app.use('*', (req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(port, ()=> console.log('Server started on PORT : '+ port))