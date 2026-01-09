import { AutoData } from "./AutoData";

export async function indianName(): Promise<string> {
  return AutoData.getData(
    "An Indian full name in format {Firstname_Lastname}"
  );
}

export async function email(): Promise<string> {
  return AutoData.getData("A realistic email address");
}

export async function phoneIN(): Promise<string> {
  return AutoData.getData("A valid Indian mobile number");
}

export async function addressIN(): Promise<string> {
  return AutoData.getData("A realistic Indian residential address");
}

export async function companyName(): Promise<string> {
  return AutoData.getData("A realistic company name");
}
