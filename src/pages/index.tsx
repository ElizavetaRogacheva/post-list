import { Route, Routes } from 'react-router-dom';

import PostList from '../pages/postList';
import NotFoundPage from '../pages/notFound';
import PostPage from '../pages/postPage';

const Routing = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/post-list" element={<PostList />} />
        <Route path="/post-list/*" element={<NotFoundPage />} />
        <Route path="/post-list/post/:postId" element={<PostPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
