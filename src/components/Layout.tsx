import { FC, ReactNode } from "react";
import Head from "next/head";
import { Menu } from "./Menu";

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>FBT experiment</title>
      </Head>

      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <Menu />

          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                {title}
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="bg-white min-h-[15rem] rounded-xl shadow p-4">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
