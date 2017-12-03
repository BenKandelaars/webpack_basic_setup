import './styles.css';
import './extraStyles.css';
import './moreStyles.css';

function component() {
  var element = document.createElement('div');

  element.innerHTML = ['Hello', 'webpack', ''].join(' ');
  element.classList.add('red');

  return element;
}

document.body.appendChild(component());
