require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片的数据
let imagesData = require('../data/imagesData.json');
//取出图片数据得到URL
imagesData = (function imageDataUrl(imageDataArr) {
  for(var i=0;i<imageDataArr.length;i++){
    var oneImageData = imageDataArr[i];

    oneImageData.imageUrl = require('../images/'+oneImageData.fileName);

    imageDataArr[i] = oneImageData;
  }
  return imageDataArr;
})(imagesData);


class AppComponent extends React.Component {
  render() {
    var controllerUnits = [],
        imgFigures = [];
    imagesData.forEach(function (value) {
      imgFigures.push(<ImgFigure data={value}/>);
    });

    return (
     <section className="stage">

       <section className="img-con">
         {imgFigures}
       </section>

       <nav className="controller-nav">
         {controllerUnits}
       </nav>

     </section>
    );
  }
}
var ImgFigure = React.createClass({
    render:function () {
      return(
        <figure>

          <img src={this.props.data.imageUrl} alt={this.props.data.title} />
          <figcaption>
            <h2>{this.props.data.title}</h2>
          </figcaption>
        </figure>
      )
    }
});
AppComponent.defaultProps = {
};

export default AppComponent;
