import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { usePostListQuery } from '../../app/providers';
import PostItem from '../../entities/postItem/ui/postRow';
import Loader from '../../entities/loader';
import Error from '../../entities/error';

import './index.scss';

function PostList() {
  const { isError, isLoading, data } = usePostListQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data) {
    return <Error />;
  }

  const Row = ({ index, style }: any) => (
    <div style={style}>
      <PostItem {...data[index]} />
    </div>
  );

  return (
    <div className="postList">
      <h1 className="title">Новые посты</h1>
      <div className="postList_container">
        <AutoSizer>
          {({ height, width }: any) => (
            <FixedSizeList
              className="list"
              height={height}
              itemCount={data.length}
              itemSize={285}
              width={width}>
              {Row}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default PostList;
