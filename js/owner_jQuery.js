var x=0;
var count=1;
var cross=5;
var id="#Row"+(count+1);
var widgets=["online_employee","email_log","time_worked","activity_rating"];
$("#cross1").click(function(event) {
    $(this).remove();
});
$("#cross2").click(function(event) {
    $(this).remove();
});
$("#cross3").click(function(event) {
    $(this).remove();
});
$("#cross4").click(function(event) {
    $(this).remove();
});
function addRow(){
    id="Row"+count;
    jQuery("<div/>",{
        class:"row p-3 justify-content-around",
        style:"border:1px solid black;",
        Text:id,
        id:id
    }).appendTo(".c2");
}
$('#addwidgets').click(function(event){
    
    if(x%2==0){
        addRow();
        console.log(id);
        jQuery("<div/>",{
            class: "col-lg-6 bg-white",
            id:"cross"+cross,
            style:"border:1px solid black;",
            Text:"Col1"
        }).appendTo("#"+id);

        jQuery("<h4/>", {
           id:"hcross"+cross,
           text: "Email log1"
        }).appendTo("#cross"+cross);
        
        jQuery("<i/>", {
            class:"fas fa-times float-right font-size-20 cursor"
        }).appendTo("#hcross"+cross);
        
        $("#hcross"+cross).on("click", function(){
            $(this).remove();
            $("#cross"+cross).remove();
            console.log("Column removed "+x+" & cross : "+cross);
            cross--;
            x--;
            if(x%2==0 || x<0){
                count--;
                id="Row"+count;
                $("#"+id).remove();
                console.log("Row Count removed : "+count);
            }
        });
        
        x++;
        console.log(x);
        cross++;
    }
    else{
        jQuery("<div/>",{
            class: "col-lg-6 bg-white",
            id:"cross"+cross,
            style:"border:1px solid black;",
            Text:"col2"
        }).appendTo("#"+id);

        jQuery("<h4/>", {
           id:"hcross"+cross,
           text: "Email log2"
        }).appendTo("#cross"+cross);
        
        jQuery("<i/>", {
            class:"fas fa-times float-right font-size-20 cursor"
        }).appendTo("#hcross"+cross);
        
        $("#hcross"+cross).on("click", function(){
            $(this).remove();
            $("#cross"+cross).remove();
            console.log("Column removed "+x+" & cross : "+cross);
            cross--;
            x--;
            if(x%2==0 || x<0){
                count--;
                id="Row"+count
                $("#"+id).remove();
                console.log("Row Count removed : "+count);
            }
        });
        
        x++;
        console.log(x);
        count++;
        cross++;
    }
    
});