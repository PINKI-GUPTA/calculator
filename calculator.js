let btn=document.querySelectorAll("button");
let input_data=document.getElementById("input-box");
let btn_arr=Array.from(btn);
let input_value="";
btn_arr.forEach( button => {
    button.addEventListener("click", (e)=>{
       
        if(e.target.innerHTML=="="){
            input_value=eval(input_value);
            input_data.value=input_value;
        }
        else if(e.target.innerHTML=="AC"){
            input_data.value="";
        }
        else if(e.target.innerHTML=="C"){
            input_value=input_value.substring(0,input_value.length-1);
            input_data.value=input_value;

        }
        else{
            input_value+=e.target.innerHTML;
            input_data.value=input_value;
        }
      
       
    })

});

