const container = document.querySelector('.flex-container')
function createGrid(rows, columns){
    for (let i = 0; i < rows; i++ ){
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
        for (let j = 0; j < columns; j++){
            const grid = document.createElement('div')
            grid.classList.add('grid-item')
            row.appendChild(grid)
            // console.log(`Created grid at (${i}, ${j})`);
        }
        
    }
}

createGrid(16,16)
draw()

const btn = document.querySelector('.grid-numbers');
btn.addEventListener('click', () => {
    const rows = document.querySelectorAll('.row')
    rows.forEach(row => {container.removeChild(row)})
    const result = prompt('Please enter the number of rows and columns: ')
    createGrid(result,result)
    draw()
})

function draw(){
    const grids = document.querySelectorAll('.grid-item')
    grids.forEach(grid => {
        grid.addEventListener('mouseover',function (e) {
            e.target.style.backgroundColor = 'black'
        } )
    })
}



