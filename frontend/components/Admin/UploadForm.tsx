import React, { FC, useState } from "react";
import axios from "axios";
import { base_url } from "../../redux/reducer/api";
import Image from "next/image";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";

type CategoryEnum = {
  Male: "Male";
  Female: "Female";
  Top: "Top";
  Shoes: "Shoes";
  GroupOne: "Male Top";
  GroupTwo: "Female Top";
  GroupThree: "Male Shoes";
  GroupFour: "Female Shoes";
};

interface IFormInput {
  name: string;
  price: number;
  brand: string;
  slug: string;
  tag: string;
  category: CategoryEnum;
  description: string;
  featuredImg: string;
  rating: number;
  numReviews: string;
  countInStock: string;
}

const UploadForm: FC = () => {
  const [image, setImage] = useState<any>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

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

  const onSubmit: SubmitHandler<IFormInput> = async (data, e: any) => {
    console.log(data);
    const res = await axios.post(`${base_url}images`, {
      image,
    });
    const serverImage = res.data;
    const newData = { ...data, image: serverImage };
    if (serverImage) {
      axios
        .post(`${base_url}post/products`, {
          newData,
        })
        .then((res) => {
          if (res.data) {
            toast.success(`Added To Product List`, {
              position: "bottom-left",
            });
          }
        })
        .catch((error) => {
          if (error) {
            toast.error(`Not To Product List`, {
              position: "bottom-left",
            });
          }
        });
    }
    e.target.reset();
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <input
            id="name"
            type="text"
            {...register("name", { required: true })}
            placeholder="Name"
            className="adminUploadInput"
          />
          {errors.name && <span>This field is required</span>}
          <input
            id="price"
            type="number"
            placeholder="Price"
            className="adminUploadInput"
            {...register("price", { required: true })}
          />
          {errors.price && <span>This field is required</span>}
          <input
            id="brand"
            type="text"
            placeholder="Brand"
            className="adminUploadInput"
            {...register("brand", { required: true })}
          />
          {errors.brand && <span>This field is required</span>}
          <input
            id="featuredImg"
            type="text"
            placeholder="FeaturedImg"
            className="adminUploadInput"
            {...register("featuredImg", { required: true })}
          />
          {errors.featuredImg && <span>This field is required</span>}
          <input
            id="rating"
            type="number"
            placeholder="Rating"
            className="adminUploadInput"
            {...register("rating", { required: true })}
          />
          {errors.rating && <span>This field is required</span>}
          <input
            id="numReviews"
            type="text"
            placeholder="NumReviews"
            className="adminUploadInput"
            {...register("numReviews", { required: true })}
          />
          {errors.numReviews && <span>This field is required</span>}
          <input
            id="countInStock"
            type="text"
            placeholder="CountInStock"
            className="adminUploadInput"
            {...register("countInStock", { required: true })}
          />
          {errors.countInStock && <span>This field is required</span>}
          <textarea
            id="description"
            placeholder="description"
            className="adminUploadInput h-[200px]"
            minLength={100}
            maxLength={500}
            {...register("description", { required: true })}></textarea>
        </div>
        <div className="flex flex-col mb-4 items-center">
          <div className="flex mb-6">
            <input
              type="file"
              multiple
              name="myImage"
              accept="image/png, image/gif, image/jpeg, image/webp"
              onChange={handleImageSubmit}
              required
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-2 px-6"
            />
          </div>
          <input
            id="slug"
            type="text"
            placeholder="Slug"
            className="adminUploadInput"
            {...register("slug", { required: true })}
          />
          {errors.slug && <span>This field is required</span>}
          <input
            id="tag"
            type="text"
            placeholder="Tag"
            className="adminUploadInput"
            {...register("tag", { required: true })}
          />
          {errors.tag && <span>This field is required</span>}
          <select
            {...register("category", { required: true })}
            className="adminUploadInput">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Top">Top</option>
            <option value="Shoes">Shoes</option>
            <option value="Male Top">Male Top</option>
            <option value="Female Top">Female Top</option>
            <option value="Male Shoes">Male Shoes</option>
            <option value="Female Shoes">Female Shoes</option>
          </select>
          {errors.category && <span>This field is required</span>}
          <div className="w-[350px] h-[330px] bg-gray-200 rounded-lg flex item items-center justify-center">
            {!image ? (
              <p>Image preview</p>
            ) : (
              <Image src={image} width={250} height={280} alt="image" />
            )}
          </div>
          <button
            type="submit"
            className="bg-violet-600 w-[100%] text-white py-3 my-2 font-display uppercase font-semibold hover:bg-violet-500">
            Send Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
