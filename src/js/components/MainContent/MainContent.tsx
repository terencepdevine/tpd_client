import { motion } from "framer-motion";

type MainContentType = {
  content: string;
};

const MainContent = ({ content }: MainContentType) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.1 }}
      className="flex flex-col gap-4"
    >
      <div
        className="wysiwyg w-full xl:w-2/3"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </motion.div>
  );
};

export default MainContent;
