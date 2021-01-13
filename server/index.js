require('dotenv').config();
const express = require('express'),
	cors = require('cors'),
	{json}= require('body-parser'),
	routes = require('./routes/routes');

const app = express(),
	port= 3001;

app.use(cors())
app.use(json())

routes(app)

app.listen(port,()=>console.log(`app listening on port ${port}`))
