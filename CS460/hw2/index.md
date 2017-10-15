---
title: Homework 2: Javascript and JQuery
layout: default
---

## Links

* [Home](https://ridethatcyclone.github.io/)
* [Assignment Page](http://www.wou.edu/~morses/classes/cs46x/assignments/HW2.html)
* [Code Repository](#)

## The Assignment

We were tasked with creating an interesting and useful page using Javascript and JQuery as well as the skills we used on the last assignment (HTML, CSS, and Bootstrap). I decided to create a book tracker, as that's something that I personally would find useful and can never seem to find one that fits my needs.

I didn't want to bog myself down too much with overall appearance so I decided to go as minimalistic as I could convince myself to. Normally I prefer to put a lot of time into the design of a page, but it's not something I'm overly skilled at so I usually end up just slowing myself down. Since I haven't used a lot of Javascript before I wanted to make sure I focused more on that than making the page as pretty as can be. To that end, my basic layout is simply a plain page with two options on it, 'Add Book' and 'Bookshelf'. This was my mockup:

![WireFrame Mockup](wireframe.png)

Each of these is a button, and using Javascript I later animated them to slide to reveal the information they're connected to. So when the user clicks on 'Add a Book', a form slides into place for them to type in the book's information and submit. When they click on 'Bookshelf', a list of all their previously submitted books appears.

Doing this was fairly easy. I was actually pleasantly surprised by how simple it was. My HTML setup in the body element is just one column in Bootstrap, and within that column the structure looks like:

```html
<ul class="b-menu">

    <!-- ADD A BOOK -->
    <li class="btn-default options add-book">Add a Book</li>
    <div class="add-form">
        <form id="add">
            Title:<br/>
            <input type="text" name="title" id="titleIn"/><br />
            Author:<br />
            <input type="text" name="author" id="authorIn"/><br />
            How many pages are in the book?<br />
            <input type="number" name="totalPages" id="totalPagesIn"/><br />
            How many pages have you read?<br />
            <input type="number" name="pagesRead" id="pagesReadIn"/><br />
            <button type="button" class="btn btn-elegant submit-btn" >Submit</btn>
        </form>
    </div>

    <!-- BOOKSHELF -->
    <li class="btn-default options bookshelf-btn">Bookshelf</li>
        <div class="bookshelf">
            <!-- BOOKS TO BE INSERTED HERE -->
        </div>

</ul>
```
I started with an unordered list and each header/button is a list item within that. Each of them uses the btn-default class from Bootstrap, an options class to unite them, and then a more unique class. This allowed me a lot of flexibility styling them, even if it makes the tags a little silly looking.

Within the Add section is a form with four fields: Title, Author, Total Pages, and Pages Read. The submit button is the fifth object contained. I had some trouble with the page auto refreshing (and thus, losing my submitted form data) when I used `<input type="submit">`, so I switched over to a button instead. Since it doesn't have actual input anyway, this wouldn't get in the way of resetting my form later on.

Finally, the Bookshelf section contains only the header/button and a div with the class bookshelf. This I left empty, as it will be filled by the form and Javascript later on.

I styled the form to be simple but large, so the page doesn't seem *too* plain. Specifically I widened all the text boxes, added some padding, and gave it a border that darkens when focus is on a field:

```css
input {
    width:40%;
    margin:10px;
    padding:10px;
}

input[type=text],input[type=number] {
    border:3px solid #ccc;
    -webkit transition:0.5s;
    transition:0.5s;
    background-color: #e8eff9;
}

.submit-btn {
    width:40%;
    margin:10px;
    padding: 10px;
}

input:focus {
    border: 3px solid #555;
}
```

Now that I had everything styled the way I wanted it, it was time to move on to the Javascript side of things. First thing, I wanted the headers to scroll open and closed when clicked. To do this I simply created an on click event in the `main()` function in my main.js file.

```Javascript
function main() {
    $('.add-form').hide();
    $('.bookshelf').hide();
    $('.options').on('click', function() {
        $(this).next().slideToggle(400);
    })
}

$(document).ready(main);
```

This was the basis for my Javascript file. Before I could toggle the two sections I had to make sure that they were hidden. With Bookshelf, it wasn't as vital as the page doesn't save information after the user refreshes, so there's never any information to hide. But with the idea that that functionality may be added later, I decided to hide it anyway. Then I simply added an on click function to the 'options' class, which both headers area members of. I didn't want to toggle the headers themselves however, which is why I did `$(this).next()` - Javascript would then toggle the next element instead of the one clicked on. In this case, the divs either header is referring to.

The most difficult part of the Javascript was getting the information from the form and onto the Bookshelf. I wrote a separate function in my main.js file to deal with that, but a lot of factors had to be considered. All fields were necessary, the numbers couldn't be negatives, etc. First I made sure it would accept the info as given into the fields at all. My basic framework of the function was this:

```Javascript
function submitNewBook() {
    var title = document.getElementById('titleIn').value;
    var author = document.getElementById('authorIn').value;
    var totalPages = document.getElementById('totalPagesIn').value;
    var pagesRead = document.getElementById('pagesReadIn').value;

    console.log("Title: " + title + ", Author: " + author + ", Total Pages: " + totalPages + ", Pages Read: " + pagesRead);
}
```

Once I confirmed that that was working, I started adding conditionals:

```Javascript
function submitNewBook() {
    . . .
    if (pagesRead < 0 || totalPages < 0) {
        alert("Invalid input; pages must be greater than 0");
        return;
    }
    else if (pagesRead > totalPages) {
        alert("Pages read can't be greater than total pages");
        return;
    }
    else if (title.length === 0 || author.length === 0 || isNaN(totalPages) || isNaN(pagesRead)) {
        alert("Invalid input");
        return;
    }
    else {
        . . .
    }

}
```

I ran into an issue while I was testing these, however. It would allow any input into the number fields, regardless of what my conditionals demanded. I ended up discovering the issue to be the `.value` part of my code. Every time I was pulling the numbers from the input fields, despite the fact that the input fields were number types, it was pulling them as strings. To remedy this, I simply switched to `var totalPages = document.getElementById('totalPagesIn').valueAsNumber`. This fixed the problem and the conditionals started working as intended. 
