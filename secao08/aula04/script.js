let btn = document.querySelector('button.btn');


let input = document.querySelector('input[name=produto]');


console.log(btn, input)

btn.onclick = function () {
  alert(`Temos o texto: ${input.value}`);
  input.value = ''
}