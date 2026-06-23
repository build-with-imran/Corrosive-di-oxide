//using System;
//using System.IO;

//class Program
//{
//    static void Main()
//    {
//        string path = "data.txt";

//        // Write to file using StreamWriter
//        StreamWriter writer = new StreamWriter(path);
//        writer.WriteLine("Hello, this is a sample file.");
//        writer.WriteLine("C# File Handling Example.");
//        writer.Close();

//        // Read from file using StreamReader
//        StreamReader reader = new StreamReader(path);
//        string line;
//        while ((line = reader.ReadLine()) != null)
//        {
//            Console.WriteLine(line);
//        }
//        reader.Close();
//    }
//}