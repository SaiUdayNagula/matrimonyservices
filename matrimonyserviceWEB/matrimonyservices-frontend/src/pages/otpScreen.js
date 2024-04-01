import React, { useState } from "react";
import { Form, Input, Button, Alert, Divider } from "antd";
import PublicLayout from "@/components/Layouts/PublicLayout";
import images from "@/config/images";
import { notification } from "antd";
import { useRouter } from "next/router";

const OtpScreen = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    // Simulate OTP verification (replace this with your actual OTP verification logic)
    setTimeout(() => {
      setLoading(false);
      const enteredOTP = values.otp.join(""); // Combine individual digits into a single string

      if (enteredOTP === "1234") {
        // Correct OTP
        setSuccess(true);
        setError(false);
        notification.success({
          message: "success",
          description: "Logged in  Successfully !!!",
        });
        router.push("/dashboard");
      } else {
        // Incorrect OTP
        setSuccess(false);
        setError(true);
      }
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setError(true);
  };

  const renderInput = () => {
    const inputBoxes = [];
    for (let i = 0; i < 4; i++) {
      inputBoxes.push(
        <Form.Item
          key={i}
          name={["otp", i]}
          rules={[
            // { required: true, message: "Please enter the OTP digit" },
            // { pattern: /^\d{1}$/, message: "Please enter a single digit" },
          ]}
          className=""
        >
          <Input
            type="password"
            className="rounded-[10px] text-2xl text-center"
            autoComplete={false}
          />
        </Form.Item>
      );
    }
    return inputBoxes;
  };

  return (
    <PublicLayout>
      <div className="relative h-screen flex overflow-hidden auth">
        {/* Side Image Section (70%) */}
        <div className='md:col-span-2 h-full relative w-[70%] bg-[url("/assets/SideImage.png")] bg-no-repeat bg-center bg-cover theme-bg'>
          {/* <img
                        className='object-cover object-center theme-bg'
                        src={images.sideImage}
                        alt='Login Image'
                    /> */}
          {/* Logo at top-left corner */}
          <a href="" className="absolute mt-10 ml-10">
            <img
              className="w-60 h-15"
              src={images.logo} // Add your logo image source
              alt="Logo"
            />
          </a>
          <div className="text-white h-full flex flex-col justify-center ml-10">
            <div>
              <h1 className="color text-xl">
                Welcome to Chaturvarnam Matrimony Services
              </h1>
              <p className="text-lg mb-4 mt-4 logcard-p2">Where Love Begins!</p>
            </div>
          </div>
        </div>

        {/* OTP Form Section (30%) */}
        <div className=" w-[30%] px-16 flex items-center">
          <div className="w-full p-4">
            <div>
              <div>
                <img
                  src={images.logoIcon}
                  alt="OTP Image"
                  style={{ marginBottom: "16px" }}
                />
                <h1 className="text-2xl  mb-4 theme-color">OTP</h1>
                <p className="forgot-text mb-4 ">
                  Sent your OTP to Registered email ID
                </p>
              </div>
              <Form
                form={form}
                name="otpForm"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
              >
                <div className="flex gap-5 py-5">{renderInput()}</div>

                {error && (
                  <Form.Item>
                    <Alert
                      message="Incorrect OTP. Please try again."
                      type="error"
                      showIcon
                    />
                  </Form.Item>
                )}

                {success && (
                  <Form.Item>
                    <Alert
                      message="OTP Verified successfully!"
                      type="success"
                      showIcon
                    />
                  </Form.Item>
                )}
                <Button
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                  key="reset"
                  className="btn-primary w-full"
                >
                  Submit
                </Button>

                {/* <Form.Item>
                  <Button type='primary' htmlType='submit' loading={loading}>
                    Verify OTP
                  </Button>
                </Form.Item> */}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default OtpScreen;
