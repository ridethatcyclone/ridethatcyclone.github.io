---
title: "CSS and Bootstrap"
layout: default
---

## CSS
CSS uses a sort of key:value structure, applied to selectors outside the brackets. An example:
```CSS
p {
    font-size:12px;
    color:red;
}
```
This styles all paragraph elements to have a font size of 12 pixels and be red.
```CSS
/* You can select simply elements */
p {
    . . .
}

/* Or elements by ID */
#id {
    . . .
}

/* Or by class */
.class {
    . . .
}

/* Or a combination */
p .center {
    . . .
}
```

CSS stands for 'Cascading Style Sheets' - the cascading is what defines the order of precedence. That is, which styles will take effect when multiple overlapping ones are specified for one element. An inline style (defined within the HTML tag) has highest precedence, followed by internal and external style sheets, followed by browser default. In the style sheets, the style sheet loaded last takes precedence.

### Useful CSS Properties

```CSS  
p {
    /* Background Properties */
    background-color: #ccc;
    background-position: right top;
    background-repeat: repeat-x; /* repeats horizontally */
    background-image: url("image.jpg");

    /* Border Properties */
    border-style: dashed;
    border-width: 2px;
    border-radius: 0px;
    border-color: green;

    /* Margin Properties */
    margin: 10px 15px 5px 20px;
    /* Makes the margins as:
    top: 10px
    right: 15px
    bottom: 5px
    left: 20px
    but they can also be done separately */
    margin: auto; /* centers element in container */
}
```

## Bootstrap
