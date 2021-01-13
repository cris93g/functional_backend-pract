const {Task} = require('../types'),
    fetch = require('node-fetch'),
    {compose} = require('ramda'),
    {KEY} = process.env;


//function - promise
const fetchIt = url => 
    Task((rej,res)=>
    fetch(url)
    .then(x=>x.json())
    .then(res)
    .catch(rej))

//urls
const pokeUrl = x =>'https://pokeapi.co/api/v2/pokemon/ditto';

const leagueUrl = () => `https://na1.api.riotgames.com/lol/status/v4/platform-data?api_key=${KEY}`



//(f ∘ g)(x) = f(g(x))
const poke =(req,res)=> compose(fetchIt,pokeUrl)().fork(console.error,(x)=>res.status(200).send(x))

const league =(req,res)=> compose(fetchIt,leagueUrl)().fork(console.error,(x)=>res.status(200).send(x))

module.exports={
    poke,
  league
}