import { useParams } from "react-router-dom";
import { UpdateProduct } from "../../components/products/UpdateProduct";

export default function Update() {
  const { id } = useParams();

  if (id) {
    return <UpdateProduct idProduct={id} />;
  }
}
