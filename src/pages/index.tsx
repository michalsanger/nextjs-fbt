import { InfoBox } from "@/components/InfoBox";
import { Layout } from "@/components/Layout";
import { Link } from "@/components/Link";
import fbt, { fbs } from "fbt";

export default function Example() {
  return (
    <Layout title={fbt("FBT in Next.js", "Title of the index page")}>
      <p className="text-lg mb-8 border-b border-gray-300 pb-4">
        <fbs desc="Paragraph on the main page">
          FBT is a powerfull internationalization framework developed in
          Facebook. The goal of this site is to show how to install, configure
          and use FBT in a Next.js project with Typescript.
        </fbs>
      </p>

      <h2 className="text-2xl mb-2">
        <fbs desc="Heading on a homepage">Install</fbs>
      </h2>
      <p className="text-base mb-4">
        <fbt desc="Paragraph on the main page">
          Please read the{" "}
          <Link href="https://github.com/michalsanger/nextjs-fbt/blob/main/README.md">
            README
          </Link>{" "}
          file of this project.
        </fbt>
      </p>

      <h2 className="text-2xl mb-2">
        <fbs desc="Heading on a homepage">Demo</fbs>
      </h2>
      <p className="text-base mb-4">
        <fbs desc="Paragraph on the main page">
          Use items in navigation menu to see FBT in action. Don&apos;t forget
          to change the language by clicking on the globe icon in upper right
          corner.
        </fbs>
      </p>
      <p className="text-base mb-10">
        <fbt desc="Paragraph on the main page">
          Feel free to improve the current translation or add a new language in
          <Link href="https://crowdin.com/project/nextjs-fbt">
            Crowdin project
          </Link>.
        </fbt>
      </p>

      <InfoBox title={fbs("More info", "Infobox heading")}>
        <Link href="https://github.com/michalsanger/nextjs-fbt/blob/main/src/pages/index.tsx">
          <fbs desc="Text of a link in infobox">Source code of this page</fbs>
        </Link>
        <Link href="https://mrtnzlml.com/til-articles/2021/09/30/fbt-deep-dive">
          <fbs desc="Link on a homepage">Deep dive into FBT</fbs>
        </Link>

        <Link href="https://facebook.github.io/fbt/">
          <fbs desc="Link on a homepage">FBT homepage</fbs>
        </Link>

        <Link href="https://github.com/facebook/fbt">
          <fbs desc="Link on a homepage">FBT source code</fbs>
        </Link>
      </InfoBox>
    </Layout>
  );
}
