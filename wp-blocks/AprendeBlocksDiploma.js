import { gql } from "@apollo/client";

export default function AprendeBlocksDiploma(props) {
  const attributes = props.attributes;

  return (
    <section
      className="block b-diploma-v2 l-standard bg-white has-bg-image bg-image-center"
      id=""
      data-apt-e-seen="1"
      data-apt-key="b-diploma-v2-l-standard"
    >
      <div className="row">
        <div className="b-diploma-v2_diploma col-4 col-md-2 col-lg-2">
          <picture className="c-image image-mask">
            <source
              media="(max-width: 500px)"
              srcSet="https://qa.aprende.dev/wp-content/uploads/2021/11/Diploma_Finanzas.jpg"
            />{" "}
            <source
              media="(max-width: 16px)"
              srcSet="https://qa.aprende.dev/wp-content/uploads/2021/11/Diploma_Finanzas-16x22.jpg"
            />
            <img
              width="500"
              height="701"
              src="https://qa.aprende.dev/wp-content/uploads/2021/11/Diploma_Finanzas.jpg"
              className="img-fluid no-lazy"
              alt="Diploma Finanzas para Emprendedores"
              decoding="async"
              srcSet="https://qa.aprende.dev/wp-content/uploads/2021/11/Diploma_Finanzas.jpg 500w, https://qa.aprende.dev/wp-content/uploads/2021/11/Diploma_Finanzas-16x22.jpg 16w"
              sizes="(max-width: 500px) 100vw, 500px"
            />
          </picture>
        </div>
        <div className="b-diploma-v2_background d-none d-block-md col-md-4">
          <picture className="c-image image-mask">
            <source
              media="(max-width: 700px)"
              srcSet="https://qa.aprende.dev/wp-content/uploads/2021/11/Finanzas.jpg"
            />{" "}
            <source
              media="(max-width: 16px)"
              srcSet="https://qa.aprende.dev/wp-content/uploads/2021/11/Finanzas-16x11.jpg"
            />
            <img
              width="700"
              height="500"
              src="https://qa.aprende.dev/wp-content/uploads/2021/11/Finanzas.jpg"
              className="img-fluid no-lazy"
              alt="Finanzas para Emprendedores"
              decoding="async"
              srcSet="https://qa.aprende.dev/wp-content/uploads/2021/11/Finanzas.jpg 700w, https://qa.aprende.dev/wp-content/uploads/2021/11/Finanzas-16x11.jpg 16w"
              sizes="(max-width: 700px) 100vw, 700px"
            />
          </picture>
        </div>
        <div className="b-diploma-v2_text col-4 col-md-3 col-lg-4">
          <h2
            className="c-heading h2"
            dangerouslySetInnerHTML={{ __html: attributes.title }}
          />

          <div className="b-diploma-v2_content">
            <p className="p1   "></p>
            <p>
              Al finalizar tus estudios, te otorgamos un certificado en formato
              digital que avala los conocimientos adquiridos, ayudándote a
              destacar en el mercado laboral y abriéndote un mundo de
              posibilidades
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

AprendeBlocksDiploma.displayName = 'AprendeBlocksDiploma';

AprendeBlocksDiploma.fragments = {
  entry: gql`
    fragment AprendeBlocksDiplomaFragment on AprendeBlocksDiploma {
      attributes {
        title
        className
      }
    }
  `,
  key: `AprendeBlocksDiplomaFragment`,
};
