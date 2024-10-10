const changeText = document.getElementById('text');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
  setTimeout(() => {
    changeText.textContent = 'ボタンをクリックしました';
  }, 2000);
});