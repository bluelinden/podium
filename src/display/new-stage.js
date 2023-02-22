// receive drops from new-stage.hbs and validate against game.schema.json
// if valid, create new game and send an event out about it
// if invalid, send an error event out
import app from 'App/event-bus.mjs';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv();
addFormats(ajv);

const gameSchema = require('App/game-schema.json');
const validateDefault = ajv.compile(gameSchema);

const validate = (file) => {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    const game = JSON.parse(reader.result);
    const valid = validateDefault(game);
    const message = ;
    const eventData = {
      game: game,
      validity: valid,
      message: message
    };
    app.general.emit('game-received', eventData);
  };
};
