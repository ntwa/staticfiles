// JavaScript Document
var graph_dataset_counter=0;// for 
var portion_sizes=new Array();
var food_group=new Array();

var time_of_activity_creation=new Array();// it can also store date of activity creation in case activities fall on different dates 
var date_of_weight_recording=new Array();
var steps_walked=new Array();

daily_steps=0;
daily_average_steps_week=0;
weekly_average_steps=0;
monthly_average_steps=0;
var activityGoal={Steps:0};
var activityGoalJson=activityGoal;

var mealsGoal={Starch:"None",FruitsAndVeges:"None",Dairy:"None",Fat:"None",Protein:"None"};
var mealsGoalJson=mealsGoal;


function retrieveGoals()
{
retrieveMealsGoal();
retrieveActivityGoal();	
	
	
	
}
//js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";


function showActivityGoal(result,beneficiaryName)
{
	
 
   						if(result.Steps!==undefined)
								{ 
								  
								   
								   //str="There is a goal of <b><i>"+result.Steps+"</i> steps per day</b>.";
								   str="The daily activity goal for <b>"+beneficiaryName+"</b> is to walk <b><i>"+result.Steps+"</i> steps per day</b>.";
								    switch(result.Steps)
									 {
									   case -1:str="None";break;
									   case -4:str="None";break;
									  // default:str="There is a goal of <b><i>"+result.Steps+"</i> steps per day</b>."; 
									  
									  default: str="The daily activity goal for <b>"+beneficiaryName+"</b> is to walk <b><i>"+result.Steps+"</i> steps per day</b>.";
								    
									 } 
									 
									   //$('.activity_goal').text(activityGoalJson.Steps);
                              $('.activity_goal').html("");
                              $('.activity_goal').append(str);
									   $
								  								  

								  }
   
	
	
}

function showMealsGstatesoal(result)
{ 
  					     
							     if(result.Fruits!==undefined)
								  { //var str="There is a "+result.Duration +" goal of "+result.Steps+" steps";
								  
								  
                           	   $('.fruits_portion').text(result.Fruits);
					                  $('.starch_portion').text(result.Starch);
					                  $('.dairy_portion').text(result.Dairy);
					                  $('.fat_portion').text(result.Fat);
					                  $('.protein_portion').text(result.Protein);								     
								     
							
									   if((result.Fruits=="None")&&(result.Starch=="None")&&(result.Dairy=="None")&&(result.Fat=="None")&&(result.Protein=="None"));
									   else
									    {
									    	var beneficiaryName=retrieveFromLocalStorage("Name");
									    	var str="The daily meal goal for <b>"+beneficiaryName+"</b> is to consume the following portion sizes from each food group"
									      //$('#mealgoalstatus').text(str);
									       $('#mealgoalstatus').html('');  
		                            $('#mealgoalstatus').append(str); 

										 }
										 
								  }


	
	
}



average_weight_recorded=0;
var weight_recorded=new Array();
var day_of_week=null
var plot_graph=0;
var food_or_activity=0;
var current_weight="0";
var recording_weight_allowed=false;
first_time_loading=true;
var placeholder_defined=false;
var clickscounter=0;
var pointsscored=0;

clickscounter=0;
pointsscored=0;
function incrementPoints()
{

pointsscored=pointsscored+1;
clickscounter=clickscounter+1

}

function filterPortionSizesData(data,keys_length_array)
{
       food_or_activity=0;
 
       for(var i=0;i< keys_length_array[0];i++)
       {
		//alert(data[i][0]+" -- "+data[i][1]);                               
	food_group[graph_dataset_counter]=data[i][0];
        portion_sizes[graph_dataset_counter]=data[i][1];
        //alert(food_group[graph_dataset_counter]);
	graph_dataset_counter++;
	plot_graph++;
       }
  
  			 
}



function filterActivitySizesData(data,keys_length_array)
{
 
var date_repetition=false;
food_or_activity=1;
var accumulated_steps=0;
      for(var i=0;i< keys_length_array[0];i++)
      {
		    
	time_of_activity_creation[graph_dataset_counter]=data[i][0];
	steps_walked[graph_dataset_counter]=data[i][1];
	accumulated_steps=accumulated_steps+steps_walked[i];
					
	graph_dataset_counter++;
					
	plot_graph++;
		   
		 
     }

     
     if(plot_graph>=1){
              var average_steps=accumulated_steps/graph_dataset_counter;
              average_steps=average_steps.toFixed(2); 

              daily_steps=accumulated_steps
              daily_average_steps_week=average_steps;
              weekly_average_steps=average_steps;
              monthly_average_steps=average_steps;
              
     


      }



		
  
  
  
   
			 
}

function filterWeightSizesData(data,keys_length_array)
{
        food_or_activity=2; 
        var accumulated_weight=0;
        
	for(var i=0;i< keys_length_array[0];i++)
        {
		  		
	    weight_recorded[graph_dataset_counter]=data[i][1];
	    date_of_weight_recording[graph_dataset_counter]=data[i][0];
       alert(data[i][1]);
         accumulated_weight=accumulated_weight+weight_recorded[graph_dataset_counter]
					
	graph_dataset_counter++;
        plot_graph++;
		   
		 
        }
        if(plot_graph>=1){
           average_weight_recorded=accumulated_weight/graph_dataset_counter;
           average_weight_recorded=average_weight_recorded.toFixed(2); 


            }

  
  
  
   
			 
}

      function drawTextAlongArc(context, str, centerX, centerY, radius, angle,points) {
        var len = str.length, s;
        context.save();
        context.translate(centerX, centerY);
        context.rotate(-1 * angle / 2);
        context.rotate(-1 * (angle / len) / 2);
        for(var n = 0; n < len; n++) {
          context.rotate(angle / len);
          context.save();
          context.translate(0, -1 * radius);
          s = str[n];
          context.fillText(s, points[0], points[1]);
          context.restore();
        }
        context.restore();
      }
	
  
function drawPlate()
{
    canvas = document.getElementById("myCanvas"); 
    ctx = canvas.getContext('2d');

    var img=document.getElementById("plate");
    ctx.drawImage(img,20,20); 	
	
	
}
  
  
 Math.degrees = function(rad)
 {
 return rad*(180/Math.PI);
 return rad*(180/Math.PI);
 }
 
Math.radians = function(deg)
 {
 return deg * (Math.PI/180);
 }


      
    function lineAtAngle(ctx,x1, y1, length, angle) {
 
    ctx.moveTo(x1, y1);
    x2=x1 + length * Math.cos(angle);
    y2=y1 + length * Math.sin(angle);
    //x2=Math.round(x2);
    //y2=Math.round(y2);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
}
function getPoint(c1,c2,radius,angle){
    return [c1+Math.cos(angle)*radius,c2+Math.sin(angle)*radius];
}


//var ctx=null;      
function pie(ctx1, w, h, datalist,colist, labels)
{
  var radius = h / 2 - 5;
  var centerx = w / 2;
  var centery = h / 2;
  var total = 0;
  var colors=["green","brown","blue","yellow","white"]
  for(x=0; x < datalist.length; x++) { total += datalist[x]; }; 
  var lastend=0;
  var offset = Math.PI / 2;
  for(x=0; x < datalist.length; x++)
  {
    var thispart = datalist[x]; 
    ctx1.beginPath();
    ctx1.fillStyle = colist[x];
    ctx1.moveTo(centerx,centery);
    var arcsector = Math.PI * (2 * thispart / total);
    ctx1.arc(centerx, centery, radius-40, lastend - offset, lastend + arcsector - offset, false);
    
    
    
    ctx1.strokeStyle =colors[x];
    ctx1.lineWidth=5;
    
    ctx1.lineTo(centerx, centery);
    ctx1.stroke();
    ctx1.fill();
    ctx1.closePath();	
    
    lastend += arcsector;	
  }
  
  lastend=0;
  var error=0.0
  half_border=Math.PI-offset;
  quarter_border=(half_border/2);
  three_quarter_border=quarter_border*3;
  ctx1.lineWidth=1;
   for(var x=0; x < datalist.length; x++)
  {
    var thispart = datalist[x]; 
   
    ctx1.beginPath();
    ctx1.fillStyle = "blue";
    ctx1.moveTo(centerx,centery);
    var arcsector = Math.PI * (2 * thispart / total);
    ctx1.arc(centerx, centery, radius-40, lastend - offset, lastend +offset, false);
    
       
   

    var angle=lastend - offset+(arcsector/2);
    //if(angle<0)
    //  angle=angle*-1;
    
    ctx1.stroke();
    ctx1.closePath();
    var points=getPoint(centerx, centery, radius-40,angle);
    ctx1.font = "12px Times New Roman";
    //ctx1.textAlign = 'left';
    ctx1.strokeStyle ="white";
    ctx1.fillStyle="red";
    ctx1.lineWidth=1
    //
    
    var perc=(datalist[x]*100)/total;
    var old_val=perc;
    
    perc=Math.round(perc);
    
    error=error+(old_val-perc);
    if(x==(datalist.length-1))
     {
     	 perc=perc+Math.round(error);
     	
     	}
    
    var percstr="";
    percstr=percstr+perc;
    percstr=percstr+"%";
    if((lastend-offset)<half_border){
    	ctx1.textAlign = 'left';
    	//ctx1.save();
       //ctx1.rotate(Math.radians(20));
         //alert(labels[x]);
         
         if(labels[x]=="Fruits & Veg")
          {
          	ctx1.fillText("Fruits &",points[0],points[1]);
          	ctx1.fillText("Veg",points[0],points[1]+14);
          	ctx1.font = "18px Times New Roman";
          	ctx1.strokeText(percstr,points[0],points[1]+28);
          	
          	}
          	else{
          	
              ctx1.fillText(labels[x],points[0],points[1]);
              ctx1.font = "15px Times New Roman";
              ctx1.strokeText(percstr,points[0],points[1]+14);
              }
         
            //ctx1.restore();
            }
    else{
    	 ctx1.textAlign = 'right';
       ctx1.fillText(labels[x],points[0],points[1]);
       ctx1.font = "15px Times New Roman";
       ctx1.strokeText(percstr,points[0],points[1]+14);


        }
    
      
    
    lastend += arcsector;	
    
  }
   
}

