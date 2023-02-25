var a=[{name:'user 1',location:'mumbai'},
{name:'user 2',location:'goa'},
{name:'user 3',location:'delhi'},
{name:'user 4',location:'pune'}]

let count=2;
for(let i=0;i<count;i++){
   displayname.innerHTML+=a[i].name
   displaylocation.innerHTML+=a[i].location

}
let clicknum=0;
function showMore(){
   let displayname=document.getElementById("displayname")
   let displaylocation=document.getElementById("displaylocation")
   
   
   for(let i=2;i<a.length;i++){
     displayname.innerHTML+=a[i].name
     displaylocation.innerHTML+=a[i].location

      }
      document.getElementById("btn1").disabled=true; 
}  