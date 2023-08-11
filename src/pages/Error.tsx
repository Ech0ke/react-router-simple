import Navbar from "../components/Navbar";

function Error() {
  if (import.meta.env.VITE_PROD_ERROR) {
    return (
      <>
        <Navbar />
        <div className="not-found-message">
          {import.meta.env.VITE_PROD_ERROR}
        </div>
      </>
    );
  } else return;
}

export default Error;
