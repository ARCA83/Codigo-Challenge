import { API_URL } from "@lib/Enviroments";

export const GetCategories = async (token) => {
  const response = await fetch(`${API_URL}/categories`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};

export const PostCategory = async (category, token) => {
  const response = await fetch(`${API_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  });
  const data = await response.json();
  return data;
};
