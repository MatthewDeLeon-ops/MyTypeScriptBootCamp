// typeGuards are a uniontype where we either have a string or Other type.
// import moment from "moment";
type Employeedetails = {
  name: string;
  privileges: string[];
};

type Identification = {
  name: string;
  startDate: Date;
  privileges: string;
};
// Type Guard Example:
type elevatedDetails = Employeedetails | Identification;

function printUserDetails(cool: elevatedDetails) {
  console.log("name: " + cool.name);
  if ("privileges" in cool) {
    console.log("Privileges: " + cool.privileges);
  }
  if ("startDate" in cool) {
    console.log("Start Date: " + cool.startDate);
  }
}
printUserDetails({ name: "maxine", privileges: "whatever", startDate: new Date() });

// */
