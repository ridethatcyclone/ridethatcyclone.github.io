---
title: Javascript and JQuery Notes
layout: default
---

## Notes on Javascript and JQuery

### Including Javascript in the Code
Javascript can be included inline with the `script` tag, or you can include a link to an outside script. Either way, should be at the bottom of the body tag.
```HTML
<script>
document.getElementByClass('.class').hide();
</script>

<script src="main.js"></script>
```

### Declarations
Declare functions with the function keyword, a name, and parameters.
```Javascript
function main(param) {
    // body
}
```
Declare variables with `var` and a name
```Javascript
var ex;
var ex1 = NULL;
```

### Loops
```Javascript
for (var i=0; i < 10; i++) {
    // execute
}

var j = 10;
while (j > 0) {
    //execute
    j--;
}

var k;
switch(k) {
    case (1):
        //execute
        break;
    case (2):
        //execute
        break;
    default:
        //execute
        break;
}
```

### Objects
```Javascript
var obj1 = {
    key1: value1,
    key2: "value2",
    key3: value3,
    x: function() {
        //execute
    }
}

//Access properties two ways
var out = obj1.key1;
var out2 = obj1["key1"];
```

### JQuery
Selecting things is easier with JQuery:
Javascript | JQuery
-----------|--------
`document.getElementByClass('class')` | `$('.class')`
`document.getElementById('id')` | `$(#id)`
`document.body.style.background=color` | `$('body').css('background',color)`

### Examples used in homework
```Javascript
function main() {
    // Hide element
    $('.add-form').hide();

    // Slide toggle element
    $('.options').on('click', function() {
        $(this).next().slideToggle(400);
    })

    // Delete element when button is pressed
    $('.delete-btn').on('click', function() {
        if (confirm('Are you sure?')) {
            $(this).closest('.book').remove();
        }
        else return false;
    })

    // Submit form
    $('.submit-btn').on('click', function() {
        submitNewBook();
        $('#add')[0].reset();
    })
}

function submitNewBook() {
    var num = $('.pages').valueAsNumber;
    var text = $('.title').value;

    if (x < y) {
        alert('Nope!');
        return;
    }
    else {
        $('.bookshelf').append("<div>Content</div>");
    }
}

$(document).ready(main);
