type DisplayProps = {
  children: React.ReactNode;
};

const Display: React.FC<DisplayProps> = ({ children }) => {
  return (
    <h1 className="gradient-primary text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
      {children}
    </h1>
  );
};

export default Display;
