# Can you tell entities from values

## Oh I know, add marker interfaces

## But adding interfaces does not stop you from getting logic wrong :(

## Review the PersonalName and Person class

## Is this a reasonable amount of code to write

## More importantly, can a non programmer understand it

* The last question is at the heart of DDD

## But Andy, Records are coming in C#10 with it's primary constructor. That would make writing Values much more concise

## Yh, that's what they said back in C#7 before pulling the feature

``` csharp
interface IValue {}
interface IEntity {}

partial class PersonalName: IValue
{
  PersonalName(string firstName, string lastName)
  {
    FirstName = firstName;
    LastName = lastName;
  }

  public string FirstName { get; } // No setter for immutablity
  public string LastName { get; }

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



partial class Person: IEntity
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
```
