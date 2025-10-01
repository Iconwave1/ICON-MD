// lib/Settingsdb.js
const fs = require('fs');
const SETTINGS_PATH = './lib/setting.json';

let settings = {};
try {
  if (fs.existsSync(SETTINGS_PATH)) {
    settings = JSON.parse(fs.readFileSync(SETTINGS_PATH, 'utf8') || '{}');
  } else {
    fs.writeFileSync(SETTINGS_PATH, JSON.stringify({}, null, 2));
    settings = {};
  }
} catch (e) {
  console.error('Failed to load settings.json', e);
  settings = {};
}

function saveSettings() {
  fs.writeFileSync(SETTINGS_PATH, JSON.stringify(settings, null, 2));
}

/**
 * Get a setting
 * @param {string} ownerJid - The paired bot's JID (session owner)
 * @param {string} scope - "bot" for global-per-owner, or a chat JID for per-chat settings
 * @param {string} key - Setting key
 * @param {*} defaultValue
 */
function getSetting(ownerJid, scope, key, defaultValue = false) {
  if (!settings[ownerJid]) return defaultValue;

  // global settings for this owner/bot
  if (scope === 'bot') {
    return settings[ownerJid][key] !== undefined ? settings[ownerJid][key] : defaultValue;
  }

  // per-chat/group under this owner
  if (!settings[ownerJid].chats || !settings[ownerJid].chats[scope]) return defaultValue;
  return settings[ownerJid].chats[scope][key] !== undefined
    ? settings[ownerJid].chats[scope][key]
    : defaultValue;
}

/**
 * Set a setting
 * @param {string} ownerJid - The paired bot's JID (session owner)
 * @param {string} scope - "bot" for global-per-owner, or a chat JID for per-chat settings
 * @param {string} key
 * @param {*} value
 */
function setSetting(ownerJid, scope, key, value) {
  if (!settings[ownerJid]) settings[ownerJid] = { chats: {} };

  if (scope === 'bot') {
    settings[ownerJid][key] = value;
  } else {
    if (!settings[ownerJid].chats[scope]) settings[ownerJid].chats[scope] = {};
    settings[ownerJid].chats[scope][key] = value;
  }

  saveSettings();
}

module.exports = { getSetting, setSetting };