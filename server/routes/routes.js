const {poke,league}= require('../controllers/controller')

module.exports= app =>{
    app.get('/api/poke',poke)
    app.get('/api/league',league)
}