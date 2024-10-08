import React, { useContext, useState } from 'react'
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import axios from 'axios';
import { userContext } from '../../Context/UserContext/UserContext';

export default function Login() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { setUserToken } = useContext(userContext);



  let navigate = useNavigate()

  function handleLogin(values) {
    setIsLoading(true);

    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then((data) => {
        if (data.data.message === "success") {
          setUserToken(data.data.token);
          localStorage.setItem('userToken', data.data.token);
          setIsLoading(false);
          navigate("/")
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
        setIsLoading(false);
      });


  }

  let validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().matches(/^[0-9a-z]{3,9}$/, "password is not valid"),

  })

  const formik = useFormik({

    initialValues: {
      email: "",
      password: "",
    },
    // validate: validateAllInputs,
    onSubmit: handleLogin,
    validationSchema,

  });




  return (

    <div className="container ">
      <div className="w-3/4 mx-auto">
        <h1>Login Now :</h1>
        <form className="my-3" onSubmit={formik.handleSubmit}>

          {error ? <div className="bg-red-200 py-2">{error}</div> : null}

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


          <div>
            <button type="Submit" className="text-white flex justify-start items-start bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 ms-auto mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">

              {isLoading ? "loading" : "submit"}

            </button>
          </div>
        </form>

      </div>

    </div>
  )
}