function plotFoodChart(created_chart_data)
{


 	
		
	//var datalist= new Array(15, 35, 20, 12, 7); 
var total=100;

/*
var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext('2d');

var img=document.getElementById("plate");
ctx.drawImage(img,0,0);
*/
var img=document.getElementById("fruitsveg");
var pat=ctx.createPattern(img,"repeat");
var img2=document.getElementById("starch");
var pat2=ctx.createPattern(img2,"repeat");

var img3=document.getElementById("protein");
var pat3=ctx.createPattern(img3,"repeat");


var img4=document.getElementById("fat");
var pat4=ctx.createPattern(img4,"repeat");

var img5=document.getElementById("dairy");
var pat5=ctx.createPattern(img5,"repeat");

	var datalist=new Array();
	var colist = new Array();
	var labels = new Array();
for(var i=0;i<5;i++){
	datalist[i]=created_chart_data[i].data;
	labels[i] = created_chart_data[i].label;
	switch(created_chart_data[i].label)	
	 {
		case "Fruits & Veg":colist[i]=pat;break;
		case "Starch":colist[i]=pat2;break;
		case "Protein":colist[i]=pat3;break;
		case "Fat":colist[i]=pat4;break;
		case "Dairy":colist[i]=pat5;break;
		
		
		
		}
	}

//var colist = new Array(pat, pat2, pat3, pat4, pat5);
pie(ctx, canvas.width, canvas.height, datalist,colist,labels);	
	
	
	
	
	
	
	}


    
  function drawChart(record,keys_length_array,graphtype) {
	  
	  if(graphtype=='M'){
	  filterPortionSizesData(record,keys_length_array);
	     plot('FG1');
	   }
	   else
	   if(graphtype=='A'){
	  
	   filterActivitySizesData(record,keys_length_array);
	   plot('AG1');
	   }
	   else
	   if(graphtype=="W"){
	   filterWeightSizesData(record,keys_length_array);
	   plot('WG1');
	   }

    }

 
function labelFormatter(label, series) {
		return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
	}
	


	
var dont_replot=false;
function plot(command){

var placeholder;

if(food_or_activity==0){
   placeholder = $("#mealplaceholder");
}
else{
     if(food_or_activity==1)
         placeholder = $("#activityplaceholder");
         
     else
         if(food_or_activity==2)
             placeholder = $("#weightplaceholder");
         else
             return; // dont plot because the graph type is undefined

}

	 
	   
       //var width=$("#placeholder").css("width");
            var width=placeholder.css("width");
            width=width.substring(0, width.length - 2);
	    var height=width*0.7;
	    height=height+"px";

	    //$("#placeholder").css("height",height);
       //placeholder.css("height",height);
	
	    //assign days to portion sizes
	    created_chart_data=new Array();
	    
          

	    for(var i=0;i<graph_dataset_counter;i++){ 
  
			  created_chart_data[i]=new Array();
			  if(food_or_activity==0)
			    {
			     //created_chart_data[i][0]=food_group[i];
			     //created_chart_data[i][1]=""+portion_sizes[i]+"";
                               created_chart_data[i] = {
				label: food_group[i],
				data: portion_sizes[i]
			        };

                                 
                         
                                //alert(created_chart_data[i]["label"]+"--"+created_chart_data[i]["data"]);

				 }
			   else
			     {
				 
				  if(food_or_activity==1){
				   // created_chart_data[i][0]=time_of_activity_creation[i];
                                   
			           created_chart_data[i][0]=time_of_activity_creation[i]; 
                                   created_chart_data[i][1]=steps_walked[i];
					
					 
				   }
				  else
			          {
                                     if(food_or_activity==2){
					     created_chart_data[i][0]=date_of_weight_recording[i];
					     created_chart_data[i][1]=weight_recorded[i];
                                     }
                                     
						 
				}
			    }	 
			   
	   }
		
		
//initialize the two arrays for each graph type to be used for the next plotting
		

//food_or_activity=1;

  if((plot_graph>0) || (plot_graph==-1)){
		
		    if(food_or_activity==0)

                    {
                    	
                    	//plotFoodGraph();
                           /*

                           $.plot('#placeholder', created_chart_data, {
				    series: {
					pie: {
					    show: true,
					    radius: 1,
					    label: {
						show: true,
						radius: 3/4,
						formatter: labelFormatter,
						background: {
						    opacity: 0.5
						}
					    }
					}
				    },
				    legend: {
					show: false
				    }
				});*/

				//$.plot('#placeholder', created_chart_data, {
                /*                  $.plot(placeholder, created_chart_data, {
				    series: {
					pie: {
                                            innerRadius: 0.3,
					    show: true
					}
				    },
				   legend: {
						show: false
			            }
				});
				
				*/
				
				//start food graph
				
				
				
				
				//end food graph

				 if(plot_graph==-1){
				     //alert("No data for activity from \" "+previous_day_displayed+"\"");
				    $("#canvasshelter").html('');
				    var canvas_str="<canvas id='myCanvas' width='240' height='240' style='border:1px solid #d3d3d3;'>Your browser does not support the HTML5 canvas tag.</canvas>";  
					  $("#canvasshelter").append(canvas_str);
					  drawPlate();
					 $('#mealsummary').text("");
					 $('#mealsummary').append("<font style=\"color:red\"><b>Error:</b></font> No data for meals recorded \" "+previous_day_displayed_meal+"\" ");
					  
				}
				else
				{
				  plotFoodChart(created_chart_data);
				  $('#mealsummary').text(""); 
			          $('#mealsummary').append("Check <b><i>Diet Info</i></b> to see if this individual is eating a balanced diet and comment on that");
				 }






                     }//end of if statement that checks if food_or_activity==0
                    else
                    { 

                                   if(food_or_activity==1){
                                   	placeholder.css("height",height);/*
						      //var graph=$.plot("#placeholder", [created_chart_data], {
							var graph=$.plot(placeholder, [created_chart_data], {
							series: {
								bars: {
									show: true,
									barWidth: 0.4,
									align: "center",
									//steps: true 
								},
								points: { show: true },
								color:"green"
							},
							xaxis: {
								mode: "categories",
								tickLength: 0
							},
			
							grid:{
								backgroundColor: { colors: [ "#fff", "#eee" ] },
								borderWidth: {
									top: 1,
									right: 1,
									bottom: 2,
									left: 2
								  }
							  }
			
						     });
*/


		//var data = [ ["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9] ];

		$.plot(placeholder, [ created_chart_data ], {
			series: {
				bars: {
					show: true,
					barWidth: 0.6,
					align: "center"
				},
                                color:"green"
			},
			xaxis: {
				mode: "categories",
				tickLength: 0
			}
		});



              




                                                // placeholder.onload(function(){

                                                 //var placeholdercontent=(placeholder.html());
                                                 //placeholder.html('');
                                                 //placeholder.append(placeholdercontent);


                                                // });
                                              // var placeholdercontent=(placeholder.html());
                                                // placeholder.html('');
                                                // placeholder.append(placeholdercontent);

						if(plot_graph==-1){
						     //alert("No data for activity from \" "+previous_day_displayed+"\"");
							 $('#activitysummary').text("");
							 $('#activitysummary').append("<font style=\"color:red\"><b>Error:</b></font> No data for steps walked \" "+previous_day_displayed_activity+"\" ");
							  
							  }
						else
						   {
						    
							  if((previous_day_displayed_activity=="This week") || (previous_day_displayed_activity=="Last week")){
							 //time_average_steps=accumulated_steps/6;
								$('#activitysummary').text("The average number of steps walked per day in 7 days period is:" +Math.floor(daily_average_steps_week)+"");
							   }
                                             
							   else
                                                              {
							       if(previous_day_displayed_activity=="Today")
                                                                {



								  $('#activitysummary').text("The total number of steps walked today is:" +daily_steps+"");



                                                                }
                                                                else
                                                                   {
                                                                      if((previous_day_displayed_activity=="This month") ||(previous_day_displayed_activity=="Last month")){

								          $('#activitysummary').text("The average number of steps walked per day in a month period is:" +Math.floor(weekly_average_steps)+"");
                                                                        }
                                                                       else
                                                                          {
                                                                           if(previous_day_displayed_activity=="Last three months"){
                                                                  


                                                                             $('#activitysummary').text("The average number of steps walked per day in a period of three months is:" +Math.floor(monthly_average_steps)+"");

                                                                           }

                                                                         }
                                                                    }
						               }


                                                    }






                                 }//end of if statement that checks if food_or_activity==1
                                 else
                                 {

                                     if(food_or_activity=2)
                                        {
                                           placeholder.css("height",height);

						      //var graph=$.plot("#placeholder", [created_chart_data], {
							var graph=$.plot(placeholder, [created_chart_data], {
							series: {
								bars: {
									show: true,
									barWidth: 0.4,
									align: "center",
									//steps: true 
								},
								points: { show: true },
								color:"green"
							},
							xaxis: {
								mode: "categories",
								tickLength: 0
							},
			
							grid:{
								backgroundColor: { colors: [ "#fff", "#eee" ] },
								borderWidth: {
									top: 1,
									right: 1,
									bottom: 2,
									left: 2
								  }
							  }
			
						     });


						if(plot_graph==-1){
						     //alert("No data for activity from \" "+previous_day_displayed+"\"");
							 $('#weightsummary').text("");
							 $('#weightsummary').append("<font style=\"color:red\"><b>Error:</b></font> No data for weight recorded \" "+previous_day_displayed_weight+"\" ");
							  
							  }
						else
						   {
						    
							 
								$('#weightsummary').text("The average weight in kgs recorded in \""+previous_day_displayed_weight+ "\" is :" +Math.floor(average_weight_recorded)+"");
							  
							   
						   }





                                    
                                     

                                        }





                                 }

                     }

	

		 }
		
 
     plot_graph=0;

     time_of_activity_creation=new Array();
     steps_walked=new Array();


     food_group=new Array();
     portion_sizes=new Array();

     date_of_weight_recording=new Array();
     weight_recorded=new Array();

     graph_dataset_counter=0;



}

