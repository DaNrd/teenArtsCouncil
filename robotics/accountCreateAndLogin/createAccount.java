import java.util.*;
import java.io.*;
import java.nio.file.Paths;
import java.nio.file.Files;

class createAccount{

  // ---- function stores login info and makes sure passwords are the same ----
  public static void main(String[] args){
    System.out.println("Please enter a Username");
    Scanner user = new Scanner(System.in);
    String userString = user.nextLine();
    System.out.println("Please enter a Password");
    Scanner password = new Scanner(System.in);
    String passwordString = password.nextLine();
    System.out.println("Please confirm your password");
    Scanner password2 = new Scanner(System.in);
    String password2String = password2.nextLine();
    if(passwordString == password2String){
        System.out.println("They don't match. Please try again.");
    } else {
      System.out.println("Sucess! Your username is: " + "'" + userString + "'" + " And your password is: " + "'" + passwordString + "'");
      String storedValue = userString + " : " + passwordString;
      try{
        Files.writeString(Paths.get("loginInfo.txt"), encrypt(storedValue));
      }catch (IOException e){
        e.printStackTrace();
      }
    }
  }

// ---- function encrypts string with ujjwals weird shit formula ----
  public static String encrypt(String args){
    String encryptString = args;
    String returnString = "";
    for (int i = 0; i < encryptString.length(); i++){
      int num = encryptString.charAt(i);
      char newCharacter = (char) encryptChar(num);
      returnString += newCharacter;
    }
    return(returnString);
  }

// ---- function encrypts char with ujjwals weird shit formula ----
  public static double encryptChar(double args){
    double encrypt = args;
    encrypt -= 15;
    encrypt *= 7;
    encrypt += 5;
    encrypt = Math.pow(encrypt, 3);
    return((char)encrypt);
  }
}
