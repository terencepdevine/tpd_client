import { NavLink } from "react-router-dom";

type NavMainItemProps = {
  children: React.ReactNode;
  to?: string;
  download?: string;
  icon?: React.ReactNode;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const NavMainItem: React.FC<NavMainItemProps> = ({
  children,
  to,
  download,
  icon,
  target,
  onClick,
}) => {
  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 font-header text-xl lg:text-2xl font-bold ${
      isActive ? "gradient-primary" : "gradient-secondary"
    } `;
  const spanClassName =
    "font-header flex items-center gap-2 text-xl lg:text-2xl";

  return (
    <li>
      {download ? (
        <a
          href={download}
          download
          className="flex flex-row-reverse items-center gap-2 font-bold lg:flex-row"
          target={target}
          onClick={onClick}
        >
          <span className={spanClassName}>{children}</span>
          {icon}
        </a>
      ) : to ? (
        <NavLink
          to={to}
          target={target}
          onClick={onClick}
          className={linkClassName}
        >
          <span className={spanClassName}>{children}</span>
          {icon}
        </NavLink>
      ) : (
        <>
          <span className="gradient-secondary font-header flex items-center gap-2 text-xl lg:text-2xl">
            {children}
          </span>
          {icon}
        </>
      )}
    </li>
  );
};

export default NavMainItem;