var starch=0;
var fruits=0;
var dairy=0;
var fat=0;
var protein=0;

 function enable_disable(selected_food)
 {

     //if($("#starchfood").is(":disabled"))
       //$("#starchfood").prop('disabled', false);
   switch(selected_food)
   {
    case "starch": $("#starch").prop('disabled', false);$("#fruits").prop('disabled',true);$("#protein").prop('disabled',true);$("#fat").prop('disabled',true);$("#dairy").prop('disabled',true);break;
	case "fruits": $("#starch").prop('disabled', true);$("#fruits").prop('disabled',false);$("#protein").prop('disabled',true);$("#fat").prop('disabled',true);$("#dairy").prop('disabled',true);break;
	case "protein": $("#protein").prop('disabled', true);$("#fruits").prop('disabled',true);$("#protein").prop('disabled',false);$("#fat").prop('disabled',true);$("#dairy").prop('disabled',true);break;  
    case "dairy": $("#starch").prop('disabled', true);$("#fruits").prop('disabled',true);$("#protein").prop('disabled',true);$("#fat").prop('disabled',true);$("#dairy").prop('disabled',false);break;
    case "fat": $("#starch").prop('disabled', true);$("#fruits").prop('disabled',true);$("#protein").prop('disabled',true);$("#fat").prop('disabled',false);$("#dairy").prop('disabled',true);break;
   }

 
 }

 var fruit_portion_size=0;
 var starch_portion_size=0;
 var protein_portion_size=0;
 var fat_portion_size=0;
 var dairy_portion_size=0;
 
 function getPortionSize(size_identifier)
 {
   
	   switch(size_identifier)
	   {
	   case 1: return "Small";
		case 2: return "Medium";
		case 3: return "Large";
		default: return "None";
	   
	   
	   }
 
 
 }
 
 
 function updateChart(selected_food_group)
 { 
  incrementPoints();
  
  
  switch(selected_food_group)
  {
   //case "fruits":document.getElementById("fruits_portion").innerHTML=$("#fruits").val();fruits=$("#fruits").val();break;
   case "fruits":fruit_portion_size++;$(".fruits_portion").text(""+getPortionSize(fruit_portion_size)+"");if(fruit_portion_size>3)fruit_portion_size=0;fruits=fruit_portion_size;break;
   case "starch":starch_portion_size++;$(".starch_portion").text(""+getPortionSize(starch_portion_size)+"");if(starch_portion_size>3)starch_portion_size=0;starch=starch_portion_size;break;
   case "protein":protein_portion_size++;$(".protein_portion").text(""+getPortionSize(protein_portion_size)+"");if(protein_portion_size>3)protein_portion_size=0;protein=protein_portion_size;break;
   case "fat":fat_portion_size++;$(".fat_portion").text(""+getPortionSize(fat_portion_size)+"");if(fat_portion_size>3)fat_portion_size=0;fat=fat_portion_size;break;
   case "dairy":dairy_portion_size++;$(".dairy_portion").text(""+getPortionSize(dairy_portion_size)+"");if(dairy_portion_size>3)dairy_portion_size=0;dairy=dairy_portion_size;break;
     
  }
 
 
     
 }
  function loadDatePicker()
  {
    //date picker on the record meal page
	$('#main_interface_wrapper').delegate("#datepicker", "click", function () {
      if (!$(this).hasClass("hasDatepicker"))
        {
            $(this).datepicker();
            $(this).datepicker("show");
			
        }
		
	});
	
	
	
	$('#main_interface_wrapper').delegate("#datepicker", "change", function () {
       
	  
		var picked_date=""+$('#datepicker').val();
		var first_slash=picked_date.indexOf("/");
		var second_slash=picked_date.lastIndexOf("/");
		incrementPoints();
		var mm=picked_date.substring(0,first_slash);
		var month=mm;
		switch(mm)
		{
		case "01":mm="January";break;
		case "02":mm="February";break;
		case "03":mm="March";break;
		case "04":mm="April";break;
		case "05":mm="May";break;
		case "06":mm="June";break;
		case "07":mm="July";break;
		case "08":mm="August";break;
		case "09":mm="September";break;
		case "10":mm="October";break;
		case "11":mm="November";break;
		case "12":mm="December";break;
		
		}
		var dd=picked_date.substring(first_slash+1,second_slash);
		var yyyy=picked_date.substring(second_slash+1,picked_date.length);
		$('#datepicker').val(dd+" "+mm+" "+yyyy);
		$('#date_eaten').val(yyyy+"-"+month+"-"+dd);
		
		
	});
  
  }
  
  
  
  //this date picker is for plot meal graphs and plot activity graphs
   function loadDatePicker_1()
  {
 
    //date picker on the record meal page
	$('#main_interface_wrapper').delegate("#datepickerweight", "click", function () {
      if (!$(this).hasClass("hasDatepicker"))
        {
            $(this).datepicker();
            $(this).datepicker("show");
			
        }
		
	});
	
  if(first_time_loading)
	$('#main_interface_wrapper').delegate("#datepickerweight", "change", function () {
       
	    first_time_loading=false;
		var picked_date=""+$('#datepickerweight').val();
		//alert(picked_date);
		  var first_slash=picked_date.indexOf("/");
		var second_slash=picked_date.lastIndexOf("/");
		
		var mm=picked_date.substring(0,first_slash);
		var month=mm;
		switch(mm)
		{
		case "01":mm="January";break;
		case "02":mm="February";break;
		case "03":mm="March";break;
		case "04":mm="April";break;
		case "05":mm="May";break;
		case "06":mm="June";break;
		case "07":mm="July";break;
		case "08":mm="August";break;
		case "09":mm="September";break;
		case "10":mm="October";break;
		case "11":mm="November";break;
		case "12":mm="December";break;
		
		}
		var dd=picked_date.substring(first_slash+1,second_slash);
		var yyyy=picked_date.substring(second_slash+1,picked_date.length);
		$('#datepickerweight').val(dd+" "+mm+" "+yyyy);
		$('#date_eaten_1').val(yyyy+"-"+month+"-"+dd);
		$('#date_captured_weight').val(yyyy+"-"+month+"-"+dd);
		 if(recording_weight_allowed)
		   {
		     
		     retrieveWeight();
			
			}
	});
  
  }
  
  
  //this date picker is for plot meal graphs and plot activity graphs
    function loadDatePicker_2()
  {
    //date picker on the record meal page
	$('#main_interface_wrapper').delegate("#datepicker2", "click", function () {
      if (!$(this).hasClass("hasDatepicker"))
        {
            $(this).datepicker();
            $(this).datepicker("show");
        }
		 
	});
	
	
 if(first_time_loading)
	$('#main_interface_wrapper').delegate("#datepicker2", "change", function () {
	    first_time_loading=false; 
		var picked_date=""+$('#datepicker2').val();
		  var first_slash=picked_date.indexOf("/");
		var second_slash=picked_date.lastIndexOf("/");
		
		var mm=picked_date.substring(0,first_slash);
		var month=mm;
		switch(mm)
		{
		case "01":mm="January";break;
		case "02":mm="February";break;
		case "03":mm="March";break;
		case "04":mm="April";break;
		case "05":mm="May";break;
		case "06":mm="June";break;
		case "07":mm="July";break;
		case "08":mm="August";break;
		case "09":mm="September";break;
		case "10":mm="October";break;
		case "11":mm="November";break;
		case "12":mm="December";break;
		
		}
		var dd=picked_date.substring(first_slash+1,second_slash);
		var yyyy=picked_date.substring(second_slash+1,picked_date.length);
		$('#datepicker2').val(dd+" "+mm+" "+yyyy);
		$('#date_eaten_2').val(yyyy+"-"+month+"-"+dd);
		$('#date_captured_2').val(yyyy+"-"+month+"-"+dd);
		
	});
  
  } 
  
function saveMealStep1()
{
$('#main_interface_wrapper').load('http://ict4d01.cs.uct.ac.za/wellness/facebook/cmd/F3',function(){  
		$('#fruits_portion').text(fruits);
		$('#starch_portion').text(starch);
		$('#fat_portion').text(fat);
		$('#dairy_portion').text(dairy);
		$('#protein_portion').text(protein);
		loadDatePicker();
  });

}

function saveMealFinal()
{

//var  jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, Fruits: fruits, Starch: starch, Fat: fat, Dairy: dairy, Protein: protein, MealType: $('#meal_type').val(),DateEaten:$('#date_eaten').val() };

var fruits_portion="";
var starch_portion="";
var fat_portion="";
var dairy_portion="";
var protein_portion="";


var fruits_label  = $('.fruits_portion').text();
for(var ind=0;ind<fruits_label.length;ind++){
//alert ("bingo");
  if(ind==((fruits_label.length)/2))
      break;//break outside of the loop after encountering the first word
  fruits_portion =fruits_portion+fruits_label[ind];
  
 
}


var starch_label  = $('.starch_portion').text();

for(var ind=0;ind<starch_label.length;ind++){

  if(ind==((starch_label.length)/2))
      break;//break outside of the loop after encountering the first word
  starch_portion = starch_portion+starch_label[ind];

}


var fat_label  = $('.fat_portion').text();
for(var ind=0;ind<fat_label.length;ind++){
	
  if(ind==((fat_label.length)/2))
      break;//break outside of the loop after encountering the first word  
  fat_portion = fat_portion+fat_label[ind];
 
}


var dairy_label  = $('.dairy_portion').text();
for(var ind=0;ind<dairy_label.length;ind++){
  if(ind==((dairy_label.length)/2))
      break;//break outside of the loop after encountering the first word
  dairy_portion = dairy_portion+dairy_label[ind];
}

var protein_label  = $('.protein_portion').text();
for(var ind=0;ind<protein_label.length;ind++){
  if(ind==((protein_label.length)/2))
      break;//break outside of the loop after encountering the first word
  protein_portion =protein_portion+protein_label[ind];
}


var  jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, Fruits:fruits_portion,Starch:starch_portion, Fat:fat_portion, Dairy:dairy_portion, Protein:protein_portion, MealType: $('#meal_type').val(),DateEaten:$('#date_eaten').val()};

//alert(jsonObjects.Fruits+","+jsonObjects.Starch+","+jsonObjects.Fat+","+jsonObjects.Dairy+","+jsonObjects.Protein+","+jsonObjects.Points+","+jsonObjects.ClicksCounter);


if((fruits_portion == "None") &&(starch_portion=="None") && (fat_portion=="None") && (dairy_portion=="None")&&(protein_portion="None")){
   alert("Please Specify the portion size of at least one food group before saving!");
   return;
   }
  
 if((jsonObjects["DateEaten"]==null)|| (jsonObjects["DateEaten"]==null) || (jsonObjects["DateEaten"]=="None")){
     alert("Please Specify the date in which the food was eaten!");
     return;  
   }
   
  if(jsonObjects["MealType"]=="Meal Type"){
     alert("Please Specify the type of meal!");
     return;
   
   }
 
//alert(jsonObjects["DateEaten"]);
 //return;
//var  jsonObjects={Fruits: $('#fruits_portion').text();,Starch:$('#starch_portion').text()};//, Fat: $('#fat_portion').text();, Dairy: $('#dairy_portion').text();, Protein: $('#protein_portion').text(), MealType: $('#meal_type').val(),DateEaten:$('#date_eaten').val() };


jQuery.ajax({
       url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/dataupdate/SM/",//save meal to the database
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
	  
      success: function(result) {
     //Write your code here
      clickscounter=0;
      pointsscored=0;
    
           alert(result["R00"]["F0"]);
	    //alert(result["message"]);
      }
});

}


function saveWeight()
{
var  jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, Weight: $('#weight').val(), DateCaptured:$('#date_captured_weight').val()  };


