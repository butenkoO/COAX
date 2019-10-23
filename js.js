document.querySelector('#go').onclick = go;
function go(){
let departure = [],destination = [];
departure.push(+(document.querySelector('#x1').value));
departure.push(+(document.querySelector('#y1').value));
destination.push(+(document.querySelector('#x2').value));
destination.push(+(document.querySelector('#y2').value));
let distance=[];
for(let i=0;i<2;i++){
    if(departure[i]<destination[i]){
        distance[i] = destination[i] - departure[i];
    }else{
        distance[i] = departure[i] - destination[i];
    }
    if(Math.floor(departure[i])==Math.floor(destination[i])){
        if((departure[i]-Math.floor(departure[i]))+(destination[i]-Math.floor(destination[i]))>((Math.ceil(departure[i]))-departure[i])+((Math.ceil(destination[i]))-destination[i])){
            distance[i] = +((Math.ceil(departure[i])-departure[i])+(Math.ceil(destination[i])-destination[i]));
        }else{
            distance[i] = +((departure[i]-Math.floor(departure[i]))+(destination[i]-Math.floor(destination[i])));
        }
    }
}
let result=0;
for(let i=0;i<distance.length;i++){
    result += distance[i]
}
document.getElementById('result').innerHTML ='The shortest way - '+result.toFixed(1);
}




