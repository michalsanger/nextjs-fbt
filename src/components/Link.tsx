import { FC, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export const Link: FC<Props> = ({ href, children }) => {
  return (
    <a className="text-blue-700 underline hover:no-underline" href={href}>
      {children}
    </a>
  );
};
