import Layout from "../components/Layout";
import { Slider } from "../components/Slider";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { wrapper } from "../redux/store/store";
import { useSelector } from "react-redux";
import { setSlideData, slideSelector } from "../redux/reducer/slides";
import { setProductData } from "../redux/reducer/products";

export default function Home() {
  const initialData = useSelector(slideSelector);
  // const ProductData = useSelector(getProductSelector);
  const [data] = initialData;
  const allSlides = data.slide[0];

  console.log(data.product);

  return (
    <>
      <Layout title="Hello">
        <Slider allSlides={allSlides} />
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

    const products: any = [];
    const getProducts = await getDocs(collection(db, "Products"));
    getProducts.forEach((lyrics) => {
      products.push({ id: lyrics.id, ...lyrics.data() });
    });

    store.dispatch(setSlideData(data));
    store.dispatch(setProductData(products));

    return {
      props: { data },
    };
  }
);
