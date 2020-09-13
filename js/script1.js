function init(){
    var first1=document.getElementById("first1");
    var today=new Date();
    const  now= today.toLocaleString('default', { weekday: 'long', month: 'long',year : 'numeric', day:'numeric' });
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    if(h<9){
        h="0"+h;
    }
    if(m<9){
      m="0"+m;  
    }
    if(s<9){
        s="0"+s;
    }
    first1.innerHTML=now+" "+h+":"+m+":"+s;
}
window.onload=init;
setInterval(init,1000);
function addwidgets()
{
    var div_element=document.createElement("div");
    div_element.classList.add("addwidgets");
    
    var arr=["App Usage","Web Usage","Online Employees","Live montge","Email log","Time worked","Latest Snapshots"];
    var close=document.createElement("div");
    close.innerHTML="Close";
    close.setAttribute("class", "close");
    close.setAttribute("onclick", "closeWidgets()");
    div_element.appendChild(close);
    var br=document.createElement("br");
    div_element.appendChild(br);
    div_element.style.backgroundColor='#F8F8F8';
    var center=document.createElement("center");
    var table=document.createElement("table");
    for(var i=0;i<=6;i++){
        var tr=document.createElement("tr");
        var td=document.createElement("td");
        var img=document.createElement("img");
        img.setAttribute("src","images/No_Image_Available.jpg");
        img.setAttribute("style","border-radius:25px;border:1px solid #323232;");
        td.appendChild(img);
        tr.appendChild(td);
        td=document.createElement("td");
        td.innerHTML=arr[i];
        td.style.fontSize=20;
        tr.appendChild(td);
        td=document.createElement("td");
        var rm_btn=document.createElement("input");
        rm_btn.type="button";
        rm_btn.value="Add to dashboard";
        rm_btn.id=arr[i];
        rm_btn.setAttribute("w_name",arr[i]);
        rm_btn.setAttribute("onclick", "addToDashboard(this)");
        rm_btn.setAttribute("class", "close");
        td.appendChild(rm_btn);
        tr.appendChild(td);
        table.appendChild(tr);
    }
    center.appendChild(table);
    div_element.appendChild(center);
    document.body.appendChild(div_element);
}
function addToDashboard(name){
    var widget_name=name.attributes.w_name.value;
    var table=document.querySelector("#content-area");
    var tr=document.createElement("tr");
    tr.classList.add("overall");
    var td=document.createElement("td");
    td.innerHTML=widget_name;
    tr.appendChild(td);
    table.appendChild(tr);
    
    closeWidgets();
}
function closeWidgets()
{
    var div=document.querySelector(".addwidgets");
    document.body.removeChild(div);
}