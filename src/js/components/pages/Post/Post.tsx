import { useEffect, useState } from "react";
import { getPost } from "../../../utilities/apiClient";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import MainHeader from "../../MainHeader/MainHeader";
import Main from "../../Main/Main";
import MainContent from "../../MainContent/MainContent";
import { WPPostType } from "../../../types/WPPostType";

const Post = () => {
  const { slug } = useParams<string>();
  const [post, setPost] = useState<WPPostType>({} as WPPostType);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getPost(slug as string);
        setPost(postData);
      } catch (error) {
        console.error("Error loading data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <Main>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MainHeader>
            <MainHeader.Title>{post.title.rendered}</MainHeader.Title>
            <MainHeader.Date>{post.date}</MainHeader.Date>
          </MainHeader>
          <MainContent content={post.content.rendered} />
        </>
      )}
    </Main>
  );
};

export default Post;
