import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

const Players = new Mongo.Collection('players');

Players.addPoint = (id)=>{
  Players.update(
    {_id:id},
    {$inc:{score: 1}}
  );
};

Players.calcPositions = (players)=>{
  let rank = 1;
  return players.map((player, index)=>{
    if(index !== 0 && players[index-1].score > player.score)
      rank++;
    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    }
  });
};

Players.getFieldNames = (collection) => {
  if(collection.length === 0) return false;
  return Object.keys(collection[0]);
};

Players.exists = (query)=>{
  return Players.find(query).fetch().length > 0 ? true : false;
};

Players.removePlayer = (id)=>{
  Players.remove({_id:id});
};

Players.sortPlayers = (query)=>{
  let players = Players.find().fetch();
  let existingFields = Players.getFieldNames(players);
  if(!existingFields) return [];
  if(Object.keys(query).length === 0) return players;
  var sortObject = {
    ...query
  };
  // Sanitize the object first:
  // Remove keys from sortObject if they don't exist in 
  // the collection:
  Object.keys(sortObject).forEach((key)=>{
    if(Object.keys(sortObject).length > 0 && existingFields.indexOf(key) === -1){
      delete sortObject[key];
    }    
  });
  // Transform any sort value to it's proper mongo api equivalent
  Object.keys(sortObject).forEach((sortKey)=>{
    let value = sortObject[sortKey];
    let valueType = typeof sortObject[sortKey];
    if(valueType === 'string'){
      switch(value){
        case 'd':
        case 'desc':
        case 'descending':
          sortObject[sortKey] = -1;
          break;
        case 'a':
        case 'asc':
        case 'ascending':
        default:
          sortObject[sortKey] = 1;
          break;
      }
    }
  });
  // Return the sanitized query object
  if(Object.keys(sortObject).length > 0) players = Players.find({},{sort: sortObject}).fetch();
  return players;
};

Players.subtractPoint = (id)=>{
  Players.update(
    {_id:id},
    {$inc:{score:-1}}
  );
};

Players.updatePlayer = (id, updates)=>{
  Players.update(
    {_id:id},
    {$set:updates}
  );
};


export default Players;