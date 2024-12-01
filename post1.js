function copyCode(button) {
  const codeText = button.closest('.code-box').querySelector('code').innerText;
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = codeText;
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // Change the button text to 'Copied✔️' after clicking
  button.innerText = 'Copied✔️';

  // Optional: Reset button text back to 'Copy' after 2 seconds
  setTimeout(() => {
    button.innerText = 'Copy';
  }, 2000);
}
