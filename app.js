var header, contents, addArea;
var days=['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'November', 'December'];
var list1;

addEventListener("load", function() {
    init();
    createHeader();
    createAddArea();
});

function init() {
    header=document.getElementById("header");
    contents=document.getElementById("contents");
    addArea=document.getElementById("addArea");
}

function createHeader() {
    // today Date
    var today=new Date();
    var dateArea=document.createElement("div");
    dateArea.style.position="absolute";
    dateArea.style.width=300+"px";
    dateArea.style.height=50+"px";
    dateArea.style.left=10+"px";
    dateArea.style.top=160+"px";
    dateArea.style.background="none";
    dateArea.style.fontSize=15+"pt";
    dateArea.style.fontWeight="bold";
    dateArea.style.color="white";
    dateArea.style.cursor="default";
    dateArea.innerText=days[today.getDay()]+" "+months[today.getMonth()]+" "+today.getDate()+" "+today.getFullYear();
    header.appendChild(dateArea);

    // resetBtn
    var resetBtn=document.createElement("img");
    resetBtn.src="res/restartBtn.png";
    resetBtn.style.position="absolute";
    resetBtn.style.width=30+"px";
    resetBtn.style.height=30+"px";
    resetBtn.style.left=350+"px";
    resetBtn.style.top=20+"px";
    resetBtn.style.cursor="pointer";
    header.appendChild(resetBtn);
    resetBtn.addEventListener("mouseover", function() {
        resetBtn.src="res/restartBtn2.png";
    });
    resetBtn.addEventListener("mouseout", function() {
        resetBtn.src="res/restartBtn.png";
    });
}

function createAddArea() {
    // addBtnImg
    var addBtnImg=document.createElement("img");
    addBtnImg.src="res/plusBtn.png";
    addBtnImg.style.position="absolute";
    addBtnImg.style.width=40+"px";
    addBtnImg.style.height=40+"px";
    addBtnImg.style.left=5+"px";
    addBtnImg.style.top=5+"px";
    addArea.appendChild(addBtnImg);

    // inputBox
    var inputBox=document.createElement("input");
    inputBox.style.position="absolute";
    inputBox.style.width=280+"px";
    inputBox.style.height=40+"px";
    inputBox.style.left=55+"px";
    inputBox.style.top=5+"px";
    inputBox.style.border="none";
    inputBox.style.paddingLeft=5+"px";
    inputBox.style.fontSize=15+"pt";
    inputBox.placeholder="Add a to-do";
    addArea.appendChild(inputBox);

    // addBtn
    var addBtn=document.createElement("img");
    addBtn.src="res/addBtn.png";
    addBtn.style.position="absolute";
    addBtn.style.width=40+"px";
    addBtn.style.height=40+"px";
    addBtn.style.left=350+"px";
    addBtn.style.top=5+"px";
    addBtn.style.cursor="pointer";
    addArea.appendChild(addBtn);

    addBtn.addEventListener("click", function() {
        list1=inputBox.value;
        createContents();
    });
}

function createContents() {
    var listForm=document.createElement("div");
    listForm.style.position="relative";
    listForm.style.width=400+"px";
    listForm.style.height=50+"px";

    var checkBox=document.createElement("img");
    checkBox.src="res/check1.png";
    checkBox.style.position="absolute";
    var todoText=document.createElement("div");
    var deleteBtn=document.createElement("img");
    deleteBtn.src="res/deleteBtn1.png";
    listForm.appendChild(checkBox);
    listForm.appendChild(todoText);
    listForm.appendChild(deleteBtn);
    contents.appendChild(listForm);
}