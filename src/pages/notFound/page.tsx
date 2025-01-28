import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <main className="mx-auto flex flex-col justify-center">
        <div className="mx-auto my-10">
          <h1 className="text-primary font-semibold">
            SECCIÓN EN MANTENIMIENTO
          </h1>
        </div>

        <div className="w-full flex flex-col gap-2 items-center mx-auto mt-5">
          <img src="/errorpage.png" alt="isologo" width={400} />

          <div className="" style={{ marginTop: "10px" }}>
            <Link
              to="/"
              style={{
                margin: "2px",
                padding: "5px",
                textAlign: "center",
                border: "solid",
              }}
            >
              VOLVER AL INICIO
            </Link>
            <Link
              to="/"
              style={{
                margin: "2px",
                padding: "5px",
                textAlign: "center",
                border: "solid",
              }}
            >
              VER PRODUCTOS
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
