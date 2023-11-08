import axios from "axios";
import { AuthHeader } from "helper/AuthHeader";

export const GetDoctors = async () =>
  await axios.get("https://localhost:8080/doctor", AuthHeader());

export const CreateDoctor = async (doctor) =>
  await axios.post("https://localhost:8080/doctor", doctor, AuthHeader());

export const UpdateDoctor = async (doctor, id) =>
  await axios.put("https://localhost:8080/doctor/" + id, doctor, AuthHeader());

export const GetDoctorByID = async (id) =>
  await axios.get("https://localhost:8080/doctor/" + id, AuthHeader());

export const DeleteDoctorByID = async (id) =>
  await axios.delete("https://localhost:8080/doctor/" + id, AuthHeader());
