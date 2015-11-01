$(document).ready(function() {
    $("#add-payment").click(function() {
        $('#payment-info').removeClass('hidden');
    });
    $("#add-address").click(function() {
        $('#address-info').removeClass('hidden');
    });
});

$('#my-affix').affix({
    offset: {
      top: 45
    , bottom: function () {
        return (this.bottom = $('.footer').outerHeight(true))
      }
    }
  })