import { API_URL } from "@lib/Enviroments";

export const getAllCategories = async () => {
  const response = await fetch(`${API_URL}/categorias/listar`, {
    // headers: {
    //   Authorization: "Bearer " + token,
    // },
  });
  const status = response.status;
  const data = await response.json();
  return { data, status };
};

export const postCategory = async (category) => {
  const response = await fetch(`${API_URL}/categorias/crear`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  });
  const status = response.status;
  const data = await response.json();
  return { data, status };
};

export const deleteCategory = async (id, token) => {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const status = response.status;
  const data = await response.json();
  return { data, status };
};
