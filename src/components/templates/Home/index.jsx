import './styles.css';


import { Component } from 'react';
import { loadPost } from '../../../utils/load-post';
import { Post } from '../../Post';
import { Button } from '../../button';
import { Textinput } from '../../Input';

class Home extends Component {
  state = {
    posts: [],
    allPost: [],
    page: 0,
    postPerPage: 3,
    searchValue: ''

  };


  async componentDidMount() {
    await this.loadposts()
  }

  loadposts = async () => {
    const { page, postPerPage } = this.state
    const postsAndPhotos = await loadPost()
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPost: postsAndPhotos
    })
  }

  loadMorePost = () => {
    const {
      page,
      postPerPage,
      allPost,
      posts
    } = this.state

    const Nextpage = page + postPerPage
    const nextPost = allPost.slice(Nextpage, Nextpage + postPerPage)
    posts.push(...nextPost);

    this.setState({ posts, page: Nextpage })
  }
  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postPerPage, allPost, searchValue } = this.state;

    const noMorePosts = page + postPerPage >= allPost.length

    const FilteredPosts = !!searchValue ? allPost.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    }) : posts

    return (
      <section className="container">

        {!!searchValue && (
          <>
            <h3>Serach Value: {searchValue}</h3>
          </>
        )}

        <Textinput searchValue={searchValue} handleChange={this.handleChange} />
        
        {FilteredPosts.length > 0 && (
          <Post posts={FilteredPosts} />
        )}

        {FilteredPosts.length === 0 && (
          <h3>Não existe Post Com Esse Nome</h3>
        )}

        {!searchValue && (
          <>
            <Button text="Next" onClick={this.loadMorePost}
              disabled={noMorePosts} />
          </>
        )}

      </section>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default Home;
