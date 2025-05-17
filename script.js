function validError(){
    const phoneNumIn=document.getElementById("phoneNum").value.trim();
    const passIM=document.getElementById("pass").value.trim();
    const numError=document.getElementById("numError");
    const passError=document.getElementById("passError");

    let isValid=true;

    // corrected values
    const correctNum="01319698855";
    const correctPass="698845";
    
    if(correctNum!=phoneNumIn){
        numError.style.display="block";
        isValid=false;
        
    }
    else{
        numError.style.display="none";

    };
    
    if(correctPass!=passIM){
        passError.style.display="block";
        isValid=false;
        
    }
    else{
        passError.style.display="none";

    };
    if(isValid){
        alert("Login successfull");
    }

}