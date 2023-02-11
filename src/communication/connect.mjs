'use strict';
/* eslint-disable max-len */
import Peer from 'peerjs';
import adapter from 'webrtc-adapter'; // eslint-disable-line no-unused-vars
export {Host, User};

/**
 * @class Player
 * @classdesc A class that represents a game player.
 */
class User {
  /**
   * @constructor
   * @description Creates a new player.
   * @param {string} name - The name of the player.
   */
  constructor(name) {
    const peerID = 'bl-podium-player-' + Math.random().toString(36).substring(2, 12);
    this.peer = new Peer(peerID, {host: '0.peerjs.com', port: 443, secure: true});
    this.playing = {};
    this.playing.withHostID = '';
    this.playing.isPlaying = false;
    this.name = name;
  }
}

/**
 * @class Host
 * @classdesc A class that represents a game host.
 * @extends User
 */
class Host extends User {
  /**
   * @constructor
   * @description Creates a new host.
   * @param {string} name - The name of the host.
   */
  constructor(name) {
    super(name);
    const peerID = 'bl-podium-host-' + Math.random().toString(36).substring(2, 7);
    this.peer = new Peer(peerID, {host: '0.peerjs.com', port: 443, secure: true});
  }
}
