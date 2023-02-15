import {default as EventBus} from '../node_modules/js-event-bus/src/index.js';

/*

The Podium Event Manager system - Scalability, reliability, and performance. Without being horrible to maintain.

All events within Podium fall into one of eight categories:
* General - Events that are not specific to any particular part of the system
* Display - Events that are specific to layout and modals
* Game - Events that are specific to the game itself, like score, question parsing, and rank calculation.
* Transport - Events that are specific to the transport layer, like connection and disconnection, and failover management.
* Stage - Events that are specific to the stage, like host changeovers and teammates.
* Interact - Events that are specific to communications directly with other users, like requesting a host or relay changeover, submitting an answer, or messaging someone else.
* Broadcast - Events that are broadcasted to all users, like enacting a host changeover or broadcasting a message to all users.
* Heartbeat - System integrity stuff, like checking if the client is connected to the host, doing periodic mesh stability checks, performing anti-cheat checks, and syncing game state with the host once in a while.

*/
/**
 * @class
 * @classdesc Event bus class
 */
export class Bus {
  /**
    * @constructor
    */
  constructor() {
    this.general = new EventBus();
    this.display = new EventBus();
    this.game = new EventBus();
    this.transport = new EventBus();
    this.stage = new EventBus();
    this.interact = new EventBus();
    this.broadcast = new EventBus();
    this.heartbeat = new EventBus();
  }
}
const app = new Bus();
export default app;
