import { getPostDetailsRoute } from 'constants/constants';
import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { getPosts } from 'services/API';

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const res = await getPosts();
        console.log(res);
        setPosts(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
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
                <Link to={getPostDetailsRoute(post.id)}>
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

export default Home;
