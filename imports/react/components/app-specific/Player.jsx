import React from 'react';
import PropTypes from 'prop-types';
import Players from './../../../api/players';

class Player extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        let itemClassName = `item item--position-${this.props.player.rank}`;
        return (
            <div className={itemClassName}>
                <div className='player'>
                    <div>
                        <h3 className='player__name'>{`${this.props.player.name}`}</h3>
                        <p className='player__stats'>{`${this.props.player.position} place - Current score: ${this.props.player.score} point(s)`}</p>
                    </div>
                    <div className='player__actions'>
                        <button className='button button--round' onClick={()=>{Players.addPoint(this.props.player._id);}}>+1</button>
                        <button className='button button--round' onClick={()=>{Players.subtractPoint(this.props.player._id);}}>-1</button>
                        <button className='button button--round' onClick={()=>{Players.removePlayer(this.props.player._id);}}>X</button>
                    </div>
                </div>
            </div>
        );
    }
};

Player.propTypes = {
    player: PropTypes.object.isRequired
};

export default Player;