```addEventListener()``` method attaches an event handler to the specified element without overwriting existing event handlers.
```addEventListner()``` method can be used to add many event handlers of same or different type to one element.

If you have a ```<p>``` element inside a ```<div>``` element and the user clicks on the ```<p>``` element, then: <br>
&nbsp; In bubbling, the ```<p>``` element's click event will be handled first and then the latter one.<br>
&nbsp; In capturing, the ```<div>``` element's click event will be handled first and then the latter one.

To remove an event listener use ```removeEventListner()``` method.
