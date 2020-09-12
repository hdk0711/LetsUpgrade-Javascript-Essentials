function copyValue(){
           const ele1=document.getElementsByClassName("input");
           let text=ele1[0].value;
           let ele2=document.getElementsByClassName("input");
           ele2[1].value=text;

}