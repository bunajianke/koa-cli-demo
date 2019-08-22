const router = require("koa-router")();

router.get("/", async (ctx, next) => {
    await ctx.render("index", {
        title: "Hello Koa 2!"
    });
});

router.get("/123", async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.get("/string", async (ctx, next) => {
    ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
    ctx.body = {
        title: "koa2 json"
    };
});

router.post("/signin", async (ctx, next) => {
    var req = ctx.request.body;
    console.log(req);
    if(req) {
      ctx.body = 'post success';
    }
});

module.exports = router;
