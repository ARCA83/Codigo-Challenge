import { API_URL } from '@lib/Enviroments'

export const GetAllProducts = async () => {
  const response = await fetch(`${API_URL}/productos/productos`)
  const data = await response.json()
  return data
}

export const GetProductById = async (id) => {
  const response = await fetch(`${API_URL}/productos/productos/${id}`)
  const data = await response.json()
  return data
}

export const PostProduct = async (product) => {
  const response = await fetch(`${API_URL}/productos/productos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  const data = await response.json()
  return data
}
