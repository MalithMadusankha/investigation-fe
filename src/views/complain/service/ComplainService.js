import axios from "axios";
import { APIurl } from "helper/API";
import { AuthHeader } from "helper/AuthHeader";

export const GetComplains = async () => {
  return await axios.get(APIurl + "/complain", AuthHeader());
};

export const CreateComplain = async (complain) =>
  await axios.post(APIurl + "/complain", complain, AuthHeader());

export const UpdateComplain = async (complain, id) =>
  await axios.put(APIurl + "/complain/" + id, complain, AuthHeader());

export const GetComplainByID = async (id) =>
  await axios.get(APIurl + "/complain/" + id, AuthHeader());

export const FindComplainByInvestigator = async (id) =>
  await axios.get(APIurl + "/complain/investigator/" + id, AuthHeader());

export const DeleteComplainByID = async (id) =>
  await axios.delete(APIurl + "/complain/" + id, AuthHeader());