jQuery.ajax({
       url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/dataupdate/SW/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
      success: function(result) {
      	
      	 clickscounter=0;
          pointsscored=0;
     //Write your code here
                       if(result.message!==undefined)
                           { var str=result.message;
                             alert(str);
								      
			   }
								  
                       else
			    alert("Undefined");
                   }
               });

}


function displayScoreBoard(selectedvalue)
{
	
var  jsonObjects;
jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, Day:selectedvalue};

previous_day_displayed_scoreboard=selectedvalue;


//Retrieve score board
jQuery.ajax({
	  url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/jsondata/RSB/",
      type: "POST",
	  cache: false,
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
       error:function(xhr){
     
        var scoreboardJSONstr=retrieveFromLocalStorage("ScoreBoard");
        var scoreboardJSON=JSON.parse(scoreboardJSONstr);
        for(var x in scoreboardJSON)
        {
        	
         
        
        	  
         if(x==selectedvalue) 
           {
             scoredata=scoreboardJSON[""+x+""];
  
             showScoreBoard(scoredata);       
                     	
           	}       	
        	}
        
      
    },
      success: function(result) {
      	
      	 clickscounter=0;
          pointsscored=0;
          showScoreBoard(result);
          updateLocalStorage("ScoreBoard",result,selectedvalue);
          
            }
    });
	
         
       //}
    //});
	
	
	
	
	
	
	
}

var current_garden="Nothing";
function appendTeamToGarden(box){
	
	
	if(current_garden=="Nothing");
		else
		{
			  
	              	
	              	 var old_posn=current_garden.substr(3,current_canvas.length);
	          	    old_box="box";
	              	 old_box=old_box+old_posn;
	              	 
	              	 
	
                   
                   if((box=="left")){
                      old_posn--;	      
                   	if(old_posn==-1)
                   	  {
                   	  	old_posn=teams.length-1;
                   	  	
                   	  	
                   	  	}
                   	
                   	}
                   	else
                   	{
                      //alert("Got here");
                   	old_posn++;	
                   	
                   	//alert("Got here");
                   	if(old_posn==teams.length)
                   	  {
                   	  	old_posn=0;
                   	  	
                   	  	
                   	  	}	
                   		
                   	}
                   	
	              	box="box";
	              	box=box+old_posn;
	              	//alert(box);
	              	current_garden=box;
			
			        
			
			
			
			}
		
	
	 var posn=parseInt(box.substr(3,box.length));
	  
	
	
	  var str=teams[posn];
     str=str+":#";
     var rank="";
     var tie="";
     
     //alert(points[posn]);
     if(points[posn]>0)
     {
     rank=posn;
     rank=rank+1;
     	}
     	else
     	{
     		if(posn>0)
     		{
     			if(points[posn-1]==0)
     			{
     			 
     			rank=posn;
     			tie="Tie";
     			
     				
     			}
     			else
     			{
     				   rank=posn;
                  rank=rank+1;
     				
     				}
     			
     		}
     		else
     		  {
     		  	rank=posn;
     		  	rank=rank+1;
     		  	}
     		
     		}
 
     
     str=str+rank;
     $("#teamscoregarden").html('');
     $("#teamscoregarden").append(str);
	
	}

function displayScoreGardens(selectedvalue)
{
	
var  jsonObjects;

jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, Day:selectedvalue};

previous_day_displayed_scoreboard=selectedvalue;




//Retrieve score board
jQuery.ajax({
	  url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/jsondata/RSG/",
      type: "POST",
	  cache: false,
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
       error:function(xhr){
     /*
        var scoreboardJSONstr=retrieveFromLocalStorage("ScoreGardens");
        var scoreboardJSON=JSON.parse(scoreboardJSONstr);
        for(var x in scoreboardJSON)
        {
        	
        
        
        	  
         if(x==selectedvalue) 
           {
             scoredata=scoreboardJSON[""+x+""];
  
             showScoreBoard(scoredata);       
                     	
           	}       	
        	}*/
          
      
    },
      success: function(result) {
      	 var ip_address="http://ict4d01.cs.uct.ac.za"
      	 clickscounter=0;
          pointsscored=0;
          var str_wrapper="<div class='swiper-wrapper'>\n";
          var str="<div class='swiper-slide'>";
          str=str+"<img src='";
          //str=str+static_url_val;
          //str=str+"http://ict4d.cs.uct.ac.za/static/";
          var element=""
          var posn=1;
          teams=[];
          points=[];
          current_garden="Nothing";
          for(x in result)
            {
          	 url=""
          	 url=url+ip_address
          	 url=url+static_url_val;
          	 url=url+result[x]["D1"];
        
          	 
             element=element+str;
             element=element+url
             element=element+"'> </div>\n";
            teams.push(result[""+x+""]["D0"]);
            points.push(result[""+x+""]["D4"]);
          	
          	
          	}
          
           
          str=element;
          //alert(str);
          
          //str=str+"django_facebook/images/8_2014_06_23.jpeg'> </div>";
          // <div class='swiper-slide'> <img src='{% static 'django_facebook/images/6_2014_06_23.jpeg' %}'> </div>";
          //showScoreBoard(result);
          
          
          str_wrapper=str_wrapper+str;
          str_wrapper=str_wrapper+"\n</div>";
          $(".swiper-container[id='container1']").html('');
          $(".swiper-container[id='container1']").append(str_wrapper);
              //$(".swiper-wrapper").html('');
              //$(".swiper-wrapper").html(str);
              swipe(1);
              appendTeamToGarden("box0");
              current_garden="box0";
          
            }
    });
	
     
	
	
	
	
	
	
}



function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
    

var x_posn=0;
var y_posn=0;
var start_x=200;
var start_y=20;
var start_image=1;
var start_image2=1;


//x,y, start_image_posn, fish name, and length og ana array of fish, end point, original start posn, a number to add
var start_posns=[[200,15,1,"shark",20,-94,200,-3],[-94,45,1,"kujira",12,200,-94,3],[200,75,1,"6_",10,-94,200,-1], [-94,75,1,"3_",10,200,-94,2],[200,30,1,"7_",8,-94,200,-2],[200,65,1,"8_",6,-94,200,-2],[-30,15,1,"15_",8,200,-30,2],[200,15,1,"16_",8,-30,200,-1],[230,15,1,"16_",8,-30,200,-1],[260,15,1,"16_",8,-30,200,-2],[290,15,1,"16_",8,-30,200,-3],[320,15,1,"16_",8,-30,200,-3],[350,15,1,"16_",8,-30,200,-2],[380,15,1,"16_",8,-30,200,-1],[410,15,1,"16_",8,-30,200,-1],[440,15,1,"16_",8,-30,200,-2],[200,25,1,"16_",8,-30,200,-3],[230,25,1,"16_",8,-30,200,-3],[260,25,1,"16_",8,-30,200,-3],[290,25,1,"16_",8,-30,200,-1],[320,25,1,"16_",8,-30,200,-1],[350,25,1,"16_",8,-30,200,-2],[380,25,1,"16_",8,-30,200,-3],[410,25,1,"16_",8,-30,200,-4],[440,25,1,"16_",8,-30,200,-4],[200,75,1,"16_",8,-30,200,-3],[230,75,1,"16_",8,-30,200,-2],[260,75,1,"16_",8,-30,200,-1],[290,75,1,"16_",8,-30,200,-1],[320,75,1,"16_",8,-30,200,-2],[350,75,1,"16_",8,-30,200,-2],[380,75,1,"16_",8,-30,200,-3],[410,75,1,"16_",8,-30,200,-2],[440,75,1,"16_",8,-30,200,-1],[230,35,1,"16_",8,-30,200,-1],[260,35,1,"16_",8,-30,200,-2],[290,35,1,"16_",8,-30,200,-3],[320,35,1,"16_",8,-30,200,-3],[350,35,1,"16_",8,-30,200,-2],[380,35,1,"16_",8,-30,200,-1],[410,35,1,"16_",8,-30,200,-1],[440,35,1,"16_",8,-30,200,-2],[200,25,1,"16_",8,-30,200,-3],[230,25,1,"16_",8,-30,200,-3],[260,25,1,"16_",8,-30,200,-3],[290,25,1,"16_",8,-30,200,-1],[320,25,1,"16_",8,-30,200,-1],[350,25,1,"16_",8,-30,200,-2],[380,25,1,"16_",8,-30,200,-3],[410,25,1,"16_",8,-30,200,-4],[440,25,1,"16_",8,-30,200,-4],[200,65,1,"16_",8,-30,200,-3],[230,65,1,"16_",8,-30,200,-2],[260,65,1,"16_",8,-30,200,-1],[290,65,1,"16_",8,-30,200,-1],[320,65,1,"16_",8,-30,200,-2],[350,65,1,"16_",8,-30,200,-2],[380,65,1,"16_",8,-30,200,-3],[410,65,1,"16_",8,-30,200,-2],[440,65,1,"16_",8,-30,200,-1],[-30,95,1,"17_",28,200,-30,1],[-60,95,1,"17_",28,200,-60,1],[-90,95,1,"17_",28,200,-90,2],[-120,95,1,"17_",28,200,-120,3],[-150,95,1,"17_",28,200,-150,3],[-180,95,1,"17_",28,200,-180,2],[-210,95,1,"17_",28,200,-210,1],[-240,95,1,"17_",28,200,-240,1],[-270,95,1,"17_",28,200,-270,2],[-30,75,1,"17_",28,200,-30,3],[-60,75,1,"17_",28,200,-60,3],[-90,75,1,"17_",28,200,-90,3],[-120,75,1,"17_",28,200,-120,1],[-150,75,1,"17_",28,200,-150,1],[-180,75,1,"17_",28,200,-180,2],[-210,75,1,"17_",28,200,-210,3],[-240,75,1,"17_",28,200,-240,4],[-270,75,1,"17_",28,200,-270,4],[-30,75,1,"17_",28,200,-30,3],[-60,75,1,"17_",28,200,-60,2],[-90,100,1,"17_",28,200,-90,2],[-120,100,1,"17_",28,200,-120,3],[-150,100,1,"17_",28,200,-150,3],[-180,100,1,"17_",28,200,-180,2],[-210,100,1,"17_",28,200,-210,1],[-240,100,1,"17_",28,200,-240,1],[-270,100,1,"17_",28,200,-270,2],[-94,100,1,"18_",8,200,-94,1],[-200,140,1,"18_",8,200,-200,1],[200,120,1,"21_",7,-64,200,-3] ,[-40,140,1,"26_",3,200,-40,1],[-15,170,1,"30_",5,200,-15,1],[-30,165,1,"30_",5,200,-30,1],[-45,170,1,"30_",5,200,-45,1],[-194,100,1,"5_",8,200,-194,2],[200,140,1,"9_",8,-94,200,-1]];

