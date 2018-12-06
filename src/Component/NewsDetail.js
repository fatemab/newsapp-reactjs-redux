import React, { Component } from 'react';
import './../App.css';
import HttpService from './../Httpservices/httpConfig';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTitle} from './../Action/action';

class NewsDetail extends Component{
    constructor(props){
        super(props); 
        
        this.state = {
            news : {}
        }

        this.props.getTitle();        
    }

    componentDidMount(){
        this.httpCall();
    }

    httpCall(){
        console.log(this.props.newsTitle);
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=70bf750895c84d9b9a0af5f8e016d78b";
        HttpService(url, function (data) {
            data.articles.forEach(element => {
                if (element.title === this.props.newsTitle) {
                    console.log(element.title);
                    this.setState({
                        news: element
                    }) 
                }
            });                      
        }.bind(this))
    }
   
    render(){     
        let news = this.state.news;   
        return(
            <div>
                <div className="news-detail-container ">
                    <img className="newsImage" src={news.urlToImage} alt="news"></img>  
                    <div className="bottom-left">{news.title}</div>                                              
                </div>  
                <div className="detail-flex-container">
                    <div className="flex-child">                        
                            <p>Author</p>
                            <p className="bold-text">{news.author}</p>                        
                    </div>
                    <div className="flex-child">                        
                            <p>Published Date</p>
                            <p className="bold-text">{news.publishedAt}</p>                        
                    </div>
                    <div className="flex-child">                        
                            <p>Source</p>
                            <img src={require("./../img/Web.png")} alt="source"/>
                    </div>
                </div>

                <div style={{fontWeight: 'bold', fontSize:20, margin:20 }}>
                    {news.title}
                </div>    

                <div style={{margin:20 }}>
                    {news.description}
                </div>
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(NewsDetail);