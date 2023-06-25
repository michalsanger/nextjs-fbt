import clsx from "clsx";
import { FC, HTMLAttributes, HTMLInputTypeAttribute } from "react";

type Props = {
  name: string;
  id?: string;
  placeholder?: string;
  value: string;
  onChange: (e: any) => void;
  type?: HTMLInputTypeAttribute;
};

export const Input: FC<Props & HTMLAttributes<HTMLInputElement>> = ({
  name,
  id,
  placeholder,
  value,
  onChange,
  className,
  type,
}) => {
  return (
    <input
      type={type ?? "text"}
      name={name}
      id={id ?? name}
      className={clsx(
        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300",
        "placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
        className
      )}
      placeholder={placeholder}
      autoComplete="off"
      value={value}
      onChange={onChange}
    />
  );
};
