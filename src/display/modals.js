import {app} from 'Bus';

app.display.on('joinWrap', ( e ) => {
  const action = e.action;
  switch (action) {
    case 'show':
      document.getElementById('join-wrapper').classList.remove('hidden');
      break;
    case 'hide':
      document.getElementById('join-wrapper').classList.add('hidden');
      break;
  }
},
);

