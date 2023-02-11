import {Host, User} from './connect.mjs'; // eslint-disable-line no-unused-vars
import {Game} from './game-starter.mjs'; // eslint-disable-line no-unused-vars
import Peer from 'peerjs'; // eslint-disable-line no-unused-vars
import { } from './styles/cover.sass'; // eslint-disable-line no-unused-vars
const testHost = new Host('test');
const testPlayer = new User('test');
const testPeer = new Peer('wahahhahahahahaha');
console.info(testHost.peer.id, testPlayer.peer.id, testPeer.id);
