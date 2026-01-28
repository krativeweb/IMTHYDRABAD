import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchIMTHyderabadData() {
  const response = await axios.get(
    `${API_BASE_URL}/api/pgdm-admission`
  );
  return response.data;
}
