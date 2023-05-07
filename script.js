// Get references to HTML elements
const textarea = document.getElementById('text-encrypt');
const btnEncrypt = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');

// Event listener for encryption button
btnEncrypt.addEventListener('click', () => {
  // Get the text from the textarea and apply substitutions
  let text = textarea.value.toLowerCase()
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Update the display with the encrypted text
  if (text !== "") {
    const boxMsg = document.getElementById('box-msg');
    boxMsg.textContent = text;
    const boxDesign = document.getElementById('box-design');
    boxDesign.remove();
    const boxTitle = document.getElementById('box-title');
    boxTitle.textContent = 'Your message is:';
    boxMsg.style.fontSize = '20px';
    boxTitle.style.fontSize = '40px';
    copyBtn.style.display = 'block';
    copyBtn.disabled = false;
  } else {
    alert("Add a valid message");
    copyBtn.style.display = 'none';
    const boxTitle = document.getElementById('box-title');
    boxTitle.textContent = 'Your last message was:';
  }
});

// Event listener for decryption button
decryptBtn.addEventListener('click', () => {
  // Get the text from the textarea and reverse the substitutions
  let text = textarea.value.toLowerCase()
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  // Update the display with the decrypted text
  const boxMsg = document.getElementById('box-msg');
  boxMsg.textContent = text;
  const boxDesign = document.getElementById('box-design');
  boxDesign.remove();
  const boxTitle = document.getElementById('box-title');
  boxTitle.textContent = 'Your message is:';
  boxMsg.style.fontSize = '20px';
  boxTitle.style.fontSize = '40px';
});

// Event listener for copy button
copyBtn.addEventListener('click', () => {
  const boxMsg = document.getElementById('box-msg');
  let textCopy = boxMsg.textContent; // use textContent instead of value
  navigator.clipboard.writeText(textCopy);
  alert("Your message has been copied.");
});
