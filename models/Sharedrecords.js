const mongoose = require("mongoose");

const SharedRecordsSchema = new mongoose.Schema(
  {
    customercodeid: { type: Number },
    productcodeid: { type: Number },
    billercodeid: { type: Number },
    paymentmethodcodeid: { type: Number },
    deliveryoccurcodeid: { type: Number },
    drivercodeid: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sharedrecords", SharedRecordsSchema);
// 63c2de54a036aba6ceac44c4
