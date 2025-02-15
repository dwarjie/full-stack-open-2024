require("dotenv").config();
const mongoose = require("mongoose");
const PhonebookSchema = require("./phonebook.schema");

mongoose.connect(process.env.MONGO_URI);

if (process.argv.length == 2) {
  PhonebookSchema.find({}).then((data) => {
    if (!data || !data.length) {
      console.log("Empty Data.");
      process.exit(1);
    }

    console.log("Phonebook list:");
    data.forEach((person) => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
    process.exit(1);
  });
} else {
  const [name, number] = process.argv.slice(2);

  if (name == undefined || number == undefined) {
    console.log("Phonebook content or number missing.");
    process.exit(1);
  }

  const phonebook = new PhonebookSchema({
    name,
    number,
  });

  phonebook.save().then((res) => {
    console.log(`Added ${name} ${number} to phonebook`);
    mongoose.connection.close();
    return process.exit(1);
  });
}
