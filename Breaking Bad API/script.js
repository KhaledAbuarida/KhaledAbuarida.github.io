
const button = document.querySelector(".getRandomCharacter");
const name = document.getElementById("name")
const birthday = document.getElementById("birth_day")
const nickname = document.getElementById("nick_name")
const img = document.querySelector(".bb_img")

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    name.innerText = "loading..."
    birthday.innerText = "loading..."
    nickname.innerText = "loading..."

    const randomNumber = Math.ceil(Math.random() * 57);
    fetch(`https://www.breakingbadapi.com/api/characters/${randomNumber}`)
        .then(response => response.json())
        .then(character => {
            console.log(character);
            name.innerText = character[0].name
            birthday.innerText = character[0].birthday
            nickname.innerText = character[0].nickname
            img.src = character[0].img
        })


})
