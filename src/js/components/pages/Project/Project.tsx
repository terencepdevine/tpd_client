import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ProjectType } from "../../../types/ProjectType";

import { getProject } from "../../../utilities/apiClient";

import { ArrowDownTrayIcon, LinkIcon } from "@heroicons/react/24/solid";

import Main from "../../Main/Main";
import MainHeader from "../../MainHeader/MainHeader";
import Loading from "../../Loading/Loading";
import Tag from "../../Tag/Tag";
import Motion from "../../Motion/Motion";
import LinkAction from "../../typography/LinkAction/LinkAction";

const Project = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<ProjectType>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProject(slug as string);
        setProject(projectData);
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
            <MainHeader.Title>{project.title.rendered}</MainHeader.Title>
            <MainHeader.Secondary>
              {project.excerpt.rendered}
            </MainHeader.Secondary>
          </MainHeader>
          <div className="flex flex-col items-start gap-8 md:flex-row md:gap-16">
            <Motion
              className="flex flex-col gap-8 md:w-1/2 lg:w-3/5"
              delay={0.1}
            >
              {project.tool_data[0] && (
                <div className="flex flex-wrap gap-4">
                  {project.tool_data?.map((tool) => (
                    <Tag key={tool.id}>{tool.name}</Tag>
                  ))}
                </div>
              )}
              <div
                className="wysiwyg"
                dangerouslySetInnerHTML={{ __html: project.content.rendered }}
              ></div>
              <div className="flex flex-col gap-4">
                {project.acf?.website_url !== "" && (
                  <LinkAction to={project.acf.website_url} target="_blank">
                    <LinkIcon className="h-6 w-6 fill-amber-400" />
                    {project.title.rendered}
                  </LinkAction>
                )}

                {project.acf?.figma_url !== "" && (
                  <LinkAction to={project.acf.figma_url} target="_blank">
                    <ArrowDownTrayIcon className="h-6 w-6 fill-amber-400" />
                    Figma Download
                  </LinkAction>
                )}
              </div>
            </Motion>
            <div className="relative h-auto flex-1 justify-start">
              {project.acf?.mockup_desktop?.url && (
                <Motion delay={0.2}>
                  <div className="gradient-border-blue">
                    <img
                      src={project.acf.mockup_desktop.url}
                      alt=""
                      className="block"
                    />
                  </div>
                </Motion>
              )}

              {project.acf?.mockup_mobile?.url && (
                <Motion
                  className="z20 absolute -right-2 -bottom-2 w-[30%] lg:-right-4 lg:-bottom-4"
                  delay={0.3}
                >
                  <div className="gradient-border-blue">
                    <img
                      src={project.acf.mockup_mobile.url}
                      className="block"
                      alt=""
                    />
                  </div>
                </Motion>
              )}
            </div>
          </div>
        </>
      )}
    </Main>
  );
};

export default Project;
