import React from 'react';
import {dumpLogs} from './Utils';
//import './BlogCard.css';
import classes from './BlogCard.module.css';
 const BlogCard = (props) =>{
   /* state={
        likeCount:0
    }
   onLikebtn = () =>{
        this.setState((prevState,prevProps) =>{
            return{likeCount: prevState.likeCount+1}
        })
    */

    
        dumpLogs(props);
return(
    <div className={classes.BlogCard}>
    <h4>{props.title}</h4>   
    <p>{props.Blocknumber}</p>
    <p>{props.Data}</p>
    <p>Like Count:<span className={classes.LikeCount}>{props.likeCount}</span></p>
    <button onClick={props.onLikeClick}>Like</button>
    </div>
)
    
 
}
export default BlogCard;
