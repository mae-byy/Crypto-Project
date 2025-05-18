// Event listener for encryption
document.getElementById("encryptBtn").addEventListener("click", function() {
    const plaintext = document.getElementById("plaintext").value;
    const key = parseInt(document.getElementById("key").value); // Get the user input key
    
    // Check if the key is a valid number between 1 and 25
    if (key < 1 || key > 25 || isNaN(key)) {
        alert("Please enter a valid key (1-25).");
        return;
    }

    // Perform encryption using Caesar Cipher
    let encryptedText = caesarEncrypt(plaintext, key);
    
    // Show encrypted text in the output field
    document.getElementById("ciphertext").value = encryptedText;
});

// Event listener for decryption
document.getElementById("decryptBtn").addEventListener("click", function() {
    const ciphertext = document.getElementById("encryptedText").value;
    const key = parseInt(document.getElementById("key").value); // Get the user input key
    
    // Check if the key is a valid number between 1 and 25
    if (key < 1 || key > 25 || isNaN(key)) {
        alert("Please enter a valid key (1-25).");
        return;
    }

    // Perform decryption using Caesar Cipher
    let decryptedText = caesarDecrypt(ciphertext, key);

    // Show decrypted text in the output field
    document.getElementById("decryptedText").value = decryptedText;
});

// Caesar Cipher Encryption Function
function caesarEncrypt(plaintext, key) {
    let result = '';
    
    // Loop through each character in the plaintext
    for (let i = 0; i < plaintext.length; i++) {
        let char = plaintext[i];
        
        // If it's a letter, apply the shift
        if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode(((char.charCodeAt(0) - 97 + key) % 26) + 97);
        } else if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode(((char.charCodeAt(0) - 65 + key) % 26) + 65);
        } else {
            result += char; // Keep non-alphabet characters unchanged
        }
    }

    return result;
}

// Caesar Cipher Decryption Function
function caesarDecrypt(ciphertext, key) {
    let result = '';
    
    // Loop through each character in the ciphertext
    for (let i = 0; i < ciphertext.length; i++) {
        let char = ciphertext[i];
        
        // If it's a letter, apply the reverse shift
        if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode(((char.charCodeAt(0) - 97 - key + 26) % 26) + 97);
        } else if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode(((char.charCodeAt(0) - 65 - key + 26) % 26) + 65);
        } else {
            result += char; // Keep non-alphabet characters unchanged
        }
    }

    return result;
}
