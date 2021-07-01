
function UserActionPost(entry){

    var userAction = {
      entryType: entry.entryType,
      entryName: entry.entryName
    };
  try{
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://gnewsuser:D7cPTxlmqaOT5Omo@gnewcluster.xu331.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true,useNewUrlParser: true });
    mongoose.connection.collection('userActions').insertOne(userAction).then((m) =>{
        mongoose.connection.close();
    });
    console.log('posted');
  return true;
  } catch{
    return false;
  }
 
}
module.exports = {
  Post: function (entry) {
    UserActionPost(entry);
  }
};
