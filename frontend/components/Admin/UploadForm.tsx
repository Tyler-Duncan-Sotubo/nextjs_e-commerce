import React, { FC, useState } from "react";
import axios from "axios";
import { base_url } from "../../redux/reducer/api";

type Props = {};

const UploadForm: FC<Props> = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>("");
  const [name, setName] = useState("");

  const handleImageSubmit = (e: any) => {
    const file = e.target.files[0];
    convert2base64(file);
  };

  const handleName = (event: any) => {
    setName(event.target.value);
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
          name,
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
        <label>Name</label>
        <input
          className="border-b-2 outline-none"
          value={name}
          onChange={handleName}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default UploadForm;
