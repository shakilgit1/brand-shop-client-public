import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const updateItem = useLoaderData();
  const { _id, name, brand, type, image, price, rating, description } = updateItem || {};
  //    console.log(updateItem);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;

    const updateProduct = { name, brand, type, description, image, price, rating };
    console.log(updateProduct);

    fetch(`https://brand-shop-server-av2rh2emg-shakils-projects.vercel.app/technologies/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully ",
            icon: "success",
            confirmButtonText: "Cool",
          });
          console.log(data);
          form.reset();
        }
      });
  };

  return (
    <div className="w-10/12 mx-auto my-12">
      <form onSubmit={handleUpdate}>
        <div className="bg-blue-400 p-20 rounded-lg">
          <div className="flex justify-around items-center flex-col md:flex-row   gap-10">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Name"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  defaultValue={brand}
                  placeholder="Brand Name"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-around items-center flex-col md:flex-row   gap-10">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  defaultValue={type}
                  required
                  placeholder="Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  required
                  placeholder="Short description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-around items-center flex-col md:flex-row  gap-10">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  required
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  required
                  placeholder="Price $"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                defaultValue={image}
                required
                placeholder="Image url"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="mt-10">
            <button type="submit" className="btn btn-block btn-primary">
              Update Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
