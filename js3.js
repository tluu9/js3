
/*
Trang Luu
15 APR 2019
Use operator in Js to print out the string or number message depends on its result
Using prompt to get input
 */
function myFunction() {

    var x = prompt("Please enter a number: ");

    //convert to number
    var num = parseInt(x);

    //echo out Title
    document.write("<h3> Practice with JavaScript</h3>");

    //Print an error msg if number is less than 0
    if (num <=0)
    {
        document.write("Error!!!Number must be greater than 0");
    }

    //Print out Hee or Haw or HeeHaw if number is greater than 0
    else if (num > 0)
    {
        for(let i = 1; i <= num; i++)
        {

            if(i%3 === 0 && i%5 === 0)
            {
                document.write("Hee Haw!"+ "<br>");
            }

            else if(i%5 === 0)
            {
                document.write("Haw!"+ "<br>");
            }

            else if(i%3 === 0 )
            {
                document.write("Hee!"+ "<br>");
            }

            else
            {
                document.write(i+ "<br>");
            }
        }

    }
}