import { Link } from "react-router-dom";

import LinkAction from "../typography/LinkAction/LinkAction";
import { WPPostType } from "../../types/WPPostType";

const PostBlock = ({ post }: { post: WPPostType }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="gradient-primary gradient-primary-hover text-3xl lg:text-4xl xl:text-5xl">
        <Link to={`/posts/${post.slug}`}>{post.title.rendered}</Link>
      </h2>
      <div className="flex flex-col gap-2">
        {post.excerpt && (
          <div
            className="p-lg"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          ></div>
        )}
        <LinkAction to="/" className="self-start">
          Read More
        </LinkAction>
      </div>
    </div>
  );
};

export default PostBlock;
