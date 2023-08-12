import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { getPostComments } from 'services/API';

const PostComments = () => {
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { postId } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true);
        const res = await getPostComments(postId);
        console.log(res);
        setComments(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComments();
  }, [postId]);
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
      {comments?.length && (
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.id}>
                <h3>Email : {comment.email}</h3>
                <p>Body : {comment.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PostComments;
