var url = "./"; // url tujuan
var count = 3; // dalam detik
function countDown() {
    if (count > 0) {
        count--;
        var waktu = count + 1;
        $('#kata').html('<b>Halaman Ini Akan Otomatis Di Redirect KE </b> ' + url + ' dalam ' + waktu + ' detik.');
        setTimeout("countDown()", 1000);
    } else {
        window.location.href = url;
    }
}
countDown();
