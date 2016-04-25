entities = require '../entities'

module.exports = (id, args=[]) ->
  n = args.length
  
  _entities = entities.filter (entity) -> typeof entity.listen[id] is 'function'

  x = _entities.length-1

  for key in [0..x]
    entity = _entities[key]
    args[n] = key
    args[n+1] = x
    entity.listen[id].apply entity, args