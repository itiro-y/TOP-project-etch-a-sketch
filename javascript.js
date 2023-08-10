const container = document.querySelector('.container');

// This function creates a grid of nxn divs
function generateDivGrid(n){
    for(let i = 0; i < n; i++){
        const columns = document.createElement('div');
        columns.className = "column";
        for(let j = 0; j < n; j++){
            const rows = document.createElement('div');
            rows.className = "row";
            columns.appendChild(rows);
        }
        container.appendChild(columns);
    }   
}

function clearDivGrid(){
    const columns = document.querySelectorAll('.container > .column');
    columns.forEach((row) => {
        row.remove();
    });
}


const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    const n = prompt("Enter the number of lines for your board (n x n): ");
    if(n > 100 || n < 1)
        alert("ERROR: The number must be non-zero, non-negative and lower than 100!!!");
    else{
        clearDivGrid();
        generateDivGrid(n);
        const columns = document.querySelectorAll('.container > .column');
        
        columns.forEach((row) => {
            row.addEventListener('mouseover', e => {
                // Math.floor(Math.random() * (max - min) ) + min;
                const R = Math.floor(Math.random() * (255));
                const G = Math.floor(Math.random() * (255));
                const B = Math.floor(Math.random() * (255));
                e.target.style.cssText = `background-color: rgb(${R}, ${G}, ${B})`;
            });
        });
        return;
    }
})






