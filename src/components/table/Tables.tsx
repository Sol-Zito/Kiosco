import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nameProduct", headerName: "Nombre" },
  { field: "description", headerName: "Descripcion" },
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
    renderCell: () => (
      <strong>
        <Button variant="contained" size="small">
          <EditIcon />
        </Button>
      </strong>
    ),
  },
  {
    field: "delete",
    headerName: "Borrar",
    type: "string",
    renderCell: () => (
      <strong>
        <Button variant="contained" size="small" color="error">
          <DeleteForeverIcon />
        </Button>
      </strong>
    ),
  },
];

const rows = [
  { id: 1, description: "Snow", nameProduct: "Jon", price: 35, stock: 45 },
  {
    id: 2,
    description: "Lannister",
    nameProduct: "Cersei",
    price: 42,
    stock: 45,
  },
  {
    id: 3,
    description: "Lannister",
    nameProduct: "Jaime",
    price: 45,
    stock: 45,
  },
  { id: 4, description: "Stark", nameProduct: "Arya", price: 16, stock: 45 },
  {
    id: 5,
    description: "Targaryen",
    nameProduct: "Daenerys",
    price: 10,
    stock: 45,
  },
  {
    id: 6,
    description: "Melisandre",
    nameProduct: null,
    price: 150,
    stock: 45,
  },
  {
    id: 7,
    description: "Clifford",
    nameProduct: "Ferrara",
    price: 44,
    stock: 45,
  },
  {
    id: 8,
    description: "Frances",
    nameProduct: "Rossini",
    price: 36,
    stock: 45,
  },
  { id: 9, description: "Roxie", nameProduct: "Harvey", price: 65, stock: 45 },
  { id: 10, description: "Roxie", nameProduct: "Harvey", price: 65, stock: 45 },
];

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
