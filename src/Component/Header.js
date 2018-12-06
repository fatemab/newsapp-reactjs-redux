import React, { Component } from 'react';
import  './../App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTitle} from './../Action/action';

class Header extends Component{
    constructor(props){
        super(props);    
    }

    getHeaderTitle = () => {
        this.props.getTitle();        
        let page = this.props.location.pathname.split('/')    
        switch(page[1]){
            case "":
                return "Choose NewsPaper";
            case "news":
                return page[2];
            case "newsDetail":
                return this.props.newsTitle;                
            default:
                return "[APP_NAME]"
        }
    }

    render(){    
        return(
            <header> 
                <button onClick={this.props.history.goBack}>back</button>                              
                <h1>{this.getHeaderTitle()}</h1>
            </header>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        newsTitle : state.passTitleReducer.newsTitle
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({getTitle}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);