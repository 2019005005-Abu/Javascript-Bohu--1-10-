class MyName{
  constructor(fisrtName,lastName){
      this.fisrtName=fisrtName,
      this.lastName=lastName
  }
    FullName=function () { 
      console.log(`
       First-name:${this.fisrtName}
       Last-name:${this.lastName}
      `)
    }
    
    
}

class MyWifeName extends MyName{
    constructor(fisrtName,lastName,MyWifeName,MyWifeagee){
        super(fisrtName,lastName);
        this.MyWifeName=MyWifeName;
        this.MyWifeagee=MyWifeagee;
    }
    MyWifeBio=()=>{
        console.log(`
         My wife name is:${this.MyWifeName}
         My Wife age is:${this.MyWifeagee}
        `)
    }
}

class MyWfieAddress extends MyWifeName{
    constructor(fisrtName,lastName,MyWifeName,MyWifeagee,Address){
        super(fisrtName,lastName,MyWifeName,MyWifeagee);
        this.Address=Address;
    }
    addresIs=function () {  
        console.log(this.Address)
    }
}
let details=new MyWfieAddress('Shahriar','Rifat','Oditi',23,'Mudupur')
console.log(details.addresIs())
console.log(details.FullName())

//Input and OutPut in Javascript
window.alert("I am a Javascript Developer");
const outputIs=document.getElementById('id_1');
outputIs.innerHTML="I am   working as a  Javascript Developer";
const output_1=document.getElementsByClassName('id_1')[0];
output_1.innerHTML="I am a Full text Web Application Developer";
const output_2=document.getElementsByTagName('id');
output_2.innerHTML="I am a React Js Developer";
const outPut_3=document.querySelector('.class_1')[0];
outPut_3.innerHTML="This a good boy and I am Learning  Javascript";
const outPut_4=document.querySelectorAll('.claas-1')[0];
outPut_4.innerHTML="Hello world"; 
const outPut5=document.getElementsByName('Heading')[0];
outPut5.innerHTML="I am using Javascript  Here"
const outPut=document.write("I am a Full Stack web Application  developer");
 //Varible
 var name='Abu Al Shahriar Rifat';
 let myPhoneNumber=542525252582;
 const MyPassword="55353438389hdge";

console.log(name,myPhoneNumber,MyPassword);

var a=23;
var b=a;
console.log(a)
console.log(b)
console.log(a+b);

//Constant Varibale in Javascript
