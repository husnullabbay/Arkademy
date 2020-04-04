function isHexColor (hex) {
    return typeof hex === 'string'
        && hex.length === 6
        && !isNaN(Number('0x' + hex))
  }
  
  // or as arrow function (ES6+)
  isHexColor = hex => typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex))
  
  console.log(isHexColor('BBCCDD'))   
  console.log(isHexColor('AACCBB22')) 
  console.log(isHexColor('YYBBCC'))   
  console.log(isHexColor('AAYYBB'))