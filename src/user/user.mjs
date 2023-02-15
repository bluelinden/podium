import app from '../event-bus.mjs';

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
    this.id = 'bl-podium-user-' + Math.random().toString(36).substring(2, 14);
    this.peer = new Peer(this.id, {host: '0.peerjs.com', secure: true});
    this.peer.on('open', (id) => {
      this.id = id;
      app.general.emit('userMake', { id, name: this.name });
    });
  }
}

app.general.on('userMake', (e) => {
  new User
});
