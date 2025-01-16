import { ProductData } from "../utils/types/product";
import { ProductDataTable } from "../utils/types/productTable";

export async function getProductsBD(): Promise<ProductData[]> {
  try {
    const data = await fetch("http://localhost:8080/inventary-app/products", {
      method: "GET",
    });
    const resp = data.json();
    return resp;
  } catch (e) {
    console.log("Surgio un error en productos", e);
    throw new Error("Function not implemented.");
  } finally {
  }
}

export async function changeBDToTable(): Promise<ProductDataTable[]> {
  try {
    const productsBD = await getProductsBD();

    const data: ProductDataTable[] = productsBD.map((ele) => {
      return {
        id: ele.idProduct,
        productName: ele.productName,
        description: ele.description,
        price: ele.price,
        stock: ele.stock,
      };
    });

    return data;
  } catch (e) {
    console.log("Surgio un error");
    throw new Error("Function not implemented.");
  } finally {
  }
}
