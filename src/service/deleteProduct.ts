export async function deleteProductBD(id: number) {
  try {
    const resp = await fetch(
      `http://localhost:8080/inventary-app/deleteProduct/${id}`,
      {
        method: "DELETE",
      }
    );
    if (resp.ok) {
      return resp;
    }
  } catch (e) {
    throw new Error("No se logro eliminar el producto en la BD.");
  }
}
