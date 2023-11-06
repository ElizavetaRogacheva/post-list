import { useNavigate } from 'react-router-dom';

import { Post } from '../../types';

import './index.scss';

const PostItem: React.FC<Post> = function (post: Post) {
  const navigate = useNavigate();
  const onClickMoreBtn = function (): void {
    navigate(`/post/${post.id}`);
  };
  return (
    <div className="postContainer">
      <div className="postItem">
        <div className="postItem_blockTop">
          <span className="postItem_number">{post.id}</span>
        </div>
        <div className="postItem_blockBottom">
          <h2 className="postItem_title">{post.title}</h2>
          <p className="postItem_text">{post.body}</p>
          <button className="button postItem_btn" onClick={onClickMoreBtn}>
            Просмотр
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
