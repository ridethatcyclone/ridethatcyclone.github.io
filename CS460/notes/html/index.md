---
title: "HTML"
layout: default
---

### A simple HTML layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title>Title</title>
</head>
<body>

    <!-- BOOTSTRAP CONTAINERS: -->
    <div class="container">
        <div class="row">
            <div class="col">
                Content
            </div>
        </div>
    </div>

</body>
</html>
```

### Cheatsheet of useful HTML tags

Tag | Usage
----|------
``<p>Content</p>`` | Creates a paragraph
``<img src="url">`` | Inserts an image
``<q>Content</q>`` | Signifies a quotation
``<blockquote>Content</blockquote>`` | Creates a blockquote
`<p style="color:red"` | Style within tag
`<hr>` | Inserts a horizontal rule
`<pre>Content</pre>` | Defines preformatted text. Preserves both spaces and line breaks

### Tables
```html
<table>
    <caption>Table caption</caption>
    <tr>
        <th>Header1</th>
        <th>Header2</th>
        <th>Header3</th>
    </tr>
    <tr>
        <td>Item1</td>
        <td colspan="2">Item2</td>
    </tr>
    <tr>
        <td>Item4</td>
        <td>Item5</td>
        <td>Item6</td>
    </tr>
</table>
```
<table>
    <caption>Table caption</caption>
    <tr>
        <th>Header1</th>
        <th>Header2</th>
        <th>Header3</th>
    </tr>
    <tr>
        <td>Item1</td>
        <td colspan="2">Item2</td>
    </tr>
    <tr>
        <td>Item4</td>
        <td>Item5</td>
        <td>Item6</td>
    </tr>
</table>
