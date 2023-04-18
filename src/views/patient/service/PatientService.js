import axios from "axios";
import { AuthHeader } from "helper/AuthHeader";

export const GetPatients = async () => {
  return await axios.get("https://localhost:8080/patient", AuthHeader());
};

export const CreatePatient = async (patient) =>
  await axios.post("https://localhost:8080/patient", patient, AuthHeader());

export const UpdatePatient = async (patient, id) =>
  await axios.put(
    "https://localhost:8080/patient/" + id,
    patient,
    AuthHeader()
  );

export const GetPatientByID = async (id) =>
  await axios.get("https://localhost:8080/patient/" + id, AuthHeader());

export const DeletePatientByID = async (id) =>
  await axios.delete("https://localhost:8080/patient/" + id, AuthHeader());
