function display(){
    let a=document.getElementsByName('no1')[0].value
    let b=document.getElementsByName('no1')[1].value
    let c=a+b;
    let c=parseInt(a)+parseInt(b)
    document.getElementsByName('output')[0].innerHTML=c;
    document.getElementsByName('output')[1].innerHTML=c;
}