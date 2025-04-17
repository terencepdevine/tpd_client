type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container flex justify-between px-4 lg:items-center lg:px-8 xl:px-16">
      {children}
    </div>
  );
};

export default Container;
