import CopyRight from "@/components/Common/CopyRight";
import FAQ from "@/components/Common/FAQ";
import PrivateLayout from "@/components/Layouts/PrivateLayout";
import React from "react";

const Dashboard = () => {
  const profiles = [
    {
      image: "/assets/profiles/shruti.png",
      name: "Shruti K",
      age: "24yrs",
      height: "5'4''",
      city: "Hyderabad",
      locality: "Jubilihills",
      language: "Telugu",
      caste: "Chowdary",
    },
    {
      image: "/assets/profiles/kaushik.png",
      name: "Kaushik M",
      age: "27yrs",
      height: "5'9''",
      city: "Hyderabad",
      locality: "Kukatpally",
      language: "Telugu",
      caste: "Brahman",
    },
    {
      image: "/assets/profiles/keerthi.png",
      name: "Shruti K",
      age: "24yrs",
      height: "5'4''",
      city: "Hyderabad",
      locality: "Jubilihills",
      language: "Telugu",
      caste: "Chowdary",
    },
    {
      image: "/assets/profiles/areef.png",
      name: "Shruti K",
      age: "24yrs",
      height: "5'4''",
      city: "Hyderabad",
      locality: "Jubilihills",
      language: "Telugu",
      caste: "Chowdary",
    },
  ];
  const StatCard = (props)=>{
    return (
      <div style={{backgroundColor : props.bg1}} className="rounded-xl overflow-hidden flex flex-col justify-between">
        <p className="text-center py-4 text-3xl font-bold">{props.number}</p>
        <p className="py-2 px-3 text-sm h-[50%] flex items-center justify-center text-center" style={{backgroundColor : props.bg2}}>{props.name}</p>
      </div>
    )
  }
  return (
    <PrivateLayout>
      <main>
        <div className="bg-[url('/assets/dashboard-banner.png')] bg-no-repeat bg-center bg-cover flex items-center py-40">
          <p className="text-white w-[67%] ms-20 text-[27px]">
             Marriages are deeply rootedin cultural, religious, and traditional
            values that play a significant role inshaping the purpose, rituals,
            ceremonies, and dynamics of marital relationshipsin the every
            society 
          </p>
        </div>
        {/* Profile Cards */}
        <div className="bg-[url('/assets/bg-pattern.png')] py-10">
          <div className="w-[88%] mx-auto">
            <div className="grid grid-cols-7 gap-4 mb-5">
              <StatCard number={'04'} name={'My Profiles'} bg1={'#E4F1FF'} bg2={'#D6E9FF'}/>
              <StatCard number={'25'} name={'Total Profiles Reviewed'} bg1={'#FFF0D0'} bg2={'#FFE8B7'}/>
              <StatCard number={'10'} name={'Shortlisted'} bg1={'#DEF3C5'} bg2={'#CEEFA7'}/>
              <StatCard number={'04'} name={'Viewed Your Profile(s)'} bg1={'#DAFBF2'} bg2={'#AFFEE8'}/>
              <StatCard number={'08'} name={'Saved for Discussion'} bg1={'#FFEDF0'} bg2={'#FFE0E5'}/>
              <StatCard number={'12'} name={'Recommendations'} bg1={'#EBE9F8'} bg2={'#E4DFF7'}/>
              <StatCard number={'25'} name={'Favourites'} bg1={'#FFECE9'} bg2={'#FCDEDA'}/>
            </div>
            <div className="flex justify-between items-center pb-2 mt-5 border-b-2 mb-8">
              <p className="font-semibold text-xl mt-6">Registered Profiles</p>
              <p className="font-semibold text-xl mt-6">+ Add Profile</p>
            </div>
            <div className="grid grid-cols-4 gap-10">
              {profiles.map((e) => (
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
                    <button className="bg-[#FFB000] text-white px-10 py-3 rounded-[5px] w-full mt-3">
                      Connect Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* FAQ */}
        <FAQ />
      </main>
      <CopyRight/>
    </PrivateLayout>
  );
};

// TODO: add with auth
export default Dashboard;
