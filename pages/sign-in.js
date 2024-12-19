import { Formik, Form } from "formik";
import Link from "next/link";
import { PasswordField, TextField } from "../components/common/InputField";
import useLogin from "../hooks/useLogin";
import { getSession } from "next-auth/react";

function SignInPage() {
  const initialvalues = {
    username: "",
    password: "",
  };

  const { loginUser } = useLogin();

  const handleSubmit = (values) => {
    loginUser(values);
    console.log(values);
  };

  return (
    <>
      <div className="flex bg-[#f6f6f6] justify-center items-center h-screen">
        {/* {loading && <FullPageLoader />} */}

        <div className="bg-white w-[330px] md:w-[400px]  h-[400px] shadow-md rounded-xl">
          <div className="text-lg font-bold text-star border-b border-gray-100 pb-3 p-5">
            Login
          </div>
          <div className="mt-3 p-5">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="text-sm gap-y-5 md:gap-y-7">
                    <div className="min-w-[300px] lg:min-w-[350px] space-y-4 rounded-lg focus:border-blue-500">
                      <TextField label="Email" name="username" type="text" />

                      <PasswordField label="Password" name="password" />
                    </div>
                    <button
                      type="submit"
                      className="mt-8 w-full py-3 bg-[#6777ef] rounded  hover:bg-[#6778ef] text-white font-semibold active:scale-95 transition duration-300"
                    >
                      Sign In
                    </button>
                    <div className="mt-3 pl-1">
                      <input
                        type="checkbox"
                        className=" border border-gray-500 mt-1 pt-1 rounded"
                      />{" "}
                      <span className="text-[15px] ml-1 text-center text-custom-gray2">
                        Remember Me
                      </span>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="mt-1 text-start pl-1">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-400 hover:text-blue-900"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default SignInPage;
