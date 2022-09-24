import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../contexts/AdminContext";
import { GetToken } from "../../../services/AuthServices";
import {
  GetCategories,
  PostCategory,
} from "../../../services/CategoriesServices";

export const Categories = () => {
  const { setAdminTitle } = useContext(AdminContext);
  const [listOfCategories, setListOfCategories] = useState([]);
  const [category, setCategory] = useState({
    name: "",
  });
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    setAdminTitle("Categories");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const token = GetToken();
      const response = await GetCategories(token);
      setListOfCategories(response.data);
    };
    fetchData();
  }, [bandera]);

  const createCategory = async (event) => {
    event.preventDefault();
    try {
      const token = GetToken();
      const response = await PostCategory(category, token);
      if (!response.data) {
        throw new Error(response.error);
      }
      setBandera(!bandera);
      setCategory({
        name: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    return setCategory({ ...category, [name]: value });
  };

  return (
    <div className="Products">
      <h4 className="Products-subtitle">All categories</h4>
      <div className="Products-table">
        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Product description</th>
            </tr>
          </thead>
          <tbody>
            {listOfCategories.length > 0 &&
              listOfCategories.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h4 className="Products-subtitle">Create category</h4>
      <form className="Products-create-form" onSubmit={createCategory}>
        <div className="form-group">
          <label htmlFor="productName">Category name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={category.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="Products-create-button">
            Create category
          </button>
        </div>
      </form>
    </div>
  );
};
