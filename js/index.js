
let serial= 0;
//for 1st card
document.getElementById('first-card').addEventListener('click', function(){
    serial += 1;
    const shapeName = document.getElementById('triangle').innerText;
    const valueOfb = document.getElementById('value-b',).value;
    //const valueOfb = parseFloat(valueOfB);
    const valueOfh = document.getElementById('value-h',).value;
    const areaOfShape = 0.5 * parseFloat(valueOfb) * parseFloat(valueOfh);
    displayData(shapeName, areaOfShape.toFixed(2));
});
