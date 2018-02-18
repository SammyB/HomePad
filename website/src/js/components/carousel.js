import {lory} from 'lory.js';
import {assign} from 'lodash';

/**
 * Carousel create method
 * @param  {Object} options       options for setup
 * @return {Object}               returns Function that creates a carousel
 */
export default (options) => {
  options = options || {};
  let domClass = options.className || '.carousel';
  let domNode = document.querySelector(domClass);
  let base = {
    infinite: 1,
    classNameFrame: 'carousel__inner',
    classNameSlideContainer: 'carousel__slides',
    classNamePrevCtrl: 'carousel__prev',
    classNameNextCtrl: 'carousel__next'
  };
  if(domNode) {
    lory(domNode, assign({}, base, options));
  }
};
