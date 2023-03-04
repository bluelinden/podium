import {app} from '../../bus.js';


app.input.on('button.join.open', () => {
  app.stage.value = 'join';
});
