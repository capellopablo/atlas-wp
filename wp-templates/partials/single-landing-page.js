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
  const settings = props.data.siteSettings;
  const { title, content, date } = props.data.landingPage;

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
        <EntryHeader title={title} date={date} />
        <div dangerouslySetInnerHTML={{ __html: content }} />

        {source && (
          <div>
            <hr />
            <strong>UTM Source</strong>
            <ul>
              <li>utm_source: {source}</li>
            </ul>
          </div>
        )}
        <hr />

        <div>
          <strong>GraphQL from Back with Context Post ID</strong>
          <ul>
            <li>public_url: {settings.public_url}</li>
            <li>ajax_url: {settings.ajax_url}</li>
            <li>update_metadata_nonce: {settings.update_metadata_nonce}</li>
            <li>apply_coupon_nonce: {settings.apply_coupon_nonce}</li>
            <li>remove_coupon_nonce: {settings.remove_coupon_nonce}</li>
            <li>get_cart_nonce: {settings.get_cart_nonce}</li>
            <li>get_coupons_nonce: {settings.get_coupons_nonce}</li>
            <li>post_type: {settings.post_type}</li>
          </ul>
        </div>
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
    siteSettings(id: $databaseId) {
      public_url
      ajax_url
      update_metadata_nonce
      apply_coupon_nonce
      remove_coupon_nonce
      get_cart_nonce
      get_coupons_nonce
      post_type
    }
    ...HeaderFragment
  }
`;
