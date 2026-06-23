////using System;
////using System.Collections;
////using System.Collections.Generic;

////class Program
////{
////    static void Main()
////    {
////        // Generic List
////        List<int> list = new List<int> { 10, 20, 30 };
////        Console.WriteLine("List:");
////        foreach (int x in list) Console.WriteLine(x);

////        // Generic HashSet (no duplicates)
////        HashSet<int> hashSet = new HashSet<int> { 1, 2, 2, 3 };
////        Console.WriteLine("HashSet:");
////        foreach (int x in hashSet) Console.WriteLine(x);

////        // Generic Stack (LIFO)
////        Stack<int> stack = new Stack<int>();
////        stack.Push(1);
////        stack.Push(2);
////        stack.Push(3);
////        Console.WriteLine("Stack (pop order):");
////        while (stack.Count > 0) Console.WriteLine(stack.Pop());

////        // Generic Queue (FIFO)
////        Queue<int> queue = new Queue<int>();
////        queue.Enqueue(1);
////        queue.Enqueue(2);
////        queue.Enqueue(3);
////        Console.WriteLine("Queue (dequeue order):");
////        while (queue.Count > 0) Console.WriteLine(queue.Dequeue());

////        // Generic SortedSet (sorted, no duplicates)
////        SortedSet<int> sortedSet = new SortedSet<int> { 5, 1, 3 };
////        Console.WriteLine("SortedSet:");
////        foreach (int x in sortedSet) Console.WriteLine(x);

////        // Generic LinkedList
////        LinkedList<int> linkedList = new LinkedList<int>();
////        linkedList.AddLast(1);
////        linkedList.AddLast(2);
////        linkedList.AddLast(3);
////        Console.WriteLine("LinkedList:");
////        foreach (int x in linkedList) Console.WriteLine(x);

////        // Non-generic ArrayList
////        ArrayList arrayList = new ArrayList();
////        arrayList.Add(1);
////        arrayList.Add("two");
////        arrayList.Add(3.0);
////        Console.WriteLine("ArrayList:");
////        foreach (object x in arrayList) Console.WriteLine(x);
////    }
////}


////  Task 2 word frequency using dictionary 

//using System;
//using System.Collections.Generic;

//class Program
//{
//    static void Main()
//    {
//        string sentence = "the cat sat on the mat the cat ran";
//        string[] words = sentence.Split(' ');

//        Dictionary<string, int> freq = new Dictionary<string, int>();

//        foreach (string word in words)
//        {
//            if (freq.ContainsKey(word))
//            {
//                freq[word] = freq[word] + 1;
//            }
//            else
//            {
//                freq[word] = 1;
//            }
//        }

//        foreach (KeyValuePair<string, int> pair in freq)
//        {
//            Console.WriteLine(pair.Key + ": " + pair.Value);
//        }
//    }
//}
