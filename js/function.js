function displayData(shapeName, areaOfParallelogram){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');

    
    tr.innerHTML=`
    <td>${serial}.${shapeName}</td> 
    <td>${areaOfParallelogram}cm<sup>2</sup></td>
    <td><button class="p-2 normal-case text-white font-bold bg-blue-500 border-none rounded ">Convert to m<sup>2</sup></button></td>
    
    `;
    
    container.appendChild(tr);
    // document.body.appendChild(btn);
}