var big_fish=["kujira","8_","9_","5","3_","18_","7_","6_","shark"];
var limit=3;
var ranking=3;
var selectedBigfishTypes=new Array();
var selectedFish=new Array();
var time_out=0;

function selectFish()
{
 var i=0;
 var skipSmallFish=0; 
 selectedFish=new Array();    
for(var z=0;z<start_posns.length;z++){
		  	     var x=0;
		  	     
          	  for(x=0;x<limit;x++){
          	 
               if(selectedBigfishTypes[x]==start_posns[z][3])
                 {
                 	break;  
                 	}
                          	  	
          	  	}
          	  	
          	  	if(x!=limit){
          	  		selectedFish[i]=new Array();
          	  	   for(var j=0;j<start_posns[z].length;j++)	
          	      {
          	  		selectedFish[i][j]=start_posns[z][j];
          	  	   }
          	  	
          	  	   i++;
          	  		
          	  		
          	  		}
          	  		else{
          	  			  //check if the fish belong to the big fish category
          	  			    for(x=0;x<big_fish.length;x++){
          	  	
          	  i	
                            if(big_fish[x]==start_posns[z][3])
                            {
                 	          break;  
                 	          }
                          	  	
          	            	}
          	               if(x==big_fish.length){
          	                 //this means the fish is a smal one
          	  	              //now check if the fish needs to skipped
          	  	              if(skipSmallFish<ranking){
          	  	              	
          	
          	  	              	skipSmallFish++;
          	  	              	
          	  	              	}
          	  	              	else
          	  	              	{
          	  	              		//record small fish;
          	  	              	  		selectedFish[i]=new Array();
          	                     	for(var j=0;j<start_posns[z].length;j++)	
          	                        {
          	  		                 selectedFish[i][j]=start_posns[z][j];
          	  		                 }
          	  	
          	  	                   i++;
          	  	              		skipSmallFish=0;
          	  	              		}
          	  	              
          	  		
          	  		
          	  		         }
          	            	
          	  			  
          	  			
          	  			
          	  			}
         
	
	
	
	}
	
	var species=limit+2,
	available_species=big_fish.length;// plus two small fish
	available_species=available_species+2;
	species=species+2;
	if(limit<(big_fish.length))
	{
		if(limit<(big_fish.length/2)){
			   species=species-2;
			
			}
		    //alert("This aquarium has only "+species+" species out of "+big_fish.length+" available species");
			
		
		
		}
	else{
		 //alert("This aquarium has all the "+species+" available species "+species+"species out of "+big_fish.length+" available species");
		
		}
	
	
}




function selectBigFishType(){
	selectedBigfishTypes=new Array();
  
   
	for(var i=0;i<limit;i++)
        {
	 selectedBigfishTypes[i]=big_fish[i];
	
	   
	
	}

}	
	
//var sharks["shark2.png","shark3.png","shark4.png","shark5.png","shark6","shark7","shark8","shark9","shark10","shark11","shark12","shark13","shark14","shark15","shark16","shark17","shark18","shark19","shark20"]

function drawFish(cx,param1,param2,param3,param4, param5,callback) {
     cx.drawImage(param1,param2,param3, param4, param5);
          
     if (typeof(callback) == 'function') {
        callback();
     }
}

var size_factor=1;
var lock_acquired=false;
function releaseLock(){
lock_acquired=false;
}


function drawAquirium(box)
{
           
             //var str_url="javascript:function retrieveAquariumComments(";
             //str_url=str_url+unique_id;
             //str_url=str_url+")";
            //$(".swiper-slide-active .commentslink").attr("href")=str_url;
      	
           // alert($(".swiper-slide-active .commentslink").attr("href"));       
           // .swiper-slide-active > .aquarium_canvas > .commentslink
           
          //var cv=$(box)[0];
          //var cx=cv.getContext("2d");

               $(".aquarium_canvas").each(function(index,element){
               var cv=$(this)[0];
               var cx=cv.getContext("2d");

              cx.clearRect(0, 0, cv.width, cv.height);


             });
          
         
                   
            var i=0;           
            //cx.clearRect(0, 0, cv.width, cv.height)
             
            while(i<selectedFish.length){
          	  var fish_posn=selectedFish[i][3];
          	 
        
          fish_posn=fish_posn+selectedFish[i][2];;
                                          
           var fish=document.getElementById(fish_posn);
           var fishwidth=Math.round(size_factor*fish.width);
           var fishheight=Math.round(size_factor*fish.height)        
             
          

            $(".aquarium_canvas").each(function(index,element){
               var cv=$(this)[0];
               var cx=cv.getContext("2d");
                 
               cx.drawImage(fish,  selectedFish[i][0], selectedFish[i][1], fishwidth, fishheight);
                  
                 


            });





      	    clickscounter=0;
             pointsscored=0;
              start_posns[i][7];
            //select an image number   
            if(selectedFish[i][2]==selectedFish[i][4])
                selectedFish[i][2]=1;
            else
                selectedFish[i][2]=selectedFish[i][2]+1;
             
            //select the position on the screen    
            if(((selectedFish[i][0]<selectedFish[i][5])&&(selectedFish[i][5]<0))||((selectedFish[i][0]>selectedFish[i][5])&&(selectedFish[i][5]>0)))   
            //if(start_x<-94)
              selectedFish[i][0]=selectedFish[i][6];
              
            else{
            	
            	
            	 //start_x=start_x-1;
            	 selectedFish[i][0]=selectedFish[i][0]+selectedFish[i][7];
            	   
            	}
            	 	//alert(start_posns[i][0]+"-"+start_posns[i][3]);
           i++;	
          	
          	
          }
        
          //alert(i); 
          return;
        
	
}





var badge_ratio=1
var played=false;
function drawBadge(box)
{

               
          var cv=$(box)[0];
          var cx=cv.getContext("2d");
          
              
          
         
          var i=0;          
          
           cx.clearRect(0, 0, cv.width, cv.height);
         

         
            
            {
           
                                          
           var badgeid=document.getElementById("teambadge");
           if(badge_ratio==11)
             {
                badgeid=document.getElementById("explosion"); 
             
             
             }
                    
           var badgewidth=badgeid.width*badge_ratio/10;
           var badgeheight=badgeid.height*badge_ratio/10;


           badgewidth=Math.round(badgewidth);
           badgeheight=Math.round(badgeheight);
           
          // alert(badge_ratio);
                         
           cx.drawImage(badgeid,  0,0, badgewidth, badgeheight);      
	   if(badge_ratio==12)
           {

                       var arr_length=time_out_draw_badge.length
                      for(var start=0;start<arr_length;start++){

                      clearInterval(time_out_draw_badge[start]);


                   }

           }        
           
           if(badge_ratio<12){
                 badge_ratio=badge_ratio+1;


               }
           else
              {
               
              badge_ratio=1;
              

               setTimeout(function(){displayBadge() },30000);	
              	}
          
          	
          }
        
          //alert(i); 
          return;

	
}

var time_out_draw_badge=[];
var badge_display_interval=500;
function displayBadge()
{

	
time_out_draw_badge.push(setInterval(function(){drawBadge("#badge") }, badge_display_interval));	
	
	
}





var time_out_draw_aquarium=[];
var teams=[];
var points=[];
var usage_points=[];
var bonus_points=[];
var beneficiary_ids=[];
var total=100;
var total2=60;
var current_canvas="Nothing";
var selected_beneficiary_id=""


