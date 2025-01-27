import { useState } from "react";
import { Title } from "../title/Title";
import { FormControl, Input, InputLabel } from "@mui/material";
import { createProduct, createProductBD } from "../../service/createProduct";
import "./style.css";

export const CreateProduct = () => {
  const [productData, setProductData] = useState<createProduct>({
    productName: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let resp = await createProductBD(productData);
      if (resp) {
        e.target.reset();
        alert(resp);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <Title title="Crear producto" />
      <form onSubmit={handleSubmit}>
        <FormControl variant="standard" style={{ color: "GrayText" }}>
          <InputLabel htmlFor="productName">Nombre del producto</InputLabel>
          <Input
            id="productName"
            aria-describedby="productName-text"
            name="productName"
            type="text"
            placeholder="Agregar nombre"
            onChange={handleChange}
            required
            fullWidth
          />
        </FormControl>

        <FormControl variant="standard" style={{ color: "GrayText" }}>
          <InputLabel htmlFor="description">
            Descripcion del producto
          </InputLabel>
          <Input
            id="description"
            aria-describedby="description-text"
            name="description"
            type="text"
            placeholder="Agregar descripcion"
            onChange={handleChange}
            required
            fullWidth
          />
        </FormControl>

        <FormControl variant="standard" style={{ color: "GrayText" }}>
          <InputLabel htmlFor="price">Precio del producto</InputLabel>
          <Input
            id="price"
            aria-describedby="price-text"
            name="price"
            type="number"
            placeholder="Agregar precio"
            onChange={handleChange}
            required
            fullWidth
          />
        </FormControl>

        <FormControl variant="standard" style={{ color: "GrayText" }}>
          <InputLabel htmlFor="stock">Stock</InputLabel>
          <Input
            id="stock"
            aria-describedby="stock-text"
            name="stock"
            type="number"
            placeholder="Stock"
            onChange={handleChange}
            required
            fullWidth
            minRows={5}
          />
        </FormControl>

        <button>Agregar</button>
      </form>
    </div>
  );
};
