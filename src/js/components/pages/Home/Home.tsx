import { useState, useEffect } from "react";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import Button from "../../typography/Button/Button";
import Display from "../../typography/Display/Display";
import HomePost from "./HomePost";
import HomeProjects from "./HomeProjects";
import { getLatestPost, getProjects } from "../../../utilities/apiClient";
import Loading from "../../Loading/Loading";
import Motion from "../../Motion/Motion";
import Container from "../../Container/Container";

const Home = () => {
  const [latestPost, setLatestPost] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latestPostData = await getLatestPost();
        const projectsData = await getProjects(3);

        setLatestPost(latestPostData);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error loading data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-1 py-16">
      <Container>
        <div className="flex w-full flex-1 flex-col items-center gap-16 lg:flex-row">
          <Motion className="flex w-full flex-1 flex-col gap-4 lg:pb-16">
            <Display>
              Full-Stack
              <br />
              Web Developer
            </Display>
            <div className="p-lg">
              <p>
                Specializing in <strong>WordPress</strong> &amp;{" "}
                <strong>React</strong>
              </p>
            </div>
            <div className="flex gap-4 pt-2">
              {/* <Button
                icon={<UserIcon className="h-5 w-5 fill-amber-300" />}
                to="/about"
              >
                About Me
              </Button> */}
              <Button
                icon={
                  <ComputerDesktopIcon className="h-5 w-5 fill-amber-300" />
                }
                to="/projects"
              >
                My Work
              </Button>
            </div>
          </Motion>

          <div className="flex w-full flex-col-reverse gap-16 lg:w-[500px] lg:flex-col xl:w-[650px]">
            {loading ? (
              <Loading />
            ) : (
              <>
                {latestPost && (
                  <Motion delay={0.1}>
                    <HomePost post={latestPost} />
                  </Motion>
                )}
                {projects.length > 0 && (
                  <Motion>
                    <HomeProjects projects={projects} />
                  </Motion>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
