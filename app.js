var a=10;
function func(){
    var node2=document.createElement('br');
    var node3=a;
    var node4=document.getElementById('div1');

    node4.appendChild(node3);
    node4.appendChild(node2);

    a=a+5;
}