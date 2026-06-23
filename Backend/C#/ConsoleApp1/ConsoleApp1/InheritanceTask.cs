////using System;

////class Employee
////{
////    public string Name { get; set; }
////    public string Address { get; set; }
////    public int Age { get; set; }
////    public double Salary { get; set; }
////    public string Contact { get; set; }
////}

////class Program
////{
////    static void Main()
////    {
////        Employee e1 = new Employee();
////        e1.Name = "Imran P";
////        e1.Address = "Chennai";
////        e1.Age = 28;
////        e1.Salary = 35000;
////        e1.Contact = "8667025827";

////        Console.WriteLine("Name: " + e1.Name);
////        Console.WriteLine("Address: " + e1.Address);
////        Console.WriteLine("Age: " + e1.Age);
////        Console.WriteLine("Salary: " + e1.Salary);
////        Console.WriteLine("Contact: " + e1.Contact);
////    }
////}


////Task 2

//using System;
//using System.Collections.Generic;

//class Student
//{
//    private Dictionary<string, int> marks = new Dictionary<string, int>();

//    // Indexer
//    public int this[string subject]
//    {
//        get
//        {
//            return marks[subject];
//        }
//        set
//        {
//            marks[subject] = value;
//        }
//    }
//}

//class Program
//{
//    static void Main()
//    {
//        Student s1 = new Student();

//        // Set marks using indexer
//        s1["Math"] = 90;
//        s1["Science"] = 85;

//        // Get marks using indexer
//        Console.WriteLine("Math: " + s1["Math"]);
//        Console.WriteLine("Science: " + s1["Science"]);
//    }
//}