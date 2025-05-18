// Helper: convert letter A-Z to number 0-25
function charToNum(c) {
  return c.charCodeAt(0) - 'A'.charCodeAt(0);
}

// Helper: convert number 0-25 to letter A-Z
function numToChar(n) {
  return String.fromCharCode((n % 26) + 'A'.charCodeAt(0));
}

// Vernam Cipher Encryption: (P + K) mod 26
function vernamEncrypt(plaintext, key) {
  plaintext = plaintext.toUpperCase();
  key = key.toUpperCase();

  if (plaintext.length !== key.length) {
    alert("Key length must be the same as plaintext length.");
    return "";
  }

  let ciphertext = "";
  for (let i = 0; i < plaintext.length; i++) {
    let pNum = charToNum(plaintext[i]);
    let kNum = charToNum(key[i]);
    if (pNum < 0 || pNum > 25 || kNum < 0 || kNum > 25) {
      alert("Only letters A-Z allowed in plaintext and key.");
      return "";
    }
    let cNum = (pNum + kNum) % 26;
    ciphertext += numToChar(cNum);
  }
  return ciphertext;
}

// Vernam Cipher Decryption: (C - K + 26) mod 26
function vernamDecrypt(ciphertext, key) {
  ciphertext = ciphertext.toUpperCase();
  key = key.toUpperCase();

  if (ciphertext.length !== key.length) {
    alert("Key length must be the same as ciphertext length.");
    return "";
  }

  let plaintext = "";
  for (let i = 0; i < ciphertext.length; i++) {
    let cNum = charToNum(ciphertext[i]);
    let kNum = charToNum(key[i]);
    if (cNum < 0 || cNum > 25 || kNum < 0 || kNum > 25) {
      alert("Only letters A-Z allowed in ciphertext and key.");
      return "";
    }
    let pNum = (cNum - kNum + 26) % 26;
    plaintext += numToChar(pNum);
  }
  return plaintext;
}

// Event listener for Encrypt button
document.getElementById("encryptBtn").addEventListener("click", function() {
  const plaintext = document.getElementById("plaintext").value.trim();
  const key = document.getElementById("key").value.trim();

  const encrypted = vernamEncrypt(plaintext, key);
  if (encrypted !== "") {
    document.getElementById("ciphertext").value = encrypted;
    document.getElementById("decryptedText").value = "";
  }
});

// Event listener for Decrypt button
document.getElementById("decryptBtn").addEventListener("click", function() {
  const ciphertext = document.getElementById("ciphertext").value.trim();
  const key = document.getElementById("key").value.trim();

  const decrypted = vernamDecrypt(ciphertext, key);
  if (decrypted !== "") {
    document.getElementById("decryptedText").value = decrypted;
  }
});

