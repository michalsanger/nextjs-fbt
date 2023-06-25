import GlobeAltIcon from "@heroicons/react/24/outline/GlobeAltIcon";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, HTMLAttributes, useState } from "react";
import fbt from "fbt";

export const languages = [
  { name: "English", locale: "en" },
  { name: "Español", locale: "es" },
  { name: "Česky", locale: "cs" },
];

export const LanguageMenu: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const { route, locale } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <div
        className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-0 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">
          <fbt desc="Screen reader hint">Open language menu</fbt>
        </span>
        <GlobeAltIcon
          className="block h-8 w-8 text-gray-300 hover:text-white"
          aria-hidden="true"
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {languages.map((lang) => (
            <Link
              key={lang.locale}
              href={route}
              locale={lang.locale}
              className={clsx(
                "block px-4 py-2 text-sm text-gray-700",
                locale === lang.locale && "bg-gray-100"
              )}
            >
              {lang.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
