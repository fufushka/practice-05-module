import { HOME_ROUTE, getPostCommentsRoute } from 'constants/constants';
import PostComments from 'pages/PostComments/PostComments';
import React, { useEffect, useRef, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { getPostbyId } from 'services/API';

const PostDetails = () => {
  const { postId } = useParams();
  const [postDetails, setpostDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? HOME_ROUTE);
  const backLinkHref = backLinkRef.current;

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setIsLoading(true);
        const res = await getPostbyId(postId);
        console.log(res);
        setpostDetails(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPostDetails();
  }, [postId]);

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
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
      {postDetails !== null && (
        <div>
          <h1>{postDetails.title}</h1>
          <h2>PostId : {postDetails.id}</h2>
          <p>Content : {postDetails.body}</p>
        </div>
      )}
      <div>
        <Link to={getPostCommentsRoute(postId)}>Comments</Link>
      </div>
      <Routes>
        <Route path="comments" element={<PostComments />} />
      </Routes>
    </div>
  );
};

export default PostDetails;
