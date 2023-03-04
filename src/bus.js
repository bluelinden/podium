import {default as EventBus} from 'js-event-bus';
export {app};

/*

The Podium Event Manager system - Scalability, reliability, and performance. Without being horrible to maintain.

All events within Podium fall into one of ten categories:
* Input - Events that are specific to user input, like clicking a button or typing a message.
* General - Events that are not specific to any particular part of the system
* Display - Events that are specific to layout and modals
* Game - Events that are specific to the game itself, like score, question parsing, and rank calculation.
* Transport - Events that are specific to the transport layer, like connection and disconnection, and failover management.
* Stage - Events that are specific to the stage, like host changeovers and teammates.
* Interact - Events that are specific to communications directly with other users, like requesting a host or relay changeover, submitting an answer, or messaging someone else.
* Broadcast - Events that are broadcasted to all users, like enacting a host changeover or broadcasting a message to all users.
* Integrity - System integrity stuff, like checking if the client is connected to the host, doing periodic mesh stability checks, performing anti-cheat checks, and syncing game state with the host once in a while.
* Stator - State management, like the current page. This channel is for state updates. It is not for events that trigger state changes.

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
  get value() {
    return this._value;
  }

  /**
   * @param {any} value - The new state
   * @return {void}
   */
  set value(value) {
    const oldValue = this._value;
    this._value = value;
    this.updated = new Date();
    app.stator.emit(this.name, null, {
      new: this._value,
      old: oldValue,
      updated: this.updated,
    });
  }
  /**
   * @constructor
   * @param {string} name - The name of the state
   * @param {any} value - The initial state
   */
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

/**
 * @class
 * @classdesc Proxy class
 */
class ProxyModel {
  /**
   * @constructor
   * @param {any} targetStator - The stator to proxy
   * @return {Proxy} - The proxy
   */
  constructor(targetStator) {
    this.targetStator = targetStator;
    return new Proxy(
        {},
        {
          get: function(target, name) {
            return this.targetStator.value;
          }.bind(this.model),
          set: function(target, name, value) {
            this.targetStator.value = value;
            return this.targetStator.value;
          },
        },
    );
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
    // Event buses
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

    // State mechanisms
    this._pageStator = new Stator('page', '');
    this.page = new ProxyModel(this._pageStator);

    this._nameStator = new Stator('user', '');
    this.user = new ProxyModel(this._nameStator);

    this._connectionsStator = new Stator('connections', []);
    this.connections = new ProxyModel(this._antiCheatRelayStator);

    this._gameStator = new Stator('game', {});
    this.game = new ProxyModel(this._gameStator);
  }
}
const app = new Bus();
