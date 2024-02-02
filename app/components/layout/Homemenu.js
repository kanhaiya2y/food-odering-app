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
    </section>
  );
};

export default Homemenu;
