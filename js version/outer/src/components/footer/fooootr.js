import createUnsubscribe from './unsubscribeLink';
import address from './address';
import description from './description';
import footerHTML from './section';
import SocialPanelComponent from './social';

const FooterComponent = ({ unsubscribe, socialPanel, title }) => {
  const settings = {
    address: address(),
    description: description(),
    unsubscribeLink: createUnsubscribe(unsubscribe),
    socialPanel,
    title,
  };

  const line = footerHTML(settings);

  return line;
};

export default FooterComponent;
