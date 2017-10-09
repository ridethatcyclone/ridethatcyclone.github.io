---
title: "Homework 1"
layout: default
---

## Homework 1
For the first homework we were given the assignment of creating a series of simple webpages, and styling them with CSS and Bootstrap. I was already very familiar with HTML and CSS, but had never used Bootstrap before, so I was intrigued going into this.

Before I could begin diving in with Bootstrap, however, I had to get started with Git first. I've never used Git either, though I had some experience with Mercurial so I wasn't totally in the dark.

### Getting started: Git
I installed Git from [here](https://git-scm.com/) and got started on the web side by creating a repository with an empty README file, so that I could clone it onto my machine. This seemed like an easier path to start with than starting on the machine and syncing it to the repository.

To clone the repository to my system I used the following code in the Git Bash:

```
cd Documents CS460_Files
git clone https://github.com/ridethatcyclone/CS460.git
cd CS460
```

The other code I used was simply to commit, push, and pull to/from the repository, as follows:

```
git pull origin master
git add index.HTML
git status
git commit -m "a commit message here"
git push origin master
```

### Onto the code: HTML, CSS, and Bootstrap
Once I had git figured out, it was time to move on to coding the website. I didn't use Emmet for the site, though it's an extension I would like to look into. I'm using Atom to write the code, with an extension to autocomplete tags. I started with just a very basic HTML template, and started adding Bootstrap on top of it. Instead of downloading Bootstrap, I just loaded it in links in the head, as so:

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
```

This linked the Boostrap styles to my page so I was able to use their classes (Specifically Bootstrap 3) in my website for styling. I also attached my own stylesheet so I would be able to make edits. The basic structure for Bootstrap is a column structure, and the columns are used in sets to divide up the page. The basic structure of my index page looked like this:

```
<html>
    <head></head>
    <body>
        <div class="container">

            <div class="row">
                <div class="col">
                    <div class="jumbotron"></div>
                    <div class="navbar"></div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6"></div>
            </div>

        </div>
    </body>
</html>
```

The entire page is encased by a div with the class "container". Within that container, each row is specified, and within each row each of their columns. In my first row I only have one column, so I don't have to specify a width because it's automatically set to 12. For the second row, I wanted two columns, so I set the class to reflect that ("col-md-6" in this case). I also used a jumbotron and a navbar, which are built in classes in Bootstrap.

For content on the page I simply used a [Lorem Ipsum generator](http://www.lipsum.com/). This is the easiest way to style a page when you don't have any content to add to it.
