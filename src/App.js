import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Blogcard from './BlogCard';
import {isArrayEmpty} from './Utils';
class App extends Component {
  state ={
    showBlogs:true,
    blogarr:[
      {id:1,
      title:'Blockchain',
      Blocknumber:'Blocknumber 1',
      Data:'hii this is block 1',
      likeCount:0
      },
      {
        id:2,
        title:'Blockchain',
        Blocknumber:'Blocknumber 2',
        Data:'hii this is block 2',
        likeCount:0
      },
      {id:3,
        title:'Blockchain',
        Blocknumber:'Blocknumber 3',
        Data:'hii this is block 3',
        likeCount:0
      }
    ]
  }
   
  onLikeClick =(pos)=>{
    const updatedBlogList = this.state.blogarr
    const   updatedBlogObj = updatedBlogList[pos]
    updatedBlogObj.likeCount = updatedBlogObj.likeCount+1
    updatedBlogList[pos]=updatedBlogObj
    this.setState({blogarr:updatedBlogList})

  }
  
  
  hideevents=()=>{
    //let updatedshowBlogs= !this.state.showBlogs
    this.setState((prevState,prevProps)=>{
     return{showBlogs: !prevState.showBlogs}
    });
    console.log(this.showBlogs)
  }
 render(){
   console.log('Render called')
   console.log(this.state)
   const blogmap= isArrayEmpty(this.state.blogarr) ? [] : (this.state.blogarr).map((item,pos) =>{ 
  console.log(item);
  return(
  <Blogcard key={pos}
  className="Blog"
  id={item.id}
  title={item.title}
  Blocknumber={item.Blocknumber}
  likeCount={item.likeCount}
  Data={item.Data}
  onLikeClick={()=>this.onLikeClick(pos)}
  />
  
 )
  })  
  return ( 
  <div className ="App">
  <button  onClick={this.hideevents} >{this.state.showBlogs ? 'Hide List':'Show List'}</button>
  <br></br>
   {this.state.showBlogs?blogmap : null}
    </div>
  );
  }

}

export default App;
