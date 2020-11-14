import SpaceAge from './js/space-age.js'; 
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    const inputtedName = $("input#name").val();
    const inputtedAge = parseInt($("input#age").val());
    const inputtedLife = parseInt($("input#life-expectancy").val());

    if ((inputtedName.length) > 0 && inputtedAge > -1 && inputtedLife > -1){
      $("#galactic-age").show();
    } else {
      alert("Please tell us your name! and input a number greater or equal to 0!");
    }

    let spaceAge = new SpaceAge(inputtedName, inputtedAge, inputtedLife);

    spaceAge.convertAge();
    spaceAge.lifeExpectancy();

    $("#mercury-age").html(`You would be ${spaceAge.ageArr[0]} years old on Mercury`);
    $("#venus-age").html(`You would be ${spaceAge.ageArr[1]} years old on Venus`);
    $("#mars-age").html(`You would be ${spaceAge.ageArr[2]} years old on Mars`);
    $("#jupiter-age").html(`You would be ${spaceAge.ageArr[3]} years old on Jupiter`);

    if(inputtedAge <= inputtedLife) {
      $("#mercury-expectancy").html(`You have ${spaceAge.lifeArr[0]} years left to live on Mercury`);
      $("#venus-expectancy").html(`You have ${spaceAge.lifeArr[1]} years left to live on Venus`);
      $("#mars-expectancy").html(`You have ${spaceAge.lifeArr[2]} years left to live on Mars`);
      $("#jupiter-expectancy").html(`You have ${spaceAge.lifeArr[3]} years left to live on Jupiter`);
    } else {
      $("#mercury-expectancy").html(`You have lived ${spaceAge.lifeArr[0]} years over the life expectancy on Mercury`);
      $("#venus-expectancy").html(`You have lived ${spaceAge.lifeArr[1]} years over the life expectancy on Venus`);
      $("#mars-expectancy").html(`You have lived ${spaceAge.lifeArr[2]} years over the life expectancy on Mars`);
      $("#jupiter-expectancy").html(`You have lived ${spaceAge.lifeArr[3]} years over the life expectancy on Jupiter`);
    }
    $("form#user-input")[0].reset();
  });
});
