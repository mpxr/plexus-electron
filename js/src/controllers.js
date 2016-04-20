angular.module('plexusControllers', [])

/*global things..*/
const socket = io.connect('http://localhost:3001')
const db = new PouchDB('http://localhost:5984/sdps')
const musicDb = new PouchDB('musicDB', { adapter: 'websql' })
const downloadedMusicDb = new PouchDB('downloadedMusicDb', { adapter: 'websql' })
PouchDB.plugin(require('pouchdb-upsert'))

var peerInitiator

/*node.js modules*/
const fs = require('fs')
const randomWord = require('random-word-by-length')
const chunkit = require('chunkit')
const play = require('play-audio')
const mkdirp = require('mkdirp')
const folderContents = require('folder-contents')
const mm = require('musicmetadata')
const _ = require('lodash')

// electron
const ipcRenderer = require('electron').ipcRenderer