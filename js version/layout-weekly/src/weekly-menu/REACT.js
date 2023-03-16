import { buttonComponent, separatorComponent } from 'nmtg-template-mailerlite-typography';
import { buttonComponent as htmlButtonComponent } from 'html-typography-tags';

import weeklyMenuButtonBlock from './WeeklyMenuButtonBlock';
import RecipesContainerComponent from '../recipe';

const WeeklyMenuContainerComponent = ({ recipes, buttonArr }) => {
  const buttonHTML = htmlButtonComponent(buttonArr);
  const weeklyMenuButtonHTML = weeklyMenuButtonBlock(buttonHTML);
  const recipeContainerHTML = RecipesContainerComponent(recipes);

  const allContent = recipeContainerHTML + weeklyMenuButtonHTML + separatorComponent();

  return <div dangerouslySetInnerHTML={{ __html: allContent }} />;
};

export default WeeklyMenuContainerComponent;

const weeklyMenuButtonBlock = (buttonHTML) => {
  return (
    <table align="center" border="0" bgcolor="#ffffff" className="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
      <tbody>
        <tr>
          <td className="mlContentTableCardTd">
            <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" className="mlContentTable ml-default" style={{ width: '640px', minWidth: '640px' }} width="640">
              <tbody>
                <tr>
                  <td>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style={{ width: '640px', minWidth: '640px' }} className="mlContentTable">
                      <tbody>
                        <tr>
                          <td height="20" className="spacingHeight-20" style={{ lineHeight: '20px', minHeight: '20px' }}></td>
                        </tr>
                      </tbody>
                    </table>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style={{ width: '640px', minWidth: '640px' }} className="mlContentTable">
                      <tbody>
                        <tr>
                          <td align="center" style={{ padding: '0px 40px' }} className="mlContentOuter">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style={{ width: '100%', minWidth: '100%' }}>
                              <tbody>
                                <tr>
                                  <td align="center">
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style={{ width: '100%', minWidth: '100%' }}>
                                      <tbody>
                                        <tr>
                                          <td align="center" className="mlContentButton" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            {buttonHTML}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style={{ width: '640px', minWidth: '640px' }} className="mlContentTable">
                      <tbody>
                        <tr>
                          <td height="20" className="spacingHeight-20" style={{ lineHeight: '20px', minHeight: '20px' }}></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>