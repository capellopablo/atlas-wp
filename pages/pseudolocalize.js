import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { getNextStaticProps } from "@faustwp/core";

/**
 * Next.js file based page example with Faust helpers.
 */
export default function Page() {
  const { data } = useQuery(Page.query);

  const { title: siteTitle, description: siteDescription } =
    data.generalSettings;
  const settings = data.siteSettings;
  const menuItems = data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title="Next.js Page Example" />
        <p>Next.js pages are still supported!</p>

        <ul>
          <li>public_url: {settings.public_url}</li>
          <li>ajax_url: {settings.ajax_url}</li>
          <li>update_metadata_nonce: {settings.update_metadata_nonce}</li>
          <li>apply_coupon_nonce: {settings.apply_coupon_nonce}</li>
          <li>remove_coupon_nonce: {settings.remove_coupon_nonce}</li>
          <li>get_cart_nonce: {settings.get_cart_nonce}</li>
          <li>get_coupons_nonce: {settings.get_coupons_nonce}</li>
        </ul>
      </main>

      <Footer />
    </>
  );
}

Page.query = gql`
  ${Header.fragments.entry}
  query GetSiteSettings {
    ...HeaderFragment
    siteSettings {
      public_url
      ajax_url
      update_metadata_nonce
      apply_coupon_nonce
      remove_coupon_nonce
      get_cart_nonce
      get_coupons_nonce
    }
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page,
  });
}
