import React from "react";

const Profiles = (props) => {
  
  const pagination = {
    currentPage : 2,
    totalPages : 27
  }
  return (
    <main className="">
      <div className="">
        {/* Profile Cards */}
        <div className="grid grid-cols-4 gap-10">
          {props.profiles.map((e) => (
            <div className="rounded-[20px 20px 0 0] overflow-hidden">
              <img src={e.image} alt="" className="w-full" />
              <div className="p-4 bg-[#F4F4F4]">
                <p className="text-[30px] font-[700]">{e.name}</p>
                <p className="text-[#636363] mt-2">
                  {e.age}, {e.height}
                </p>
                <p className="text-[#636363] mt-1">
                  {e.language}, {e.caste}
                </p>
                <p className="text-[#636363] mt-1">
                  {e.locality} | {e.city}
                </p>
                  <button className="btn-primary w-full mt-3">
                    Connect Now
                  </button>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-5 flex justify-end">
            <div className="w-fit p-1 px-2 border bg-white rounded flex gap-3">
                <img src="/assets/next.svg" alt="" />
                {/* page numbers */}
                <div className="flex gap-4">
                    <p className="rounded-full text-center  flex items-center justify-center text-slate-500">1</p>
                    <p className="rounded-full text-center  flex items-center justify-center bg-black text-white w-[2rem] h-[2rem]">2</p>
                    <p className="rounded-full text-center  flex items-center justify-center text-slate-500">3</p>
                    <p className="rounded-full text-center  flex items-center justify-center text-slate-500">4</p>
                    <p className="rounded-full text-center  flex items-center justify-center text-slate-500">..</p>
                    <p className="rounded-full text-center  flex items-center justify-center text-slate-500">27</p>
                </div>
                <img src="/assets/next.svg" className="rotate-180" alt="" />
            </div>
        </div>
      </div>
    </main>
  );
};

export default Profiles;
