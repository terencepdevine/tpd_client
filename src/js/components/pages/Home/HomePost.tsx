import Headline from "../../typography/Headline/Headline";
import { Link } from "react-router-dom";
import Button from "../../typography/Button/Button";
import { Squares2X2Icon } from "@heroicons/react/20/solid";

const HomePost = ({ post }) => {
  return (
    <div className="flex flex-col gap-4">
      <Headline>Latest Post</Headline>
      <h3>
        <Link
          to={`/posts/${post.slug}`}
          className="gradient-primary gradient-primary-hover text-3xl"
        >
          {post.title.rendered}
        </Link>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
      <div className="flex">
        <Button to="/posts">
          <Squares2X2Icon className="h-5 w-5 fill-amber-300" />
          View All
        </Button>
      </div>
    </div>
  );
};

export default HomePost;
