var name=document.name.value;
var checkme=document.checkme.value;
if(name==null||name==""){
    return false;
}else if(checkme!=name){
    return false;
}

