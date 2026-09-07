# Storage : 
>  Local Storage : 
    >  it stays even if the browser is closed.
    > saves data with no expiration date
    > Storage Size 5MB - 10MB
    <!--     
    localStorage.setItem("Key","123")
    localStorage.getItem("Key");
    '123'
    localStorage.removeItem("Key");
    undefined
    localStorage.getItem("Key");
    null -->

>  Session Storage : 
    > saves data temporarily
    > deletes it as soon as the tab or browser is closed
    > Storage Size 5MB 
    <!--
     sessionStorage.setItem("Key","123");
     sessionStorage.getItem("Key","123");
     '123' -->

> Cookies : 
    > Cookies are tiny storage files 
    > used to track users and send data back to the server.
    > Storage Size 4KB 
    > document.cookie to  see all cookies
    > document.cookie="key=___,expires=___, dateTime UTC"

