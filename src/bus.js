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
    this.oldValue = this._value;
    this._value = value;
    this.updated = new Date();
    this._eventBus.stator.emit(this.name, null, {
      new: this._value,
      old: this.oldValue,
      updated: this.updated,
    });
  }
  /**
   * @constructor
   * @param {string} name - The name of the state
   * @param {any} value - The initial state
   * @param {EventBus} eventBus - The event bus to use when emitting state changes
   */
  constructor(name, value, eventBus) {
    this.name = name;
    this._value = value;
    this._eventBus = eventBus;
  }
}

/**
 * @class
 * @classdesc Proxy class
 */
class StatorProxy {
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
          get: function(target, prop, name) {
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

    // the stator proxies exist so that we can change values at the root of their respective objects, instead of doing app.page.value = 'join', we can do app.page = 'join'.
    this._pageStator = new Stator('page', '', this);
    this.page = new StatorProxy(this._pageStator);

    this._nameStator = new Stator('user', {}, this);
    this.user = new StatorProxy(this._nameStator);

    this._connectionsStator = new Stator('connections', [], this);
    this.connections = new StatorProxy(this._connectionsStator);

    this._currentGameStator = new Stator('currentGame', {}, this);
    this.currentGame = new StatorProxy(this._gameStator);
  }
}

const app = new Bus();
