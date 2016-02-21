/**
 * Created by dale on 2/21/16.
 */

function getAmount() {
    var pre_tax = parseFloat($('#pre-tax-total').val())
    $('#subtotal').text(pre_tax.toFixed(2))
    var tn_tax = 0.0975 * pre_tax
    $('#tn-tax-amount').text(tn_tax.toFixed(2))
    var surcharge = 0.75
    $('#avon-surcharge-amount').text(surcharge.toFixed(2))
    $('#total-amount').text((pre_tax+tn_tax+surcharge).toFixed(2))
}

$('#calculate').click(getAmount)
