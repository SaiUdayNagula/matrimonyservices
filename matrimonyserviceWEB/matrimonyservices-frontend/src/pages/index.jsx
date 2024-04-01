import AdvancedSearch from "@/components/AdvancedSearch";
import PublicLayout from "@/components/Layouts/PublicLayout";
import Testimonial from "@/components/Testimonial";
import images from "@/config/images";
import { Button } from "antd";
import ThreeLayerCard from "@/components/threelayerCard";
import TwoColumnImageGrid from "@/components/successStories";
import FooterComponent from "@/components/footer";
import { Carousel } from 'antd';

const FullScreenCard = () => {
  return (
    <div className="flex justify-center items-center bg-[#1E2C0E] py-14">
      <div className="text-center text-white">
        <h1 className="mb-4 text-4xl">- About Our Matrimony -</h1>
        <p className="text-lg mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>
        <p className="text-lg mb-2">
          {" "}
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a{" "}
        </p>
        <p className="text-lg mb-2">
          {" "}
          galley of type and scrambled it to make a type specimen book.{" "}
        </p>
      </div>
    </div>
  );

};
const ServicesCard = () => {
  return (
    <div className="bg-white p-8 rounded-lg my-[3rem]">
      <div className=" text-center">
        <h1 className="text-4xl font-semibold">- Our Services -</h1>
      </div>

      <div className="flex w-[80%] mx-auto mt-[4rem]">
        <div className="flex flex-col gap-14">
          <div className="flex gap-10 items-center">
            <div>
              <p className="font-semibold text-2xl text-end mb-2">
                Free Registration
              </p>
              <p className="text-end">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis facere illum atque{" "}
              </p>
            </div>
            <div className="p-3 bg-[#F4F4F4] rounded-md h-fit">
              <img src={images.registration} width={56} alt="" />
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div>
              <p className="font-semibold text-2xl text-end mb-2">
                Premium Memberships
              </p>
              <p className="text-end">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis facere illum atque{" "}
              </p>
            </div>
            <div className="p-3 bg-[#F4F4F4] rounded-md h-fit">
              <img src={images.membershipCard} width={56} alt="" />
            </div>
          </div>
        </div>
        <div className="border-[1px] border-[#E2E2E2] mx-5"></div>
        <div className="flex flex-col gap-14">
          <div className="flex gap-10 items-center">
            <div className="p-3 bg-[#F4F4F4] rounded-md h-fit">
              <img src={images.proposal} width={56} alt="" />
            </div>
            <div>
              <p className="font-semibold text-2xl mb-2">
                Personalized Matchmaking
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis facere illum atque{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="p-3 bg-[#F4F4F4] rounded-md h-fit">
              <img src={images.doctor} width={56} alt="" />
            </div>
            <div>
              <p className="font-semibold text-2xl mb-2">Expert advice</p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis facere illum atque{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button className="h-full px-5 py-2 rounded-lg text-[#1E2C0E] font-serif">
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default function Home() {
  const imagesdata = [
    images.image9,
    images.image2,
    images.image3,
    images.image4,
    images.image5,
    images.image6,
    images.image7,
    images.image8,
    images.image9,
    images.image1,
  ];
  const RegisterNow =  () => {
            router.push('/signup');
};
  return (
    <main>
     
      <Carousel autoplay>
    <div>
    <section className="p-24 flex items-center h-[80vh] bg-[url('/assets/hero-banner-home.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-[50%]">
          <p className="text-5xl text-white">
            Union of Two <span className="text-[#FFAC0A]">Souls</span>
          </p>
          <p className="text-white text-lg mt-4">
            Marriage is considered a sacred and spiritual union oftwo souls,
            where two individuals come together to share their lives,
            values,aspirations, joys, sorrows, responsibilities, and journey
            through life aspartners for lifetime. This connection should not end
            at any cost till death.
          </p>
         <a href="/aboutus"> <button className="btn-outline-white">
            Explore More
          </button></a>
        </div>
        
      </section>
    </div>
    <div>
    <section className="p-24 flex items-center h-[80vh] bg-[url('/assets/hero-banner-home.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-[50%]">
          <p className="text-5xl text-white">
          Family Alliance and  <span className="text-[#FFAC0A]">Social Integration</span>
          </p>
          <p className="text-white text-lg mt-4">
           Marriage strengthens family bonds, creates alliances between families, fosters unity, harmony, cooperation, mutual respect, support, and creates a sense of belonging, acceptance, and integration within the community.
          </p>
         <a href="/aboutus"> <button className="btn-outline-white">
            Explore More
          </button></a>
        </div>
        
      </section>
    </div>
    <div>
    <section className="p-24 flex items-center h-[80vh] bg-[url('/assets/hero-banner-home.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-[50%]">
          <p className="text-5xl text-white">
          Continuation of Family  <span className="text-[#FFAC0A]">Legacy</span>
          </p>
          <p className="text-white text-lg mt-4">
          Marriage ensures the continuation of family lineage, ancestral traditions, cultural heritage, customs, rituals, values, beliefs, practices, and passes on family legacy, stories, wisdom, and teachings to future generations.
          </p>
         <a href="/aboutus"> <button className="btn-outline-white">
            Explore More
          </button></a>
        </div>
        
      </section>
    </div>
    <div>
    <section className="p-24 flex items-center h-[80vh] bg-[url('/assets/hero-banner-home.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-[50%]">
          <p className="text-5xl text-white">
          Emotional and Psychological  <span className="text-[#FFAC0A]">Support</span>
          </p>
          <p className="text-white text-lg mt-4">
          Marriage provides emotional, psychological, physical, and spiritual support, companionship, understanding, love, care, comfort, security, and stability to individuals, fostering a deep connection, intimacy, and bond between spouses.
          </p>
         <a href="/aboutus"> <button className="btn-outline-white">
            Explore More
          </button></a>
        </div>
        
      </section>
    </div>
  </Carousel>
      {/* <FullScreenCard /> */}
      <ServicesCard />
      <section className="flex justify-center items-center p-4 bg-[url('/assets/bg_1.png')] bg-cover bg-no-repeat min-h-[60vh]">
        <div className="text-white w-[70%] ms-auto flex flex-col items-center py-10">
          <p className="text-[2.5rem] mb-2 text-center font-[300]">
            Find Your Perfect Match <br /> and Begin Your Journey Together
          </p>
          <p className="mb-2 pa text-center w-[60%] mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Button className="explore mt-5 font-serif " onClick={RegisterNow}>Register Now</Button>
        </div>
      </section>
      <Testimonial />
      <TwoColumnImageGrid images={imagesdata} />
      <ThreeLayerCard />
      <PublicLayout>
        <FooterComponent className="mt-4" />
        {/* <section className="py-20 mt-10">
                    <div>
                        <h3 className="text-4xl text-heading font-semibold">
                            We bringing people together <br />
                            with our platform in very easy way
                        </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-10 items-center mt-20">
                        <div className="rounded-2xl w-3/4 bg-gradient-to-b hover:from-white from-[#FA4A6F] to-[#532B79]">
                            <div className="bg-white m-[.1rem] p-5 border-red border-2 rounded-2xl">
                                <div>
                                    <img src={images.signup} />
                                </div>
                                <div className="">
                                    <h3 className="font-semibold text-lg mt-4">Sing Up</h3>
                                    <p className="text-sm font-light">Register for free & put up your Matrimony Profile</p>
                                </div>
                            </div>
                        </div>
                        <div className="group rounded-2xl w-3/4  bg-gradient-to-b hover:from-white from-[#FA4A6F] to-[#532B79]">
                            <div className="bg-white m-[.1rem] p-5 border-red border-2 rounded-2xl">
                                <div>
                                    <img src={images.connect} />
                                </div>
                                <div className="">
                                    <h3 className="font-semibold text-lg mt-4">Connect</h3>
                                    <p className="text-sm font-light">Select & Connect with Matches you like</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl w-3/4 bg-gradient-to-b hover:from-white from-[#FA4A6F] to-[#532B79]">
                            <div className="bg-white m-[.1rem] p-5 border-red border-2 rounded-2xl">
                                <div>
                                    <img src={images.interact} />
                                </div>
                                <div className="">
                                    <h3 className="font-semibold text-lg mt-4">Interact</h3>
                                    <p className="text-sm font-light">Become a Premium Member & Start a Conversation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
      </PublicLayout>
    </main>
  );
}
