

//using System;

//class Program
//{

//    static int[] ProductExceptSelf(int[] nums)
//    {

//        if (nums.Length == 0)
//        {
//            return new int[0];
//        }
//        if (nums.Length == 1)
//        {
//            return new int[] { 1 };
//        }

//        int n = nums.Length;
//        int[] result = new int[n];

//        // b. Compute product of all elements before index i
//        int[] left = new int[n];
//        left[0] = 1;
//        for (int i = 1; i < n; i++)
//        {
//            left[i] = left[i - 1] * nums[i - 1];
//        }

//        // Compute product of all elements after index i
//        int[] right = new int[n];
//        right[n - 1] = 1;
//        for (int i = n - 2; i >= 0; i--)
//        {
//            right[i] = right[i + 1] * nums[i + 1];
//        }

//        // Multiply left and right products
//        for (int i = 0; i < n; i++)
//        {
//            result[i] = left[i] * right[i];
//        }

//        return result;
//    }

////    static void Main()
////    {
////        int[] input = { 1, 2, 3, 4 };
////        int[] output = ProductExceptSelf(input);

////        Console.Write("Output: ");
////        foreach (int num in output)
////        {
////            Console.Write(num + " ");
////        }
////    }
////}