function playAquarium(box)
{             

 
               
              
	           if(current_canvas=="Nothing");
	           else
	              {
	              	
	              	   var arr_length=time_out_draw_aquarium.length
                      for(var start=0;start<arr_length;start++){
            
                      clearInterval(time_out_draw_aquarium[start]);
                      
         
                   }
          
    
	              	
	              	
	              	
	              	
	              	 var old_posn=current_canvas.substr(3,current_canvas.length);
	          	    old_box="box";
	              	 old_box=old_box+old_posn;
	              	 
	              	 
	
                   
                   if((box=="left")){
                      old_posn--;	      
                   	if(old_posn==-1)
                   	  {
                   	  	old_posn=teams.length-1;
                   	  	
                   	  	
                   	  	}
                   	
                   	}
                   	else
                   	{
                      //alert("Got here");
                   	old_posn++;	
                   	
                   	//alert("Got here");
                   	if(old_posn==teams.length)
                   	  {
                   	  	old_posn=0;
                   	  	
                   	  	
                   	  	}	
                   		
                   	}
                   	
	              	box="box";
	              	box=box+old_posn;
	              	//alert(box);
	              	current_canvas=box;
	              	}
	           time_out_draw_aquarium=[];
              var posn=parseInt(box.substr(3,box.length));
              //alert(posn);
              //return;
       
              //limit=Math.round((points[posn]/total)*big_fish.length);
              limit=Math.round((bonus_points[posn]/total)*big_fish.length);
              size_factor=usage_points[posn]/total2;
              selected_beneficiary_id=beneficiary_ids[posn];
              
              //size_factor=1.0;
             // limit=big_fish.length;
              selectBigFishType();
              selectFish();
            //  alert(limit);
              
              var displayed_box=".swiper-slide-active > ";
              displayed_box=displayed_box+".aquarium_canvas";
            
              //alert($(displayed_box).css("width"));
              //time_out_draw_aquarium.push(setInterval(function(){drawAquirium(box) }, 100));	
              var str=teams[posn];
              str=str+":#"
              var rank=posn;
              rank=rank+1;
              str=str+rank;
              $("#teamscoreaquirium").html('');
              $("#teamscoreaquirium").append(str);

            
             var comment_url="http://ict4d01.cs.uct.ac.za/wellness/facebook/example/#fishtank?q=";
             comment_url=comment_url+selected_beneficiary_id;
             //var fblike_url="http%3A%2F%2Fict4d01.cs.uct.ac.za%2Fwellness%2Ffacebook%2Fexampleqw%2F&#35fishtank&amp;q=";

             //fblike_url=fblike_url+selected_beneficiary_id;
             //fblike_url=fblike_url+"&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=138647729661605";

             var teamlabel="<p><b>Comments and Likes for Aquirium by Team: </b><i>";
             teamlabel=teamlabel+teams[posn];
             teamlabel=teamlabel+"</i></p>";
             
             var fblike=teamlabel;
  

              fblike=fblike+"<iframe id='likebt' src='//www.facebook.com/plugins/like.php?href=http://ict4d01.cs.uct.ac.za/wellness/facebook/example";
//fblike=fblike+selected_beneficiary_id;
fblike=fblike+"/fishtank";
            fblike=fblike+selected_beneficiary_id;
            fblike=fblike+"/&width&layout=standard&action=like&show_faces=true&share=true&height=80&appId=138647729661605'";

            fblike=fblike+" scrolling='no' frameborder='0' style='border:none; overflow:hidden; width:80%; height:80px;' allowTransparency='true'></iframe>"

          

           /*

             fblike=fblike+"<iframe id='likebt' src='//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fict4d01.cs.uct.ac.za%2Fwellness%2Ffacebook%2Fexample";
fblike=fblike+selected_beneficiary_id;
fblike=fblike+"%2F&#35fishtank&amp;q=";
            fblike=fblike+selected_beneficiary_id;
            fblike=fblike+"&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80'";
          
            fblike=fblike+" scrolling='no' frameborder='0' style='border:none; overflow:hidden; width:80%; height:80px;' allowTransparency='true'></iframe>"
*/

             /*var label="<p><b>Comments and Likes for Aquirium by Team: </b><i>";
             label=label+teams[posn];
             label=label+"</i></p>";*/
/*             fbcomment=fbcomment+"<div class='fb-like' data-href='";
             fbcomment=fbcomment+comment_url;
             fbcomment=fbcomment+"' data-layout='standard' data-action='like' data-show-faces='true' data-share='true'></div></td></tr>";
            
            
*/

 




             // create the url for facebook likes so that it can be used to count the likes and inform a particular user about new likes.
 
  /*          var fblike_url="http%3A%2F%2Fict4d01.cs.uct.ac.za%2Fwellness%2Ffacebook%2Fexample";
fblike_url=fblike_url+selected_beneficiary_id;
fblike_url=fblike_url+"%2F&#35fishtank&amp;q=";
            fblike_url=fblike_url+selected_beneficiary_id;
            fblike_url=fblike_url+"&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80";
*/
    
            /*

            var fblike_url="http://ict4d01.cs.uct.ac.za/wellness/facebook/example";
            fblike_url=fblike_url+selected_beneficiary_id;
            fblike_url=fblike_url+"/#fishtank&q=";
            fblike_url=fblike_url+selected_beneficiary_id;
            fblike_url=fblike_url+"&width&layout=standard&action=like&show_faces=true&share=true&height=80";

            */
            // alert(fblike);



            /*
             var fblike_url="http%3A%2F%2Fict4d01.cs.uct.ac.za%2Fwellness%2Ffacebook%2Fexample";
             fblike_url=fblike_url+selected_beneficiary_id;

             fblike_url=fblike_url+"%2F&#35fishtank&amp;q=";
             fblike_url=fblike_url+selected_beneficiary_id;
             fblike_url=fblike_url+"&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=138647729661605";

             alert(fblike_url);
             */

             
             //important 
           
             $(".fb-comments").attr("data-href",comment_url);

             $('#like').html('');
             $('#like').append(fblike);
             // alert($('#like').html());
           if (typeof FB !== 'undefined') {
             FB.XFBML.parse(document.getElementById('likebt'));
             }
           
             //document.getElementById('ifrm').setAttribute('href', fblike_url);
             /*
             fbcomment=fbcomment+"<tr><td><div class='fb-comments' data-href='";
             fbcomment=fbcomment+comment_url;
             fbcomment=fbcomment+"' data-numposts='5' data-colorscheme='light' data-mobile=1></div></td></tr>";
             fbcomment=fbcomment+"</tbody></table>";*/
             //fbcomment=fbcomment+"<style>.fb-comments, .fb-comments span[style], .fb-comments iframe[style] {width: 100% !important;}</style>";
            
            // $("#fbcommentbox").html('');
             
             //$("#fbcommentbox").append(fbcomment);
            
           //  var fblikecontent=$("#fblikebox").html();
            // $("#fblikebox").html('');
            //document.getElementById('fb').setAttribute('href', sUrl); $("#fblikebox").append(fblikecontent); 

           // FB.XFBML.parse();
            FB.XFBML.parse($('.fb-comment')[0]);
            //FB.XFBML.parse($(".fblike")[0]);
            // FB.XFBML.parse($('.fb-like')[0]);
             //FB.XFBML.parse($('.fb-comment')[0]);
            // var comment_url="http://ict4d01.cs.uct.ac.za/wellness/facebook/example/#fishtank?q=";
            // comment_url=comment_url+selected_beneficiary_id;
            // $(".fb-comments").attr("data-href",comment_url);

                   // alert(displayed_box);
            
              setTimeout(function(){

              
               // parseCommentBox($('.fb-comment')[0]);

            // FB.XFBML.parse($('.fb-comment')[0]);

                     


             //var comment_url="javascript:function retrieveAquariumComments(";
             //comment_url=comment_url+selected_beneficiary_id;
             //comment_url=comment_url+'8';
             //comment_url=comment_url+")";
          //   comment_url="http://ict4d01.cs.uct.ac.za/wellness/facebook/example/#fishtank?q=";
           //  comment_url=comment_url+selected_beneficiary_id;
            
             //alert($(".fb-comments").attr("data-href"));

             //$(".fb-comment").attr("data-href",comment_url);

            //alert($(".fb-comments").attr("data-href"));

            // alert($(".swiper-slide-active .commentslink").attr("href"));
	      },300);

                  time_out_draw_aquarium.push(setInterval(function(){drawAquirium(displayed_box) }, 300));	
	            
	
	
	
}
/*
function retrieveAquariumComments(unique_id)
{
var str_id="tank";
str_id=str_id+unique_id;
var url="http://ict4d01.cs.uct.ac.za/wellness/facebook/example/#fishtank?q="
url=url+str_id;
$(".fb-comment").attr("data-href")=str_id;
$.mobile.changePage( "#fbcomments", { transition: "slide", changeHash: false });
}
*/


var click_set=false;
var number_of_teams=0;

function displayScoreTanks(selectedvalue)
{
	
var  jsonObjects;


jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, Day:selectedvalue};

previous_day_displayed_scoreboard=selectedvalue;
//alert("Points="+jsonObjects.Points+", Clicks="+jsonObjects.ClicksCounter+", Day="+jsonObjects.Day);
//return;

//Retrieve score board
jQuery.ajax({
	  url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/jsondata/RST/",
      type: "POST",
	  cache: false,
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
       error:function(xhr){

          
      
    },
      success: function(result) {
      	 var ip_address="http://ict4d.cs.uct.ac.za"
      	 clickscounter=0;
          pointsscored=0;

          var arr_length=time_out_draw_aquarium.length
          for(var start=0;start<arr_length;start++){
            
             clearInterval(time_out_draw_aquarium[start]);
        
             //alert(status);
             //time_out_draw_aquarium.pop();
             //arr_length--;
             }
             
          
          $(".swiper-container[id='container2']").html('');
          $(".swiper-container[id='container2']").append(original_wrapper_content);
          
          time_out_draw_aquarium=[];
          //time_out_draw_aquarium.push(setInterval(function(){
           	
          // 	   drawAquirium();
           	
           //	}, 100));
           	
           //drawAquirium();
          var posn=0;
          teams=[];
          points=[];
          current_canvas="Nothing";
          usage_points=[];
          bonus_points=[];         
          var tracker=0;
          number_of_teams=0;
         for(x in result)
            {
              
                        
             
              points.push(result[""+x+""]["D4"]);
              usage_points.push(result[""+x+""]["D5"]);
              bonus_points.push(result[""+x+""]["D6"]);
              teams.push(result[""+x+""]["D0"]);
              beneficiary_ids.push(result[""+x+""]["D9"]);
             
              click_set=true;
              	
       
             

              posn++;       	
              	
          
            }
          number_of_teams=posn;
          playAquarium("box0");  
          current_canvas="box0"; 
          swipe(2); 
          
         }
            
    });

	
	
}


function updateLocalStorage(item,tuple,option)
{
	
	if (Modernizr.localstorage) {
  // window.localStorage is available!
  var jsonObjects={Today:"50"}
  
  //JSON.stringify(testObject)
  
  //localStorage.setItem("lastname",jsonObject);
 
  //localStorage.removeItem("lastname");
  if(item=="All"){ 
  jQuery.ajax({
      //url: "http://localhost/cgi-bin/plot_activity_graph.py",
	  url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/jsondata/RAD/",
      type: "POST",
	  cache: false,
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
      error:function(xhr){
      //alert("An error occured: " + xhr.status + " " + xhr.statusText);
      //retrieveFromLocalStorage("Activity",previous_day_displayed_activity);
    },
      success: function(result) {
      	
      	 clickscounter=0;
          pointsscored=0;
          localStorage.setItem("Name",JSON.stringify(option));
          localStorage.setItem("Activity",JSON.stringify(result.Activity));
          localStorage.setItem("Meals",JSON.stringify(result.Meals));
          localStorage.setItem("Weight",JSON.stringify(result.Weight));
          localStorage.setItem("ActivityGoal",JSON.stringify(result.ActivityGoal));
          localStorage.setItem("MealsGoal",JSON.stringify(result.MealsGoal));
          localStorage.setItem("ScoreBoard",JSON.stringify(result.ScoreBoard));
    
         
          
          
     }
    }); 
    
   	}
       else
         {
         	modifiedItemJSON=JSON.parse(localStorage.getItem(item))
         
            	
               modifiedItemJSON[""+option+""]=tuple;//put retrieved tuple into json
               
               //update local storage again 
               localStorage.setItem(item,JSON.stringify(modifiedItemJSON));
            
                        	
         	
         	}
             
    
  
  
} else {
  // no native support for local storage :(
  // try a fallback or another third-party solution
 alert("Information not accessible at the moment. Check if you have internet connection!!");
}
	
	
}

function retrieveFromLocalStorage(item){
	
	
	return localStorage.getItem(item);
	
	
	
	}


