// Value object
partial class PersonalName
{
  PersonalName(string firstName, string lastName)
  {
    FirstName = firstName;
    LastName = lastName;
  }

  public string FirstName { get; } // No setter for immutablity

  // Private setter is old way to express immutability. 
  // May still be needed to support serialization.
  public string LastName { get; private set; } 
}

// Equality implemented below
partial class PersonalName
{
  public override int GetHashCode() =>
    this.FirstName.GetHashCode() + this.LastName.GetHashCode();

  public override bool Equals(object other) =>
    Equals(other as PersonalName);

  bool Equals(PersonalName other)
  {
    if ((object)other == null)
    { 
      return false; 
    }
    return FirstName == other.FirstName && LastName == other.LastName;
  }
}