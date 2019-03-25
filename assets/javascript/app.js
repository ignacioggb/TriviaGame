var Question1={Q:"Who invented the telephone?",A:["Thomas Edison","Graham Bell","James Watt"],C:"Graham Bell"};
var Question2={Q:"What temperature does water boil at?",A:["100°F","none of above","100°C"],C:"100°C"};
var Question3={Q:"How many states are there in the United States of America?",A:["50","32","43"],C:"50"};
var Question4={Q:"Which is the only mammal that can’t jump?",A:["Rhino","Hen","Elephant"],C:"Elephant"};
var Question5={Q:"Who cut Van Gogh’s ear?",A:["His wife","Himself","A fan of him"],C:"Himself"};
var Question6={Q:"Which planet is nearest the sun?",A:["Mercury","Mars","Uranus"],C:"Mercury"};
var Question7={Q:"What colours make purple?",A:["Yellow and Red","Blue and Orange","Red and Blue"],C:"Red and Blue"};
var Questions=[Question1,Question2,Question3,Question4,Question5,Question6,Question7];
var clockRunning = false;
var time=10; var index=0; var intervalId; var rights=0; var wrongs=0;
//--------------MAIN-----------------//
$( document ).ready(function() {
    $(".btn").on("click", start);
    $(".Ans").on("click", Ans);
});
//----------------FUNCTIONS--------------//
//-START
function start(){
    time=10;
    $("#startbutton").remove();
    $("h1").css("margin-bottom", "0vh");
    $("#TimeDisplay").html("<h3>Remaining time: "+time+" Seconds</h3>");
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
      }
}
//-Ans
function Ans(){
    clearInterval(intervalId);
    clockRunning = false;
    if (this.textContent==Questions[index].C)
    {rights++;Reveal(true);}
    else{wrongs++;Reveal(false);}
    }
//-Count
function count() {
    game(index);
    $("#TimeDisplay").html("<h3>"+"Remaining time: "+time+" Seconds</h3>");
    time--;
        if(time==-1){
        Reveal(false);
    }   } 
//--Game
function game(index){
    $("#my_image").css("display", "none");
    $(".Ans").css("display", "block");
    $("#Question").css("display", "block");
    $("h2").css("display", "none");
      $("#Question").html("<h3>"+Questions[index].Q+"</h3>");
      $("#A1").html(Questions[index].A[0]);
      $("#A2").html(Questions[index].A[1]);
      $("#A3").html(Questions[index].A[2]);
    }
//--Reveal
function Reveal(ok){
    $(".Ans").css("display", "none");
    $("#Question").css("display", "none");
    var ptext = $("<h2>");
    if(ok==true){
        ptext.text("Correct!!");
        ptext.appendTo(".n2"); 
    }
    else {
        ptext.text("Nope! correct answer is: "+Questions[index].C);
        ptext.appendTo(".n2");
    }
    $("#my_image").css("display", "block");
    $("#my_image").attr("src","assets/images/giphy"+index+".gif");
    index++;
    if(index<7){
        clearInterval(intervalId);
        clockRunning = false;
        setTimeout(start, 4000);}
    else{
        clearInterval(intervalId);
        clockRunning = false;
        setTimeout(final, 4000);    
   }
    }
//----final screen and Reset    
    function final(){
        $("#my_image").css("display", "none");
        $("h2").css("display", "none");
        $(".txt").css("display", "block");
        $(".txt").css("margin", "auto");
        $(".txt2").html("<h2>Correct answers: "+rights+"</h2>");
        $(".txt3").html("<h2>Wrong answers: "+wrongs+"</h2>");
        $(".txt4").html("<h2>Unanswered: "+(7-rights-wrongs)+"</h2>");
        $(".txt5").html("<h2>Start Again?</h2>");0
        $(".txt6").html("");

        $(".txt5").on("click", function(){
            $(".txt").css("display", "none");
            time=10;
            index=0;
            wrongs=0;
            rights=0;
            start();
        });
    }

