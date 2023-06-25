import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import GlobeAltIcon from "@heroicons/react/24/outline/GlobeAltIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { LanguageMenu, languages } from "./LanguageMenu";
import fbt from "fbt";

export const Menu: FC = () => {
  const { route, locale } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: fbt("Home", "Navigation item"), href: "/" },
    { name: fbt("Parameters", "Navigation item"), href: "/parameters" },
    { name: fbt("Plurals", "Navigation item"), href: "/plurals" },
  ];

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="border-b border-gray-700">
          <div className="flex h-16 items-center justify-between px-4 sm:px-0">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={clsx(
                        "rounded-md px-3 py-2 text-sm font-medium",
                        item.href === route
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <LanguageMenu className="relative ml-3 hidden md:block" />

            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <div
                className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">
                  <fbt desc="Screen reader hint">Open main menu</fbt>
                </span>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="border-b border-gray-700">
            <div className="space-y-1 px-2 py-3 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    "block rounded-md px-3 py-2 text-base font-medium",
                    item.href === route
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-b border-gray-700">
            <div className="space-y-1 px-2 pt-3 sm:px-3">
              <div className="flex flex-row items-center justify-between">
                <div className="text-white font-bold">
                  <fbt desc="Mobile language menu heading">Languages</fbt>
                </div>
                <GlobeAltIcon
                  className="block h-8 w-8 text-gray-300 hover:text-white"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="space-y-1 px-2 py-3 sm:px-3">
              {languages.map((lang) => (
                <Link
                  key={lang.name}
                  href={route}
                  locale={lang.locale}
                  className={clsx(
                    "block rounded-md px-3 py-2 text-base font-medium",
                    lang.locale === locale
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  )}
                >
                  {lang.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
