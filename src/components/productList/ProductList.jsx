import "./productList.css";
//import Product from "../product/Product";
//import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          Major Front-End Languages & Back-End Languages
        </h1>
        <p className="pl-desc">
          <b>1) Front End Languages, Frameworks, Library</b>
        </p>
        <p className="pl-desc">
          <b>Front End Languages:</b> HTML, CSS, SASS, JavaScript, JSX, Python{" "}
        </p>
        <p className="pl-desc">
          <b>Frameworks:</b> Bootstrap, React JS and React Native
        </p>
        <p className="pl-desc">
          <b>Library and Package Manager:</b> jQuery, Redux, Ajax, Json, Fresco,
          Volley
        </p>
        <p className="pl-desc">
          <b>2) Back End Languages, Frameworks, Library</b>{" "}
        </p>
        <p className="pl-desc">
          <b>Back End Languages:</b> JavaScript, Python{" "}
        </p>
        <p className="pl-desc">
          {" "}
          <b>Frameworks:</b> Node JS, Express, MySQL, MongoDB{" "}
        </p>
        <p className="pl-desc">
          {" "}
          <b>Library and Package Manager:</b> NPM (Node Package Manager)
        </p>

        <h1 className="pl-title">Work Experience</h1>

        <p className="pl-desc">
          <p className="pl-desc">
            <b> 2022-2023:</b> USPS Customer Service and Warehouse Worker
          </p>{" "}
          <b>2015-2020:</b> Web Developer and Mobile Game Developer: Freelancer
          <p className="pl-desc">
            <b> 2011-2015:</b> Business Owner
          </p>
          <p className="pl-desc">
            <b>2003-2010:</b> System Integration Administrator: Ramtronics
            Technology, Inc.
          </p>
          <p className="pl-desc">
            <b>References:</b> Derek Euperio(Tel:949-300-3704)/Ryan Park(E-mail:
            rm.park@yahoo.com)
          </p>{" "}
          <p className="pl-desc">
            <b>Personal Information:</b> Andrew Chang/Tel:
            1-949-293-4845/E-mail: chan0442@gmail.com/Education: University of
            Minnesota at Twin Cities
          </p>
        </p>
      </div>
      {/* <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div> */}
    </div>
  );
};

export default ProductList;
