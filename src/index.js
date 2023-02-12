/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import {Host, User} from './communication/role-router.mjs';
import {Game} from './communication/communicate.mjs';
import Peer from 'peerjs';
import { } from './styles/cover.sass';
import { } from './styles/join.sass';
import { } from './display/join.mjs';
const testHost = new Host('test');
const testPlayer = new User('test');
const testPeer = new Peer('wahahhahahahahaha');
console.info(testHost.host.id, testPlayer.user.id, testPeer.id);
