import FooterComponent from "@/components/footer";
import React from "react";
const AboutUs = () => {
  const FeatureCard = ({ title, desc, bg }) => {
    return (
      <div
        className={`rounded-md px-10 py-10 w-[45%]`}
        style={{ backgroundColor: bg }}
      >
        <p className="text-2xl mb-2 font-semibold">{title}</p>
        <p>{desc}</p>
      </div>
    );
  };
  const TeamCard = ({name,image})=>{
    return (
        <div className=" hover:scale-105 transition">
            <img src={image} alt="" />
            <p className="bg-white text-center text-lg py-3 font-semibold">{name}</p>
        </div>
    )
  }
  return (
    <main>
      <section className="p-24 flex items-center h-[60vh] bg-[url('/assets/about-hero.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-[65%] mx-auto flex flex-col items-center">
          <p className="text-white text-5xl text-center">
            Find the perfect match for your child's happily everafter
          </p>
        </div>
      </section>
      <section className="bg-[#F9F9F9]">
        <div className="flex justify-between w-[90%] mx-auto py-12">
          <div className="w-[35%] flex flex-col justify-between">
            <div>
              <p className="text-3xl mt-2 mb-4">About Our Matrimony</p>
              <p>
                At MatrimonyService.org,we understand the importance of finding
                the perfect life partner. Our platformis designed to make the
                journey of finding love, companionship, and lifelonghappiness
                easier and more fulfilling.
              </p>
            </div>
            <div>
              <p className="text-3xl mb-4">Our Mission</p>
              <p>
                To createmeaningful connections that lead to successful
                marriages, ensuring that everymatch is made with care,
                consideration, and compatibility.
              </p>
            </div>
          </div>
          <div className="w-[50%] shadow border-white border-[1rem]">
            <img src="/assets/people-discuss.png" width={"100%"} alt="" />
          </div>
        </div>
      </section>
      <section className=" mx-auto py-12">
        <div className="flex flex-wrap gap-8 justify-center">
          <FeatureCard
            title={"Background Checks"}
            bg={"#EAF2F8"}
            desc={
              "We prioritizethe safety and security of our users. To maintain a safe and trustworthyenvironment, we conduct background checks on all profiles and mark the same fora profile."
            }
          />
          <FeatureCard
            title={"Why Choose Us?"}
            bg={"#FEF9E7"}
            desc={
              "ExtensiveDatabase: We have a vast database of verified profiles, increasing your chancesof finding the right and genuine match."
            }
          />
          <FeatureCard
            title={"Genuine Profiles"}
            bg={"#F5EEF8"}
            desc={
              "Ourautomatic and manual background checking process ensures to check a profilethrough networking and social media history. Profiles may undergo 3rdparty websites for social and criminal and financial background checking."
            }
          />
          <FeatureCard
            title={"Advanced Matching Algorithms"}
            bg={"#FDEDEC"}
            desc={
              "Ourautomatic and manual background checking process ensures to check a profilethrough networking and social media history. Profiles may undergo 3rdparty websites for social and criminal and financial background checking."
            }
          />
        </div>
      </section>
      <section className="bg-[#F9F9F9] py-14 pb-16">
        <div className="flex w-[80%] mx-auto justify-between">
          <div className="w-[30%]">
            <p className="text-2xl font-semibold mb-2">
              Advanced Matching Algorithms
            </p>
            <p>
              Our Intelligent algorithms help you find compatible partners based
              on yourpreferences and criteria.
            </p>
          </div>
          <div className="w-[30%]">
            <p className="text-2xl font-semibold mb-2">Privacy and Security</p>
            <p>
              Weprioritize the privacy and security of our users, ensuring a
              safe onlineenvironment.
            </p>
          </div>
          <div className="w-[30%]">
            <p className="text-2xl font-semibold mb-2">Our Commitment</p>
            <p>
              We arecommitted to providing a platform that is user-friendly,
              reliable, andeffective in helping you find your life partner.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#304617] py-12">
            <p className="text-center text-white text-4xl font-semibold">Our Team</p>
            <div className="flex gap-8 justify-center pt-8">
                <TeamCard name={'Suresh'} image={'/assets/suresh.png'}/>
                <TeamCard name={'Prashanth'} image={'/assets/prashanth.png'}/>
                <TeamCard name={'Name 2'} image={'/assets/name4.png'}/>
                <TeamCard name={'Name 3'} image={'/assets/name3.png'}/>
            </div>
      </section>    
      <FooterComponent/>
    </main>
  );
};

export default AboutUs;
