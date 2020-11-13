// import SpaceAge from './js/space-age.js'; 
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  event.preventDefault();

  $(".galactic-age").show();

  const inputtedName = $("input#name").val();
  const inputtedAge = parseInt($("input#age").val());
  const inputtedLife = parseInt($("input#life-expectancy").val());

  
});
