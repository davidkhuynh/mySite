$(document).ready(function() {


var setter = true;
var setter1 = true;
var backgroundSetter = true;
var skillsSetter = true;

	$('#introPosition1').velocity({'right':'71%'}, 1000, function(){

			$('#introPosition1').click(function(){

				if(setter == true){


					$('#myBody').velocity({'background-color': '#FFF'});



						$(this).velocity({'top': '7%'}, 500, function(){

							$(this).stop(true,true).velocity({'rotateX': '180deg'}, 650);

						});

						$('#introPosition2').velocity({'top': '-30%'});
						$('#introPosition3').velocity({'top': '-30%'});
						$('#introPosition4').velocity({'top': '-30%'});



						setter = false;

				}

				else if (setter == false){

						$('#introPosition1').velocity({'background-color': 'transparent'}, 250);
						$(this).stop(true,true).velocity({'rotateX': '0deg'});

						$('#myBody').velocity({'background-color': '#F9F9F9'}, 50);


						$('#introPosition1').velocity({'top': '40%'}, 500);
						$('#introPosition2').velocity({'top': '40%'}, 500);
						$('#introPosition3').velocity({'top': '40%'}, 400);
						$('#introPosition4').velocity({'top': '40%'}, 300);


						setter = true; 

				}	

			});
	
		});


	$('#introPosition2').velocity({'right':'49%'}, 1000, function(){

		$( "#introPosition2" ).click(function( event ) {

			if(setter == true){

				event.preventDefault();


				$('#myBody').velocity({'background-color': '#000000'}, 1000);
				$(this).velocity({'color': '#ffffff'}, 50);
  				$('#container').show();


  				$('#introPosition1').velocity({'top': '-30%'});
  				$('#introPosition2').velocity({'top':'7%'});
				$('#introPosition3').velocity({'top': '-30%'});
				$('#introPosition4').velocity({'top': '-30%'});

  				setter = false;

			}

			else if (setter == false){
  				
  				$('#myBody').velocity({'background-color': '#EAEAEA'}, 1000);
				$('#introPosition2').velocity({'color': '#000000'}, 50);

  				$('#container').hide();

  				$('#introPosition1').velocity({'top': '40%'}, 300);
				$('#introPosition2').velocity({'top': '40%'}, 350);
				$('#introPosition3').velocity({'top': '40%'}, 400);
				$('#introPosition4').velocity({'top': '40%'}, 450);
  				setter = true;



			}
		});

	});
	$('#introPosition3').velocity({'right':'28%'}, 1000, function(){

			$('#introPosition3').click(function(){

				if(setter == true){
				
					$(this).velocity({'color': '#ffffff'}, 50);


					$('#introPosition1').velocity({'top': '-30%'});
  					$('#introPosition3').velocity({'top':'7%'});
  					$('#introPosition3').velocity({'left':'60%'});
					$('#introPosition2').velocity({'top': '-30%'});
					$('#introPosition4').velocity({'top': '-30%'});

					$('#myBody').velocity({'background-color': '#2c353e'});
					$('#skillsPosition1').velocity({'color': '#ffffff'}, 50);
  					$('#skillsPosition2').velocity({'color': '#ffffff'}, 50);
  					$('#skillsPosition3').velocity({'color': '#ffffff'}, 50);
					$('#skillsPosition4').velocity({'color': '#ffffff'}, 50);
					$('#skillsPosition5').velocity({'color': '#ffffff'}, 50);
					$('#skillsPosition6').velocity({'color': '#ffffff'}, 50);
					$('#skillsPosition7').velocity({'color': '#ffffff'}, 50);



					$('#skillsPosition1').velocity({'top': '20%'});
  					$('#skillsPosition2').velocity({'top':'30%'});
  					$('#skillsPosition3').velocity({'top':'40%'});
					$('#skillsPosition4').velocity({'top': '50%'});
					$('#skillsPosition5').velocity({'top': '60%'});
					$('#skillsPosition6').velocity({'top':'70%'});
					$('#skillsPosition7').velocity({'top': '80%'});
				

					$('#skillsPosition1').velocity({'left': '60%'});
  					$('#skillsPosition2').velocity({'left':'60%'});
  					$('#skillsPosition3').velocity({'left':'60%'});
					$('#skillsPosition4').velocity({'left': '60%'});
					$('#skillsPosition5').velocity({'left': '60%'});
					$('#skillsPosition6').velocity({'left': '60%'});
					$('#skillsPosition7').velocity({'left': '60%'});


					$('#skillsPosition1').click(function(){

						
						
						var css = document.getElementById("skillsBoxHeader");
						css.innerHTML = "<p>CSS</p>";


						if (skillsSetter == true){

							$('#skillsBoxHeader').velocity({'right': '10%'});
							$('#skillsBox').velocity({'right': '10%'});
							skillsSetter = false;
						
						}

					});

					$('#skillsPosition2').click(function(){

						document.getElementById("skillsBoxHeader").innerHTML = "<p>HTML</p>";

						if (skillsSetter == true){

							$('#skillsBoxHeader').velocity({'right': '10%'});
							$('#skillsBox').velocity({'right': '10%'});
							skillsSetter = false;
						
						}

					});
				
					setter = false;
				}

				else if (setter == false){



					$('#myBody').velocity({'background-color': '#F9F9F9'}, 250);
					$(this).velocity({'color': '#000000'}, 50);
					$('#skillsBoxHeader').stop(true,true).velocity({'right': '-50%'}, 250);
					$('#skillsBox').stop(true,true).velocity({'right': '-50%'}, 250);
					skillsSetter = true;

					$('#introPosition1').velocity({'top': '40%'}, 300);
					$('#introPosition2').velocity({'top': '40%'}, 350);
					$('#introPosition3').velocity({'left':'102%'}, 400);
					$('#introPosition3').velocity({'top': '40%'}, 400);
					$('#introPosition4').velocity({'top': '40%'}, 450);

					$('#skillsPosition1').velocity({'left': '-60%'});
  					$('#skillsPosition2').velocity({'left':'-60%'});
  					$('#skillsPosition3').velocity({'left':'-60%'});
					$('#skillsPosition4').velocity({'left': '-60%'});
					$('#skillsPosition5').velocity({'left': '-60%'});
					$('#skillsPosition6').velocity({'left': '-60%'});
					$('#skillsPosition7').velocity({'left': '-60%'});


					setter = true;

				}

		});

	});


	$('#introPosition4').velocity({'right':'6%'}, 1000, function(){


					





			$('#introPosition4').click(function(){

				if(backgroundSetter == true){

				event.preventDefault();

  				$('#container').show();


  				backgroundSetter = false;

			}

			else if (backgroundSetter == false){
  				


  				$('#container').hide();

  		
  				backgroundSetter = true;



			}

			});


			

		});



	});