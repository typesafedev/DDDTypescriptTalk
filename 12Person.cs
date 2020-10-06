// Entity object
partial class Person
{
  Person(int id, PersonalName name)
  {
    Id = id;
    Name = name;
  }
  int Id { get; }
  PersonalName Name { get; set; } // Setter for mutability
}

// Equality implemented below
partial class Person
{
  // Compare on Id now...
  public override int GetHashCode() =>
    this.Id.GetHashCode();

  public override bool Equals(object other) =>
    Equals(other as Person);

  bool Equals(Person other)
  {
    if ((object)other == null)
    { 
      return false; 
    }
    return Id == other.Id;
  }
}