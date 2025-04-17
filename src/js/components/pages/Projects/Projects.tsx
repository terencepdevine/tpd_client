import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../../../utilities/apiClient";
import Loading from "../../Loading/Loading";
import { ProjectType } from "../../../types/ProjectType";
import MainHeader from "../../MainHeader/MainHeader";
import Main from "../../Main/Main";
import Motion from "../../Motion/Motion";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData: ProjectType[] = await getProjects();
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
    <Main>
      <MainHeader>
        <MainHeader.Title>Work</MainHeader.Title>
        <MainHeader.Secondary>
          Cool websites I've built and / or designed
        </MainHeader.Secondary>
      </MainHeader>
      {loading ? (
        <Loading />
      ) : (
        <Motion className="flex flex-col gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="gradient-primary text-3xl lg:text-5xl">
                  <Link to={`/projects/${project.slug}`}>
                    {project.title.rendered}
                  </Link>
                </h2>
                {project.excerpt?.rendered && <p>{project.excerpt.rendered}</p>}
              </div>
            </div>
          ))}
        </Motion>
      )}
    </Main>
  );
};

export default Projects;
