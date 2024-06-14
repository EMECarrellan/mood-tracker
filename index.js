const $ = (el) => document.querySelector(el)

const   $mood = $('.mood')
const   $emojis = $('.emojis')
const   $happy = $('.happy')
const   $neutral = $('.neutral')
const   $sad = $('.sad')
const   $icon = $('.icon')
const   $form = $('.form')
const   $textarea = $('textarea')
const   $button = $('button')

let icon = '';

function action(emoji) {
    if (emoji === $happy.textContent)
        return '😊'
    else if (emoji === $neutral.textContent)
        return '😐'
    else
        return '🙁'
}


$textarea.addEventListener('input', () => {
    const inputText = $textarea.value
    if (inputText.length > 0) {
        $button.removeAttribute('disabled')
    }
    else
        $button.setAttribute('disabled', '')
})

$happy.addEventListener('click', () => {
    icon = action($happy.textContent)
    $emojis.style.display='none'
    $form.classList.remove('hidden')
    $icon.textContent = icon
})

$neutral.addEventListener('click', () => {
    action($neutral.textContent)
    $emojis.style.display='none'
    $form.classList.remove('hidden')
    $icon.textContent = icon
})
$sad.addEventListener('click', () => {
    action($sad.textContent)
    $emojis.style.display='none'
    $form.classList.remove('hidden')
    $icon.textContent = icon
})


