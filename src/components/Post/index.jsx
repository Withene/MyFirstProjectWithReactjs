import { PostCard } from '../PostCard';
import P from 'prop-types';
import './style.css';

export const Post = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
      ))}
    </div>
  );
};
Post.defaultProps = {
  posts: [],
};

Post.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
