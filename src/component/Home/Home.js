import { Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="container"  style={{margin:'10px auto',  textAlign:'center'} }>
      <div className="row  py-5">
        <h4 style={{fontSize:'30px' ,fontWeight:'bold', paddingBottom:'20px'}}>TOURS</h4>

        
          <table >
            <tr className="py-5" style={{ borderBottom: '1px solid #ddd'}} >
              <td className="px-5">JUL16</td>
              <td className="px-5">DETROIT, MI</td>
              <td className="px-5">DTE ENERGY MUSIC THEATRE</td>
           <td>
                <Button className="my-2" style={{background:'#56CCF2' ,border:'0'}}>BUY TICKET</Button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd'}}>
              <td>JUL19</td>
              <td>TORONTO,ON</td>
              <td>BUDWEISER STAGE</td>
              <td>
                <Button  className="my-2" style={{background:'#56CCF2' ,border:'0'}}> BUY TICKET</Button>
              </td>
            </tr>
            <tr  style={{ borderBottom: '1px solid #ddd'}}>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <Button  className="my-2" style={{background:'#56CCF2' ,border:'0'}}>BUY TICKET</Button>
              </td>
            </tr>
           
            <tr style={{ borderBottom: '1px solid #ddd'}}>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <Button  className="my-2" style={{background:'#56CCF2' ,border:'0'}}>BUY TICKET</Button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd'}}>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <Button  className="my-2" style={{background:'#56CCF2' ,border:'0'}}>BUY TICKET</Button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd'}}>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <Button  className="my-2" style={{background:'#56CCF2' ,border:'0'}}>BUY TICKET</Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    
  );
};

export default HomePage;
