require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// ✅ CORS CONFIG (IMPORTANT)
const allowedOrigins = [
    'http://localhost:3000',
    'https://projectsmileonmarctv.com',
    'https://www.projectsmileonmarctv.com'
];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

// ✅ SOCKET.IO CONFIG
const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        methods: ['GET', 'POST']
    }
});

// Routes
const { router: adminRoutes } = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

// ✅ DATABASE (STRICT)
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB error:', err);
        process.exit(1); // stop server if DB fails
    });

// ✅ SOCKET LOGIC
let activeVisitors = 0;

io.on('connection', (socket) => {
    activeVisitors++;
    io.emit('active_visitors', activeVisitors);

    socket.on('page_view', () => {
        io.emit('new_page_view');
    });

    socket.on('disconnect', () => {
        activeVisitors--;
        io.emit('active_visitors', activeVisitors);
    });
});

// ✅ HEALTH CHECK ROUTE
app.get('/', (req, res) => {
    res.send('FounderInfo Backend Running 🚀');
});

app.get('/', (req, res) => {
    res.send('FounderInfo Backend Running 🚀');
});

// ✅ SERVER START
const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});