$(document).ready(function(){


var totalSlides = 5 
var currentSlide = 1
 
			$(".right") .click (function(){

				if(currentSlide<totalSlides){


					$(".slidebox").animate({left:"-=1000"},"300")

					currentSlide  = currentSlide+1


				}

			})//end right ready//





						$(".left") .click (function(){


							if(currentSlide>1){


								$(".slidebox").animate({left:"+=1000"},"300")
								currentSlide  = currentSlide-1

							}

			})//end left ready//



}) //end doc ready//