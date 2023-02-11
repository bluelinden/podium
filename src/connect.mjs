'use strict';
/* eslint-disable max-len */
import Peer from 'peerjs';
import adapter from 'webrtc-adapter'; // eslint-disable-line no-unused-vars
export {Host};

/**
 * @class Host
 * @classdesc A class that represents a game host.
 */
class Host {
  /**
   * @constructor
   * @description Creates a new host.
   */
  constructor() {
    const peerID = 'bl-podium-host-' + Math.random().toString(36).substring(2, 6);
    this.peer = new Peer(peerID);
  }
}
