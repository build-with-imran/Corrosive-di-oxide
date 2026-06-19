////// Inheritance test,

////using System;



////class Animal
////{
////    public void Sleep()
////    {
////        Console.WriteLine("Cat is Sleepng");
////    }
////}

////class Cat : Animal
////{
////    public void Meow()
////    {
////        Console.WriteLine("Cat is Meowing");
////    }
////}
////class Program
////{
////    static void Main()
////    {
////        Cat C = new Cat();

////        C.Sleep();
////        C.Meow();
////    }
////}


//// private ID execution public id calling

////using System;

////class Student
////{
////    static void Id()
////    {
////        Console.WriteLine("ID: 245567");
////    }

////    static void Name()
////    {
////        Console.WriteLine("Name: Imran P");
////    }

////    public void Showing()
////    {
////        Id();
////        Name();
////    }
////}

////class Program
////{
////    static void Main()
////    {
////        Student obj1 = new Student();
////        obj1.Showing();
////    }
////}


//// constructor 19.06.2026

//class student
//{
//    public string Name;
//    public student(string inputname)
//    {
//        Name = inputname;
//}
//}

//internal class class1
//{
//    static void Main()
//    { 
//    student obj1 = new student ("Immu");
//    student obj2 = new student("Gayu");

//        Console.WriteLine(obj1.Name);
//        Console.WriteLine(obj2.Name);

//    }
//}


//Constructor overloading :

//class Student
//{
//    public int ID;
//    public string Name;
//    public string Dept;
//    public String Gender;
//    public int TotalMarks;

//    public Student(int id, string name, string gender) 

//    { 
//        ID = id;
//        Name = name;
//        Gender = gender;
        
    
//    }

//    public Student(int id, string name, string dept, int totalMarks)
//    {
//        ID =id;
//        Name =name;
//        Dept=dept;
//        TotalMarks =totalMarks;

        
//    }

//    static void Main()
//    {
//        Student Forimmu = new Student(101, "Immu", "Male");
//        Console.WriteLine("Id : " + Forimmu.ID);
//        Console.WriteLine("Name :" + Forimmu.Name);
//        Console.WriteLine("Name :" + Forimmu.Gender);

//        Student ForGayu = new Student(102, "Gayu", "VISCOM", 564);
//        Console.WriteLine("Id : " + ForGayu.ID);
//        Console.WriteLine("Name :" + ForGayu.Name);
//        Console.WriteLine("Department :" + ForGayu.Dept);
//        Console.WriteLine("Total Mark Secured is " + ForGayu.TotalMarks);



//    }
//}


// Static Method. 


//namespace staticdemo
//{

//    class Mathhelper
//    { 
//    public static int x,y;
//        public static void Add(int a, int b)
//        {
//            x = a;  //static method only contains static variables
//            y = b;

//            Console.WriteLine(x + y);
//        }
//    }

//    internal class class2
//    {
//        static void Main()
//        {
//             Mathhelper.Add(10, 20);
        
//        }
//    }
//}



