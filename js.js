document.querySelector('#go').onclick = go;
function go(){
let point1 = [],point2 = [];
point1.push(+(document.querySelector('#x1').value));
point1.push(+(document.querySelector('#y1').value));
point2.push(+(document.querySelector('#x2').value));
point2.push(+(document.querySelector('#y2').value));
let re=[];
for(let i=0;i<2;i++){
    if(point1[i]<point2[i]){
        re[i] = point2[i] - point1[i];
    }else{
        re[i] = point1[i] - point2[i];
    }
    if(Math.floor(point1[i])==Math.floor(point2[i])){
        if((point1[i]-Math.floor(point1[i]))+(point2[i]-Math.floor(point2[i]))>((Math.ceil(point1[i]))-point1[i])+((Math.ceil(point2[i]))-point2[i])){
            re[i] = +((Math.ceil(point1[i])-point1[i])+(Math.ceil(point2[i])-point2[i]));
        }else{
            re[i] = +((point1[i]-Math.floor(point1[i]))+(point2[i]-Math.floor(point2[i])));
        }
    }
}
let result=0;
for(let i=0;i<re.length;i++){
    result += re[i]
}
document.getElementById('result').innerHTML ='The shortest way - '+result.toFixed(1);
}




