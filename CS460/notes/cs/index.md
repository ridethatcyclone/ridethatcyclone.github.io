---
title: "C# Notes"
layout: default
---

### Hello World in C#
Code provided by [TutorialsPoint](https://www.tutorialspoint.com)
```cs
using System;
namespace HelloWorldApplication
{
    class HelloWorld
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World");
            Console.ReadKey();
        }
    }
}
```

+ The `using` keyword is used to include namespaces in the program (in this case, System).
+ The `namespace` is a collection of classes. This *HelloWorldApplication* contains the class *HelloWorld*
+ The `class` *HelloWorld* contains data and method definitions
+ In the Main method, `Console.WriteLine("Hello World");` writes the string "Hello World" to the console
+ `Console.ReadKey();` is for VS.NET users. According to TutorialsPoint: "This makes the program wait for a key press and it prevents the screen from running and closing quickly when the program is launched from Visual Studio .NET."

### Web Applications
* MVC: Model View Controller
* Each View needs a Controller to call it; Model is the content
* Naming conventions are God, here

```cs
// VIEW
@{
    ViewBag.Title="Index";
}
<h1>ViewBag.Title</h1>
<p>Content here...</p>

// CONTROLLER
public ActionResult Index()
{
    return View();
}

// MODEL
public int ID { get; set; }
public string name { get; set; }
```

Other useful code snippets:
```cs
@Html.ActionLink("Link Text", "Destination", "Destination Folder/Group")
@Styles.Render("~/Content/css")
// Note: sometimes CSS is cached and won't refresh changes. Ctrl + f5 will fix
@using (Html.BeginForm())
{
    //Form here
}

@foreach (var item in Model)
{
    //Logic
}
```

### Create and Connect to a Database
1. In Server Explorer, click on Add connection
2. Select Microsoft SQL Server
3. Connect to LocalDb and enter a name for the database
4. Confirm that you want to create a new database
5. Create a new project
6. Project -> Add New item
7. Data -> ADO.NET Entity Data Model
8. NameContext (where 'Name' is the name of your DB, preferably)
9. Code First From Database
10. Select the database you created
11. Select tables to import (all, for this one)
12. Make sure Web.config has connection string
