import { renderSubHeading } from 'nmtg-template-mailerlite-typography';

const SubTitleMainBlock = ({ subTitleText }) => {
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
                          <td align="center" style={{ padding: '0px 40px' }} className="mlContentOuter">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                              <tbody>
                                <tr>
                                  {renderSubHeading({ subTitleText })}
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
                          <td height="10" className="spacingHeight-10" style={{ lineHeight: '10px', minHeight: '10px' }}></td>
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
  );
};

export default SubTitleMainBlock;



