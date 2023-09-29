import Form from '../../wp-blocks/Form';

export default function HeroBlock({ props }) {
  return (
    <div className="b-hero">
        <div className="b-hero-container">

            <div className="b-hero-block-background">

                <div className="image-desktop">
                    <picture className="c-image">
                        <source media="(max-width: 600px)" srcSet="https://aprende.com/wp-content/uploads/2023/04/Hero_Skincare-specialist_desktop.2-600x233.jpg"/> 
                        <source media="(max-width: 1400px)" srcSet="https://aprende.com/wp-content/uploads/2023/04/Hero_Skincare-specialist_desktop.2-1400x543.jpg"/> 
                        <img width="1920" height="745" src="https://aprende.com/wp-content/uploads/2023/04/Hero_Skincare-specialist_desktop.2.jpg" alt="" decoding="async" srcSet="https://aprende.com/wp-content/uploads/2023/04/Hero_Skincare-specialist_desktop.2.jpg 1920w, https://aprende.com/wp-content/uploads/2023/04/Hero_Skincare-specialist_desktop.2-600x233.jpg 600w, https://aprende.com/wp-content/uploads/2023/04/Hero_Skincare-specialist_desktop.2-16x6.jpg 16w, https://aprende.com/wp-content/uploads/2023/04/Hero_Skincare-specialist_desktop.2-450x175.jpg 450w, https://aprende.com/wp-content/uploads/2023/04/Hero_Skincare-specialist_desktop.2-700x272.jpg 700w, https://aprende.com/wp-content/uploads/2023/04/Hero_Skincare-specialist_desktop.2-1400x543.jpg 1400w" sizes="(max-width: 1920px) 100vw, 1920px"/>
                    </picture>
                </div>
            </div>

            <div className="b-hero-block-foreground">
                <div className="content content__heading">
                    <h1 className="c-heading">
                        Fórmate como Skincare Specialist <br/>
                        <span className="c-heading__red">Emprende en Estados Unidos</span>
                    </h1>
                    <div className="content_subtitle">
                        <p>Aprende a aplicar tratamientos y cosméticos acordes a los tipos de piel, para ofrecer servicios de alta calidad y generar ingresos extra haciendo lo que te apasiona.</p>
                    </div>
                </div>

                <Form/>
            </div>

        </div>
    </div>
  );
}
