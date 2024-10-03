import { gql } from "@apollo/client";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import blocks from '../wp-blocks';
import { WordPressBlocksViewer } from '@faustwp/blocks';
export default function Component(props) {

  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } = props.data.generalSettings;
  const { title, editorBlocks } = props.data.post;
  const menuItems = props.data.primaryMenuItems.nodes;


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
  ${blocks.AprendeBlocksHero.fragments.entry}
  ${blocks.AprendeBlocksDiploma.fragments.entry}
  ${blocks.AprendeBlocksBenefits.fragments.entry}
  ${blocks.AprendeBlocksStatistics.fragments.entry}
  ${blocks.AprendeBlocksJumbotron.fragments.entry}
  ${blocks.AprendeBlocksText.fragments.entry}
  ${blocks.AprendeBlocksAccordion.fragments.entry}
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
        ...AprendeBlocksHeroFragment
        ...AprendeBlocksDiplomaFragment
        ...AprendeBlocksBenefitsFragment
        ...AprendeBlocksStatisticsFragment
        ...AprendeBlocksJumbotronFragment
        ...AprendeBlocksTextFragment
        ...AprendeBlocksAccordionFragment
      }
    }
    ...HeaderFragment
  }
`;
