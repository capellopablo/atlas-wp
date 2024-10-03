import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function Component(props) {
	const { title: siteTitle, description: siteDescription } =
		props.data.generalSettings;
	const menuItems = props.data.primaryMenuItems.nodes;

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

			<main>
				<EntryHeader title="Welcome to the Faust Scaffold Blueprint" />
				<h3 className="mb-xl ta-center">Build Test</h3>
				<section className={style.cardGrid}>
					<Link
						href="https://faustjs.org"
						target="_blank"
						rel="noopener noreferrer"
						className={style.card}
					>
						<h3>Documentation →</h3>
					</Link>

					<Link
						href="https://my.wpengine.com/atlas#/create/blueprint"
						target="_blank"
						rel="noopener noreferrer"
						className={style.card}
					>
						<h3>Blueprints →</h3>
					</Link>

					<Link
						href="https://wpengine.com/atlas"
						target="_blank"
						rel="noopener noreferrer"
						className={style.card}
					>
						<h3>Deploy →</h3>
					</Link>

					<Link
						href="https://github.com/wpengine/faustjs"
						target="_blank"
						rel="noopener noreferrer"
						className={style.card}
					>
						<h3>Contribute →</h3>
					</Link>
				</section>
			</main>

			<Footer />
		</>
	);
}

Component.query = gql`
	${Header.fragments.entry}
	query GetHomePage {
		...HeaderFragment
	}
`;
