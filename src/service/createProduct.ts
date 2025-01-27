export interface createProduct {
  productName: string;
  description: string;
  price: number;
  stock: number;
}

export async function createProductBD(data: createProduct) {
  try {
    const response = await fetch(
      "http://localhost:8080/inventary-app/saveProduct",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      return "Se creo el producto con exito";
    }
  } catch (error) {
    console.error(error);
  }
}
