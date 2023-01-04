import Layout from "../components/Layout";
import { Slider } from "../components/Slider";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { wrapper } from "../redux/store/store";
import { useSelector } from "react-redux";
import { setSlideData } from "../redux/reducer/slides";
import ProductItem from "../components/ProductItem";
import { getProductSelector } from "../redux/reducer/products";

export default function Home() {
  const product = useSelector(getProductSelector);
  const productData = product[0].product;
  const slidesData = product[0].slide[0];

  return (
    <>
      <Layout title="Hello">
        <Slider allSlides={slidesData} />
        <div className="grid grid-cols-1 gap-6 px-28 py-10 md:grid-cols-3 lg:grid-cols-3">
          {productData.map((product: any) => (
            <ProductItem product={product} key={product.slug} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const data: any = [];
    const querySnapshot = await getDocs(collection(db, "Slides"));
    querySnapshot.forEach((lyrics) => {
      data.push({ id: lyrics.id, ...lyrics.data() });
    });
    store.dispatch(setSlideData(data));

    return {
      props: {},
    };
  }
);
