import React from 'react';
import Players from './../../../api/players';

class AddPlayer extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let playerName = e.target.playerName.value;
        if(playerName.length > 0){
            // If the maximum players amount has been reached inform the user and return.
            if(Players.find().count() === 15) {
                alert('You have reached the maximum amount of players allowed (15).');
                e.target.playerName.value = '';
                return;
            }
            // If a player with that name already exists:
            if(Players.exists({name: playerName})){
                alert(`Player ${playerName} already exists in the list.`);
                e.target.playerName.value = '';
                e.target.playerName.focus();
                return;
            }
            e.target.playerName.value = '';
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }    
    render(){
        return (
            <div className='item'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input className='form__input' type="text" name="playerName" placeholder="Enter new player name" />
                    <button className='button form__button'>Add Player</button>
                </form>
            </div>
        );
    }
};

export default AddPlayer;