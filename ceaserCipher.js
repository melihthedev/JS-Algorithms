function rot13(str) {
    let arr = str.split("")
    let arr2 = arr.map(char => {
  
      if(char.charCodeAt() > 64 && char.charCodeAt() < 91) {
        let charCode = char.charCodeAt()
  
        if(charCode < 78) {
          charCode+=13
        } else {
          charCode-=13
        }
  
        
        return String.fromCharCode(charCode)
  
      }
      return char
  
    })
    
    return arr2.join("")
  
  }
  
  rot13("SERR PBQR PNZC");
  // FREE CODE CAMP