const koa = require('koa')
,app=new koa()
	// ,Restful=require('./router/Restful')
	,bodyParser = require('koa-bodyparser'),
	routers = require('./router')
app.use(router.routes())
app.use(router.allowedMethods())
app.use(bodyParser())
app.use(async (ctx,next)=>{  
	ctx.response.set('Access-Control-Allow-Origin', ' *')
		ctx.response.set("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
		ctx.response.set('Access-Control-Allow-Methods', 'GET, POST')
		ctx.response.set('X-Powered-By','SB')
		await next()
})



app.on('error', (err, ctx) =>
		console.error('server error', err, ctx.request)
      );

app.listen(3001,function(){
	console.log('server open at 139.224.232.97:3001')
})
