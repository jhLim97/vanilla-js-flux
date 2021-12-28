import _ from 'lodash';
import './common.scss';
import heartImage from './assets/heart.png';
import { sum } from './math';

function component() {
  const element = document.createElement('div');
  const imageElement = document.createElement('img');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');
  element.innerHTML += `Babel test => 10 + 20 = ${sum(10, 20)}`;

  imageElement.src = heartImage;
  element.appendChild(imageElement);

  return element;
}

const root = document.querySelector("#root");
root.appendChild(component());