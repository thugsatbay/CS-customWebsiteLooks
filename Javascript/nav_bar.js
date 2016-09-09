//
//NAVBAR FLASH JS v1.01
//

$(document).ready(function() {  
//alert("Javascript Loaded");
$("#nav_bar").load("nav_bar.html",callback);
//load nav bar file

});


function callback()
{
	//alert("started");
	var position_this_off,position_flash,width_this,temp,flag;
	flash();
	 	
	 	$("#upper_head").mouseenter(function()
	 	{
	 	});

	 	$("#upper_head").mouseleave(function()
	 	{
	 		$("menu0,menu1,menu2,menu3").attr({"width":"80px","height":"40px"});
	 	});

		//Stop Flash when NavBar content selected
		$("#title0,#title1,#title2,#title3").mouseenter(function()
			{
				$("#home_menu"+$(this).data('type')).slideDown();
				$("#title"+$(this).data('type')).css("background-color","#000000");
				$(".flash").css("background-color","rgba(143,191,190,1)");
				$(".flash").stop(true,false);//quene,endof	

				//
				//Stop at middle of selection
				//

				position_flash=$(".flash").position();
				position_this_off=$("#menu"+$(this).data('type')).offset();
				width_this=$("#menu"+$(this).data('type')).width();
				position_this_off.left+=(width_this-100)/2;
				temp=position_this_off.left-position_flash.left;
				temp=Math.abs(temp);
				temp*=5000;
				temp/=1400;
				$(".flash").animate({left:position_this_off.left+"px"},temp,"linear");

			}
		);

		//Start Flash when menu unselected
		$("#menu0,#menu1,#menu2,#menu3").mouseleave(function()
			{
				$("#home_menu"+$(this).data('type')).slideUp("fast");
				$("#title"+$(this).data('type')).css("background-color","rgba(0,0,0,0)");
				$(".flash").stop(true,false);
				$(".flash").css("background-color","rgba(143,191,190,.6)");
				position_flash=$(".flash").position();
				
				//
				//temp is to calculate time to left distance to travel
				//

				temp=1400-position_flash.left;
				temp*=5000;
				temp/=1400;
				redColor=Math.floor((Math.random() * 256))
				blueColor=Math.floor((Math.random() * 256))
				greenColor=Math.floor((Math.random() * 256))
				$(".flash").css("background-color","rgba("+redColor+","+blueColor+","+greenColor+",.9)");
				$(".flash").animate({left:"1400px"},temp,"linear",flash);
			}
		);
}


function flash()
{
	$("#upper_head .flash").css("left","-50px");
	redColor=Math.floor((Math.random() * 256))
	blueColor=Math.floor((Math.random() * 256))
	greenColor=Math.floor((Math.random() * 256))
	$(".flash").css("background-color","rgba("+redColor+","+blueColor+","+greenColor+",.9)");
	$(".flash").animate({left:'1400px'},5000,"linear",flash);	
	
	
	//alert( Math.floor((Math.random() * 256)));
}