DevGame = require './core'

DevGame.prototype.animate       = require './animate'
DevGame.prototype.clearEntities = require './clearEntities'
DevGame.prototype.delta         = require './delta'
DevGame.prototype.emit          = require './emit'
DevGame.prototype.sortLayer     = require './sortLayer'
DevGame.Entity                  = require './entity'

module.exports = DevGame
