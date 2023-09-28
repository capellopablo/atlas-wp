import { gql } from '@apollo/client';

export default function UbCallToActionBlock(props) {
    const {
      ubCallToActionHeadlineText,
      ubCtaContentText,
      url,
      ubCtaButtonText,
      addNofollow,
      openInNewTab,
    } = props.attributes;

    console.log('UbCallToActionBlock', props);

    return (
      <div className={props.className}>
        <div
          className="ub_call_to_action">
          <div className="ub_call_to_action_headline">
            <p className="ub_call_to_action_headline_text">
              {ubCallToActionHeadlineText}
            </p>
          </div>
          <div className="ub_call_to_action_content">
            <p className="ub_cta_content_text">
              {ubCtaContentText}
            </p>
          </div>
          <div className="ub_call_to_action_button">
            <a
              href={url}
              target={openInNewTab ? '_blank' : '_self'}
              rel={`${addNofollow ? 'nofollow ' : ''}noopener noreferrer`}
              className={`wp-block-button ub_cta_button`}>

              <p className="ub_cta_button_text">
                {ubCtaButtonText}
              </p>

            </a>
          </div>
        </div>
      </div>
    );
  }
  
  UbCallToActionBlock.displayName = 'UbCallToActionBlock';

  UbCallToActionBlock.fragments = {
    key: `UbCallToActionBlockFragment`,
    entry: gql`
      fragment UbCallToActionBlockFragment on UbCallToActionBlock {
        attributes {
          ctaBackgroundColor
          ctaBorderSize
          ctaBorderColor
          headFontSize
          headColor
          headAlign
          ubCallToActionHeadlineText
          contentFontSize
          contentColor
          contentAlign
          ubCtaContentText
          buttonColor
          buttonWidth
          url
          buttonTextColor
          buttonFontSize
          ubCtaButtonText
          addNofollow
          openInNewTab
        }
      }
    `,
  };