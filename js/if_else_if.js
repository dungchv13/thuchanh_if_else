let useName=prompt("ten dang nhap");
if (useName == "Admin"){
    let passWord=prompt("hay nhap password!");
    if(passWord=="TheMaster"){
        alert("hello boss")
    }else if(passWord == null){
        alert("canceld");
    }else{
        alert("Wrong password")
    }

}else if(useName == null){
    alert("canceld");
}else{
    alert("i don't know you");
}