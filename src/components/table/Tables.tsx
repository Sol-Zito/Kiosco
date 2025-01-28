import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { ProductDataTable } from "../../utils/types/productTable";
import { changeBDToTable } from "../../service/getProducts";
import { useEffect, useState } from "react";
import { deleteProductBD } from "../../service/deleteProduct";
import AlertDialog from "../dialog/AlertDialog";

export default function DataTable() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "productName", headerName: "Nombre", width: 130 },
    { field: "description", headerName: "Descripcion", width: 170 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 70,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      width: 70,
    },
    {
      field: "update",
      headerName: "Editar",
      type: "string",
      renderCell: (e) => (
        <strong>
          <Link to={`/updateProduct/${e.id}`}>
            <Button variant="contained" size="small">
              <EditIcon />
            </Button>
          </Link>
        </strong>
      ),
    },
    {
      field: "delete",
      headerName: "Borrar",
      type: "string",
      renderCell: (e) => (
        <strong>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => deleteProduct(+e.id)}
          >
            <DeleteForeverIcon />
          </Button>
        </strong>
      ),
    },
  ];

  const [dialog, setDialog] = useState(false);
  const deleteProduct = async (id: number) => {
    try {
      let resp = await deleteProductBD(id);
      if (resp) {
        console.log("Producto con id: " + id + ", fue eliminado.");

        setDialog(true);
      }
    } catch (e) {
      throw new Error("No se logro eliminar el producto en la BD.");
    }
  };

const paginationModel = { page: 0, pageSize: 8 };

export default function DataTable() {
  return (
    <>
      {rows.length > 0 ? (
        <Paper
          sx={{
            height: "100%",
            minHeight: "400px",
            width: "80%",
            margin: "auto",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[8, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      ) : (
        <Paper
          sx={{
            height: "100%",
            minHeight: "40px",
            width: "80%",
            margin: "auto",
          }}
          variant="outlined"
        >
          <p>Aun no se han agregado productos...</p>
          <Link to="/createProduct">
            <Button
              variant="outlined"
              style={{ padding: "5px", marginBottom: "5px", color: "#038C7F" }}
            >
              Crear producto
            </Button>
          </Link>
        </Paper>
      )}
    </>
  );
}
