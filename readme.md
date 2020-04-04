# _A Neighborly Song_

#### _A Program to Generate A Robot Song Based on a User-Inputted Number_

#### By _**Julia Seidman**_

## Description

_This program takes a number from the user.  That number is then used to generate a custom robot greeting song following a set of prescribed instructions._

_Specifications:_
* The program returns a range of numbers from 0 to the user's inputted number.
    * Input: 4
    * Output: 0, 1, 2, 3, 4
* The program replaces all elements containing the character "1" with "Beep"
    * Input: 0, 1, ..., 11
    * Output: 0, Beep, ... , Beep
* The program replaces all elements containing the character "2" with "Boop"
    * Input: 0, ..., 2, ..., 12
    * Output: 0, ..., Boop, ..., Boop
* The program replaces all elements containing the character "3" with "(user name), Won't you be my neighbor?"
    * Input: 0, ..., 3, ..., 13
    * Output: 0, ..., Won't you be my neighbor?, ..., Won't you be my neighbor?
* The program replaces all elements not containing a 1, 2, or 3 but evenly divisible by 5 with "I will bring you (user favorite) cookies!"
    * Input: 0, ..., 5, ..., 45
    * Output: I will bring you () cookies! ... I will bring you () cookies! ... I will bring you () cookies!
* The program replaces all elements not containing a 1, 2, or 3 and not divisible by 5, but which are divisible by 4 with "We can plant (user favorite color) flowers by the mailbox!"
    * Input: ..., 4, ..., 8
    * Output: ..., We can plant () flowers by the mailbox! ... We can plant () flowers by the mailbox!
* The program will display the final output in groups of 5 array elements to approximate the verses of a song.  


## Setup/Installation Requirements

* _Open the page in a web browser._
* _Enter responses to the questions._
* _Sing along with the generated response._

## Known Bugs

__

## Support and contact details

_Contact Julia Seidman at juliaseid@gmail.com for support or questions._

### License

Copyright (c) 2020 **_Julia Seidman_** under MIT copyright
