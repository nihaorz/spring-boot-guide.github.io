/**
 * Created by Nihaorz on 2018/2/9.
 */
document.querySelector("body").onkeydown = function (e) {
    var eCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
    var href = null;
    if (eCode == 37) {
        // left arrow
        href = $(".navheader td[align=left] a[accesskey=p]").attr("href");
    } else if (eCode == 39) {
        // right arrow
        href = $(".navheader td[align=right] a[accesskey=n]").attr("href");
    }
    if(href != null){
        window.location.href = href;
    }
}