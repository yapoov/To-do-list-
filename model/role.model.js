module.exports = mongoose => {
    const Role = mongoose.model(
      "Role", 
      mongoose.Schema({
      name: {
        type: String
      }
    })
    );
    return Role;
  };