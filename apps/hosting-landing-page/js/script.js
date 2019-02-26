$(function() {
    $('.features-list-item-link').on('click', function() {
        $(this).parent().parent().find(".features-list-item-selected").removeClass("features-list-item-selected");
        $(this).parent().parent().find(".black-link").removeClass("black-link");
        $(this).parent().addClass("features-list-item-selected");
        $(this).parent().find(".features-list-item-link").addClass("black-link");
        $("#features-details-heading").text($(this).find('span').text());
    });
});