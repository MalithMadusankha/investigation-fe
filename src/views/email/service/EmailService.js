import axios from "axios";
import { AuthHeader } from "helper/AuthHeader";

export const GetEmails = async () =>
  await axios.get("https://localhost:8080/email", AuthHeader());

export const CreateEmail = async (email) =>
  await axios.post("https://localhost:8080/email", email);

export const UpdateEmail = async (email, id, fileData) => {
  let result;
  if (fileData === "") {
    result = await axios.put(`http://localhost:8000/email/send`, email);
  } else {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.append("file", fileData);
    formData.append("email", email.email);
    formData.append("description", email.description);
    formData.append("reply", email.reply);
    formData.append("name", email.name);
    result = await axios.put(
      `http://localhost:8000/email/send/file`,
      formData,
      config
    );
  }
  const res = await axios.put(
    `https://localhost:8080/email/${id}`,
    email,
    AuthHeader()
  );
  return { send: result.data, update: res.data };
};

export const CheckSensitive = async (fileData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const formData = new FormData();
  formData.append("file", fileData);
  return await axios.put(
    `http://localhost:8000/email/sensitive`,
    formData,
    config
  );
};

export const GetEmailByID = async (id) =>
  await axios.get("https://localhost:8080/email/" + id, AuthHeader());

export const DeleteEmailByID = async (id) =>
  await axios.delete("https://localhost:8080/email/" + id, AuthHeader());
