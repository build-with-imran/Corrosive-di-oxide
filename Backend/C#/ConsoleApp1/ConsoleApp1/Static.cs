using System;
// Static field incremented in constructor
class Counter
{
    public static int count;

    public Counter()
    {
        count++;
    }
}

//class Program
//{
//    static void Main()
//    {
//        Counter c1 = new Counter();
//        Counter c2 = new Counter();
//        Counter c3 = new Counter();

//        Console.WriteLine("Final count: " + Counter.count);
//    }
//}

// Task 2: Static method example


class MathHelper
{
    public static int Square(int n)
    {
        return n * n;
    }
}

//class Program
//{
//    static void Main()
//    {
//        int result = MathHelper.Square(5);
//        Console.WriteLine("Square: " + result);
//    }
//}


static class Utility
{
    public static int Cube(int n)
    {
        return n * n * n;
    }
}

//class Program
//{
//    static void Main()
//    {
//        Console.WriteLine("Cube: " + Utility.Cube(3));
//    }
//}