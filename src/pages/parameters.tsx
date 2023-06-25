import { FormItem } from "@/components/FormItem";
import { Input } from "@/components/Input";
import { Layout } from "@/components/Layout";
import fbt, { GenderConst, IntlVariations, fbs } from "fbt";
import { useState } from "react";
import InformationCircleIcon from "@heroicons/react/20/solid/InformationCircleIcon";
import { Link } from "@/components/Link";
import { InfoBox } from "@/components/InfoBox";

export default function Plurals() {
  const [itemName, setItemName] = useState("BFG");
  const [customerName, setCustomerName] = useState("John");
  const [customerSex, setCustomerSex] = useState(GenderConst.MALE_SINGULAR);

  return (
    <Layout title={fbt("Parameters", "Title of the parameters page")}>
      <h2 className="text-2xl mb-4">
        <fbs desc="Subtitle in Parameters page">Generic parameters</fbs>
      </h2>
      <p className="mb-10 bg-gray-100 p-10 rounded-md text-2xl relative">
        <fbt desc="Item added into cart info message">
          The item &quot;<fbt:param name="itemName">
            {itemName.trim()}
          </fbt:param>&quot; was added into shopping cart
        </fbt>
      </p>

      <FormItem
        label={fbs("Item name", "Label for item name input")}
        className="mb-20"
      >
        <Input
          name="itemName"
          placeholder={fbs(
            "Give the item some name...",
            "Placeholder in item name input"
          )}
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </FormItem>

      <h2 className="text-2xl mb-4">
        <fbs desc="Subtitle in Parameters page">
          Name parameters with pronoun
        </fbs>
      </h2>
      <p className="mb-10 bg-gray-100 p-10 rounded-md text-2xl relative">
        <fbt desc="Customer awaiting package info message">
          <fbt:name name="customerName" gender={IntlVariations.GENDER_MALE}>
            {customerName.trim()}
          </fbt:name>{" "}
          is awaiting <fbt:pronoun type="possessive" gender={customerSex} />{" "}
          package
        </fbt>
      </p>
      <div className="flex flex-row mb-10 gap-10">
        <FormItem label={fbs("Customer name", "Label for customer name input")}>
          <Input
            name="customerName"
            placeholder={fbs(
              "Give the customer some name...",
              "Placeholder in customer name input"
            )}
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </FormItem>

        <FormItem label={fbs("Sex", "Label for customer sex select")}>
          <select
            id="customerSex"
            name="customerSex"
            className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={GenderConst.MALE_SINGULAR}
            onChange={(e) => setCustomerSex(Number(e.target.value))}
          >
            <option value={GenderConst.MALE_SINGULAR}>
              <fbs desc="Option in customer sex select">Male</fbs>
            </option>
            <option value={GenderConst.FEMALE_SINGULAR}>
              <fbs desc="Option in customer sex select">Female</fbs>
            </option>
            <option value={GenderConst.UNKNOWN_SINGULAR}>
              <fbs desc="Option in customer sex select">Unknown</fbs>
            </option>
          </select>
        </FormItem>
      </div>

      <InfoBox title={fbs("More info about this feature", "Infobox heading")}>
        <Link href="https://github.com/michalsanger/nextjs-fbt/blob/main/src/pages/parameters.tsx">
          <fbs desc="Text of a link in infobox">Source code of this page</fbs>
        </Link>

        <fbt desc="Text of a link in infobox">
          Official docs about{" "}
          <Link href="https://facebook.github.io/fbt/docs/params/">Params</Link>
          {" and "}
          <Link href="https://facebook.github.io/fbt/docs/pronouns/">
            Pronouns
          </Link>
        </fbt>

        <fbt desc="Links to other article in infobox">
          <Link href="https://mrtnzlml.com/til-articles/2021/09/30/fbt-deep-dive#generic-parameters">
            Generic parameters
          </Link>
          {", "}
          <Link href="https://mrtnzlml.com/til-articles/2021/09/30/fbt-deep-dive#name-parameters">
            Name parameters
          </Link>
          {" and "}
          <Link href="https://mrtnzlml.com/til-articles/2021/09/30/fbt-deep-dive#pronouns">
            Pronouns
          </Link>
          {" in FBT deep dive article"}
        </fbt>
      </InfoBox>
    </Layout>
  );
}
