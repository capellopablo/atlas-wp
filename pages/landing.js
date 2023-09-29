import { gql } from "@apollo/client";
import Footer from "../components/footer";
import blocks from '../wp-blocks';
import { WordPressBlocksViewer } from '@faustwp/blocks';
import { flatListToHierarchical } from '@faustwp/core';
import HeaderBlock from "../components/landing/header";
import HeroBlock from "../components/landing/hero";
import BenefitsBlock from "../../wp-blocks/Form";

export default function Landing(props) {
console.log(props)

//   const { title: siteTitle, description: siteDescription } = props.data.generalSettings;
   //const { title, date, author, editorBlocks } = props.data.post;
//   const menuItems = props.data.primaryMenuItems.nodes;
  //const blocks = flatListToHierarchical(editorBlocks, {childrenKey: 'innerBlocks'});

  return (
    <>
    <HeaderBlock />
        <main className="container">
        <HeroBlock props={props} />

        {/* <WordPressBlocksViewer blocks={editorBlocks} /> */}
      </main>

      <Footer />
    </>
  );
}

Landing.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

Landing.query = gql`
  ${blocks.HeroBlock.fragments.entry}
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
        ...HeroBlockFragment
      }
    }
  }
`;
