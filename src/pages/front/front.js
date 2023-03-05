import {app} from '../../bus.js';


app.input.on('button.join.open', () => {
  console.log('Join button clicked');
  app.page += 'join';
});

app.stator.on('page', () => {
  console.log('Page changed to another');
});
