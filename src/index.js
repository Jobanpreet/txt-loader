import { getOptions } from "loader-utils";
import schemaValidator from "schema-utils";
import schema from "./schema.json";
import { ES5, ES6 } from "../constants";

export default function txtLoader(source) {
  const options = getOptions(this);
  schemaValidator(schema, options);
  const updatedSource = source
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  const moduleType = options.esModule ? ES6 : ES5;
  console.log("");
  return `${moduleType}${JSON.stringify(source)}`;
}
