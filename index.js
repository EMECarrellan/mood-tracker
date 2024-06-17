const $ = (el) => document.querySelector(el)

const   $emojis = $('.emojis')
const   $happy = $('.happy')
const   $neutral = $('.neutral')
const   $sad = $('.sad')
const   $form = $('.form')
const   $textArea = $('textarea')
const   $button = $('button')
const   $template = $('template')
const   $container = $('.container')
const   $savedMessage = $('.saved-message')
const   $messages = $('ul')

let icon = '';
let inputText = ""

function action(emoji) {
    if (emoji === $happy.textContent)
        return '😊'
    else if (emoji === $neutral.textContent)
        return '😐'
    else
        return '🙁'
}

function emojiClick(emojiElement) {
    icon = action(emojiElement.textContent)
    $emojis.style.display='none'
    $form.classList.remove('hidden')
}

$textArea.addEventListener('input', () => {
    inputText = $textArea.value
    if (inputText.length > 0) {
        $button.removeAttribute('disabled')
    }
    else
        $button.setAttribute('disabled', '')

})

function formatDate() {
    const newDate = new Date()
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
    }
    let weekday = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'][newDate.getDay()]
    return (`${weekday} ${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}
    ${addZero(newDate.getHours())}:${addZero(newDate.getMinutes())}`)
}

function addMessage() {
    const clonedTemplate = $template.content.cloneNode(true)
    const $newMessage = clonedTemplate.querySelector('.container')

    const $date = $newMessage.querySelector('span')
    const $content = $newMessage.querySelector('p')
    const $icon = $newMessage.querySelector('i')

    const date = formatDate()

    $date.textContent = date
    $content.textContent = inputText
    $icon.textContent = icon
    
    $messages.appendChild(clonedTemplate)

    $messages.classList.remove('hidden')
    $newMessage.classList.remove('hidden')
    $form.classList.add('hidden')
    $emojis.style.display='flex'

}

$button.addEventListener('click', () => {
    addMessage()

    if (inputText !== '') {
        $textArea.value = '';
        $button.setAttribute('disabled', '')
    }
})

$happy.addEventListener('click', () => emojiClick($happy))
$neutral.addEventListener('click', () => emojiClick($neutral))
$sad.addEventListener('click', () => emojiClick($sad))


