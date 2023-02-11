/* eslint-disable max-len */
export {Game};
/**
 * @class Game
 * @classdesc A class that represents a game, hosted by a host.
 */
class Game {
  /**
     * @constructor
     * @description Creates a new game.
     * @param {string} hostCode - The host code of the host (e.g. 'bl-podium-host-abcde').
     */
  constructor(hostCode) {
    this.host = hostCode;
  }
}

