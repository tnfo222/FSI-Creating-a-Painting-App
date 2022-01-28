let selectedColor = 'blue'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e){
    console.log(e.target.style.backgroundColor = selectedColor)
})


painting.addEventListener('dblclick', function(e){
    console.log(e.target.remove(selectedColor))
})

const palleteColor = document.querySelectorAll('.color-choice')
for (let i = 0; i < palleteColor.length; i++) {
    palleteColor[i].addEventListener('click', function(){
        selectedColor = palleteColor[i].id
    })
}