import { gql } from "@apollo/client";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import EntryHeader from "../../components/entry-header";
import Footer from "../../components/footer";
import Header from "../../components/header";
export default function Component(props) {
  // Loading state for previews

  console.log("props: ", props);
  const searchParams = useSearchParams();
  const source = searchParams.get("utm_source");

  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const { title, content, date /* author */ } = props.data.landingPage;

  return (
    <>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader
          title={title}
          date={date} /* author={author.node.name} */
        />
        <div dangerouslySetInnerHTML={{ __html: content }} />

        <strong>searchParams: {source}</strong>
      </main>

      <Footer />
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql`
  ${Header.fragments.entry}
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    landingPage(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      editorBlocks {
        name
      }
    }
    ...HeaderFragment
  }
`;
