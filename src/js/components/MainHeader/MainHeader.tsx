import Date from "../Date/Date";
import Motion from "../Motion/Motion";

type MainHeaderType = {
  children: React.ReactNode;
};

const MainHeader: React.FC<MainHeaderType> & {
  Title: React.FC<{ children: React.ReactNode }>;
  Secondary: React.FC<{ children: React.ReactNode }>;
  Date: React.FC<{ children: string }>;
} = ({ children }) => {
  return <Motion className="flex flex-col gap-2">{children}</Motion>;
};

MainHeader.Title = ({ children }) => (
  <h1 className="gradient-primary text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
    {children}
  </h1>
);

MainHeader.Secondary = ({ children }) => (
  <div className="p-lg">
    <p>{children}</p>
  </div>
);

MainHeader.Date = ({ children }) => <Date date={children} />;

export default MainHeader;
