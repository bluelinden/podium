import {default as EventBus} from 'js-event-bus';
export {app};

/*

The Podium Event Manager system - Scalability, reliability, and performance. Without being horrible to maintain.

All events within Podium fall into one of nine categories:
* Input - Events that are specific to user input, like clicking a button or typing a message.
* General - Events that are not specific to any particular part of the system
* Display - Events that are specific to layout and modals
* Game - Events that are specific to the game itself, like score, question parsing, and rank calculation.
* Transport - Events that are specific to the transport layer, like connection and disconnection, and failover management.
* Stage - Events that are specific to the stage, like host changeovers and teammates.
* Interact - Events that are specific to communications directly with other users, like requesting a host or relay changeover, submitting an answer, or messaging someone else.
* Broadcast - Events that are broadcasted to all users, like enacting a host changeover or broadcasting a message to all users.
* Integrity - System integrity stuff, like checking if the client is connected to the host, doing periodic mesh stability checks, performing anti-cheat checks, and syncing game state with the host once in a while.

*/

/**
 * @class
 * @classdesc State updater class
 */
class Stator {
  /**
   * @return {any} - The current State
   * @memberof Stator
   */
  get state() {
    return this._state;
  }

  /**
   * @param {any} state - The new state
   * @return {void}
   */
  set state(state) {
    const oldState = this._state;
    this._state = state;
    this.updated = new Date();
    app.stator.emit('stateChange', null, {
      new: this._state,
      old: oldState,
      updated: this.updated,
      name: this.name,
    });
  }
  /**
   * @constructor
   * @param {string} name - The name of the state
   * @param {any} state - The initial state
   */
  constructor(name, state) {
    this.name = name;
    this._state = state;
  }
}

/**
 * @class
 * @classdesc Event bus class
 */
class Bus {
  /**
   * @constructor
   */
  constructor() {
    this.input = new EventBus();
    this.general = new EventBus();
    this.display = new EventBus();
    this.game = new EventBus();
    this.transport = new EventBus();
    this.stage = new EventBus();
    this.interact = new EventBus();
    this.broadcast = new EventBus();
    this.integrity = new EventBus();
    this.stator = new EventBus();
    this.page = new Stator('page', '');
  }
}
const app = new Bus();
