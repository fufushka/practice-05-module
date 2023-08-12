import { getPostDetailsRoute } from 'constants/constants';
import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getPostbyId } from 'services/API';

const SearchPost = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params, setParams] = useSearchParams();
  const query = params.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    const fetchPostsById = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await getPostbyId(query);
        console.log(res);
        setPosts([res]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPostsById();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.currentTarget.elements.search.value.trim('');

    setParams({ query: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="enter Post Id "
          required
          defaultValue={query}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      {error && <p>Some error occured: {error}</p>}
      {posts?.length && (
        <ul>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <Link
                  to={getPostDetailsRoute(post.id)}
                  state={{ from: location }}
                >
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchPost;
