import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Player from './Player';

class PlayerList extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    renderPlayersList(){
        if (this.props.players.length > 0) {
            return this.props.players.map(player => {
                return (
                    <Player key={player._id} player={player} />
                )
            });
        } else {
            return (
                <div className='item'>
                    <p className='item__message'>No players have been added yet.</p>
                    <p className='item__message'>Add players to begin (up to 15 players allowed)</p>
                </div>
            );
        }
    }
    render(){
        return (
            <div className='player-list'>
                <FlipMove maintainContainerHeight={true}>
                {this.renderPlayersList()}
                </FlipMove>
            </div>
        );
    }
};

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
};

export default PlayerList;