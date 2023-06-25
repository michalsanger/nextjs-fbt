import { Layout } from "@/components/Layout";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon";
import fbt, { fbs } from "fbt";
import { useState } from "react";
import { InfoBox } from "@/components/InfoBox";
import { Link } from "@/components/Link";

export default function Plurals() {
  const [itemsCounter, setItemsCounter] = useState(0);

  return (
    <Layout title={fbt("Plurals", "Title of the plurals page")}>
      <p className="mb-10 bg-gray-100 p-10 rounded-md text-2xl relative">
        {itemsCounter === 0 ? (
          fbt("There is no item in the cart", "Empty cart info")
        ) : (
          <fbt desc="Items in a cart info">
            There is
            <fbt:plural count={itemsCounter} showCount="yes" many="items">
              item
            </fbt:plural>{" "}
            in your shopping cart
          </fbt>
        )}

        {itemsCounter !== 0 && (
          <TrashIcon
            className="h-10 w-10 absolute bottom-2 right-1 cursor-pointer text-gray-300 hover:text-gray-700"
            onClick={() => setItemsCounter(0)}
          />
        )}
      </p>

      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10"
        onClick={() => setItemsCounter(itemsCounter + 1)}
      >
        <PlusCircleIcon className="-ml-0.5 h-5 w-5" />
        <fbt desc="Add to cart button">Add to cart</fbt>
      </button>

      <InfoBox title={fbs("More info", "Infobox heading")}>
        <Link href="https://github.com/michalsanger/nextjs-fbt/blob/main/src/pages/plurals.tsx">
          <fbs desc="Text of a link in infobox">Source code of this page</fbs>
        </Link>

        <fbt desc="Links to other article in infobox">
          <Link href="https://mrtnzlml.com/til-articles/2021/09/30/fbt-deep-dive#plurals">
            Plurals
          </Link>{" "}
          in FBT deep dive article
        </fbt>

        <fbt desc="Text of a link in infobox">
          Official docs about{" "}
          <Link href="https://facebook.github.io/fbt/docs/plurals">
            Plurals
          </Link>
        </fbt>
      </InfoBox>
    </Layout>
  );
}
