import classes from "./PostList.module.css";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData(); // Use the loader data before it's been rendered.

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Starting add some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
