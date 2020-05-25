document.querySelectorAll('button')
  .forEach(button => button.setAttribute('onclick', 'removerBotao(this)'));

removerBotao = (btn) => document.querySelector('#app').removeChild(btn);