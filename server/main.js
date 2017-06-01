import {Meteor} from 'meteor/meteor';
import Players from './../imports/api/players';

Meteor.startup(()=>{
    Players.allow({
        insert: function(){ return true; },
        remove: function(){ return true; },
        update: function(){ return true; }
    });    
});