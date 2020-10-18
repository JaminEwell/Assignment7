//STEP 1  Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
var movies = ["Terminator", "Rambo", "Hangover", "The Matrix", "Avengers"];
console.log(movies[1]);


/*STEP 2  Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. 
          Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
          Then, use the console to display the first movie in your array.*/

var movies = new Array(5);
movies[0] = "Terminator";
movies[1] = "Rambo";
movies[2] = "Hangover";
movies[3] = "Matrix";
movies[4] = "Avengers";

console.log(movies[0]);






/*STEP 3  Copy your code from step 2. Add a new movie into the 3rd position within your array.
          Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.*/

var movies = new Array(5);
movies[0] = "Terminator";
movies[1] = "Rambo";
movies[2] = "Hangover";
movies[3] = "Matrix";
movies[4] = "Avengers";
movies.splice(2, 0, "Captain America");

console.log(movies.length);

/*STEP 4  Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 
          total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.*/

/*STEP 5  Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7
          total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window./*

//STEP 6  Copy the code from step 5. Now, use a for-in loop to iterate through the array and display each movie within the console window.

//STEP 7  Copy the code from step 5. Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

/*STEP 8  Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. 
          Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):

Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3
…
*/



/*STEP 9 Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. 
Use the console window to display the list in reverse sorted order.*/

//STEP 10 Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.