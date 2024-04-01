import React from "react";
const Plans = () => {
  const PlanCard = (props) => (
    <div className="rounded-3xl overflow-hidden flex flex-col justify-between items-center h-[28rem] bg-[#F4F4F4] shadow pb-5 hover:shadow-lg hover:bg-white">
      <div className="w-full flex flex-col items-center">
        <p
          className="text-white w-full text-center py-6 text-xl font-bold"
          style={{ backgroundColor: props.color }}
        >
          {props.name}
        </p>
        <p
          className="mt-6 text-3xl font-bold text-center"
          style={{ color: props.color }}
        >
          ${props.price}
        </p>
        <ul className="mt-5 list-disc">{props.children}</ul>
      </div>
      <button className="mt-5 px-6 py-2 bg-[#707070] rounded-[100px] text-white">
        Continue
      </button>
    </div>
  );
  return (
    <div className="bg-[url('/assets/bg-pattern.png')] bg-cover pb-10 min-h-[90vh]">
      <p className="text-black font-bold text-3xl text-center py-10">
        Upgrade now & Get upto 40% discount today!
      </p>

      <div className="w-[75%] mx-auto">
        <div className="grid grid-cols-3 gap-12">
          <PlanCard name={'FREE PLAN'} color={'#0095FE'} price={0}>
            <li>Send Unlimited Messages</li>
            <li>View Upto 75 Contact Numbers</li>
            <li>Get Live passes worth INR1500</li>
          </PlanCard>
          <PlanCard name={'STANDARD PLAN'} color={'#FEA800'} price={4700}>
            <li>Send unlimited Messages</li>
            <li>View upto 75 Contact Numbers</li>
            <li>Get Live passes worth INR1500</li>
            <li>Standout from other profiles</li>
          </PlanCard>
          <PlanCard name={'PREMIUM PLAN'} color={'#69C369'} price={6800}>
            <li>Send unlimited Messages</li>
            <li>View upto 75 Contact Numbers</li>
            <li>Get Live passes worth INR1500</li>
            <li>Standout from other profiles</li>
            <li>Let matches contact you directly</li>
          </PlanCard>
        </div>
      </div>
    </div>
  );
};

export default Plans;
