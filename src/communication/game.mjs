/* eslint-disable max-len */
import {Host, Player} from './role-router.mjs'; // eslint-disable-line no-unused-vars
export {Game};
/**
 * @class Game
 * @classdesc A class that represents a game, hosted by a host.
 */
class Game {
  /**
     * @constructor
     * @description Creates a new game.
     * @param {string} mode - Whether the user is hosting or joining the game.
     * @param {string} host - The host of the game.
     */
  constructor(mode, host) {
    switch (mode) {
      case 'host':
        this.mode = 'host';
        this.data = {};
    this.host = host;
  }
}

