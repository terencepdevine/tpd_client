import { useEffect, useState } from "react";

import { getPosts } from "../../../utilities/apiClient";
import { PostType } from "../../../types/PostType";

import Motion from "../../Motion/Motion";
import Loading from "../../Loading/Loading";
import MainHeader from "../../MainHeader/MainHeader";
import Main from "../../Main/Main";
import PostBlock from "../../PostBlock/PostBlock";
import PostsSidebar from "../../PostsSidebar/PostsSidebar";

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData: PostType[] = await getPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error loading data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Main>
      <MainHeader>
        <MainHeader.Title>Blog</MainHeader.Title>
        <MainHeader.Secondary>
          My thoughts and writings on code and other stuff
        </MainHeader.Secondary>
      </MainHeader>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-16 lg:flex-row">
          <Motion className="flex flex-1 flex-col gap-16">
            {posts.map((post) => (
              <PostBlock post={post} key={post.id} />
            ))}
          </Motion>
          <PostsSidebar />
        </div>
      )}
    </Main>
  );
};

export default Posts;
