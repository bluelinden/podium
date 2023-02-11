/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import {Host, User} from './communication/connect.mjs';
import {Game} from './communication/communicate.mjs';
import Peer from 'peerjs'; 
import { } from './styles/cover.sass';
const testHost = new Host('test');
const testPlayer = new User('test');
const testPeer = new Peer('wahahhahahahahaha');
console.info(testHost.peer.id, testPlayer.peer.id, testPeer.id);
