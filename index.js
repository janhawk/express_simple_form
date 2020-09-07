const express = require('express');
const exphbs = require('express-handlebars');

const port = 3000;
const app = express();

const students = ['Jean', 'Binta', 'Agathe', 'Adil'];

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

app.get('/', (req, res) => {
    res.render('home', {
        students: ['Jean', 'Binta', 'Agathe', 'Adil']
    });
});
app.post('/students/add', (req,res) => {
    console.log('POST /students/add');

    // res.send('Lawrence Nowell, UK');
});
// app.get('/send-form',() =>{
//     res.send('this route is different than app.post("/send-form")')
// });
app.post('/send-form',(req, res) => {
    console.log('POST /send-form');
    console.log('POST /send-form req.body', req.body);

    res.send(`Student ${req.body.usernamename} has been recorded. <a href="http://localhost:3000/">Go Back</a>`);
});

app.listen(port, () => {
    console.log(`Server satrted on port: ${port}`) // to confirme that server is started on that port
});