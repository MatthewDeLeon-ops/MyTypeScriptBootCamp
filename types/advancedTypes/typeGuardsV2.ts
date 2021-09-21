// typeGuards are a uniontype where we either have a string or Other type.
import moment from "moment";
const actualdate = "2017-03-13";
const timeAndDate = moment(actualdate).format("YYYY-MM-DD");

type Employeedetails = {
  name: string;
  privileges: string[];
};

type Identification = {
  name: string;
  privileges: string;
  startDate: string;
};
type elevatedDetails = Employeedetails | Identification; // Type Guard Example

function printUserDetails(cool: elevatedDetails) {
  console.log("name: " + cool.name);
  if ("privileges" in cool) {
    console.log("Privileges: " + cool.privileges);
  }
  if ("startDate" in cool) {
    console.log("begin Date: " + cool.startDate);
  }
}

printUserDetails({
  name: "Maxine Rhodes Joker",
  privileges: ["floor3", "floor 5", "tier 1 DBs", "S3"],
  startDate: timeAndDate,
});

// */
// typeguard docs https://www.typescriptlang.org/docs/handbook/advanced-types.html
//https://basarat.gitbook.io/typescript/type-system/typeguard