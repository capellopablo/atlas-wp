import { gql } from "@apollo/client";
import Link from "next/link";
import logo from "../assets/images/ico_logo.webp";

export default function Header({ siteTitle, siteDescription, menuItems }) {
  return (
    <>
      <header
        class="header_box layout-simple"
        data-apt-e-seen="1"
        data-apt-key="header-l-simple"
      >
        <div class="contents">
          <div class="header">
            <div class="images">
              <Link href="/">
                <div
                  class="logo"
                  style={{
                    backgroundImage: `url(${logo.src})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

Header.fragments = {
  entry: gql`
    fragment HeaderFragment on RootQuery {
      generalSettings {
        title
        description
      }
      primaryMenuItems: menuItems(where: { location: PRIMARY }) {
        nodes {
          id
          uri
          path
          label
          parentId
          cssClasses
          menu {
            node {
              name
            }
          }
        }
      }
    }
  `,
};
