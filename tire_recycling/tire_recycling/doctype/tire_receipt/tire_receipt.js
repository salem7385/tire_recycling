frappe.ui.form.on('Tire Receipt', {
    gross_weight: function(frm) {
        calculate_net(frm);
    },
    tare_weight: function(frm) {
        calculate_net(frm);
    }
});

function calculate_net(frm) {
    if (frm.doc.gross_weight && frm.doc.tare_weight) {
        frm.set_value('net_weight', frm.doc.gross_weight - frm.doc.tare_weight);
    }
}
