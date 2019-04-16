
function myFunction() {

    var x = prompt("Please enter a number: ");
    var num = parseInt(x);
    document.write("<h3> Practice with JavaScript</h3>");
    if (num <=0)
    {
        document.write("Number must be greater than 0");
    }
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