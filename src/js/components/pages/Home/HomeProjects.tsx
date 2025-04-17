import { Squares2X2Icon } from "@heroicons/react/20/solid";
import ProjectBlock from "../../ProjectBlock/ProjectBlock";
import Button from "../../typography/Button/Button";
import Headline from "../../typography/Headline/Headline";
import { ProjectType } from "../../../types/ProjectType";

type HomeProjectsType = {
  projects: ProjectType[];
};

const HomeProjects: React.FC<HomeProjectsType> = ({ projects }) => {
  return (
    <div className="flex flex-col gap-4">
      <Headline>Projects</Headline>
      <div className="w-[calc(100% + 32px)] no-scrollbar mr-[-16px] ml-[-16px] flex overflow-x-auto lg:mr-0 lg:ml-0 lg:w-full">
        <div className="flex gap-4 px-4 lg:w-full lg:px-0">
          {projects?.map((project) => (
            <ProjectBlock
              to={`/projects/${project.slug}`}
              platform="WordPress"
              name={project.title.rendered}
              image={project._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
            />
          ))}
        </div>
      </div>
      <div className="flex">
        <Button
          to="/projects"
          icon={<Squares2X2Icon className="h-5 w-5 fill-amber-300" />}
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default HomeProjects;
