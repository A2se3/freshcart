import React, { useState } from 'react'
import style from './Register.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from
  "react-router-dom";
import axios from 'axios';
export default function Register() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  let navigate = useNavigate()

  function handleRegister(values) {
    setIsLoading(true);

    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      .then((data) => {
        if (data.data.message === "success") {
          setIsLoading(false);
          navigate('/login')
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
        setIsLoading(false);
      });


  }

  // function validateAllInputs(values) {
  //   console.log(values);

  //   let errors = {};

  //   let nameRegex = /^[A-Z][a-z]{2,8}$/;
  //   let emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
  //   let passwordRegex = /^[0-9a-z]{3,9}$/
  //   let phoneRegex = /^01[0-2]\s\d{1,8}$/

  //   if (values.name === "") {
  //     errors.name = "Name is required";
  //   } else if (!nameRegex.test(values.name)) {
  //     errors.name = "Name must start with capital letter";
  //   }

  //   if (values.email === "") {
  //     errors.email = "Email is required";
  //   } else if (!emailRegex.test(values.email)) {
  //     errors.email = "Email is not valid";
  //   }

  //   if (values.password === "") {
  //     errors.password = "Password is required";
  //   } else if (!passwordRegex.test(values.password)) {
  //     errors.password = "Password is not valid";
  //   }
  //   if (values.rePassword === "") {
  //     errors.rePassword = "Repassword is required";
  //   } else if (values.repassword === values.password) {
  //     errors.repassword = "Repassword is not valid";
  //   }

  //   if (values.phone === "") {
  //     errors.phone = "Phone is required";
  //   } else if (!phoneRegex.test(values.phone)) {
  //     errors.phone = "Phone is not valid";
  //   }

  //   return errors;

  // }
  let validationSchema = Yup.object({
    name: Yup.string().required("Name is required").min(3),
    email: Yup.string().required().email(),
    password: Yup.string().required().matches(/^[0-9a-z]{3,9}$/, "password is not valid"),
    rePassword: Yup.string().required().oneOf([Yup.ref("password")], "rePassword does not match password"),
    phone: Yup.string().required().matches(/^01[0-25][0-9]{8}$/, "phone is not valid"),

  })

  const formik = useFormik({

    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",

    },
    // validate: validateAllInputs,
    onSubmit: handleRegister,
    validationSchema,

  });




  return (

    <div className="container ">
      <div className="w-3/4 mx-auto">
        <h1>Register Now :</h1>
        <form className="my-3" onSubmit={formik.handleSubmit}>

          {error ? <div className="bg-red-200 py-2">{error}</div> : null}


          <div className="relative my-3 ">
            <input type="text"
              id="name"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              name="name"
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <label htmlFor="name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Name
            </label>
          </div>
          {formik.errors.name && formik.touched.name && (
            <span className='text-red-600 mt-3 '>{formik.errors.name}</span>
          )}
          <div className="relative my-3">
            <input type="eamil"
              id="email"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              name="email"
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Email
            </label>
          </div>
          {formik.errors.email && formik.touched.email && (
            <span className='text-red-600 mt-3'>{formik.errors.email}</span>
          )}
          <div className="relative my-3">
            <input type="password"
              id="password"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              name="password"
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <label htmlFor="password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Password
            </label>
          </div>
          {formik.errors.password && formik.touched.password && (
            <span className='text-red-600 mt-3'>{formik.errors.password}</span>
          )}
          <div className="relative my-3">
            <input type="password"
              id="rePassword"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              name="rePassword"
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
            />
            <label htmlFor="rePassword"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              rePassword
            </label>
          </div>
          {formik.errors.rePassword && formik.touched.rePassword && (
            <span className='text-red-600 mt-3'>{formik.errors.rePassword}</span>
          )}
          <div className="relative my-3">
            <input type="tel"
              id="phone"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              name="phone"
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            <label htmlFor="phone"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Phone
            </label>
          </div>
          {formik.errors.phone && formik.touched.phone && (
            <span className='text-red-600 mt-3'>{formik.errors.phone}</span>
          )}
          <div>
            <button type="Submit" className="text-white flex justify-start items-start bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 ms-auto mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">

              {isLoading ? "loading" : "submit"}

            </button>
          </div>
        </form>

      </div>

    </div>
  );
}
