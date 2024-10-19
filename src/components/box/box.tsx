import {
  useState,
  cloneElement,
  Children,
  ReactElement,
  isValidElement,
} from "react";

type BoxProps = {
  children: React.ReactNode;
};

export const Box: React.FC<BoxProps> = ({ children }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement, { "data-hovered": hovered });
    }
    return child;
  });

  return (
    <button
      className="bg-secondary rounded-md p-2"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {childrenWithProps}
    </button>
  );
};
