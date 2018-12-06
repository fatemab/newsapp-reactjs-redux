/*import React, { Component } from 'react';
import Header from './Component/Header';
import ChooseNewspaper from './Component/ChooseNewspaper';
import News from './Component/News';
import NewsDetail from './Component/NewsDetail';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Choose NewsPaper",  
      comp: "ChooseNewspaper",
      news: ""    
    }
  }

  selectNewspaper = (name)=>{
    this.setState({
      title:name,
      comp: "News"
    })
  }

  openDetail = (news)=>{
    this.setState({
      title: news.title,
      comp: "NewsDetail",
      news: news
    })
  }

  backHandle = () =>{
    this.setState({
      title: "Choose NewsPaper",
      comp: "ChooseNewspaper"
   })  
  }

  getDisplayComponent() {
    let componentDisplay;    
    switch(this.state.comp){
      case "ChooseNewspaper": componentDisplay = <ChooseNewspaper newsPaper={this.selectNewspaper} />
                              break;

      case "News": componentDisplay = <News paperName={this.state.title} openDetail={this.openDetail}/>;
                    break;    
                    
      case "NewsDetail": componentDisplay = <NewsDetail news={this.state.news}/>;
                          break;
    }

    return componentDisplay;
  }

  render() {   
    let componentDisplay;    
    switch(this.state.comp){
      case "ChooseNewspaper": componentDisplay = <ChooseNewspaper newsPaper={this.selectNewspaper} />
                              break;

      case "News": componentDisplay = <News paperName={this.state.title} openDetail={this.openDetail}/>;
                    break;    
                    
      case "NewsDetail": componentDisplay = <NewsDetail news={this.state.news}/>;
                          break;
    }

    return (
      <div>
        <Header title={this.state.title} back={this.backHandle}/>
        {componentDisplay}
      </div>
    );
  }
}

export default App;
*/