function extractActivityDataPoints(result)
{
	
	 if((result.R00!==undefined))
	 {

         
           //alert(result.R00.F0+"--"+result.R00.F1);
         // alert(result.R00.F0+"--"+result.R00.F1+","+result.R01.F0+"--"+result.R01.F1+","+result.R02.F0+"--"+result.R02.F1+","+result.R03.F0+"--"+result.R03.F1+", "+result.R04.F0+"--"+result.R04.F1+" ");
	   switch(result.R00.F1)
	   {
		 case -4:plot_graph=-1; break;
		 case -5: alert(result.R00.F0);return;
       case -1: alert("There was an error in processing your request");return;
	     
	   }
	   
	   //$('#main_interface_wrapper').load('http://ict4d01.cs.uct.ac.za/wellness/facebook/cmd/FG');
	 }
	 else
	    return;

	   var data=new Array();
	 
	  
	   var activity_keys_length=0;
	  
	   var activity_fields_keys_length=0;
	   
	
	   //var portions_fields_keys_length=0;
	   
	   var activity_keys=new Array();
	   var activity_fields_keys=new Array();
	   //var portions_fields_keys=new Array();
	   
	   
	   //var key1="R";
	  // var key2="F";
	   
	   //for(var i=0;i<meals_keys_length;i++)
	  if(plot_graph!=-1) 
	   for(var x in result)
	    {  
		   data[activity_keys_length]=new Array();
		
		 activity_fields_keys_length=0;
		   for(var y in result[x])
		   {
		         data[activity_keys_length][activity_fields_keys_length]=new Array();
	             data[activity_keys_length][activity_fields_keys_length]=result[""+x+""][""+y+""];
	             //alert(data[activity_keys_length][activity_fields_keys_length]);
			     activity_fields_keys_length++;
		   }
		     
		    activity_keys_length++;
		 
		}
	  else
		   activity_keys_length=0;
		
		
	var keys_length_array=new Array();
	keys_length_array[0]=activity_keys_length;
	keys_length_array[1]=activity_fields_keys_length;
	//plotGraph(data,keys_length_array);	
	 drawChart(data,keys_length_array,'A'); 	
	
	
	
	
	
	
	
	
}

function extractMealsDataPoints(result){
	 //return;
	
	 if((result.P00!==undefined))
	 {
	   switch(result.P00.D1)
	   {
	    case -4:plot_graph=-1;alert(result.P00.D0);break; 
	    case -5:alert(result.P00.D0);return;
;	
	    case -1: alert(result.P00.D0);return;
	     
	   }
	
	   
	 }
	 else
	    return;
	
	   var data=new Array();
	 
	  
	  
	   var portions_keys_length=0;
	   
	
	   var portions_fields_keys_length=0;
	   
	   var meals_keys=new Array();
	   var portions_keys=new Array();
	   var portions_fields_keys=new Array();
	   
	   
	   var key1="P";
	   var key2="D";

	   
	   //for(var i=0;i<meals_keys_length;i++)
	 if(plot_graph!=-1) 
		   for(var x in result)
		    {  
			 data[portions_keys_length]=new Array();
			 
			 portions_fields_keys_length=0; // size for each portion array
			 for(var y in result[x])
			 {
				 data[portions_keys_length][portions_fields_keys_length]=result[""+x+""][""+y+""];
			        //alert(result[""+x+""][""+y+""]);
			         portions_fields_keys_length++;
		   
			   
			 }
			     
			 portions_keys_length++;
			 
		   }
         else
             portions_keys_length=0;
		
		
	var keys_length_array=new Array(); // for keeping track of sizes(depth) of two arrays  data[] and data[][]
	keys_length_array[0]=portions_keys_length;
	keys_length_array[1]=portions_fields_keys_length; 
	
	
	
	drawChart(data,keys_length_array,'M'); 
	
	
	}


function extractWeightDataPoints(result){
	
	if(result.error!==undefined)
	     alert(result.message);
	 if((result.R00!==undefined))
	 {

        
           //alert(result.R00.F0+"--"+result.R00.F1);
         // alert(result.R00.F0+"--"+result.R00.F1+","+result.R01.F0+"--"+result.R01.F1+","+result.R02.F0+"--"+result.R02.F1+","+result.R03.F0+"--"+result.R03.F1+", "+result.R04.F0+"--"+result.R04.F1+" ");
	   switch(result.R00.F1)
	   {
		 case -4:plot_graph=-1;alert(result.R00.F0);break;
		 case -5:alert(result.R00.F0);return;
       case -1:alert(result.R00.F0);return;
	     
	   }
	   
	   //$('#main_interface_wrapper').load('http://ict4d01.cs.uct.ac.za/wellness/facebook/cmd/FG');
	 }
	 else
	    return;
	
	   var data=new Array();
	 
	  
	   var weight_keys_length=0;
	  
	   var weight_fields_keys_length=0;
	   
	
	   //var portions_fields_keys_length=0;
	   
	   var weight_keys=new Array();
	   var weight_fields_keys=new Array();
	   //var portions_fields_keys=new Array();
	   
	   
	   //var key1="R";
	  // var key2="F";
	   
	   //for(var i=0;imeals_keys_length;i++)
	   if(plot_graph!=-1)  
		   for(var x in result)
		    {  
			   data[weight_keys_length]=new Array();
		
			 weight_fields_keys_length=0;
			   for(var y in result[x])
			   {
			  
				 data[weight_keys_length][weight_fields_keys_length]=new Array();
			    data[weight_keys_length][weight_fields_keys_length]=result[""+x+""][""+y+""];
			        
				     weight_fields_keys_length++;
			   }
			     
			    weight_keys_length++;
			 
			}
		
		
	var keys_length_array=new Array();
	keys_length_array[0]=weight_keys_length;
	keys_length_array[1]=weight_fields_keys_length;
	//plotGraph(data,keys_length_array);	
     
	 drawChart(data,keys_length_array,'W'); 
	
	
	
	
	
	}
	
	
function showScoreBoard(result)
{
	 var score_keys_length=0;
	  var score_fields_keys_length=0;
	       var data=new Array();
       var counter=1;   
       
       var str="";
       var str2="<tr><td>&nbsp;</td><td>Team</td><td>Usage Points</td><td>Bonus Points</td><td>Rank</td><td>Badge</td></tr>";
       //$("#scoreboard").text("");
       
       $("#scoreboard tbody").html('');
       $("#scoreboard thead").html('');
       $("#scoreboard thead").append(str2);
       //$("#scoreboard").append('<tr class="child"><td>blahblah</td></tr>');
       
     
        //$("#scoreboard").append(str);
       for(var x in result)
	    {  
	    
		   data[score_keys_length]=new Array();
		   str=str+"<tr class='child'>";
		   str=str+"<td>"+counter+"</td>";
		   counter++;
		   score_fields_keys_length=0;
      
		   for(var y in result[x])
		   {
		   	  
		         if((y=="D1")||(y=="D2")||(y=="D3")||(y=="D4"))
		            continue;
		         
		    data[score_keys_length][score_fields_keys_length]=new Array();
	            data[score_keys_length][score_fields_keys_length]=result[""+x+""][""+y+""];
	           
	            str=str+"<td>";i
                    if(y=="D8"){

                      str=str+"<img src='";
                      str=str+data[score_keys_length][score_fields_keys_length];
                      str=str+"'/>"



                    }
                   else
	               str=str+data[score_keys_length][score_fields_keys_length];
	     
	            str=str+"</td>";
			      score_fields_keys_length++;
		   }
		     
		    score_keys_length++;
		  str=str+"</tr>";
		 
		}
	  
		$("#scoreboard tbody").append(str);
	
	
	
	
}
	



var first_display=0;
var default_day_displayed="Today";
var previous_day_displayed_activity="None";
var previous_day_displayed_meal="None";
var previous_day_displayed_weight="None";
var previous_day_displayed_scoreboard="None";
var sync=0;
function displayActivityGraph(selectedvalue)
{
	
//updateLocalStrorage();


var  jsonObjects;

jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, Day:selectedvalue};



previous_day_displayed_activity=selectedvalue;

var datapoints;


//$('#main_interface_wrapper').load('http://ict4d01.cs.uct.ac.za/wellness/facebook/cmd/DWP/',function(){  
jQuery.ajax({
      //url: "http://localhost/cgi-bin/plot_activity_graph.py",
	  url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/jsondata/PAG/",
     type: "POST",
	  cache: false,
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
      error:function(xhr){
      //alert("An error occured: " + xhr.status + " " + xhr.statusText);
        var activityJSONstr=retrieveFromLocalStorage("Activity");
        var activityJSON=JSON.parse(activityJSONstr);
        for(var x in activityJSON)
        {
        	
        
        	  
         if(x==selectedvalue) 
           {
             datapoints=activityJSON[""+x+""];
             /*
             for(var y in datapoints)
                {
                	alert(y);
                	 for(var z in datapoints[y])
                	 {
                	 	alert(datapoints[y][z]);
                	 	
                	 	}
                	
                	}  */    
                	extractActivityDataPoints(datapoints);       
                     	
           	}       	
        	}
        
      
    },
      success: function(result) {
      	
      	 clickscounter=0;
          pointsscored=0;
          extractActivityDataPoints(result);
          updateLocalStorage("Activity",result,selectedvalue);
         
  
   }
});

	 
   //}
//});





//});
sync=0;
//plotGraph(data,keys_length_array,'A');	 
}



function sendMessage(comment,selectedday,eventtype)
{


var jsonObjects={Points:pointsscored,ClicksCounter:clickscounter,MessageBody:comment,Day:selectedday,EventType:eventtype};


jQuery.ajax({
	  url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/dataupdate/SC/",
       type: "POST",
	     cache: false,
        contentType: "application/json",
        data: JSON.stringify(jsonObjects),
        success: function(result) {
        clickscounter=0;
        pointsscored=0;
        alert(result.message);

      	
      }
      });
      
	
	
	
	
	
	
}


/*
function uploadActivity()
{

    
            
               var datearray=['2013-10-11','2013-10-15'];
               var startarray=['12:00','13:00'];
               var endarray=['12:59','13:59'];
               var sizedata=2;
               var IMEINO="351737059512816";



var step=new Array();

step[0]=200;
step[1]=100;
jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter,header:{steps:step,datecaptured:datearray,starthr:startarray,endhr:endarray,length:sizedata,IMEI:IMEINO}};

clickscounter=0;
pointsscored=0;

jQuery.ajax({
      
      url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/dataupdate/SA/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
      success: function(result) {
      alert(result.message);

      }
    });

}*/

function displayWeightGraph(selectedvalue)
{
jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter,Day:selectedvalue};

previous_day_displayed_weight=selectedvalue;
jQuery.ajax({
      //url: "http://localhost/cgi-bin/plot_activity_graph.py",
	  url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/jsondata/PWG/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
        error:function(xhr){
      //alert("An error occured: " + xhr.status + " " + xhr.statusText);
        var weightJSONstr=retrieveFromLocalStorage("Weight");
        var weightJSON=JSON.parse(weightJSONstr);
        for(var x in weightJSON)
        {
        
        	  
         if(x==selectedvalue) 
           {
             datapoints=weightJSON[""+x+""];
             /*
             for(var y in datapoints)
                {
                	alert(y);
                	 for(var z in datapoints[y])
                	 {
                	 	alert(datapoints[y][z]);
                	 	
                	 	}
                	
                	}  */    
                	extractWeightDataPoints(datapoints);
                	
                     	
           	}       	
        	}
        
      
    },
      success: function(result) {
     //Write your code here
    	 clickscounter=0;
       pointsscored=0;
       extractWeightDataPoints(result);  
       updateLocalStorage("Weight",result,selectedvalue);        
	 //return;
    }
});
	 
  // }
