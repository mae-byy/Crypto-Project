// Event listener for encryption
document.getElementById("encryptBtn").addEventListener("click", function() {
    const plaintext = document.getElementById("plaintext").value;
    const key = document.getElementById("encryptKey").value;
    const selectedAlgorithm = document.getElementById("algorithmSelect").value;

    let encryptedText = "";

    // Validate the key
    if (selectedAlgorithm === "caesar" && (isNaN(key) || key < 1 || key > 25)) {
        alert("Please enter a valid key (1-25) for Caesar Cipher.");
        return;
    }

    if (selectedAlgorithm === "vigenere" && key.length === 0) {
        alert("Please enter a valid keyword for Vigenère Cipher.");
        return;
    }

    if (selectedAlgorithm === "vernam") {
        if (key.length === 0 || !/^[a-zA-Z]+$/.test(key)) {
            alert("Please enter a valid key for Vernam Cipher (letters only).");
            return;
        }
        if (key.length !== plaintext.length) {
            alert("For Vernam Cipher, key length must be equal to plaintext length.");
            return;
        }
    }

    // Check which algorithm is selected and call the corresponding function
    if (selectedAlgorithm === "caesar") {
        encryptedText = caesarEncrypt(plaintext, parseInt(key));
    } else if (selectedAlgorithm === "vernam") {
        encryptedText = vernamEncrypt(plaintext, key);
    } else if (selectedAlgorithm === "vigenere") {
        encryptedText = vigenereEncrypt(plaintext, key);
    }

    document.getElementById("ciphertext").value = encryptedText;
});

// Event listener for decryption
document.getElementById("decryptBtn").addEventListener("click", function() {
    const ciphertext = document.getElementById("encryptedText").value;
    const key = document.getElementById("decryptKey").value;
    const selectedAlgorithm = document.getElementById("algorithmSelect").value;

    let decryptedText = "";

    // Validate the key
    if (selectedAlgorithm === "caesar" && (isNaN(key) || key < 1 || key > 25)) {
        alert("Please enter a valid key (1-25) for Caesar Cipher.");
        return;
    }

    if (selectedAlgorithm === "vigenere" && key.length === 0) {
        alert("Please enter a valid keyword for Vigenère Cipher.");
        return;
    }

    if (selectedAlgorithm === "vernam") {
        if (key.length === 0 || !/^[a-zA-Z]+$/.test(key)) {
            alert("Please enter a valid key for Vernam Cipher (letters only).");
            return;
        }
        if (key.length !== ciphertext.length) {
            alert("For Vernam Cipher, key length must be equal to ciphertext length.");
            return;
        }
    }

    // Call the correct decryption function
    if (selectedAlgorithm === "caesar") {
        decryptedText = caesarDecrypt(ciphertext, parseInt(key));
    } else if (selectedAlgorithm === "vernam") {
        decryptedText = vernamDecrypt(ciphertext, key);
    } else if (selectedAlgorithm === "vigenere") {
        decryptedText = vigenereDecrypt(ciphertext, key);
    }

    document.getElementById("decryptedText").value = decryptedText;
});
