import { gql } from "@apollo/client";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import blocks from '../wp-blocks';
import { WordPressBlocksViewer } from '@faustwp/blocks';
import Header from "../components/header";

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const { title, content, editorBlocks } = props.data.page;

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

      <main>
        <EntryHeader title={title} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <WordPressBlocksViewer blocks={editorBlocks} />

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
  ${blocks.AprendeBlocksAccordion.fragments.entry}
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
       editorBlocks {
        name
        __typename
        renderedHtml
        id: clientId
        parentClientId
        ...AprendeBlocksAccordionFragment
      }
}
    ...HeaderFragment
  }
`;