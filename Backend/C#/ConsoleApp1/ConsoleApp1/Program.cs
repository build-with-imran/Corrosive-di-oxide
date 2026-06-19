////////////////// Inheritance test,

////////////////using System;



////////////////class Animal
////////////////{
////////////////    public void Sleep()
////////////////    {
////////////////        Console.WriteLine("Cat is Sleepng");
////////////////    }
////////////////}

////////////////class Cat : Animal
////////////////{
////////////////    public void Meow()
////////////////    {
////////////////        Console.WriteLine("Cat is Meowing");
////////////////    }
////////////////}
////////////////class Program
////////////////{
////////////////    static void Main()
////////////////    {
////////////////        Cat C = new Cat();

////////////////        C.Sleep();
////////////////        C.Meow();
////////////////    }
////////////////}


//////////////// private ID execution public id calling

////////////////using System;

////////////////class Student
////////////////{
////////////////    static void Id()
////////////////    {
////////////////        Console.WriteLine("ID: 245567");
////////////////    }

////////////////    static void Name()
////////////////    {
////////////////        Console.WriteLine("Name: Imran P");
////////////////    }

////////////////    public void Showing()
////////////////    {
////////////////        Id();
////////////////        Name();
////////////////    }
////////////////}

////////////////class Program
////////////////{
////////////////    static void Main()
////////////////    {
////////////////        Student obj1 = new Student();
////////////////        obj1.Showing();
////////////////    }
////////////////}


//////////////// constructor 19.06.2026

//////////////class student
//////////////{
//////////////    public string Name;
//////////////    public student(string inputname)
//////////////    {
//////////////        Name = inputname;
//////////////}
//////////////}

//////////////internal class class1
//////////////{
//////////////    static void Main()
//////////////    { 
//////////////    student obj1 = new student ("Immu");
//////////////    student obj2 = new student("Gayu");

//////////////        Console.WriteLine(obj1.Name);
//////////////        Console.WriteLine(obj2.Name);

//////////////    }
//////////////}


//////////////Constructor overloading :

//////////////class Student
//////////////{
//////////////    public int ID;
//////////////    public string Name;
//////////////    public string Dept;
//////////////    public String Gender;
//////////////    public int TotalMarks;

//////////////    public Student(int id, string name, string gender) 

//////////////    { 
//////////////        ID = id;
//////////////        Name = name;
//////////////        Gender = gender;


//////////////    }

//////////////    public Student(int id, string name, string dept, int totalMarks)
//////////////    {
//////////////        ID =id;
//////////////        Name =name;
//////////////        Dept=dept;
//////////////        TotalMarks =totalMarks;


//////////////    }

//////////////    static void Main()
//////////////    {
//////////////        Student Forimmu = new Student(101, "Immu", "Male");
//////////////        Console.WriteLine("Id : " + Forimmu.ID);
//////////////        Console.WriteLine("Name :" + Forimmu.Name);
//////////////        Console.WriteLine("Name :" + Forimmu.Gender);

//////////////        Student ForGayu = new Student(102, "Gayu", "VISCOM", 564);
//////////////        Console.WriteLine("Id : " + ForGayu.ID);
//////////////        Console.WriteLine("Name :" + ForGayu.Name);
//////////////        Console.WriteLine("Department :" + ForGayu.Dept);
//////////////        Console.WriteLine("Total Mark Secured is " + ForGayu.TotalMarks);



//////////////    }
//////////////}


////////////// Static Method. 


//////////////namespace staticdemo
//////////////{

//////////////    class Mathhelper
//////////////    { 
//////////////    public static int x,y;
//////////////        public static void Add(int a, int b)
//////////////        {
//////////////            x = a;  //static method only contains static variables
//////////////            y = b;

//////////////            Console.WriteLine(x + y);
//////////////        }
//////////////    }

//////////////    internal class class2
//////////////    {
//////////////        static void Main()
//////////////        {
//////////////             Mathhelper.Add(10, 20);

//////////////        }
//////////////    }
//////////////}


////////////// Delegates 

////////////// that is a type safe object, that holds a reference of a Method.

