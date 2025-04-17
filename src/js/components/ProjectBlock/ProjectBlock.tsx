import { Link } from "react-router-dom";

type ProjectBlockType = {
  name: string;
  to: string;
  platform?: "WordPress" | "React";
  image?: { source: string };
};

const ProjectBlock: React.FC<ProjectBlockType> = ({ name, to, image }) => {
  return (
    <div className="w-[260px] rounded-xl bg-gradient-to-b from-sky-300 to-sky-500 p-0.5 lg:w-1/3">
      <div className="to-sky-975 overflow-hidden rounded-xl bg-gradient-to-b from-sky-800">
        <Link
          to={to}
          className="relative flex flex-col gap-2 bg-cover p-4 pt-12"
        >
          <div className="relative z-10 flex flex-col gap-2">
            <h3 className="gradient-secondary text-2xl">{name}</h3>
          </div>
          <div className="absolute inset-0 z-0 h-full w-full">
            <div className="absolute inset-0 z-30 bg-gradient-to-b from-sky-950/0 via-50% to-sky-950/90 to-75%"></div>
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-sky-500/40 to-sky-500/40"></div>
            <div
              className="absolute inset-0 z-10 bg-cover grayscale"
              style={image ? { backgroundImage: `url(${image})` } : {}}
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectBlock;
