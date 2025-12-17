const string = 'RWFDAFDSF';
let a='';
for (let i = 0 ; i<=string.length -1  ; i++ ){
 a += string[i];
}
 if(a === a.toUpperCase()){
   console.log(true);
 } else {
    console.log(false);
}