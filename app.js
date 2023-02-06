const express = require('express');
const app = express();


app.get('/makers/:name', (req, res) => {
    const name = req.params.name
    const nameCap =  name.charAt(0).toUpperCase() + name.slice(1)
    res.send("<h1>Hola " + nameCap + "!</h1>");
});

app.listen(3000, () => console.log('Listening on port 3000!'));