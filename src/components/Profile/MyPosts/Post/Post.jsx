import React from 'react';
import s from './Post.module.css';
const Post = (props) => {



  return (
    <div className={s.item}>
      <img src='https://i.playground.ru/p/-S0_v3P5Rjd4BYzMliXOWg.jpeg'></img>
    { props.message }
      <div>
        <span>   like</span> {props.likesCount}
      </div>
    </div>
  )
}
export default Post