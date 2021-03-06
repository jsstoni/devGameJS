###
Constant values used in DevGame
@lends DEVGAME
###

CONST =
  ###
  String of the current DevGame version
  
  @property {string} VERSION
  @static
  @contant
  ###
  VERSION: '__VERSION__'

  requestAnimationFrame: require './requestAnimationFrame'

  KEY_F1: 112
  KEY_F2: 113
  KEY_F3: 114
  KEY_F4: 115
  KEY_F5: 116
  KEY_F6: 117
  KEY_F7: 118
  KEY_F8: 119
  KEY_F9: 120
  KEY_F10: 121
  KEY_F11: 122
  KEY_F12: 123
  
  KEY_LEFT  : 37
  KEY_UP    : 38
  KEY_RIGHT : 39
  KEY_DOWN  : 40

  PI: Math.PI

  ###
  @property {number} PI_2 - two Pi
  @static
  @contant
  ###
  PI_2: Math.PI * 2

  ###
  @property {number} RAD_TO_DEG - Constant conversion factor for converting radians to degres
  @static
  @contant
  ###
  RAD_TO_DEG: 180 / Math.PI

  ###
  @property {number} DEG_TO_RAD
  @static
  @contant
  ###
  DEG_TO_RAD: Math.PI / 180

  ###
  Constants thet identify shapes

  @static
  @contant
  @property {object} SHAPES
  @property {object} SHAPES.RECT = 0
  @property {object} SHAPES.ARC  = 1
  ###
  SHAPES:
    RECT: 0
    ARC:  1
    CIRCLE: 2

module.exports = CONST
