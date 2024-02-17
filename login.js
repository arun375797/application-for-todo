function validate(display) {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
  

    if (username === 'admin' && password === '12345') {

  display()
    } else {

      let errorMessage = '';
      if (!username) {
        errorMessage += 'Username cannot be empty.<br>';
      } else if (username !== 'admin') {
        errorMessage += 'Invalid username.<br>';
      }
      if (!password) {
        errorMessage += 'Password cannot be empty.<br>';
      } else if (password !== '12345') {
        errorMessage += 'Invalid password.<br>';
      }
  

      const err1 = document.getElementById('err1');
      const err2 = document.getElementById('err2');
      err1.innerHTML = ''; 
      if (errorMessage) {
        err1.innerHTML = errorMessage;
        err1.style.color="red"
      }
    }
  
    return false; 
  }
  function display(){
    window.location.href = 'home.html';
  }