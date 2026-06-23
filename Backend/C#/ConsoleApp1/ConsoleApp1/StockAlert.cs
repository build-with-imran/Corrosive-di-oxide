//using System;

//// Delegate declaration
//delegate void PriceAlertHandler(string stockName, double price);

//class Stock
//{
//    public string Name;
//    private double price;

//    // Event based on the delegate
//    public event PriceAlertHandler OnPriceAlert;

//    public Stock(string name, double price)
//    {
//        Name = name;
//        this.price = price;
//    }

//    public void UpdatePrice(double newPrice)
//    {
//        price = newPrice;
//        Console.WriteLine(Name + " price updated to " + price);

//        // Trigger event if price crosses limit
//        if (price > 1000)
//        {
//            OnPriceAlert(Name, price);
//        }
//    }
//}

//class EmailService
//{
//    public void SendEmail(string stockName, double price)
//    {
//        Console.WriteLine("Email Alert: " + stockName + " crossed " + price);
//    }
//}

//class SMSService
//{
//    public void SendSMS(string stockName, double price)
//    {
//        Console.WriteLine("SMS Alert: " + stockName + " crossed " + price);
//    }
//}

//class LoggingService
//{
//    public void Log(string stockName, double price)
//    {
//        Console.WriteLine("Log: " + stockName + " price = " + price);
//    }
//}

//class Program
//{
//    static void Main()
//    {
//        Stock stock = new Stock("TCS", 950);

//        EmailService email = new EmailService();
//        SMSService sms = new SMSService();
//        LoggingService log = new LoggingService();

//        // Subscribing methods to the event
//        stock.OnPriceAlert += email.SendEmail;
//        stock.OnPriceAlert += sms.SendSMS;
//        stock.OnPriceAlert += log.Log;

//        // Update price - crosses 1000, triggers event
//        stock.UpdatePrice(1100);
//    }
//}