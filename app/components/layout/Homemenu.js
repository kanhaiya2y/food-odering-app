import Image from "next/image";
import Menuitem from "../menu/Menuitem";


const Homemenu = () => {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>

      <div className="item-center ">
        <h1 className="text-center font-bold leading-4 text-gray-500">CHECKOUT</h1>
        <h1 className="text-center font-bold text-red-600 italic text-4xl">Menu</h1>

        <div className="grid grid-cols-3 gap-4">
        <Menuitem/>
        <Menuitem/>

        <Menuitem/>

        <Menuitem/>

        <Menuitem/>

        <Menuitem/>

   
        </div>
      </div>
      <section>
      <div className="mt-20">
      <h1 className="text-center font-bold leading-4 text-gray-500">OUR STORY</h1>
        <h1 className="text-center font-bold text-red-600 italic text-4xl">About Us</h1>
<p className="text-gray-500 font-semibold mt-2">
At  we believe in creating a welcoming environment for families, friends, and pizza enthusiasts alike. Our cozy ambiance coupled with friendly service sets the stage for delightful dining experiences and memorable moments<br/>

Whether you're stopping by for a quick slice or planning a family feast, [CS pizza Wala] invites you to embark on a culinary adventure with us. Discover the perfect combination of flavors, warmth, and community spirit.

Thank you for being a part of our story. We look forward to serving you the best pizza in town!
</p>
      </div>
      

</section>
 <section>
      <div className="mt-20">
      <h1 className="text-center font-bold leading-4 text-gray-500">DON'T HESITATE</h1>
        <h1 className="text-center font-bold text-red-600 italic text-4xl">Contact Us</h1>
<p className="text-gray-500 font-semibold mt-2">
We love hearing from our customers! Whether you have a question, feedback, or just want to say hello, we're here for you. Reach out to us using the following contact details:



Address:
[Your Pizza Shop's Street Address]
[City, State, Zip Code]

Phone:
[64931998]

Email:
[xyz@gmail.com]



Connect with Us on Social Media:
 Facebook, Instagram, Twitter

Fe.
   </p>
     </div>
      

</section>

    </section>
    
  );
};

export default Homemenu;
