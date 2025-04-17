import { PencilSquareIcon } from "@heroicons/react/24/solid";

import LinkAction from "../typography/LinkAction/LinkAction";
import Motion from "../Motion/Motion";

const PostsSidebar = () => {
  return (
    <Motion
      delay={0.1}
      className="flex w-full flex-col gap-4 lg:w-[280px] xl:w-[380px]"
    >
      <div className="flex items-center gap-2">
        <PencilSquareIcon className="h-6 w-6 fill-sky-400" />
        <h3 className="gradient-primary text-2xl">About Me</h3>
      </div>
      <div className="p-sm">
        <p>
          I'm a <strong>Full-Stack Developer</strong> with nearly 20 years of
          experience, specializing in <strong>WordPress</strong> and{" "}
          <strong>React.js</strong>. I built{" "}
          <a href="https://optionstxt.app/" target="_blank">
            Optionstxt.app
          </a>{" "}
          for Ableton users and was Lead Web Developer at{" "}
          <a href="https://ligcreative.com/" target="_blank">
            Ligature Creative
          </a>
          .
        </p>
        <p>
          Outside of work, I enjoy music, baking, tabletop games, and adventures
          with my Shar Pei, Leroy.
        </p>
        {/* <LinkAction to="/about">Learn More</LinkAction> */}
      </div>
    </Motion>
  );
};

export default PostsSidebar;
