module.exports = {
  api: {
    onlinePlayers: undefined,
    WCStats: undefined
  },
  droid: undefined,
  info: {
    currentWorld: 'WC0',
    droidIGN: undefined,
    realIGN: undefined,
    droidNickedIGN: undefined
  },
  state: {
    disconnected: false,
    onWynncraft: false,
    onWorld: false,
    loadResourcePack: false,
    compassCheck: false
  },
  timer: {
    cancelLoginTimer: undefined,
    cancelCompassTimer: undefined,
    hubTimer: undefined,
    apiInterval: undefined,
    discordStatusInterval: undefined
  },
  sleep: ms => new Promise((resolve, reject) => setTimeout(resolve, ms))
}
