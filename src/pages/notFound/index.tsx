import { useNavigate } from 'react-router-dom';

import './index.scss';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <span className="notFound_header">404</span>
      <p className="notFound_text">Этой страницы не существует</p>
      <button
        className="button"
        onClick={() => {
          navigate('/post-list');
        }}>
        На главную
      </button>
    </div>
  );
}

export default NotFoundPage;
