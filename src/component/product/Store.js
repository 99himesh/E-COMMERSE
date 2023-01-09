import { Button } from "react-bootstrap";
import ProductList, { productsArr } from "./storeList";

const StorePage = () => {
  const itemList = productsArr.map((item, index) => {
    return (
      <>
        <div className="container  ">
          <div className="row  ">
            <div
              className="col"
              style={{ width: "100%", margin: "40px 0", textAlign: "center" }}
            >
              <h4 className="text-center">Album {index + 1} </h4>
              <div  >
              <img src={item.imageUrl}></img>
              </div>
              <p>$ {item.price}</p>
              <Button>ADD TO CART</Button>
            </div>
          </div>
        </div>
        {/* </div>
       </div> */}
      </>
    );
  });
  return (
    <>
      <div className="container ">
        <h2
          style={{
            padding: "50px 0",
            textAlign: "center",
            font: "40px ",
            fontWeight: "bold",
          }}
        >
          {" "}
          MUSIC
        </h2>
        <div className="row row-cols-2 ">
          {itemList}
          <Button
            style={{
              background: "gray",
              margin: "20px auto",
              color: "#56CCF2",
              border: "0",
            }}
          >
            SEE MORE
          </Button>
        </div>
      </div>
    </>
  );
};
export default StorePage;
