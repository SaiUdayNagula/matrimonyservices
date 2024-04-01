import PublicLayout from '@/components/Layouts/PublicLayout';
import { API_PATHS } from '@/config/ApiConfig';
import images from '@/config/images';
import { useAuth } from '@/utils/AuthProvider';
import { Alert, Button, Divider, Form, Input, notification } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Cookies from 'universal-cookie';

const ForgotPassword = () => {
    const { login, logout, isLogged } = useAuth();
    const [form] = Form.useForm();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const cookies = new Cookies();


    const router = useRouter();

    const openNotification = () => {
        notification.open({
            message: 'Coming Soon!',
            description: 'This feature is not available yet',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    const loginMethod = async () => {
        try {
            // Validate the form fields
            const validatedValues = await form.validateFields();
    
            // If validation succeeds, proceed with login
            if (validatedValues) {
                setLoading(true);
                // Perform login logic or any other actions
                router.push('/otpScreen');
            }
        } catch (error) {
            console.error('Validation failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const onFinish = async (values) => {
        // try {
        //     setLoading(true);
        //     const response = await axios.post(API_PATHS.LOGIN, values);

        //     // Extract the token from the response and store it in cookies
        //     const { token } = response.data.data;
        //     cookies.set('token', token, { path: '/' });
        //     setSuccess(true);
        //     setLoading(false);
        //     login(response.data.data.basicInformation);
        //     router.push('/dashboard');
        // } catch (error) {
        //     setError(true);
        //     setLoading(false);
        //     if (error.response) {
        //         const status = error.response.status;
        //         const data = error.response.data;

        //         if (status === 404) {
        //             notification.error({
        //                 message: 'Error',
        //                 description: data.message || 'User not found',
        //             });
        //         }
        //         if (status === 401) {
        //             notification.error({
        //                 message: 'Error',
        //                 description: data.message || 'Password incorrect',
        //             });
        //         }
        //     } else if (error.request) {
        //         notification.error({
        //             message: 'Error',
        //             description: 'No response received from the server',
        //         });
        //     } else {
        //         notification.error({
        //             message: 'Error',
        //             description: 'Request setup error',
        //         });
        //     }
        // }
        try {
            // Validate the form fields
            const validatedValues = await form.validateFields();
    
            // If validation succeeds, proceed with login
            if (validatedValues) {
                setLoading(true);
                // Perform login logic or any other actions
                router.push('/otpScreen');
            }
        } catch (error) {
            console.error('Validation failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        // Perform actual logout logic (e.g., clear session)
        logout();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 3000);
    };

    const loginInput = [
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Enter your email',
            rules: [
                {
                    required: true,
                    message: 'Please input your email!',
                },
            ],
        },
    ];

    const renderInput = (input) => {
        const validationRules = [];

        validationRules.push({
            required: true,
            message: `${input.label} is required`,
        });
        return (
            <Form.Item
                className='my-2'
                key={input.name}
                label={input.label}
                name={input.name}
                rules={validationRules}
            >
                <Input
                    type={input.type}
                    placeholder={input.placeholder}
                    className={input.className}
                />
            </Form.Item>
        );
    };

    return (
      <PublicLayout>
        <div className="relative h-screen flex overflow-hidden auth">
          {/* Image Section (70%) */}
          <div className='md:col-span-2 h-full relative w-[70%] bg-[url("/assets/SideImage.png")] bg-no-repeat bg-center bg-cover theme-bg'>
            {/* <img
                        className='object-cover object-center theme-bg'
                        src={images.sideImage}
                        alt='ForgotPassword Image'
                    /> */}
            {/* Logo at top-left corner */}
            <a href="" className='absolute mt-10 ml-10'>
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

          {/* ForgotPassword Form Section (30%) */}
          <div className=" w-[30%] px-[5rem] flex items-center">
            <div className="w-full">
              <div>
                <div className="">
                  <img
                    src={images.logoIcon}
                    alt="OTP Image"
                    className="mb-10"
                  />
                  <h1 className="text-2xl mb-4 theme-color">Forgot Password</h1>
                  <p className='text-xs text-slate-500 mb-6'>Enter your email and  we’ll send you a link to reset your password</p>
                </div>
                <Form
                  form={form}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="login-label"
                >
                  {loginInput.map((input) => renderInput(input))}
                  
                  <Button
                    loading={loading}
                    type="primary"
                    htmlType="submit"
                    key="reset"
                    onClick={loginMethod}
                    className="btn-primary w-full mt-3"
                  >
                    Continue
                  </Button>
                </Form>
                <div className="mt-2">
                  {error && (
                    <Alert message="Error" type="error" showIcon closable />
                  )}
                  {success && (
                    <Alert
                      className="text-left"
                      description="Reset link sent to your email"
                      type="success"
                      showIcon
                      closable
                    />
                  )}
                </div>
                {/* <Divider className='my-4' orientation='middle' plain>
                                Or ForgotPassword with
                            </Divider>
                            <div className='grid gap-3'>
                                <Button
                                    onClick={openNotification}
                                    icon={<FaFacebook />}
                                    htmlType='submit'
                                    key='facebook'
                                    className='border-none shadow bg-white w-full'>
                                    ForgotPassword with Facebook
                                </Button>
                                <Button
                                    onClick={openNotification}
                                    icon={<FaGoogle />}
                                    htmlType='submit'
                                    key='google'
                                    className='border-none shadow bg-white w-full'>
                                    ForgotPassword with Google
                                </Button>
                            </div> */}
                <div className="mt-[5rem] text-sm text-black">
                  <hr />
                  <p className="text-center mt-3 text-md underline">
                    <a  href="/login">
                    Back to Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PublicLayout>
    );
};

export default ForgotPassword;
