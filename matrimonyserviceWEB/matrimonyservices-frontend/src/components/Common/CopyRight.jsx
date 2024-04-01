import React from 'react'
import { Footer } from "flowbite-react";

const CopyRight = () => {
  return (
    <div className='w-full'>
        <Footer className='bg-transparent w-[90%] mx-auto'>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-center footer-margin p-4 mb-0">
            <Footer.Copyright
                href="#"
                by=" Chaturvarnam Matrimony Services. All rights reserved."
                year={2024}
            />
        </div>
        </Footer>
    </div>
  )
}

export default CopyRight