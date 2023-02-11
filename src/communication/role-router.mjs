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
    const peerID = 'bl-podium-user-' + Math.random().toString(36).substring(2, 12); // Generate a random ID for the user
    this.user = new Peer(peerID, {host: '0.peerjs.com', port: 443, secure: true}); // Create a new user in PeerJS
    this.playing = {}; // The game the user is playing
    this.playing.withHostID = ''; // The ID of the host the user is playing with
    this.playing.isPlaying = false; // Whether the user is playing a game
    this.name = name; // The name of the user
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
    super(name); // Call the parent constructor
    const peerID = 'bl-podium-host-' + Math.random().toString(36).substring(2, 7); // Generate a random ID for the host
    this.host = new Peer(peerID, {host: '0.peerjs.com', port: 443, secure: true}); // Create a new host in PeerJS
  }
}

/**
 * @class Player
 * @classdesc A class that represents a game player.
 * @extends User
 */
class Player extends User {
  /**
   * @constructor
   * @description Creates a new player.
   * @param {string} name - The name of the player.
   */
  constructor(name) {
    super(name);
  }
}