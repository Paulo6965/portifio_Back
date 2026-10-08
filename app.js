const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const { squelize } = require('./models');
const routes = require('./middlewares/locals');
const locals = require('./seeders/seed');

const app = express();
const PORT = process.env.PORT || 3000;

//view Engine
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));

//Middlewares
app.use(express.unlercoded({extended: true}));
app.use(methodOverride('__method')); //permite PUT/PATCH/USE/DELETE via formularios(?_method=PUT)
app.use(express.static.apply(path.join(__dirname, 'public')));
app.use(locals);

//Rotas
app.use(routes);

//Error 404 
app.use((req, res) => {
    res.status(404).render('404', {tittle: 'Página não encontrada'});
});

//Erros
//
app.use((err,req,res, next) =>{
    console.error(err);
    res.status(500).render('erro', {tittle: 'Erro', error: err});
});

(async () => {
    try{
        await sequelize.sync();
        await seed({onlyIfEmpty: true});
        app.listen(PORT, () => {
            console.log('\n Helpdesk Ti rodando em http://localhost:${PORT}\n');
        })
    } catch(err) {
        console.error('Falha ao iniciar a aplicação', err);
    process.exit(1);
    }
})();
