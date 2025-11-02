//1.Sum of Two Numbers
let num1 = parseInt(prompt("Enter the first number"));
let num2 = parseInt(prompt("Enter the first number"));

function summation(num1,num2){
    let sum = num1+num2;
    console.log("summation : "+sum);
}
summation(num1,num2);


//Movie Ticket Booking System

//create an object
const movie = {
      name: "Avengers",
      ticketPrice: 12,      // price per ticket
      seatsAvailable: 50
};

//create a function
function bookTickets(movie, numTickets){
    if(numTickets <=  movie.seatsAvailable){
        movie.seatsAvailable -= numTickets;
        let totalcost = numTickets*movie.ticketPrice;
        if(numTickets >= 5){
        totalcost *= 0.9;
        }
        console.log("Booking successful! total cost :$" + totalcost);
        
    }else{
        console.log("Not enough seats available");
    }
}
bookTickets(movie, 4);
bookTickets(movie, 6);