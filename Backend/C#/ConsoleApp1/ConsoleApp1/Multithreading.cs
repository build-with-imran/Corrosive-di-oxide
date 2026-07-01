//using System;
//using System.Threading;

//class Program
//{
//    static void PrintNumbers()
//    {
//        for (int i = 1; i <= 5; i++)
//        {
//            Console.WriteLine("Numbers: " + i);
//        }
//    }

//    static void PrintLetters()
//    {
//        for (char c = 'A'; c <= 'E'; c++)
//        {
//            Console.WriteLine("Letters: " + c);
//        }
//    }

//    static void PrintSquares()
//    {
//        for (int i = 1; i <= 5; i++)
//        {
//            Console.WriteLine("Squares: " + (i * i));
//        }
//    }

//    static void Main()
//    {
//        Thread t1 = new Thread(PrintNumbers);
//        Thread t2 = new Thread(PrintLetters);
//        Thread t3 = new Thread(PrintSquares);

//        t1.Start();
//        t2.Start();
//        t3.Start();

//        t1.Join();
//        t2.Join();
//        t3.Join();

//        Console.WriteLine("All threads finished execution.");
//    }
//}