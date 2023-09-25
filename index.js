const { timeChecker } = require('./middlewares/access');
const app = require('express')();
const port =5000;
app.set('view engine', 'pug');
app.set('views','./views');

app.use(timeChecker)

app.get('/',(req,res)=>{
    res.status(200).render('viewHome')
})

app.get('/contact',(req,res)=>{
    res.status(200).render('viewContact')
})

app.get('/service',(req,res)=>{
    res.status(200).render('viewService')
})
app.listen(port,()=>{
    console.log(`app running on http://localhost:${port} `)
})