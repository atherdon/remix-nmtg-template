// Address Component:

import { paragraphComponent } from 'html-typography-tags';

const Address = () => {
  const addressParams = {
    attributes: `style="margin-top: 0px; margin-bottom: 0px;"`,
    content: 'Dallas,&nbsp;Texas United States',
  };
  return <>{paragraphComponent(addressParams)}</>;
};

export default Address;


// Description Component:
import { paragraphComponent } from 'html-typography-tags';

const Description = () => {
  const descriptionParams = {
    attributes: `style="margin-top: 0px; margin-bottom: 0px;"`,
    content:
      'You received this email because you signed up on our website or made a purchase from us.',
  };

  return <>{paragraphComponent(descriptionParams)}</>;
};

export default Description;



// Social Panel Component:

const SocialPanelComponent = ({ socials }) => {
    let socialPanel = '';
  
    socials.forEach((social) => {
      let { href, src } = social;
  
      socialPanel += `
        <td align="center" width="24" style="padding: 0px 5px;" ng-show="slink.link != ''">
          <a href="${href}" target="_self">
            <img width="24" alt="facebook" src="${src}" style="display: block;" border="0">
          </a>
        </td>
      `;
    });
  
    return <>{socialPanel}</>;
  };
  
  export default SocialPanelComponent;

  

//   Unsubscribe Component:

import { linkComponent } from 'html-typography-tags';
import { spanHeadingBlock } from 'nmtg-template-mailerlite-typography';

const CreateUnsubscribe = ({ href }) => {
  const linkParams = {
    attributes: `href="${href}" style="color: #111111; text-decoration: underline;"`,
    content: spanHeadingBlock(`Unsubscribe`),
  };
  return <>{linkComponent(linkParams)}</>;
};

export default CreateUnsubscribe;


