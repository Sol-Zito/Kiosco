import { ProductData } from "../utils/types/product";

export async function getProductBD(id: string): Promise<ProductData> {
  try {
    const data = await fetch(
      `http://localhost:8080/inventary-app/product/${id}`,
      {
        method: "GET",
      }
    );
    const resp = data.json();
    return resp;
  } catch (e) {
    throw new Error("No se encontro el producto en la BD.");
  } finally {
    console.log("Intentando resolver error");
  }
}
