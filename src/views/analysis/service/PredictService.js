import axios from "axios";
import { APIurl } from "helper/API";
import { AuthHeader } from "helper/AuthHeader";

export const PredictCity = async (dataModal) => {
  return await axios.post("http://localhost:8000/predict-city", dataModal);
};

export const PredictMax = async (dataModal) =>
  await axios.post("http://localhost:8000/predict-max", dataModal);
