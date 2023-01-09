import { Button } from "react-bootstrap";
import ProductList, { productsArr } from "./storeList";

const StorePage = () => {
  const itemList = productsArr.map((item, index) => {
    return (
      <div key={index} className="d-flex justify-content-center">
        <div className="card my-5 " style={{width:'16rem'}}>
          <div className="card-header  text-center" style={{fontSize:'20px' ,fontWeight:'bold'}}>
                     Album {index + 1}
          </div>

          <img src={item.imageUrl}></img>
            <div className="card-body">
               <span className="pt">$ {item.price}</span>
               <Button className="float-end">ADD TO CART</Button>
                <h4 className="text-center"> </h4>
            </div>
        </div>
        {/* </div>
       </div> */}
      </div>
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
          
          MUSIC
        </h2>
        <div className="row row-cols-2 ">
          {itemList}
        </div>
       
      </div>
    </>
  );
};
export default StorePage;
