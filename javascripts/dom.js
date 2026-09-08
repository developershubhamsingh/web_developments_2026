// Dom : Documents Object Modal .

// document : whole web pages .

// 3 ways to target or manipulate the dom
//By targeting id
document.getElementById ()  

//By targeting className
document.getElementsByClassName()

//By targeting tagName
document.getElementsByTagName()




document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('a')
HTMLCollection(24) [a, a, a, a, a, a, a, a, a, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a, a, a, a, a, a, a, a, a, a#toTop, toTop: a#toTop]
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerHTML
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].style.color="red"
'red'
document.getElementsByTagName('h1')[0].style.visibility="hidden"
'hidden'

document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]0: a.scroll1: a.scroll2: a.scroll3: a.scroll4: a.scrolllength: 5[[Prototype]]: HTMLCollection
document.getElementsByClassName('scroll')[1].innerText="Video"
'Video'