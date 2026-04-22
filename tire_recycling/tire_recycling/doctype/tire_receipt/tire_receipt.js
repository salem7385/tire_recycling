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
        let net = frm.doc.gross_weight - frm.doc.tare_weight;
        frm.set_value('net_weight', net);

        // تحديث الكمية في أول سطر بالجدول تلقائياً
        if (frm.doc.items && frm.doc.items.length > 0) {
            let row = frm.doc.items[0];
            frappe.model.set_value(row.doctype, row.name, 'qty_received', net);
            frm.refresh_field('items');
        }
    }
}
