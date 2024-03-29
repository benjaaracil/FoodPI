//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Diet} = require("./src/db.js");
const PORT = process.env.PORT || 3001
// Routes here (Before serving the static assets)
const routes = require('./src/routes/index.js');
server.use('/', routes);

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`); // eslint-disable-line no-console
  });
});
//LOADER DIETS
const Diets = [
'gluten free',
'ketogenic',
'vegetarian',
'lacto ovo vegetarian',
'vegan',
'pescatarian',
'paleolithic',
'primal',
'whole 30',
'fodmap friendly',
'dairy free',
]
function preload (e){
  //Me fijo si en mi db ya estan cargados los tipos de dieta
  if (!e.length){
    Diets.forEach(async (Dieta) => {
      await Diet.create({
        name: Dieta
      })
    });
  }
}

Diet.findAll()
.then(e => preload(e))