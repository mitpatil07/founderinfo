require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});

app.use(cors());
app.use(express.json());

// Routes
const { router: adminRoutes } = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

// Database config
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/founderinfo';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Socket.io config for real-time trackers
let activeVisitors = 0;

io.on('connection', (socket) => {
    activeVisitors++;
    io.emit('active_visitors', activeVisitors);

    // Real-time page view hit
    socket.on('page_view', () => {
        io.emit('new_page_view');
    });

    socket.on('disconnect', () => {
        activeVisitors--;
        io.emit('active_visitors', activeVisitors);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
