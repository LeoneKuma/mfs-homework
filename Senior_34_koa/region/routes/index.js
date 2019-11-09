const router = require('koa-router')()
const regionHandler=require('../public/javascripts/search');
var region=new regionHandler()

router.get('/', async (ctx, next) => {
  await ctx.render('index')
})

router.get('/get-provinces',async(ctx)=>{
  var provinceNames = region.getProvince();
  ctx.body={ 
    "data": provinceNames
   };
})
router.get('/get-citys',async(ctx)=>{
  var provinceName = ctx.query.provinceName;
  var citys = region.getCitys(provinceName);
  ctx.body={ "data": citys };
})
router.get('/get-districts', async (ctx)=> {
  var provinceName = ctx.query.provinceName;
  var cityName = ctx.query.cityName;
  var districts = region.getDistricts(provinceName, cityName);
  ctx.body={ "data": districts };
})

module.exports = router
