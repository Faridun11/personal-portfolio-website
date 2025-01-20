let elList = document.querySelector(".About")
let mode = false
function handleOpen() {
    mode = !mode
    if (mode == true) {
        elList.classList.add("active")
    } else {
        elList.classList.remove("active")
    }

    console.log(mode);

}

let elForm = document.querySelector(".card_wrapper")
let elFormName = elForm.querySelector("font_name")
let elFormEmail = elForm.querySelector(".font_suere")
let elFormMessage = elForm.querySelector(".font_message")

elForm.addEventListener("submit", e => {
    e.preventDefault()

    let bot = {
        TOKEN: "7860574033:AAHoTFFwk-mh_c2TXUXuLXMRHl00X5Hsz9E",
        chatID: "-1002127851630",
        message: `Foydalanuvchi ismi: ${elFormName.value.trim()}; Foydalanuvchi surname: ${elFormEmail.value.trim()}; Foydalanuvchi message: ${elFormMessage.value.trim()}`
    }

    fetch(`https://core.telegram.org/bots/api${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message}`, {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => alert("Xabar jonatildi"))
        .catch(err => alert("Xatolik bor"))

    elFormName.value = null
    elFormMessage.value = null
    elFormEmail.value = null
})