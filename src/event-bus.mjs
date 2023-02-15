import('js-event-bus');

/*

The Podium Event Manager system - Scalability, reliability, and performance. Without being horrible to maintain.

All events within Podium fall into one of seven categories:
* General - Events that are not specific to any particular part of the system
* Display - Events that are specific to layout and modals
* Game - Events that are specific to the game itself, like score and questions
* Transport - Events that are specific to the transport layer, like connection and disconnection, and failover management.
* Stage - Events that are specific to the stage, like host changeovers and teammates.
* Interact - Events that are specific to communications directly with other users, like requesting a host changeover or messaging a user.
* Broadcast - Events that are broadcasted to all users, like enacting a host changeover or broadcasting a message to all users.

*/
/**
 * @class
 * @classdesc Event bus class
 */
export default class Bus {
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
  }
}
