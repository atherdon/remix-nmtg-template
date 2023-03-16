import { pre_tags, post_tags } from './head/tags';

function HeadComponent(props) {
  const {
    blobHead,
    // bodyStyle,
    // font1,
    // font2,
    // meta,
    // ifStyle,
    // mediaStyle,
    // style,
    // style2,
    //------
    title,
  } = props;

  return (
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      {pre_tags()}
      <title>{title}</title>
      <meta name="robots" content="noindex, nofollow" />
      {post_tags()}
    </head>
  );
  // {blobHead}
}

export default HeadComponent;