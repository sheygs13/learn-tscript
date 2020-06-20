// You'll often see enums with all-uppercase values but it
// is not a "must do"

enum Role {
  // default => 0
  AUTHOR = "AUTHOR",
  // default => 1
  READ_ONLY = 100,
  // default => 2
  ADMIN = "ADMIN",
}

const person = {
  name: "Olusegun",
  age: 24,
  hobbies: ["sports", "cooking", "surfing"],
  role: Role.ADMIN,
};

const { role }: { role: Role } = person;
if (role === Role.ADMIN) console.log(role);

// should be rarely used
const random: any[] = [3, null, "undefined", function () {}, { name: "Any" }];
