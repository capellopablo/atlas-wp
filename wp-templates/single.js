import { gql } from "@apollo/client";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import Header from "../components/header";
import blocks from '../wp-blocks';
import { WordPressBlocksViewer } from '@faustwp/blocks';
import { flatListToHierarchical } from '@faustwp/core';
export default function Component(props) {

  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } = props.data.generalSettings;
  const { title, date, author, editorBlocks } = props.data.post;
  const menuItems = props.data.primaryMenuItems.nodes;

  //const blocks = flatListToHierarchical(editorBlocks, {childrenKey: 'innerBlocks'});

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
        <EntryHeader title={title} date={date} author={author.node.name} />
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
  ${blocks.UbCallToActionBlock.fragments.entry}
  ${blocks.CoreParagraph.fragments.entry}
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
          name
        }
      }
      editorBlocks {
        name
        __typename
        renderedHtml
        id: clientId
        parentClientId
        ...UbCallToActionBlockFragment
        ...CoreParagraphFragment
      }
    }
    ...HeaderFragment
  }
`;
