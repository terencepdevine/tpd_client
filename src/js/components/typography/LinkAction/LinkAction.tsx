import { Link } from "react-router-dom";

type LinkActionProps = {
  children: React.ReactNode;
  to: string;
  target?: string;
  className?: string;
};

const LinkAction: React.FC<LinkActionProps> = ({
  children,
  to,
  className,
  target,
}) => {
  return (
    <Link
      to={to}
      target={target}
      className={`gradient-action gradient-action-hover font-header flex items-center gap-2 text-xl leading-[125%] font-bold hover:underline lg:text-2xl ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkAction;
