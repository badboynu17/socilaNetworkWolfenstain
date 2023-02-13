import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'




const MyPosts = (props) => {
    /* let postData = [
         {id: 0, message: 'Hi, how are you?',likesCount:23},
         {id: 1, message: "It's my first post",likesCount:26}
         ]*/
    /* */
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);



    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>

                <button onClick={onAddPost}> Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}
export default MyPosts