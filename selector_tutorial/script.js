// $(document) adalah function yang digunakan untuk men-select semua dokumen yang ada di file lain
// ready adalah function/method yang digunakan untuk mengeksekusi setelah document selesai di-load
$(document).ready(function () {
    // Selector tag
    $('h1').css('color', 'red');
    $('p').css('color', 'blue');

    // Selector class
    $('.judul').css('background-color', 'red');
    $('.paragraf').css('color', 'salmon');

    // Selector id
    $('#judul').css('border', '2px solid blue');
    $('#paragraf').css('border', '2px solid green');

    // Selector type
    $('input:submit').css('background-color', 'green');
    $('input:button').css({ 'padding': '20px', 'background-color': 'green' });
})