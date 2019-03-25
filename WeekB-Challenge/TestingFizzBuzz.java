package FizzBuzz;

public class TestingFizzBuzz extends FizzBuzz
{
	public static void main(String[] args) 
	{
		int[] numArray = {3, 5};
		String[] stringArray = {"Fizz", "Buzz"};
		
		//fizzBuzz1();
		//fizzBuzz2(1, 100);
		//fizzBuzz3(1, 100, 3, 5);
		fizzBuzz4(1, 100, numArray, stringArray);
	}
}