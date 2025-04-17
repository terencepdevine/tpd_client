type TagType = {
  children: React.ReactNode;
};

const Tag: React.FC<TagType> = ({ children }) => {
  return <span className="tag gradient-border-blue">{children}</span>;
};

export default Tag;
