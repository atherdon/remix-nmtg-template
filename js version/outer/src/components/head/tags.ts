import blobHead from './blobHead';
import bodyStyle from './bodyStyle';
import meta from './metaTags';
import { ifStyle, mediaStyle, font1, font2 } from './ifStyle';

import style from './style';
import style2 from './style2';


// Head params
// const HeadParams = {
//   blobHead: blobHead(),
//   bodyStyle: bodyStyle(),
//   font1: font1(),
//   font2: font2(),
//   headMetaTags: headMetaTags(),
//   ifStyle: ifStyle(),
//   mediaStyle: mediaStyle(),
//   style: style(),
//   style2: style2(),

// };


const pre_tags = () => {
return meta() + font1() + ifStyle() + 
      
      style() + 
      bodyStyle() + 
      mediaStyle() +

      meta() + font1() +
      ifStyle() + 
      
      style() + 
      bodyStyle() + 
      mediaStyle();
  
}

const post_tags = () => {
  return style2() + font2() + blobHead();
}


export { pre_tags, post_tags } 


// function searchForErrors(params:any) {
//   // const error = new Errors('headComponent');
//   const {
//     blobHead,
//     bodyStyle,
//     font1,
//     font2,
//     meta,
//     ifStyle,
//     mediaStyle,
//     style,
//     style2,
//     title,
//   } = params;

//   if (blobHead == '') {
//     headError.add('blobHead');
//   }
//   if (bodyStyle == '') {
//     headError.add('bodyStyle');
//   }
//   if (mediaStyle == '') {
//     headError.add('mediaStyle');
//   }
//   if (style == '') {
//     headError.add('style');
//   }
//   if (style2 == '') {
//     headError.add('style2');
//   }
//   if (font1 == '') {
//     headError.add('font1');
//   }
//   if (font2 == '') {
//     headError.add('font2');
//   }
//   if (meta == '') {
//     headError.add('meta');
//   }
//   if (ifStyle == '') {
//     headError.add('ifStyle');
//   }
//   if (title == '') {
//     headError.add('title');
//   }
// }
