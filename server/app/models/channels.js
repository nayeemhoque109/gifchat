const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
  channelUsers: [
    {
        name: { type: String, default: '' },
        email: { type: String, default: '' },
        picture: { type: String, default: '' },
    },
  ],
  messages: [
    {
      senderEmail: { type: String, default: "" },
      messageType: { type: String, default: "TEXT" },
      text: { type: String, default: "" },
      addedOn: { type: Number, default: Date.now() },
    },
  ],
  addedOn: { type: Number, default: Date.now() },
});

channelSchema.method({
  saveData: async function () {
    return this.save();
  },
});
channelSchema.static({
  findData: function (findObj) {
    return this.find(findObj);
  },
  findOneData: function (findObj) {
    return this.findOne(findObj);
  },
  findOneAndUpdateData: function (findObj, updateObj) {
    return this.findOneAndUpdate(findObj, updateObj, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
  },
});
module.exports = mongoose.model("wc-channel", channelSchema);