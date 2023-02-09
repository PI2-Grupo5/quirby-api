const app = require('./app');

app.get('/', (req, res) => {
    res.send('Quirby API online!!!')
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor online no http://localhost:${process.env.PORT}`);
})