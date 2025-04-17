type HeadlineProps = {
  children: React.ReactNode;
};

const Headline: React.FC<HeadlineProps> = ({ children }) => {
  return (
    <h2 className="gradient-secondary text-3xl lg:text-4xl">{children}</h2>
  );
};

export default Headline;
