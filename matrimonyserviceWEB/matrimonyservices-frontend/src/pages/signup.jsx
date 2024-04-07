import PublicLayout from "@/components/Layouts/PublicLayout";
import { DatePicker, Form, Input, Select, Button, notification } from "antd";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/utils/LanguageProvider";
import division from "@/data/divisions.json";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthProvider";
import { useCookies } from "react-cookie";
import { API_PATHS } from "@/config/ApiConfig";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { post } from "../apiService/httpService";

// ... (existing imports)

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["token"]);
  const { language, changeLanguage } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState("");
  const placeholderLanguage = (eng, bang) => {
    if (language === "english") {
      return "Select " + eng;
    }
  };
  const loginMethod = () => {
    // Perform login logic or any other actions
    router.push("/otp");
  };

  const [selectedAddress, setSelectedAddress] = useState("");
  useEffect(() => {
    const selectedDivisionObject = division.find(
      (d) => d.id == selectedDivision
    );

    if (selectedDivisionObject) {
      setSelectedAddress({
        division: selectedDivisionObject.name,
      });
    } else {
      setSelectedAddress({
        division: "",
      });
    }
  }, [selectedDivision]);

  const formConfig = [
    {
      title: "Login Information",
      fields: [
        {
          label: "Username",
          name: "username",
          placeholder: "Enter Username",
          type: "text",
          rules: [{ required: true, message: "Username is required" }],
        },
        {
          label: "Password",
          name: "password",
          placeholder: "Enter Password",
          type: "password",
          rules: [{ required: true, message: "Password is required" }],
        },
        {
          label: "Re-Enter Password",
          name: "re_enter_password",
          placeholder: "Re-Enter Password",
          type: "password",
          rules: [{ required: true, message: "Please re-enter password" }],
        },
      ],
    },
    {
      title: "Personal Information",
      fields: [
        {
          label: "First Name",
          name: "first_name",
          placeholder: "Enter First Name",
          type: "text",
          rules: [{ required: true, message: "First name is required" }],
        },
        {
          label: "Middle Name",
          name: "middle_name",
          placeholder: "Enter Middle Name",
          type: "text",
        },
        {
          label: "Last Name",
          name: "last_name",
          placeholder: "Enter Last Name",
          type: "text",
          rules: [{ required: true, message: "Last name is required" }],
        },
        {
          label: "Date Of Birth",
          name: "date_of_birth",
          placeholder: "Enter Date of Birth",
          type: "date",
          rules: [{ required: true, message: "Date Of Birth is required" }],
        },
        {
          label: "Gender",
          name: "gender",
          placeholder: "Select Gender",
          type: "select",
          rules: [{ required: true, message: "Gender is required" }],
          options: [
            { label: "Male", value: "1" },
            { label: "Female", value: "2" },
            { label: "Other", value: "3" },
          ],
        },
        {
          label: "Address",
          name: "address",
          placeholder: "Enter Address",
          type: "text",
        },
        {
          label: "City",
          name: "city",
          placeholder: "Enter City",
          type: "text",
        },
        {
          label: "State",
          name: "state",
          placeholder: "Enter State",
          type: "text",
          rules: [{ required: true, message: "State is required" }],
        },
        {
          name: "country",
          label: "Country",
          placeholder: "Select Coutry",
          key: "country",
          type: "text",
        },
        {
          label: "Zip Code",
          name: "zip_code",
          placeholder: "Enter Zip Code",
          type: "text",
          rules: [{ required: true, message: "Zip code is required" }],
        },
      ],
    },
    {
      title: "Contact Information",
      fields: [
        {
          label: "Email",
          name: "email",
          placeholder: "Enter Email",
          type: "email",
          rules: [{ required: true, message: "Email is required" }],
        },
        {
          label: "Primary Phone",
          name: "primary_phone",
          placeholder: "Enter Primary Phone",
          type: "phonenumber",
          rules: [{ required: true, message: "Phone Number is required" }],
        },
      ],
    },
  ];

  const RenderInput = (props) => {
    // console.log(props.rules, "rules")
    const validationRules = [];

    return (
      <Form.Item
        className="my-2"
        key={props.name}
        label={props.label}
        name={props.name}
        rules={props.rules}
      >
        {props.type === "select" ? (
          <Select
            size="large"
            placeholder={props.placeholder}
            options={props.options}
          />
        ) : props.type === "date-picker" ? (
          <DatePicker placeholder={props.placeholder} className="w-full" />
        ) : props.type === "address-search" ? (
          <Select
            size="large"
            placeholder={`Select ${
              language === "english" ? props.label : "বিভাগ"
            }`}
            options={division.map((division) => ({
              label: language === "english" ? division.name : division.bn_name,
              value: division.id,
            }))}
            onChange={(e) => setSelectedDivision(e)}
            value={selectedDivision || null}
          />
        ) : props.type === "phonenumber" ? (
          <PhoneInput
            inputClass="intlphoneinput"
            country="us"
            placeholder="Enter phone number"
          />
        ) : (
          <Input
            type={props.type}
            placeholder={props.placeholder}
            addonBefore={props.prefix}
            suffix={props.suffix}
            className={props.className}
          />
        )}
      </Form.Item>
    );
  };
  const onFinish = async (values) => {
    values = { ...values, ...selectedAddress };
    const { dob, re_enter_password, password, primary_phone } = values;
    if (dob) {
      values.dob = dob.format("DD-MM-YYYY");
    }
    const tempPhone = `+880${primary_phone}`;

    const isValidBangladeshiPhoneNumber = (phoneNumber) => {
      const bangladeshiPhoneNumberRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
      return bangladeshiPhoneNumberRegex.test(phoneNumber);
    };

    const isValid = isValidBangladeshiPhoneNumber(tempPhone);

    // if (!isValid) {
    //   notification.error({
    //     message: "Invalid phone number",
    //   });
    //   return;
    // }

    if (re_enter_password && re_enter_password === password) {
      delete values.re_enter_password;
    } else {
      notification.error({
        message: "Password not matched",
      });
      return;
    }

    const updateValues = {
      basicInformation: {
        firstName: values.firstName,
        lastName: values.lastName,
        gender: values.gender,
        dob: values.dob,
        createProfileFor: values.createProfileFor,
        email: values.email,
        phone: values.phone,
        maritalStatus: values.maritalStatus,
      },
      password: password,
      presentAddress: {
        division: values.division,
      },
    };

    //workin body
    // {
    //   "user_name": "tytytytyt",
    //   "re_passoword": "hgfhgfytrty",
    //   "user_pwd": "hgfhgfytrty",
    //   "first_name": "yytfghgy",
    //   "last_name": "hvjhvhjgytgvh",
    //   "birth_date": "1992-03-09",
    //   "address": "1",
    //   "zip": "55768",
    //   "email": "siri@gmail.com",
    //   "primary_phone": "9876543256",
    //   "primary_phone_country": "91",
    //   "primary_phone_type": 1,
    //   "gender": 1,
    //   "address_line1": "uytu",
    //   "city": "rr",
    //   "state": "stwr", "country": "counyrtuy"
    // }

    var data = {
      email: values.email,
      user_name: values.username,
      user_pwd: values.password,
      first_name: values.first_name,
      middle_name: values.middle_name,
      last_name: values.last_name,
      primary_phone: primary_phone.substr(primary_phone.length-10,primary_phone.length),
      primary_phone_country: primary_phone.substr(0,primary_phone.length-10),
      primary_phone_type: 1,
      birth_date: values.date_of_birth,
      gender: values.gender,
      address_line1: values.address,
      city: values.city,
      state: values.state,
      zip: values.zip_code,
      country: values.country,
    };

    try {
      setLoading(true);
      const response = await post("http://localhost:5000/api/register", data);
      debugger;
      // const { token } = response.data.data;
      // cookies.set("token", token, { path: "/" });

      // login(response.data.data.user);
      if (
        response &&
        response.message == "Account Created successfully. Please Login."
      ) {
        setSuccess(true);
        setLoading(false);
        notification.success({
          message: "Success",
          description: "Account created successfully",
        });
        router.push("/dashboard");
      } else {
        notification.error({
          message: "Error",
          description: response?.message || "internal server error.",
        });
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;

        if (status === 400) {
          notification.error({
            message: "Error",
            description: data.message || "User not found",
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      <div className="py-10 bg-[url('/assets/bg-pattern.png')] min-h-screen auth">
        <div className="w-[85%] mx-auto">
          <a href="/">
            {" "}
            <img className="mb-6" src="/assets/logo-black.svg" alt="" />
          </a>
          <p className="text-3xl font-bold">New Account Creation</p>
          <div className="border-t-2 border-[#b2b2b2] my-5"></div>
          <Form className="login-label" layout="vertical" onFinish={onFinish}>
            <div>
              {formConfig.map((section, i) => {
                return (
                  <div className={"mb-5"}>
                    <p className="text-[#2F3C1F] text-xl font-semibold">
                      {section.title}
                    </p>
                    <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-x-10 gap-y-2 max-sm:gap-y-0">
                      {section.fields.map((e) => (
                        <RenderInput {...e} />
                      ))}
                    </div>
                    {/* <div className="grid grid-cols-4  gap-x-10 gap-y-2">
                      {section.fields2?.map((e) => (
                        <RenderInput {...e} />
                      ))}
                    </div> */}
                  </div>
                );
              })}
            </div>
            <div>
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                key="reset"
                className="btn-primary px-12"
                // onClick={loginMethod}
              >
                Continue
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Signup;