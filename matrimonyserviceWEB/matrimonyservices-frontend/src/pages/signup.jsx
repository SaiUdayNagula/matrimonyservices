import PublicLayout from "@/components/Layouts/PublicLayout";
import { DatePicker, Form, Input, Select, Button, notification } from "antd";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/utils/LanguageProvider";
import division from "@/data/divisions.json";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthProvider";
import { useCookies } from "react-cookie";
import { API_PATHS } from "@/config/ApiConfig";
import axios from "axios";
import { render } from "less";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
  const loginMethod =  () => {
            // Perform login logic or any other actions
            router.push('/otpScreen');
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
          key: "username",
          placeholder: "Enter Username",
          name: "user_name",
          type: "text",
        },
        {
          label: "Password",
          key: "password",
          placeholder: "Enter Password",
          name: "password",
          type: "password",
        },
        {
          label: "Re-Enter Password",
          key: "re-enter-password",
          placeholder: "Enter Password",
          name: "re_passoword",
          type: "password",
        },
      ],
    },
    {
      title: "Personal Information",
      fields: [
        {
          label: "First Name",
          key: "first_name",
          placeholder: "Enter First Name",
          name: "first_name",
          type: "text",
        },
        {
          label: "Last Name",
          key: "re-enter-password",
          placeholder: "Enter Password",
          name: "last_name",
          type: "text",
        },
        {
            label : 'Date Of Birth',
            key : 'date_of_birth',
            placeholder : '',
            name : 'date_of_birth',
            type : 'date'
        },
        {
            label : 'Gender',
            key : 'gender',
            placeholder : 'Select Gender',
            name : 'gender',
            type : 'select'
        },
        {
            label : 'Address',
            key : 'address',
            placeholder : 'Address',
            name : 'address',
            type : 'address-search'
        },
        {
            label : 'City',
            key : 'city',
            placeholder : 'Select City',
            name : 'city',
            type : 'select'
        },
        {
            label : 'State',
            key : 'state',
            placeholder : 'Select State',
            name : 'state',
            type : 'select'
        },
        {
            label : 'Zip Code',
            key : 'zip_code',
            placeholder : 'Enter Zip Code',
            name : 'zipcode',
            type : 'text'
        }
      ],
    },
    {
        title : "Contact Information",
        fields : [
          {
            name : 'Email',
            label : 'Email',
            placeholder : 'Enter Email',
            key : 'email',
            type : 'email'
        },
            {
                name : 'primary_phone',
                label : 'Primary Phone (Mobile or Landline)',
                placeholder : 'Enter Primary Phone',
                key : 'primary_phone',
                type : 'phonenumber'
            },
            {
                name : 'country',
                label : 'Country',
                placeholder : 'Select Coutry',
                key : 'country',
                type : 'select'
            }
        ],
    }
  ];
  const RenderInput = (props) => {
    const validationRules = [];

    return (
      <Form.Item
        className="my-2"
        key={props.name}
        label={props.label}
        name={props.name}
        rules={validationRules}
      >
        {props.type === "select" ? (
          <Select size="large" placeholder={props.placeholder} options={props.options} />
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
        ) :
         props.type === "phonenumber" ? (
          <PhoneInput
          inputClass="intlphoneinput"
          country="us"
          placeholder="Enter phone number" />
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
    const { dob, confirmPassword, password, phone } = values;

    if (dob) {
      values.dob = dob.format("DD-MM-YYYY");
    }
    const tempPhone = `+880${phone}`;

    const isValidBangladeshiPhoneNumber = (phoneNumber) => {
      const bangladeshiPhoneNumberRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
      return bangladeshiPhoneNumberRegex.test(phoneNumber);
    };

    const isValid = isValidBangladeshiPhoneNumber(tempPhone);

    if (!isValid) {
      notification.error({
        message: "Invalid phone number",
      });
      return;
    }

    if (confirmPassword && confirmPassword === password) {
      delete values.confirmPassword;
    } else
      notification.error({
        message: "Password not matched",
      });

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

    try {
      setLoading(true);
      const response = await axios.post(API_PATHS.REGISTER, updateValues);
      const { token } = response.data.data;
      cookies.set("token", token, { path: "/" });
      setSuccess(true);
      setLoading(false);
      login(response.data.data.user);
      notification.success({
        message: "Success",
        description: "Account created successfully",
      });
      router.push("/dashboard");
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
      <div className="py-10  bg-[url('/assets/bg-pattern.png')] min-h-screen auth">
        <div className="w-[85%] mx-auto">
          <img className="mb-6" src="/assets/logo-black.svg" alt="" />
          <p className="text-3xl font-bold">Register</p>
          <div className="border-t-2 border-[#b2b2b2] my-5"></div>

          <div>
            {formConfig.map((section, i) => {
              return (
                <div className={"mb-5"}>
                  <p className="text-[#2F3C1F] text-xl font-semibold">
                    {section.title}
                  </p>
                  <Form className="login-label" layout="vertical">
                    <div className="grid grid-cols-4 gap-x-10 gap-y-2">
                      {section.fields.map((e) => (
                        <RenderInput {...e} />
                      ))}
                    </div>
                    <div className="grid grid-cols-4 gap-x-10 gap-y-2">
                      {section.fields2?.map((e) => (
                        <RenderInput {...e} />
                      ))}
                    </div>
                  </Form>
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
              onClick={loginMethod}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Signup;
