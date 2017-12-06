---
title: "Homework 7"
layout: default
---

## Homework 7

For this homework we were tasked with creating a single-page website that uses the Giphy API and AJAX to return search results in the form of gifs.

## Links
1. [Home]()
2. [Assignment Page]()
3. [Code Repository]()

### Getting Started

This assignment was difficult for me because AJAX is very complicated and I had a hard time picking it up. Also, I really wanted to put a lot of effort into styling the results of my search but had to focus on getting the actual search to work instead.

To get started I just began with a simple HTML layout with a form for the search. Initially, I had only a text box and a button. A small amount more would be added later. This is the HTML for my site, with the radio buttons I added later included:

```Html
@{
    ViewBag.Title = "Home";
}

<div class="container">
    <div class="row">
        <div class="col-md-offset-3 col-md-6" style="text-align:center;">
            <h1>Gif Search</h1>
        </div>
    </div><br />
    <!--Beginning of searchbar row-->
    <div class="row">
        <div class="col-md-offset-3 col-md-6">
            <div style="margin:0 auto;">
                <form class="form-inline" id="search">
                    <div class="form-group">
                        <div class="input-group" style="width:80%; margin: 0 auto;">
                            <input class="form-control" id="sbar" placeholder="Search" type="text">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button" id="submitButton"><span class="glyphicon glyphicon-search"></span></button>
                            </span><br />
                        </div>
                        <div class="input-group" style="width:80%; margin: 0 auto;">
                            <input type="radio" name="animated" value="true" /> Animated
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" name="animated" value="false" /> Still
                        </div>  
                    </div>
                </form>
            </div>
        </div>
    </div>
    <br />
    <div class="row" id="gifList">
        <div class="rowList">
            <div class="row gifRow" id="topRow"></div>
            <div class="row gifRow" id="middleRow"></div>
            <div class="row gifRow" id="bottomRow"></div>
        </div>
    </div>

</div>


I used an excessive amount of divs basically with the goal of getting the entire site centered. Which it is, so that's a win for me! Then I just had a title, the form, and a div for my gifs to be displayed.

My CSS for this one was:

```CSS
#searchbar {
    width:80%;
}

#searchcontrols {
    align-content:center;
}

#gifList {
    width:85%;
    margin: 0 auto;
}

#gifList .gifRow {
    padding:15px;
    margin:10px;
}

#gifList .gifCol {
    width:30%;
    overflow:hidden;
}

.displayGif {
    width:200px;
    height:auto;
    margin: 0 auto;
}

#gifList .rowList {
    margin: 0 auto;
}
```

Again, almost all of this was just to center the page and make it look slightly nicer. It still is a pretty ugly webpage, but not as ugly as it was. Which is... something?
