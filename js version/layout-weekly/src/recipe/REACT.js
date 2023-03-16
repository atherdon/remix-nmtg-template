import React from 'react';
import { paragraphComponent, strongComponent } from 'html-typography-tags';

const RecipeName = ({ title, subtitle }) => {
  const titleHTML = <TitleComponent title={title} />;
  const textHTML = <TextComponent text={subtitle} />;
  const content = (
    <React.Fragment>
      {titleHTML}
      <br />
      {textHTML}
    </React.Fragment>
  );

  const recipeParams = {
    attributes:
      'style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;"',
    content,
  };
  return <ParagraphComponent recipeParams={recipeParams} />;
};

const TextComponent = ({ text }) => {
  // const error = new Errors('contentText');
  // if (text == '') {
  //   error.add('text');
  // }

  return <React.Fragment>{text}</React.Fragment>;
};

const TitleComponent = ({ title }) => {
  // const error = new Errors('contentTitle');
  // if (title == '') {
  //   error.add('title');
  // }

  const string = <span style={{ fontSize: '16px' }}>{title}</span>;

  return <strongComponent string={string} />;
};

const ParagraphComponent = ({ recipeParams }) => {
  return <paragraphComponent attributes={recipeParams.attributes} content={recipeParams.content} />;
};

export default RecipeName;