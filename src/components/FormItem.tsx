import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
};

export const FormItem: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  label,
  children,
  className,
}) => {
  return (
    <div className={clsx("w-40", className)}>
      <label
        htmlFor={(children as any).props.name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
};
