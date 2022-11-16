var textInput=document.getElementById("textbox");
var submitButton=document.getElementById("submit");
var toDoList=document.getElementById("list_health");
var textbox=document.getElementsByClassName("textbox");

//<+> 버튼 눌렀을때 addTextBox()
submitButton.addEventListener('click',addTextBox);
textbox.addEventListener('keypressed',EnterPressed);

function addTextBox(){
  var divv=document.getElementById("healthList");
  var div=document.createElement("div");
  var textBox='<div class="singleList"><input type="checkbox" class="checks"><input type="text" class="textbox" placeholder="일정을 추가하세요."></input></div>'
  div.innerHTML=textBox;
  divv.appendChild(div);
  
}

function EnterPressed(){
  if (window.event.keyCode == 13){
  }
}
// 추가할지 미팅 후 결정!
