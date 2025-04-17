import Container from "../Container/Container";

type MainType = {
  children: React.ReactNode;
};

const Main: React.FC<MainType> = ({ children }) => {
  return (
    <main className="flex-1 py-8 pb-16 lg:py-16" role="main">
      <Container>
        <div className="flex flex-1 flex-col gap-8 lg:gap-16">{children}</div>
      </Container>
    </main>
  );
};

export default Main;
