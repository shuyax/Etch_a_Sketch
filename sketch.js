const container = document.querySelector('.flex-container')

function createGrid(rows, columns){
    for (let i = 0; i < rows; i++ ){
        const row = document.createElement('div')
        container.appendChild(row)
        for (let j = 0; j < columns; j++){
            const grid = document.createElement('div')
            grid.classList.add('grid-item')
            grid.style.border = '1px solid blue'
            row.appendChild(grid)
            console.log(`Created grid at (${i}, ${j})`);
        }
        
    }
}
createGrid(16,16)