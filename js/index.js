
let serial= 0;
//for 1st card
document.getElementById('first-card').addEventListener('click', function(){
    serial += 1;
    const shapeName = document.getElementById('triangle').innerText;
    const valueOfb = document.getElementById('value-b').value;
    //const valueOfb = parseFloat(valueOfB);
    const valueOfh = document.getElementById('value-h').value;
    const areaOfShape = 0.5 * parseFloat(valueOfb) * parseFloat(valueOfh);
    displayData(shapeName, areaOfShape.toFixed(2));
});
//for second card
document.getElementById('second-card').addEventListener('click', function(){
    serial += 1;
    const shapeName = document.getElementById('rectangle').innerText;
    const valueOfw = document.getElementById('value-w').value;
    //const valueOfb = parseFloat(valueOfB);
    const valueOfl = document.getElementById('value-l',).value;
    const areaOfShape = parseFloat(valueOfw) * parseFloat(valueOfl);
    displayData(shapeName, areaOfShape.toFixed(2));
});
//for third card
document.getElementById('third-card').addEventListener('click', function(){
    //console.log('clicked');
    //get the data from html using id
    serial += 1;
    const shapeName = document.getElementById('parallelogram').innerText;
    const valueOfB = document.getElementById('value-pb').value;
    //const valueOfb = parseFloat(valueOfB);
    const valueOfH = document.getElementById('value-ph').value;
    //const valueOfh = parseFloat(valueOfH);
    console.log(shapeName, valueOfB, valueOfH);

    const areaOfShape = parseFloat(valueOfB) * parseFloat(valueOfH);
  displayData(shapeName, areaOfShape.toFixed(2));
});
//for fourth card
document.getElementById('fourth-card').addEventListener('click', function(){
    serial += 1;
    const shapeName = document.getElementById('rhombus').innerText;
    const valueOfd1 = document.getElementById('value-d1').value;
    const valueOfd2 = document.getElementById('value-d2').value;
    //console.log(shapeName, valueOfB, valueOfH);

    const areaOfShape = 0.5 * parseFloat(valueOfd1) * parseFloat(valueOfd2);
  displayData(shapeName, areaOfShape.toFixed(2));
});
//for 5th card
document.getElementById('fifth-card').addEventListener('click', function(){
    serial += 1;
    const shapeName = document.getElementById('pentagon').innerText;
    const valueOfp = document.getElementById('value-pentagon-p').value;
    const valueOfb = document.getElementById('value-pentagon-b').value;
    //console.log(shapeName, valueOfB, valueOfH);

    const areaOfShape = 0.5 * parseFloat(valueOfp) * parseFloat(valueOfb);
  displayData(shapeName, areaOfShape.toFixed(2));
});
//for 6th card
document.getElementById('six-card').addEventListener('click', function(){
    serial += 1;
    const shapeName = document.getElementById('ellipse').innerText;
    const valueOfa = document.getElementById('value-ellipse-a').value;
    const valueOfb = document.getElementById('value-ellipse-b').value;
    const valueOfPie = 3.14;
    
    //console.log(shapeName, valueOfB, valueOfH);

    const areaOfShape = parseFloat(valueOfPie ) * parseFloat(valueOfa) * parseFloat(valueOfb);
        if(areaOfShape % 2 === 0){
        return areaOfShape;
    }
//     else if{
//         return areaOfShape.toFixed(2);
//     }
//    else
     displayData(shapeName, areaOfShape.toFixed(2));
});