//////using System;

//////class Vehicle
//////{
//////    public string Brand { get; set; }

//////    public void Start()
//////    {
//////        Console.WriteLine(Brand + " is starting...");
//////    }
//////}

//////class Car : Vehicle
//////{
//////    public int Doors { get; set; }
//////}

//////class Bike : Vehicle
//////{
//////    public bool HasGear { get; set; }
//////}

//////class Program
//////{
//////    static void Main()
//////    {
//////        Car c1 = new Car();
//////        c1.Brand = "Toyota";
//////        c1.Doors = 4;
//////        c1.Start();
//////        Console.WriteLine("Doors: " + c1.Doors);

//////        Bike b1 = new Bike();
//////        b1.Brand = "Yamaha";
//////        b1.HasGear = true;
//////        b1.Start();
//////        Console.WriteLine("Has Gear: " + b1.HasGear);
//////    }
//////}


//////Task 2

////using System;

////class Payment
////{
////    public virtual void MakePayment()
////    {
////        Console.WriteLine("Generic payment processed.");
////    }
////}

////class CreditCard : Payment
////{
////    public override void MakePayment()
////    {
////        Console.WriteLine("Payment done using Credit Card.");
////    }
////}

////class PayPal : Payment
////{
////    public override void MakePayment()
////    {
////        Console.WriteLine("Payment done using PayPal.");
////    }
////}

////class UPI : Payment
////{
////    public override void MakePayment()
////    {
////        Console.WriteLine("Payment done using UPI.");
////    }
////}

////class Program
////{
////    static void Main()
////    {
////        Payment p1 = new CreditCard();
////        p1.MakePayment();

////        Payment p2 = new PayPal();
////        p2.MakePayment();

////        Payment p3 = new UPI();
////        p3.MakePayment();
////    }
////}


//// Task 3 operator overloading

//using System;

//class Complex
//{
//    public int Real;
//    public int Imaginary;

//    public Complex(int real, int imaginary)
//    {
//        Real = real;
//        Imaginary = imaginary;
//    }

//    // Operator overloading for +
//    public static Complex operator +(Complex c1, Complex c2)
//    {
//        return new Complex(c1.Real + c2.Real, c1.Imaginary + c2.Imaginary);
//    }

//    public void Display()
//    {
//        Console.WriteLine(Real + " + " + Imaginary + "i");
//    }
//}

//class Program
//{
//    static void Main()
//    {
//        Complex c1 = new Complex(2, 3);
//        Complex c2 = new Complex(4, 5);

//        Complex c3 = c1 + c2;
//        c3.Display();
//    }
//}