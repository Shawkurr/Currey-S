package FizzBuzz;

public class FizzBuzz 
{

	public static void fizzBuzz1() 
	{
		
		for(int i = 1; i < 101; i++) 
		{
			if (i%5 == 0) 
			{
				System.out.println("Buzz");
			}
			else if(i%3 == 0) 
			{
				System.out.println("Fizz");
			}
			else if (i%5 == 0 && i%3 == 0) 
			{
				System.out.println("Fizzbuzz");
			}
			else {
				System.out.println(i);
				
			}
		}
	}
	
	
	
	public static void fizzBuzz2(int m,int n)
	{
		int i = 0;
		
		if (m >= n) 
		{
			return;
		}
		
		
		for(i = m ; i <= n; i++) 
		{
			if (i%5 == 0) 
			{
				System.out.println("Buzz");
			}
			else if(i%3 == 0) 
			{
				System.out.println("Fizz");
			}
			else if (i%5 == 0 && i%3 == 0) 
			{
				System.out.println("Fizzbuzz");
			}
			else {
				System.out.println(i);
				
			}
		}
	}
	
	public static void fizzBuzz3(int m, int n, int fNum, int bNum)
	{
		int i = 0;
		
		if (m >= n) 
		{
			return;
		}
		
		
		for(i = m ; i <= n; i++) 
		{
			if (i%bNum == 0) 
			{
				System.out.println("Buzz");
			}
			else if(i%fNum == 0) 
			{
				System.out.println("Fizz");
			}
			else if (i%bNum == 0 && i%fNum == 0) 
			{
				System.out.println("FizzBuzz");
			}
			else {
				System.out.println(i);
				
			}
		}
	}
	
	
	public static void fizzBuzz4(int m, int n, int[] numbers, String[] terms)
	{
		int i = 0;
		
		if (m >= n) 
		{
			return;
		}
		
		
		for(i = m ; i <= n; i++) 
		{
			if (i % numbers [0] == 0) 
			{
				System.out.println(terms[0]);
			}
			else if(i % numbers [1] == 0) 
			{
				System.out.println(terms[1]);
			}
			else if (i%m == 0 && i%n == 0) 
			{
				System.out.println(terms[0] + terms [1]);
			}
			else {
				System.out.println(i);
				
			}
		}
	}

	
	
}