////////////internal class class1
////////////{
////////////    public delegate void Mydelegate();
////////////    public static void Method1()
////////////    {
////////////        Console.WriteLine("hello World Imran Love Gayu");
////////////    }

////////////    static void Main()
////////////    {
////////////        Mydelegate d = Method1;
////////////        d();
////////////    }
////////////}


//////////using System;

//////////class PatternPrograms
//////////{
//////////    static void Main()
//////////    {
//////////        Console.WriteLine("Alphabet Pyramid:");
//////////        PrintAlphabetPyramid(5);

//////////        Console.WriteLine("\nNumber Palindrome Triangle:");
//////////        PrintNumberPalindromeTriangle(5);

//////////        Console.WriteLine("\nNumber Repeat Triangle:");
//////////        PrintNumberRepeatTriangle(5);
//////////    }

//////////    static void PrintAlphabetPyramid(int rows)
//////////    {
//////////        for (int i = 0; i < rows; i++)
//////////        {
//////////            for (int j = 0; j <= i; j++)
//////////                Console.Write((char)('A' + j));

//////////            for (int j = i - 1; j >= 0; j--)
//////////                Console.Write((char)('A' + j));

//////////            Console.WriteLine();
//////////        }
//////////    }

//////////    static void PrintNumberPalindromeTriangle(int rows)
//////////    {
//////////        for (int i = 1; i <= rows; i++)
//////////        {
//////////            for (int j = 1; j <= i; j++)
//////////                Console.Write(j);

//////////            for (int j = i - 1; j >= 1; j--)
//////////                Console.Write(j);

//////////            Console.WriteLine();
//////////        }
//////////    }

//////////    static void PrintNumberRepeatTriangle(int rows)
//////////    {
//////////        for (int i = 1; i <= rows; i++)
//////////        {
//////////            for (int j = 1; j <= i; j++)
//////////                Console.Write(i);

//////////            Console.WriteLine();
//////////        }
//////////    }
//////////}


////////using System;

////////class ReverseString
////////{
////////    static void Main()
////////    {
////////        string str = "hello";

////////        // Using logic (manual loop)
////////        string reversedLogic = "";
////////        for (int i = str.Length - 1; i >= 0; i--)
////////        {
////////            reversedLogic = reversedLogic + str[i];
////////        }
////////        Console.WriteLine("Reversed using logic: " + reversedLogic);

////////        // Using predefined method (Array.Reverse)
////////        char[] charArray = str.ToCharArray();
////////        Array.Reverse(charArray);
////////        string reversedMethod = new string(charArray);
////////        Console.WriteLine("Reversed using predefined method: " + reversedMethod);
////////    }
////////}

//////using System;

//////class PalindromeNumber
//////{
//////    static void Main()
//////    {
//////        int num = 12321;
//////        int original = num;
//////        int reversed = 0;

//////        while (num > 0)
//////        {
//////            int digit = num % 10;
//////            reversed = reversed * 10 + digit;
//////            num = num / 10;
//////        }

//////        if (original == reversed)
//////            Console.WriteLine(original + " is a Palindrome Number");
//////        else
//////            Console.WriteLine(original + " is not a Palindrome Number");
//////    }
//////}

////using System;

////class Factorial
////{
////    static void Main()
////    {
////        int num = 5;
////        long fact = 1;

////        for (int i = 1; i <= num; i++)
////        {
////            fact = fact * i;
////        }

////        Console.WriteLine("Factorial of " + num + " is " + fact);
////    }
////}

//using System;

//class DivideNumbers
//{
//    static void Main()
//    {
//        try
//        {
//            Console.Write("Enter first number: ");
//            int num1 = Convert.ToInt32(Console.ReadLine());

//            Console.Write("Enter second number: ");
//            int num2 = Convert.ToInt32(Console.ReadLine());

//            int result = num1 / num2;
//            Console.WriteLine("Result: " + result);
//        }
//        catch (FormatException)
//        {
//            Console.WriteLine("Error: Please enter valid numbers only.");
//        }
//        catch (DivideByZeroException)
//        {
//            Console.WriteLine("Error: Cannot divide by zero.");
//        }
//    }
//}