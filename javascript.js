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

generateDivGrid(16);



