// receive drops from new-stage.hbs and validate against game.schema.json
// if valid, create new game and send an event out about it
// if invalid, send an error event out
import app from 'App/event-bus.mjs';
import Ajv from 'ajv';
const ajv = new Ajv();
const gameSchema = require('App/game-schema.json');

const validate = (file) => {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    const game = JSON.parse(reader.result);
    const valid = ajv.validate(gameSchema, game);
    const eventData = {
      game: game,
      validity: valid,
    };
    app.general.emit('game-received', eventData);
  };
};
