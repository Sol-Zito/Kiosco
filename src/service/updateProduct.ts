import { ProductData } from "../utils/types/product";

export async function updateProductBD(id: number, product: ProductData) {
  try {
    const data = await fetch(
      `http://localhost:8080/inventary-app/edit-product/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      }
    );

    if (data.ok) {
      return "Elemento modificado correctamente";
    }
  } catch (e) {
    throw new Error("No se logro actualizar el producto en la BD.");
  }
}
