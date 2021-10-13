/* eslint-disable import/no-extraneous-dependencies */
const { expect, should } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  title: 'Papas fritas de Benja',
  summary: 'Freírlas y comerlass'
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  
  describe('GET /recipes', () => {
    it('Get responde con status 200', () =>
      agent.get('/recipes').expect(200)
      );
  });
  it('GET responde con un status 404 en diets si no se hizo el preload', function(){
    return agent
      .get('/Diets')
      .expect(function(res){
        expect(res.status).equal(404)})
  });
});
