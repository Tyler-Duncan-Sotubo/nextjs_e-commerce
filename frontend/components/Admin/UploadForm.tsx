import React, { FC, useState } from "react";
import axios from "axios";
import { base_url } from "../../redux/reducer/api";

interface Form {
  name: string;
  price: number;
  brand: string;
  slug: string;
}

const UploadForm: FC = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>("");
  const [form, setForm] = React.useState<Form>({
    name: "",
    price: 0,
    brand: "",
    slug: "",
  });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleImageSubmit = (e: any) => {
    const file = e.target.files[0];
    convert2base64(file);
  };

  const convert2base64 = (file: any) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post(`${base_url}images`, {
      image,
    });
    const serverImage = res.data;
    if (serverImage) {
      axios
        .post(`${base_url}post/products`, {
          name: form.name,
          image: serverImage,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="p-20 flex flex-col justify-start gap-9">
        <label>
          Your Image File
          <input
            type="file"
            multiple
            name="myImage"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleImageSubmit}
          />
        </label>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="price"
            type="number"
            value={form.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default UploadForm;
