const validateUsername = (input) => {
    const regexUsername = /^[A-Z]\w{0,8}$/;
    return regexUsername.test(input);
  }
  
  const validataPassword = (input) => {
    const regrexPassword = /(?=.*[#](?=.*)[A-Z])(?=.*[a-z]){8}/;
    return regrexPassword.test(input);
  }
  
  console.log(validateUsername('SABRINA'));
  console.log(validateUsername('JAMES'));
  console.log(validataPassword('#DirumahAj4'));
//=================================================================================d