import _ from 'lodash';
import { sum } from './math';

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');
  element.innerHTML += `Babel test => 10 + 20 = ${sum(10, 20)}`;

  return element;
}

const root = document.querySelector("#root");
root.appendChild(component());