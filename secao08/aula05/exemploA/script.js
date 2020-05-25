let btn = document.querySelector('button');

btn.onclick = () => {
  let textElement = '';
  let inputValue = document.querySelector('input').value;

  let pElement = document.createElement('p');

  pElement.setAttribute('class', 'classe-p')

  if (inputValue !== '') {
    textElement = document.createTextNode(inputValue);
  } else {
    textElement = document.createTextNode('Veio vazio');
  }

  pElement.appendChild(textElement);

  let divElement = document.querySelector('#app');

  divElement.appendChild(pElement);

  document.querySelector('input').value = '';

}