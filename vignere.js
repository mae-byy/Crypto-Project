// Vigenère Cipher Encryption Function
function vigenereEncrypt(plaintext, key) {
  const A = 'A'.charCodeAt(0);
  plaintext = plaintext.toUpperCase();
  key = key.toUpperCase();

  let result = '';
  for (let i = 0, j = 0; i < plaintext.length; i++) {
    const c = plaintext.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      const p = c - A;
      const k = key.charCodeAt(j % key.length) - A;
      result += String.fromCharCode(((p + k) % 26) + A);
      j++;
    } else {
      result += plaintext[i];
    }
  }
  return result;
}

// Vigenère Cipher Decryption Function
function vigenereDecrypt(ciphertext, key) {
  const A = 'A'.charCodeAt(0);
  ciphertext = ciphertext.toUpperCase();
  key = key.toUpperCase();

  let result = '';
  for (let i = 0, j = 0; i < ciphertext.length; i++) {
    const c = ciphertext.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      const ci = c - A;
      const k = key.charCodeAt(j % key.length) - A;
      result += String.fromCharCode(((ci - k + 26) % 26) + A);
      j++;
    } else {
      result += ciphertext[i];
    }
  }
  return result;
}

// Event listener for encryption button
document.getElementById('encryptBtn').addEventListener('click', function () {
  const plaintext = document.getElementById('plaintext').value;
  const key = document.getElementById('cipherKey').value;

  if (!key.match(/^[a-zA-Z]+$/)) {
    alert('Please enter a valid key (letters only).');
    return;
  }

  const encrypted = vigenereEncrypt(plaintext, key);
  document.getElementById('ciphertext').value = encrypted;
});

// Event listener for decryption button
document.getElementById('decryptBtn').addEventListener('click', function () {
  const ciphertext = document.getElementById('ciphertext').value;
  const key = document.getElementById('cipherKey').value;

  if (!key.match(/^[a-zA-Z]+$/)) {
    alert('Please enter a valid key (letters only).');
    return;
  }

  const decrypted = vigenereDecrypt(ciphertext, key);
  document.getElementById('decryptedText').value = decrypted;
});
