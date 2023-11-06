import { useParams } from 'react-router-dom';

import { usePostDetailsQuery } from '../../app/providers';
import PostDetails from '../../entities/postItem/ui/postCard';
import Loader from '../../entities/loader';
import Error from '../../entities/error';

function PostPage() {
  const { postId } = useParams();
  const { isLoading, isError, data } = usePostDetailsQuery(postId ?? '');

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return data ? <PostDetails {...data} /> : <Error />;
}

export default PostPage;