//});

	 
}




function displayMealGraph(selectedvalue)
{

var  jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, Day:selectedvalue};
previous_day_displayed_meal=selectedvalue
jQuery.ajax({
      url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/jsondata/PMG/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
      error:function(xhr){
      //alert("An error occured: " + xhr.status + " " + xhr.statusText);
        var mealsJSONstr=retrieveFromLocalStorage("Meals");
        var mealsJSON=JSON.parse(mealsJSONstr);
        for(var x in mealsJSON)
        {
        	
        	  
         if(x==selectedvalue) 
           {
             datapoints=mealsJSON[""+x+""];
             /*
             alert(x);
             alert(datapoints.P00.D1)
            
             for(var y in datapoints)
                {
                	alert("Label"+datapoints[y]);
                	 for(var z in datapoints[y])
                	 {
                	 	alert(datapoints[y][z]);
                	 	
                	 	}
                	
                	}  */
             extractMealsDataPoints(datapoints);       
                     	
           	}       	
        	}
        
      
    },
      success: function(result) {
     //Write your code here
        clickscounter=0;
          pointsscored=0;
	       extractMealsDataPoints(result);
	       updateLocalStorage("Meals",result,selectedvalue);
	 
	    }
});
	
  // }
//});

//plotGraph(data,keys_length_array);	 
}



function foodGraphInterface_Set_components()
{  /*
   $('#bydate_component').hide();//
			   $('#main_interface_wrapper').delegate(".dateconsumed_class", "click", function () {
			   
				if( $('input:radio[name=dateconsumed]:checked').val()=="By date")
				  {
				    
					  //$('#datepickers').show();
					   $('#bydate_no_component').hide();
					   $('#bydate_component').show();
					   $("#radio_bydate").prop("checked", true)
					
					  
				   }
				   else
				    {
					  //$('#datepickers').hide();
					  $('#bydate_no_component').show();
					   $('#bydate_component').hide();
					
					}
			   });
			   
			   
			   loadDatePicker_1();
			   loadDatePicker_2();*/

}


function activityGraphInterface_Set_components()
{ /*
   $('#bydate_component').hide();//
			   $('#main_interface_wrapper').delegate(".datecaptured_class", "click", function () {
			   
				if( $('input:radio[name=datecaptured]:checked').val()=="By date")
				  { 
					  //$('#datepickers').show();
					   $('#bydate_no_component').hide();
					   $('#bydate_component').show();
					   $("#radio_bydate").prop("checked", true)
					  
				   }
				   else
				    {
					  //$('#datepickers').hide();
					  $('#bydate_no_component').show();
					   $('#bydate_component').hide();
					
					}
			   });
			   
			   
			   loadDatePicker_1();
			   loadDatePicker_2();
			*/   
			   

}


function weightGraphInterface_Set_components()
{
 /*
   $('#bydate_component').hide();//
			   $('#main_interface_wrapper').delegate(".datecaptured_class", "click", function () {
			   
				if( $('input:radio[name=datecaptured]:checked').val()=="By date")
				  {
				    
					  //$('#datepickers').show();
					   $('#bydate_no_component').hide();
					   $('#bydate_component').show();
					   $("#radio_bydate").prop("checked", true)
					
					  
				   }
				   else
				    {
					  //$('#datepickers').hide();
					  $('#bydate_no_component').show();
					   $('#bydate_component').hide();
					
					}
			   });
			   
			   
			   loadDatePicker_1();
			   loadDatePicker_2();*/

}



function setActivityGoal()
{
	
 //var duration= $('#activitygoalduration').val();

 //var  jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, stepsGoal:$('#steps').val(),targetDuration:duration};

  var  jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, stepsGoal:$('#steps').val()};
jQuery.ajax({
      url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/dataupdate/SAG/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
      success: function(result) {
     //Write your code here
      clickscounter=0;
      pointsscored=0;
	         
		var str=""+result+"";
		if(result.message!==undefined)
		   alert(result.message);
		if(result.message=="The goal was set successfully")
		{
		   //var str="There is a goal of <b><i>"+$('#steps').val()+"</i> steps per day</b>.";
		   str="The daily activity goal for <b>"+result.Name+"</b> is to walk <b><i>"+$('#steps').val()+"</i> steps per day</b>.";
								  
		   $('.activity_goal').html('');  
		   $('.activity_goal').append(str); 
		   activityGoalJson.Steps=$('#steps').val();
		
		}
		else
		  {
			if(result.R00.F0!==undefined)
			   alert("The following error occured: "+result.R00.F0);
			}
		  
      }
});
	  



}

function setMealsGoal()
{
  
//var  jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, Fruits: $('.fruits_portion').text(),Starch: $('.starch_portion').text(), Fat: $('.fat_portion').text(), Dairy: $('.dairy_portion').text(), Protein: $('.protein_portion').text(),Duration:$('.duration').val()};
//alert(jsonObjects.Starch);

var fruits_portion="";
var starch_portion="";
var fat_portion="";
var dairy_portion="";
var protein_portion="";


//var duration=$('#mealsgoalduration').val();;


var fruits_label  = $('.fruits_portion').text();
for(ind in fruits_label){
  if(ind==((fruits_label.length)/2))
      break;//break outside of the loop after encountering the first word
  fruits_portion =fruits_portion+fruits_label[ind];
 
}


var starch_label  = $('.starch_portion').text();

for(ind in starch_label){
	
  if(ind==((starch_label.length)/2))
      break;//break outside of the loop after encountering the first word
  starch_portion = starch_portion+starch_label[ind];

}


var fat_label  = $('.fat_portion').text();
for(ind in fat_label){
	
  if(ind==((fat_label.length)/2))
      break;//break outside of the loop after encountering the first word  
  fat_portion = fat_portion+fat_label[ind];
 
}


var dairy_label  = $('.dairy_portion').text();
for(ind in dairy_label){
  if(ind==((dairy_label.length)/2))
      break;//break outside of the loop after encountering the first word
  dairy_portion = dairy_portion+dairy_label[ind];
  
}

var protein_label  = $('.protein_portion').text();
for(ind in protein_label){
  if(ind==((protein_label.length)/2))
      break;//break outside of the loop after encountering the first word
  protein_portion =protein_portion+protein_label[ind];
}





var  jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter, Fruits:fruits_portion,Starch:starch_portion, Fat:fat_portion, Dairy:dairy_portion, Protein:protein_portion};



jQuery.ajax({
      url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/dataupdate/SMG/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(jsonObjects),
	  
      success: function(result) {
     //Write your code here
     clickscounter=0;
     pointsscored=0;



     
      	mealsGoalJson.Starch=jsonObjects.Starch;
			mealsGoalJson.FruitsAndVeges=jsonObjects.Fruits;
		   mealsGoalJson.Dairy=jsonObjects.Dairy;
			mealsGoalJson.Fat=jsonObjects.Fat;
         mealsGoalJson.Protein=jsonObjects.Protein;
         //mealsGoalJson.Duration=jsonObjects.Duration;  
         //$('#mealgoalstatus').text("Existing goal shown below");
         
          	var str="The daily meal goal for <b>"+beneficiaryName+"</b> is to consume the following portion sizes from each food group"
									      
			   $('#mealgoalstatus').html('');  
		      $('#mealgoalstatus').append(str)   
     
	    alert(result.message);
      }
});


}
function retrieveWeight(){
   var  jsonObjects= {Points:pointsscored,ClicksCounter:clickscounter,DateCaptured:$('#date_captured_weight').val() };



                      jQuery.ajax({
      						url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/jsondata/RW/",
     						type: "POST",
      						contentType: "application/json",
      						data: JSON.stringify(jsonObjects),
	  
      						success: function(result) {
     						//Write your code here
     						   
     						      clickscounter=0;
                           pointsscored=0;
                           
                           
							     if(result.weight!==undefined)
								  { 
								     switch(result.weight)
									 {
									   case 0:$('#weight').val('');break;
									   default:$('#weight').val(result.weight); 
									 }  
								  }
                              }
						});



 }
 
 function retrieveMealsGoal()
{
                     var jsonObjects={Empty:''};
			         	jQuery.ajax({
      						url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/jsondata/RMG/",
     						type: "POST",
      						contentType: "application/json",
      						data: JSON.stringify(jsonObjects),
      						error:function(xhr){
      //alert("An error occured: " + xhr.status + " " + xhr.statusText);
        var mealsGoalJSONstr=retrieveFromLocalStorage("MealsGoal");
        var mealsGoalJSON=JSON.parse(mealsGoalJSONstr);
        alert(mealsGoalJSONstr);
  
        showMealsGoal(mealsGoalJSON);
 
      
    },
      					success: function(result) {
     						//Write your code here
     						clickscounter=0;
     						pointscounter=0;
     						
     						showMealsGoal(result);
     						
     						updateLocalStorage("MealsGoal",result,"Goal")
     						
     						
     						 }
						});
	
                             // }
						//});


}

function retrieveActivityGoal(){
                      var jsonObjects={Empty:''};
                      var goal;
  
  			         	jQuery.ajax({
      						url: "http://ict4d01.cs.uct.ac.za/wellness/facebook/jsondata/RAG/",
     						type: "POST",
      						contentType: "application/json",
      						data: JSON.stringify(jsonObjects),
      						error:function(xhr){
      //alert("An error occured: " + xhr.status + " " + xhr.statusText);
        var activityGoalJSONstr=retrieveFromLocalStorage("ActivityGoal");
        var beneficiaryName=retrieveFromLocalStorage("Name");
        var activityGoalJSON=JSON.parse(activityGoalJSONstr);
        //for(var x in activityGoalJSON)
        {
        	
        	  
         //if(x==selectedvalue) 
           {
           
             /*
             alert(x);
             alert(datapoints.P00.D1)
            
             for(var y in datapoints)
                {
                	alert("Label"+datapoints[y]);
                	 for(var z in datapoints[y])
                	 {
                	 	alert(datapoints[y][z]);
                	 	
                	 	}
                	
                	}  */
             showActivityGoal(activityGoalJSON,beneficiaryName);
             
                     	
           	}       	
        	}
        
      
    },
	  
      						success: function(result) {
     						//Write your code here
							           clickscounter=0;
							           pointscounter=0;
							           var beneficiaryName=retrieveFromLocalStorage("Name");
							           showActivityGoal(result,beneficiaryName); 
							           updateLocalStorage("ActivityGoal",result,"Goal");
                                
                              }
						});


}
