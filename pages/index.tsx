import Layout from "../components/Layout";
import { Slider } from "../components/Slider";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { wrapper } from "../redux/store/store";
import { useSelector } from "react-redux";
import { setSlideData, slideSelector } from "../redux/reducer/slides";
import data from "../utils/data";
import ProductItem from "../components/ProductItem";

export default function Home() {
  const initialData = useSelector(slideSelector);
  const [slideData] = initialData;
  const allSlides = slideData.slide[0];

  return (
    <>
      <Layout title="Hello">
        <Slider allSlides={allSlides} />
        <div className="grid grid-cols-1 gap-6 px-28 py-10 md:grid-cols-3 lg:grid-cols-3">
          {data.products.map((product) => (
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
