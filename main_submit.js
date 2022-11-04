var textInput=document.getElementById("textbox");
var submitButton=document.getElementById("submit");
var toDoList=document.getElementById("list_health");

//<+> 버튼 눌렀을때 addTextBox()
submitButton.addEventListener('click',addTextBox);

function addTextBox(){
  var divv=document.getElementById("healthList");
  var div=document.createElement("div");
  var textBox='<div class="singleList"><input type="checkbox" class="checks"><input type="text" class="textbox" placeholder="일정을 추가하세요."></input></div>'
  div.innerHTML=textBox;
  divv.appendChild(div);
}