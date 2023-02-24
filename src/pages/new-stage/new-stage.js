// receive drops from new-stage.hbs and validate against game.schema.json
// if valid, create new game and send an event out about it
// if invalid, send an error event out
import {app} from 'Bus';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';

const ajv = new Ajv({allErrors: true});


addFormats(ajv);
ajvErrors(ajv);

const gameSchema = require('App/game-schema.json');
const validateDefault = ajv.compile(gameSchema);

/**
 * @param { any } file
 * @return { void }
 * @description Validate a file against the game schema and emit it to the bus
 */
function validate(file) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    const game = JSON.parse(reader.result);
    const valid = validateDefault(game);
    const message = '';
    const eventData = {
      game: game,
      validity: valid,
      message: message,
    };
    app.general.emit('game-received', eventData);
  };
};
