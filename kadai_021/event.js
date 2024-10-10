const button = document.getElementById('btn');

button.addEventListener('click', () => {
  console.log(document.text)
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});