import {app} from 'Bus';
import Peer from 'peerjs';

/**
 * @class User
 * @classdesc User class
 * @property {string} name - User's name
 */
class User {
/**
  * @constructor
  * @param {string} name - User's name
  */
  constructor() {
    this.id = Math.random().toString(36).substring(2, 14);
    this._prefix = 'bl-podium-user-';
    this.peer = new Peer(this._prefix + this.id, {host: '0.peerjs.com', secure: true});
  }
}

app.general.on('makeUser', (e) => {
  window.currentUser = new User();
  app.general.emit('userMade', null, {user: window.currentUser});
  console.log('hello');
});

app.general.on('userMade', (e) => {
  console.log(e.user);
});
