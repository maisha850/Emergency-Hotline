# Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
 getElementBy: It selects a single element based on its unique id attribute.
getElementsByClassName: It selects all elements that share a specific class name
querySelector: It selects the first element that matches the given CSS selector.
querySelectorAll: It selects all elements that match the given CSS selector 

# Question 2: How do you create and insert a new element into the DOM?
Ans: I can create a new element into the DOM by using `document.createElement(tagName)` and insert the element by using `appendChild()` which adds the element at the end of the parent’s children.
# For Example:
```bash
const container= document.getElementById('container')
 const div= document.createElement('div')
 div.innerText="Hello"
container.appendChild(div)
```
# Question 3: What is Event Bubbling and how does it work?
Ans:Event Bubbling means that when an element receives an event (like click, mouseenter),the event first runs on the target element, and then it bubbles up (propagates) through its parent elements all the way up to the document and window.
In a easy word, it starts at the bottom (the clicked element) and rises up through parents.

**how does it work:**
When an event (like click) happens on an element: The event is first triggered on the element itself (the target).Then it bubbles up which means moves to the element’s parent.Then to the grandparent,then further up to <body>,<html>, and finally the document.This continues unless it is stopped with `event.stopPropagation()`.

# Question 4: What is Event Delegation in JavaScript? Why is it useful?
Ans:Event Delegation is a technique where instead of adding one listener on the parent and let events bubble up from children.and use event bubbling to detect which child triggered the event.

**Why it is useful**
It is useful because It adds fewer event listeners than others resulting in less memory and faster execution. For Example: Instead of adding 100 listeners to 100 buttons, you add 1 listener to their parent.

# Question 5: What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault():It is a method used in JS event handling which stops the default action associated with the event.
stopPropagation() : It is a method used in JS which stops the event from bubbling up
