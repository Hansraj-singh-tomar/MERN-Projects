import './post.css'
import {useState} from 'react'
import PropTypes from 'prop-types'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../../dummyData';

function Post({post}){
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] =useState(false);

    console.log(Users);
    console.log(post);

    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    function likeHandler(){
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }
    return (
        <div className="post">
            <div className="postWrapper">
                
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" alt="profile image" src={Users.filter(u => u.id === post.userId)[0].profilePicture} />
                        <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                 
                <div className="postCenter">
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImg' src={PF+post.photo} alt="post"/>
                </div>
                
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img onClick={likeHandler} className='likeIcon' alt='icon' src={`${PF}like.png`}/>
                        <img onClick={likeHandler} className='likeIcon2' alt='icon' src={`${PF}heart.png`}/>
                        <span className='postLikeCounter'>{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
  };

export default Post