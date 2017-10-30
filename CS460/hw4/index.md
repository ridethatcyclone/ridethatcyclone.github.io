---
title: "Homework 4"
layout: default
---

## Homework 4

This assignment was our first experience with creating an MVC web application. This particular application is not meant to use a database, and is overall intended to be a fairly simple intro into ASP.NET MVC and Visual Studio.

## Links
1. [Home](https://ridethatcyclone.github.io/)
2. [Assignment Page](http://www.wou.edu/~morses/classes/cs46x/assignments/HW4.html)
3. [Code Repository](#)

## Part One

For the first part of this assignment I decided to make what was suggested in the assignment page: a temperature converter. I knew that this first part, being my intro to MVC, would likely be the most difficult, so I didn't want to waste a bunch of time coming up with a unique idea. I was more eager to dive in and see what I could make of this. I did decide to expand slightly from the assignment page and convert from Fahrenheit, Celsius, or Kelvin into any of the other three.

For the assignment, we were expected to use an ActionResult method with no parameters and utilize query strings to parse data and create a new View after performing some calculation. I struggled most with creating a new View.

To begin with, I created my initial view and controller. My View was a very simple page, only a heading and a form:

```html
@{
    ViewBag.Title = "Temperature Conversion";
}

<h2>Temperature Conversion</h2>

<form method="get">
    <label for="num">Temperature to Convert</label><br />
    <input type="number" name="num" value="" /><br /><br />
    <label for="type">From:</label><br />
    <input type="radio" name="type" value="fahrenheit" checked /> Fahrenheit <br />
    <input type="radio" name="type" value="celsius" /> Celsius <br />
    <input type="radio" name="type" value="kelvin" /> Kelvin <br /><br />
    <input type="submit" value="Convert" />
</form>
```

![An image of my first page]("page1.PNG")

Simple, but does its job. I decided to do radio buttons instead of allowing the user to input a parameter because it is easier all around to deal with. My first version of the Controller for this page looked like this:

```cs
public ActionResult Conversion()
{
    string num = Request.QueryString["num"];
    string type = Request.QueryString["type"];

    ViewBag.num = num;
    ViewBag.type = type;

    return View();
}
```

This didn't do anything in particular with the form data, so while I was working on generating a new View I also added a small line to the bottom of my View:
`<p>You want to convert @ViewBag.num degrees from @ViewBag.type</p>`

This helped me to see if the values were being parsed correctly.

In order to do the calculations, I first constructed a second View, called Result. That page looked like:

```html
@{
    ViewBag.Title = "Result";
}

<h2>Result</h2>

<ul style="list-style:none;">
    <li style="margin-top:10px;">Fahrenheit: @ViewBag.f</li>
    <li style="margin-top:10px;">Celsius: @ViewBag.c</li>
    <li style="margin-top:10px;">Kelvin: @ViewBag.k</li>
</ul>
<br />
@Html.ActionLink("Go again", "Conversion");
```
Which looks like this, when values have been entered:
![Image of results page]("page1_b.PNG")

Then I used those variables to construct the logic for my Controller, in which it calculates out the values:

```cs
public ActionResult Conversion()
{
    // code from above...
    if (!String.IsNullOrEmpty(num))
    {
        if (type.StartsWith('f'))
        {
            ViewBag.f = Convert.ToDouble(num);
            ViewBag.c = (ViewBag.f - 32) * 5 / 9;
            ViewBag.k = ViewBag.c + 273.15;
            return View("Result");
        }

        else if (type[0] == 'c')
        {
            ViewBag.c = Convert.ToDouble(num);
            ViewBag.f = (ViewBag.c * 9 / 5) + 32;
            ViewBag.k = ViewBag.c + 273.15;
            return View("Result");
        }

        else if (type[0] == 'k')
        {
            ViewBag.k = Convert.ToDouble(num);
            ViewBag.c = ViewBag.k - 273.15;
            ViewBag.f = (ViewBag.c * 9 / 5) + 32;
            return View("Result");
        }

        else
        {
            ViewBag.ErrorMessage("Invalid input");
            return View();
        }

    }
    return View();

}
```

I started with just checking to make sure a number was inputted. Initially I tried to check for nulls, but then I realized that since "num" is technically a string, that was a bad way to do it. So I did some googling and found C#'s `String.IsNullOrEmpty` function. It does what it says on the tin, pretty much. That solved, I moved on to the actual logic. Luckily temperature conversions are super easy, so all I really had to do was parse out which type of conversion we were working with. I did this in two ways (accidentally, mostly. I was testing them both out because I wasn't sure which would work and just realized I left them both in. Oops). The first way is by using `type.StartsWith('f')`. The second does the same thing but in an array format: `type[0] == 'k'`. I also had a default else statement, in case the user messed with the query string. With everything working as it should, I moved on to the calculations.

These were very easy, just basic math. The most difficult time I had was returning to a new view. Initially I had `return View("~/Temperatures/Result")` but that threw an error at me. I also tried a `Redirect()` but couldn't get that to work either. Finally I landed on the simpler `return View("Result")` which of course worked great.

Overall this page works wonderfully. The conversions are all correct and it does what is intended. Some stuff that would make it better, I think:
* A prettier interface, obviously
* Actual error messages when incorrect input is received
* Add it all to the same page so you don't have to go back to start a new conversion
* Limit the decimal places shown

## Part 2