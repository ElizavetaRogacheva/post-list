import { useNavigate } from 'react-router-dom';

import { Post } from '../../types';

import './index.scss';

function PostDetails(data: Post) {
  const navigate = useNavigate();

  return (
    <div className="postPage">
      <div className="postPage_header">
        <button
          className="button postPage_btn"
          onClick={() => {
            navigate('/');
          }}>
          Назад
        </button>
      </div>
      <h1 className="title">{data.title}</h1>
      <p className="postPage_text">{data.body}</p>
    </div>
  );
}

export default PostDetails;
