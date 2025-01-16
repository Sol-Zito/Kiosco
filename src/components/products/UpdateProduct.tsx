import { useState } from "react";
import { Title } from "../title/Title";
import { FormControl, Input, InputLabel } from "@mui/material";
import { ProductData } from "../../utils/types/product";
import "./style.css";

export const UpdateProduct = (product: ProductData) => {
  const [productInfo, setProduct] = useState<ProductData>(product);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("", {
        method: "POST",
        body: JSON.stringify(product),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <Title title="Editar producto" />
      <form onSubmit={handleSubmit}>
        <FormControl variant="standard">
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
            defaultValue={productInfo.nameProduct}
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
            defaultValue={productInfo.description}
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
            defaultValue={productInfo.price}
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
            defaultValue={productInfo.stock}
            minRows={5}
          />
        </FormControl>

        <button>Agregar</button>
      </form>
    </div>
  );
};
