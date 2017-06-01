import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    renderSubtitle(){
        if(this.props.subtitle){
            return (<small>{this.props.subtitle}</small>);
        }
    }
    render(){
        return (
            <div className='title-bar'>
                <div className='wrapper'>
                    <h1>
                        {this.props.title}
                        {this.renderSubtitle()}
                    </h1>
                </div>
            </div>
        );
    }
};

TitleBar.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};
TitleBar.defaultProps = {
    title: 'Default title'
};
