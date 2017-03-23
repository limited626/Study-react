require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片的数据
var imagesDate = require('../data/imagesData.json');
//取出图片数据得到URL
imagesDate = (function imageDataUrl(imageDataArr) {
  for(var i=0;i<imageDataArr.length;i++){
    var oneImageData = imageDataArr[i];

    oneImageData.imageUrl = require('../images/'+oneImageData.fileName);

    imageDataArr[i] = oneImageData;
  }
  return imageDataArr;
})(imagesDate);


class AppComponent extends React.Component {
  render() {
    return (
     <section className="stage">

       <section className="img-con">

       </section>

       <nav className="controller-nav">

       </nav>

     </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
