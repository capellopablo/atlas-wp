import { gql } from '@apollo/client';
import React from 'react';

export default function HeroBlock(props) {
  const attributes = props.attributes;

  console.log(attributes)

  return (
    <p
      className={attributes?.cssClassName}
      dangerouslySetInnerHTML={{ __html: attributes }}></p>
  );
}

HeroBlock.fragments = {
  entry: gql`
    fragment HeroBlockFragment on HeroBlock {
      attributes {
        content
        cssClassName
      }
    }
  `,
  key: `HeroBlockFragment`,
};
