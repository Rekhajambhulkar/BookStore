const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static('./dist/BookStore'));
// Start the app by listening on the default
// Heroku port
app.get('/*', (req, res) =>

    res.sendFile('index.html', { root: 'dist/BookStore/' }))
app.listen(process.env.PORT || 8080);