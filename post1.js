function copyCode(codeType) {
    let codeElement = document.querySelector(`.${codeType}`);
    let text = codeElement.innerText || codeElement.textContent;
  
    // Create a temporary input field to copy the code
    let tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  
    // Show the alert
    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'block';
    
    // Hide the alert after 2 seconds
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 2000);
  }
  