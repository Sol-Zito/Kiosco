import { useState } from "react";
import { Title } from "../title/Title";
import { FormControl, Input, InputLabel } from "@mui/material";
import "./style.css";

export const CreateProduct = () => {
  interface createProduct {
    nameProduct: string;
    price: number;
    description: string;
    stock: number;
  }

  const [productData, setProductData] = useState<createProduct>({
    nameProduct: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/apiv1/signup", {
        method: "POST",
        body: JSON.stringify(productData),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
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
          <InputLabel htmlFor="nameProduct">Nombre del producto</InputLabel>
          <Input
            id="nameProduct"
            aria-describedby="nameProduct-text"
            name="nameProduct"
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
