var player1Name=localStorage.getItem("player1Name")
var player2Name=localStorage.getItem("player2Name")

var num1
var num2
var player1Score=0
var player2Score=0

document.getElementById("player1Name").innerHTML=player1Name+":"
document.getElementById("player2Name").innerHTML=player2Name+":"

document.getElementById("player1Score").innerHTML=player1Score
document.getElementById("player2Score").innerHTML=player2Score

document.getElementById("questionTurn").innerHTML="Question Turn- "+player1Name
document.getElementById("answerTurn").innerHTML="Answer Turn- "+player2Name

function send(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
actualAnswer=parseInt(num1)*parseInt(num2)
questionNum="<h4>"+num1+"x"+num2+"</h4>"
inputBox="<br>Answer: <input type='text' id='inputCheckBox'>"
checkButton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row=questionNum+inputBox+checkButton
document.getElementById("output").innerHTML=row
document.getElementById("num1").value=""
document.getElementById("num2").value=""
}