// components/PostList.js
import Link from "next/link";

const PostList = ({ posts }: { posts: any[] }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {/* Use a div or a span as the immediate child */}
          <Link href={`/posts/${post.slug}`}>
            <span>{post.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
