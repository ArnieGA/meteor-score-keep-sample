import React from 'react';
import Players from './../../imports/api/players';

import TitleBar from './components/default/TitleBar';
import AddPlayer from './components/app-specific/AddPlayer';
import PlayerList from './components/app-specific/PlayerList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        
        let players = Players.sortPlayers({score:'d', name:'a'});
        players = Players.calcPositions(players);
        return (
            <div>
                <TitleBar title='Score Keep' subtitle='created by Arnie González'/>
                <div className='wrapper'>
                    <PlayerList players={players} />
                    <AddPlayer />
                </div>
            </div>
        );
    }
};

export default App;