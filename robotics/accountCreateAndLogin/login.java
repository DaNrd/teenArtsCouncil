import java.util.*;
import java.io.*;
import java.nio.file.Paths;
import java.nio.file.Files;

class login{

  // ---- function retrieves login info and makes sure inputed login info matches ----
  public static void main(String[] args){
    System.out.println("Username:");
    Scanner user = new Scanner(System.in);
    String userString = user.nextLine();
    System.out.println("Password:");
    Scanner password = new Scanner(System.in);
    String passwordString = password.nextLine();
    String inputed = userString + " : " + passwordString;
    try{
      String storedValue = Files.readAllLines(Paths.get("loginInfo.txt")).get(0);
      String loginInfo = decrypt(storedValue);
      System.out.println("storedValue is " + loginInfo);
      if(inputed == storedValue){
          System.out.println("You fucked up!");
      } else {
        System.out.println("Welcome " + userString + "!");
      }
    }catch (IOException e){
      e.printStackTrace();
    }
  }

// ---- function decrypts string with ujjwals weird shit formula ----
  public static String decrypt(String args){
    String decryptString = args;
    String returnString = "";
    for (int i = 0; i < decryptString.length(); i++){
      int num = decryptString.charAt(i);
      char newCharacter = (char) decryptChar(num);
      returnString += newCharacter;
    }
    return(returnString);
  }

// ---- function decrypts char with ujjwals weird shit formula ----
  public static double decryptChar(double args){
    double decrypt = args;
    decrypt = Math.cbrt(decrypt);
    decrypt -= 5;
    decrypt /= 7;
    decrypt += 15;
    return((char)decrypt);
  }
}
