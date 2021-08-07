import './styles.css';

import { useCallback, useEffect, useState } from 'react';
import { loadPost } from '../../utils/load-post';
import { Post } from '../../components/Post';
import { Button } from '../../components/button';
import { TextInput } from '../../components/Input';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [page, setPage] = useState(0);
  const [postPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postPerPage >= allPost.length;

  const FilteredPosts = !searchValue
    ? allPost.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleLoadposts = useCallback(async (page, postPerPage) => {
    const postsAndPhotos = await loadPost();
    setPosts(postsAndPhotos.slice(page, postPerPage));
    setAllPost(postsAndPhotos);
  }, []);

  useEffect(() => {
    console.log('oi');
    handleLoadposts(0, postPerPage);
  }, [handleLoadposts, postPerPage]);

  const loadMorePost = () => {
    const Nextpage = page + postPerPage;
    const nextPost = allPost.slice(Nextpage, Nextpage + postPerPage);
    posts.push(...nextPost);

    setPosts(posts);
    setPage(Nextpage);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      {!!searchValue && (
        <>
          <h3>Serach Value: {searchValue}</h3>
        </>
      )}
      <TextInput searchValue={searchValue} handleChange={handleChange} />
      {FilteredPosts.length > 0 && <Post posts={FilteredPosts} />}
      {FilteredPosts.length === 0 && <h3>Não existe Post Com Esse Nome</h3>}
      {!searchValue && (
        <>
          <Button text="Next" onClick={loadMorePost} disabled={noMorePosts} />
        </>
      )}
    </section>
  );
};

export default Home;
