$(document).ready(function () {
    $('#click').click(function () {
        alert('Alert Event Click')
        console.log('Alert Event Click')
    })

    $('#dblclick').dblclick(function () {
        $(this).css('background-color', 'red')
    })

    $('#keydown').keydown(function () {
        $('#pesan_keydown').text($(this).val())
    })

    $('#keyup').keyup(function () {
        $('#pesan_keyup').text($(this).val())
    })
})