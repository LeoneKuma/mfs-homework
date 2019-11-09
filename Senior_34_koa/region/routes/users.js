const router = require('koa-router')()
const user = require('../public/javascripts/user');
router.prefix('/signup')

var users = new user();
router.get("/", async (ctx) => {
  await ctx.render("user")
})

router.post('/username-check', (ctx) => {
  if (users.usernameExist(ctx.request.body.username)) {
    //如果已经存在
    console.log("1");
    ctx.body = { "result": 1 }
  }
  else {
    console.log("0");
    ctx.body = { "result": 0 }
  }
})
router.post('/register',async(ctx)=>{
  users.users.push({
      username:ctx.request.body.username,
      password:ctx.request.body.password
  })
  ctx.body={result:"success"}
  //ctx.redirect("/signup")
})
module.exports = router
