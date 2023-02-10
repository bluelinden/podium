'use strict';
import Peer from 'peerjs';
let myID = 'bl-podium-' + Math.random().toString(36).substring(2, 10);
const me = new Peer();
