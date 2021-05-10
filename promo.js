<script>

$(document).on("click", ".promo-filter-btn", function () {
    $(".promo-filter-btn").removeClass("active");
    $(this).addClass("active");
});
$(".promo-filter-btn").click(function () {
    $(".promo-filter-btn").removeClass("active");
    $(this).addClass("active");
});
function filterPromoOffers(i) {
    console.log("filtering on: " + i);
    var o = ".filterDiv.".concat(i);
    "all" === i ? ($(o).hide(), $(".filterDiv").show()) : ($(".filterDiv").hide(), $(o).show());
}


</script>
