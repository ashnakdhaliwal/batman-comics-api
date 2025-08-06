const express = require('express');
const app = express();
const comicsRoutes = require('./routes/comics');

app.use('/api/comics', comicsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Batman Comics API is running on http://localhost:', PORT);
});