import { useEffect, useState } from "react";
import { Title } from "../title/Title";
import { FormControl, Input, InputLabel } from "@mui/material";
import { ProductData } from "../../utils/types/product";
import "./style.css";
import { getProductBD } from "../../service/getProduct";
import CircularIndeterminate from "../loading/Circular";
import { updateProductBD } from "../../service/updateProduct";
import { useNavigate } from "react-router-dom";

interface data {
  idProduct: string;
}

export const UpdateProduct = ({ idProduct }: data) => {
  const nav = useNavigate();
  const [productInfo, setProduct] = useState<ProductData>({
    idProduct: 0,
    description: "",
    price: 0,
    productName: "",
    stock: 0,
  });

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let resp = await updateProductBD(productInfo.idProduct, productInfo);
      if (resp) {
        alert(resp);
        nav(-1);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    async function getData() {
      let data = await getProductBD(idProduct);
      setProduct(data);
    }
    getData();
  }, [idProduct]);

  return (
    <div>
      <Title title="Editar producto" />
      {productInfo.idProduct > 0 ? (
        <form onSubmit={handleSubmit}>
          <FormControl variant="standard">
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
              defaultValue={productInfo.productName}
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
      ) : (
        <CircularIndeterminate />
      )}
    </div>
  );
};
