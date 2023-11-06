import { Route, Routes } from 'react-router-dom';

import PostList from '../pages/postList';
import NotFoundPage from '../pages/notFound';
import PostPage from '../pages/postPage';

const Routing = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
