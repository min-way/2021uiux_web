function findChecked(){
  let found = null;
  const kcity = document.getElementsByName("city");

  for(let i=0;i<kcity.length;i++){
    if(kcity[i].checked == true){
      found = kcity[i].value;
    }
  }
alert(found);
}
