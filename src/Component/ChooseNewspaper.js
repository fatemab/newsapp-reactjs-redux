import React, { Component } from 'react';
import './../App.css';
import HttpService from './../Httpservices/httpConfig';
import {Link} from 'react-router-dom';

const newsPaperIcons = {
    "CNN": require("./../img/cnn.png"),
    "The New York Times": require("./../img/newyorkTimes.png"),
    "The Washington Post": require("./../img/washingtonPost.png"),
    "Fox News": require("./../img/foxnews.png")
  };

export default class ChooseNewspaper extends Component{
    constructor(props){
        super(props);
        this.state = {
            newspaperData: []
        }               
    }

    componentDidMount(){
        this.httpCall();
    }

    componentWillReceiveProps(){
        console.log(this.props.location.pathname);
    }

    httpCall(){
        let newsPaperName = [], newspapers = [];
        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=70bf750895c84d9b9a0af5f8e016d78b';

        HttpService(url, data => {
          data.articles.forEach(function (value) {
            var name = value.source.name;
            if (newsPaperName.indexOf(name) === -1) {
              newsPaperName.push(name);
              var newspaper = {};
              newspaper.name = name;
              newspaper.icon = newsPaperIcons[name] ? newsPaperIcons[name] : require("./../img/dummy.jpeg");
              newspapers.push(newspaper)
            }
          })

          this.setState({
            newspaperData: newspapers
          })
        });
    }


    render(){
        let newpaperList = this.state.newspaperData.map((item,index)=>         
        <Link to={`news/${item.name}`}  key={item.name}>
            <figure>
                <img src={item.icon} alt="newspaper icon"></img>
                <figcaption>{item.name}</figcaption>
            </figure>
        </Link>
        )
        
        return(        
                <div className="flex-container">
                   {newpaperList}
                </div>        
        )
    }
}