import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchPosts } from "../redux/postsSlice";

function PostsList() {
  const dispatch = useDispatch();

  const { items, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let content;

  if (status === "loading") {
    content = <p>Loading posts from JSON Placeholder API....</p>;
  } else if (status === "succeeded") {
    content = (
      <ul>
        {items.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  } else if (status === "failed") {
    content = <p>Fel på hämtning av API:et: {error}</p>;
  }

  return (
    <div>
      <h2>JSON Posts</h2>
      {content}
    </div>
  );
}

export default PostsList;
