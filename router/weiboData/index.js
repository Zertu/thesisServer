routers = require('koa-router'),
router = routers(), {stewpot,eleme,beef} = require('../../util/')
router.get('/stewpot', async function (next) {
  const query = this.request.query,
  pageSize=query.num-0,
  idx=query.pagenum-0
  this.response.body = await stewpot.findAndCountAll({limit: pageSize , offset:idx*pageSize+pageSize})
})
router.get('/eleme', async function (next) {
  const query = this.request.query,
  pageSize=query.num-0,
  idx=query.pagenum-0
  this.response.body = await eleme.findAndCountAll({limit: pageSize , offset:idx*pageSize+pageSize})
})
router.get('/beef', async function (next) {
  const query = this.request.query,
  pageSize=query.num-0,
  idx=query.pagenum-0
  this.response.body = await beef.findAndCountAll({limit: pageSize , offset:idx*pageSize+pageSize})
})
module.exports = router
