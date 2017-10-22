---
title: "C# Notes"
layout: default
---

### Hello World in C#
Code provided by [TutorialsPoint](https://www.tutorialspoint.com)
```
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
