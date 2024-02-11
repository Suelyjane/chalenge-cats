const $buttonCat1 = document.querySelector('.cat cat-1')
const $buttonCat2 = document.querySelector('.cat cat-2')
const $buttonCat3 = document.querySelector('.cat cat-3')

const $principalBoxImage = document.querySelector('.principal-image-box')


function handleButtonCat1(){
    $principalBoxImage.innerHTML = '<img src="images/cats1.png">'
}

function handleButtonCat2(){
    $principalBoxImage.innerHTML = '<img src="images/cat2.webp">'
}

function handleButtonCat3(){
    $principalBoxImage.innerHTML = '<img src="images/cat3.webp">'
}

$buttonCat1.addEventListener('click', handleButtonCat1)
$buttonCat1.addEventListener('click', handleButtonCat2)
$buttonCat1.addEventListener('click', handleButtonCat3)
