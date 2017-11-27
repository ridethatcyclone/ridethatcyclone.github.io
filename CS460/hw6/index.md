---
title: "Homework 6"
layout: default
---

## Homework 6

For this assignment we were instructed to create an application, using the Adventure Works 2014 database, that mimicked a shopping site, essentially. It needed to have a two-layer navigation where the user could select a category and subcategory of products. It would then display to the user the products under those selected categories. The user could pick a product and see more details, as well as reviews. The user could also submit a review.

There were a lot of parts to this project, and some parts where definitely more difficult than others, but altogether I think this project came together well.

## Links
1. [Home](https://ridethatcyclone.github.io/)
2. [Assignment Page](http://www.wou.edu/~morses/classes/cs46x/assignments/HW6.html)
3. [Code Repository](https://github.com/ridethatcyclone/CS460/tree/master/HW6)
4. [Video of Working App](https://youtu.be/CdCtjV6uvgQ)

## The Assignment

To start this assignment, I first had to restore the database from the backup file and connect it to my project. Luckily, with SQL Server Managagement Studio, this was fairly easy. I first had to connect to my local database (server name: (localDB)\MSSQLLocalDB), then all I had to do was restore the database from the .bak file. Once the database was loaded into my LocalDB, I was ready to set up the project.

Again, it was much easier this time around, using an existing database. I only imported the Product tables, so that I didn't have way too many Models. I still ended up with more models than I used, but not as many as I could have:

![Image of my models](models.PNG)

Once my models were all generated, I started working on my views. I first edited the shared layout, to give my website a uniform appearance. It was a very simple shared layout; the bulk of it was just loading stylesheets and scripts. However, I also created a jumbotron and a navbar:

```html
<body>
  <div class="jumbotron clearfix" style="background-image: url('/images/bikes.jpg'); background-position: center top; background-size: cover; background-repeat: no-repeat; min-height: 300px; margin-top: 0px; padding-top: 0px;">
  </div>
  @{Html.RenderAction("GetNavbar", "Home");}
  <div class="container body-content">
    @RenderBody()
  </div>
</body>
```

Unfortunately I ended up putting a lot of CSS into the HTML tag for my jumbotron. I could have moved it to the stylesheet file, but I... didn't. Heh.

This code does reference some stuff I haven't gotten to yet, specifically the navbar code. But that's what I did next! So, the navbar view. This one took some serious logic-ing for me. In fact, I'd comfortably say figuring out how to populate the navbar was the most difficult part of this assignment. I initially tried using a ViewModel to create it, however I puzzled over that for a long time before giving up and resorting to the ViewBag and ViewData.

```html
<nav class="navbar navbar-fixed-top navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      @Html.ActionLink("Adventure Works", "Index", "Home", new { @class = "navbar-brand" })
    </div>

    <ul class="nav navbar-nav navbar-right">
      @for (int i = 0; i < ViewBag.Categories.Length; i++)
      {
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">@ViewBag.Categories[i]</a>
          <ul class="dropdown-menu">
            @foreach (var item in ViewData[ViewBag.Categories[i]] as IList<string>)
              {
                <li>
                  @Html.ActionLink(
                          item,
                          "Display",
                          "Home",
                          new { @PID = item },
                          null
                  )
                </li>
              }
          </ul>
        </li>
      }
    </ul>
  </div>
</nav>
```

There's a lot to unpack there. Basically, I just nested a couple of loops. First I loop over the categories (which I receive from the controller, which we'll get to) and within that loop for each category I loop over the subcategories. I used a bootstrap dropdown menu to make this work.

So for the controller for my navbar, it's... A *lot* of ugly code. Firstly I used the `[ChildActionOnly]` parameter to define it, and as a `PartialViewResult`. This was so other Views could render it within themselves, without overwriting them.

The code, ugly though it may be:

```cs
[ChildActionOnly]
        public PartialViewResult GetNavbar()
        {
            using (ProductsContext db = new ProductsContext())
            {
                //Create the categories array
                var Cat = new string[db.ProductCategories.Count()];

                //Loop through and generate the category and its subcategories. Subcategories are added as a list to ViewData.
                for (int i = 1; i <= db.ProductCategories.Count(); i++)
                {
                    var x = db.ProductCategories.Where(p => p.ProductCategoryID == i).Select(p => p.Name).FirstOrDefault().ToString();
                    if (x != null)
                    {
                        Cat[i - 1] = x;
                        IList<string> a = new List<string>();
                        foreach (var item in db.ProductSubcategories)
                        {
                            if (item.ProductCategoryID.Equals(i))
                                a.Add(item.Name);
                        }
                        ViewData[x] = a;

                    }
                }
                ViewBag.Categories = Cat;
                return PartialView("_Navbar");
            }

        }
```

Finally, I just made a simple landing page. I used Lorem Ipsum, because I'm not creative enough to come up with more than like, two opening sentences:

```html
<div class="container">
  <h1 style="margin-top:-5px;">Welcome</h1>
  <div class="row">
    <div class="col-md-6">
      <p style="text-align:justify;">Text</p>
    </div>
    <div class="col-md-6">
      <p style="text-align:justify;">Text</p>
    </div>
  </div>
</div>
```

With everything all set up for the basic display, this was my page:

![Image of landing page](landingpage.PNG)





(strongly-typed vs not....)
