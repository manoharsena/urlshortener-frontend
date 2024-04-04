import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Style/UserForm.css";
import axios from "axios";

const UrlShortener = ({ email, token }) => {
  const [inputState, setInputState] = useState();
  const [responseMsg, setResponseMsg] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const navigate = useNavigate();
  // formik
  const initialValues = { longUrl: "" };

  const validationSchema = Yup.object({
    longUrl: Yup.string().required("Long URL is Required"),
  });
  const onSubmit = async (values) => {
    try {
      const res = await axios.post(
        `https://urlshortener-backend-o30n.onrender.com/api/user/shorturl/${email}`,
        values
      );

      setResponseMsg(res.data.message);
      setShortUrl(res.data.shortUrl);
  
      toast.success(res.data.message);
      setTimeout(() => {
        // navigate('/login')
      }, 3000);
    } catch (error) {
      console.log(error);
      setResponseMsg(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const handleClick = () => {
    navigate("/login");
  };
  const SignupClick = () => {
    navigate("/");
  };
  return (
    <div class="container-fluid">
      <div class="mt-5">
        <h2 class="title text-center">URL SHORTENER</h2>
        <div class="mt-5">
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              class="form-control w-75"
              id="longUrl"
              value={formik.values.longUrl}
              onChange={formik.handleChange}
              placeholder="Enter your longUrl"
            />
            <div className="errors">
              <span className="text-danger">{formik.errors.longUrl}</span>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <div className="mx-4">
            <h3>
              Your Short Url <i class="fa-solid fa-arrow-right"></i>
            </h3>
          </div>
          <div>
            <h3>
              <a
                href={`https://url-shortener-backend-vx4e.onrender.com/api/user/shortid/${shortUrl}`}
                target="_blank"
              >
                {shortUrl}
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlShortener;
