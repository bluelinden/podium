/* eslint-disable no-unused-vars */
import {Bus} from './event-bus.mjs';
import {Host, User} from './communication/role-router.mjs';
import {Game} from './communication/communicate.mjs';
import Peer from 'peerjs';
import { } from './styles/front.sass';
import { } from './styles/join.sass';
import { } from './display/join.mjs';
const testHost = new Host('test');
const testPlayer = new User('test');
const testPeer = new Peer('wahahhahahahahaha');
console.info(testHost.host.id, testPlayer.user.id, testPeer.id);

