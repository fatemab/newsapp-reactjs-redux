import React, { Component } from 'react';
import './../App.css';
import HttpService from './../Httpservices/httpConfig';
import { Link } from 'react-router-dom';
import dummy from './../img/dummy.jpeg';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setTitle} from './../Action/action';

const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=70bf750895c84d9b9a0af5f8e016d78b";
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsData: []
        }   
    }

    componentDidMount(){
        this.httpCall();
    }

    httpCall(){
        let news = [];
        HttpService(url, (data)=> {
            data.articles.forEach(element => {
                if (element.source.name === this.props.match.params.name) {
                    news.push(element);
                }
            });

            this.setState({
                newsData: news
            })
        })
    }

    setTitl = (title)=>{
        this.props.setTitle(title);//e.target.onerror = null; e.target.src={dummy}
    }

    render() {
        let list = this.state.newsData.map((item, index) =>
            <Link to="/newsDetail" key={item.title} className="newsContainer" onClick={()=>this.setTitl(item.title)}>                
                    <img className="newsImage" src={item.urlToImage} 
                    onError={(e)=>{e.target.src={dummy}; e.target.onerror=null; }} alt="news"></img>
                    <div className="bottom-left">{item.title}</div>
                    <div className="top-right">
                        <img src={require('./../img/Author.png')} alt="author"></img>
                        {item.author}
                    </div>                
            </Link>
        )
        return (
            <div className="news-grid-container">
                {list}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        todoList : state.passTitleReducer.newsTitle
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({setTitle}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(News);