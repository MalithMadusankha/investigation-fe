import axios from "axios";
import { APIurl } from "helper/API";
import { AuthHeader } from "helper/AuthHeader";

export const GetUsers = async () => {
  return await axios.get(APIurl + "/user", AuthHeader());
};

export const CreateUser = async (user) =>
  await axios.post(APIurl + "/user", user, AuthHeader());

export const UpdateUser = async (user, id) =>
  await axios.put(APIurl + "/user/" + id, user, AuthHeader());

export const GetUserByID = async (id) =>
  await axios.get(APIurl + "/user/" + id, AuthHeader());

export const DeleteUserByID = async (id) =>
  await axios.delete(APIurl + "/user/" + id, AuthHeader());
