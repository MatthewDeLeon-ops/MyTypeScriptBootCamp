//Intersection types allow you to combine other types
// you can use Interfaces with extends to do the same deal. Intersections will do the same thing but take less time.
type user = {
  name: string;
  priveleges: string[];
};

type identification = {
  clearanceCode: string;
  employmentstatus: boolean;
  statusCode: string;
};

type EmployeeStatus = user & identification;

const emp2: EmployeeStatus = {
  name: "Danny",
  priveleges: ["floor3", "floor 5", "tier 1 DBs", "S3"],
  clearanceCode: "Beta",
  statusCode: "Green",
  employmentstatus: true,
};
console.log(emp2, "emp2");
// Combines the properties of Both types

// Other Notes
// You can combine and do OR combos for types

/*
type or = string | boolean
type Numberic = number | boolean
type combination = EmployeeStatus & user
*/
