import React from "react";

const DisplayUsers = ({ posts, loading }) => {
  
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      {posts.map((post) => (
        <div key={post.id} className="product-view">
          {post.title}
        </div>
      ))}
    </section>
  );
};

export default DisplayUsers;
