 
# Variable : 
   > A variable is like a container that holds data.

   >> var : allows to redeclare & reassign the value. not recommended nowadays .

   <!--
    var a = 3;
    here  a = redeclaration 
    a = 3 = reassign 
    -->

    var a = 3;
    console.log(a)
        3
    
    var a = 7;
    console.log(a)
        7


   >> let : let allows to redeclare but cannot reassign.
    let a = 3 ;
    console.log(a)
        3

    let a = 7;
    SyntaxError: Identifier 'a' has already been declared

    a = 7
    console.log(a)
        7
 
   
   >> const : const NOT allow to redecalr & reassign .
    const a = 3;
    console.log(a)
        3

    const a = 7
    SyntaxError: Identifier 'a' has already been declared
    a = 7
    TypeError: Assignment to constant variable.
