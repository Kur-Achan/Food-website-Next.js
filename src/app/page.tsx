import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
    <div className="overflow-hidden">
      <nav className="flex gap-[350px] text-[20px] ml-[100px] mt-[20px]  (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw">
        <div className ="text-yellow-500 italic">
          <p>FoodHouse</p>
        </div>
        <div className="flex gap-[80px] text-zinc-600 ">
          <Link href={"/Home"} className="font-semibold text-yellow-500">HOME</Link>
          <Link href={"/Restaurant"}>RESTAURANT</Link>
          <Link href={"Services"}>SERVICES</Link>
          <Link href={"Cart"}>CART</Link>
        </div>
        <div className="mx-[120px] text-zinc-600">
          <p>Sign In</p>
        </div>
      </nav>
      <div className="flex gap-[70px]">
        <div className="mx-[220px] mt-[100px] mr-[10px]">
        <div className="text-[50px] text-[65px] font-bold my-[60px]">
          <h1>Enjoy Delicious</h1>
          <div className="flex gap-[10px]">
            <h1>Food in</h1>
            <h1 className="text-yellow-500 mr-5">Healthy Life</h1>
          </div>
        </div>
        <div className="text-[25px] font-light text-zinc-550">
          <p>Tondori masala is an Indian spice blend consisting of a</p>
          <p>variety of spices Tandoori masla is an Indian spice blend</p>
          <p>consisting of a variety of spices</p>
        </div>
        <button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg mr-[60px]">ORDER NOW</button>
        </div>
        <div>
        <img src="./images/kuku.png" className="object-cover  rounded-full mt-[130px] mx-3 " alt="chicken"/>
        </div>
      </div>
        <div className="text-center font-bold mt-8">
          <h1 className="italic text-[35px]">Online Store</h1>
          <h1 className="text-[45px]">Popular Foods</h1>
        </div>
        <div className="flex gap-[80px] mx-[150px]">
          <div>
          <img src="./images/Fruit fish.png" className="object-cover w-[200px] rounded-full mt-[130px]" alt="chicken"/>
          <h1 className="text-[38px] font-medium text-center">Fruit dish</h1>
          <p className="text-[20px] text-center mt-[30px]">Dinko Food</p>
          <p className="text-center mt-[20px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[250px] text-amber-500 min-h-[65px] text-[18px] rounded-full  mx-[10px]">Add to cart $696</button>
          </div>
          <div>
          <img src="./images/dish.jpeg" className="object-cover w-[200px] rounded-full mt-[130px]" alt="chicken"/>
          <h1 className="text-[38px] font-medium text-center">Fruit dish</h1>
          <p className="text-[20px] text-center mt-[30px]">Dinko Food</p>
          <p className="text-center mt-[20px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[250px] text-amber-500 min-h-[65px] text-[18px] rounded-full  mx-[10px]">Add to cart $696</button>
          </div>
          <div>
          <img src="./images/sea food.png" className="object-cover w-[200px] rounded-full mt-[130px]" alt="chicken"/>
          <h1 className="text-[38px] font-medium text-center">Sea Fish dish</h1>
          <p className="text-[20px] text-center mt-[30px]">Dinko Food</p>
          <p className="text-center mt-[20px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[250px] text-amber-500 min-h-[65px] text-[18px] rounded-full  mx-[10px]">Add to cart $696</button>
          </div>
          <div>
          <img src="./images/pizza.png" className="object-cover w-[200px] rounded-full mt-[130px] mb-2" alt="chicken"/>
          <h1 className="text-[38px] font-medium text-center">Pizza</h1>
          <p className="text-[20px] text-center mt-[30px]">Dinko Food</p>
          <p className="text-center mt-[20px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="my-[50px] bg-yellow-500 text-neutral-100 min-w-[250px] text-amber-500 min-h-[65px] text-[18px] rounded-full  mx-[10px]">Add to cart $696</button>
          </div>
    </div>
    <div className=" flex gap-[70px] items-center m-15  m-8 ms-60" >
      <div>
      <h1 className="text-[45px]  font-bold ">Our special Offer</h1>
      <p>Best cooks and best delivery guys all at your<br/>
      services.Hot tasty food will reach you in 60 minutes</p>
      <button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[60px] text-[25px] rounded-lg mr-[60px]">See All Menu</button>
      </div>
      <div>
    <img src="./images/salatha.png" className="object-cover w-[400px] rounded-full " alt="chicken"/>
    </div>
    </div>
    <div className="text-center gap-5 ">
      <h1>Quality food</h1>
      <h1 className="font-bold text-[30px] gap-5">Get The Best Offers</h1>
      <p>The  food at doorstep.Why satrve you have us.Your  hunger<br/>
      partner.Straight out of the oven to your doorstep</p>
    </div>
    <div className="flex gap-[70px] items-center m-15  m-8 ms-60 place-center-center grid grid-cols-3 gap-7 place-items-center ">
    <div className="flex">
    <div>
      <h1 className="font-bold  text-[25px] ">Other</h1>
      <h1 className="font-bold text-[25px]">flavors</h1>
      <p>save room.We<br/>
      made salats<br/>
      <span className="text-yellow-500">$12.90</span></p>
    </div>
    <div>
    <Image src="/images/humbuger.jpg" width={200} height={200} alt="Food" className=" my-5"/>
    </div>
    </div>
    <div className="flex">
    <div>
      <h1 className="font-bold  text-[25px]">Other</h1>
      <h1 className="font-bold text-[25px]">flavors</h1>
      <p>save room.We<br/>
      made salats<br/>
      <span className="text-yellow-500">$12.90</span></p>
    </div>
    <div>
    <Image src="/images/salats.png" width={200} height={200} alt="Food" className=" mx-5"  />
    </div>
    </div>
    <div className="flex">
    <div>
      <h1 className="font-bold  text-[25px]">Find a pocco</h1>
      <h1 className="font-bold text-[25px]">store near</h1>
      <h1 className="font-bold text-[25px]"> You</h1>
      <span className="text-yellow-500">$12.90</span>
    </div>
    <div>
    <Image src="/images/location.jpeg" width={100} height={100} alt="Food" className=" mx-5"/>
    </div>
    </div>
    </div>
   <div className="font-bold text-[30px]  text-center">
    <h1>Our Services</h1>
   </div>
    <div className="flex gap-[80px] items-center m-15  m-8 ms-60 mt-6 place-center-center grid grid-cols-4 gap-4 place-items-center ">
   <div>
   <Image src="/images/hotel.png" width={100} height={100} alt="restaurant"  />
    <h1 className="font-bold">55+ restaurant</h1>
   </div>
   <div>
   <Image src="/images/rate.png" width={100} height={100} alt="helmet"  />
    <h1 className="font-bold">Good quality</h1>
   </div>
   <div>
   <Image src="/images/helmet.png" width={100} height={100} alt="helmet" />
    <h1 className="font-bold">Discount system</h1>
   </div>
   <div>
   <Image src="/images/scooter.png" width={100} height={100} alt="scooter"  />
    <h1 className="font-bold">Fast Delivery</h1>
   </div>
    </div>
    <div className="items-justify-center gap-[70px] place-content-centre m-15  m-8 ms-60 place-center-center grid grid-cols-1 gap-4 place-items-center ">
      <p className="font-bold text-[25px] mb-6">Testimonials</p>
      <h1 className="font-bold text-[70px] mb-6">What Our Clients Say</h1>
      <Image src="/images/quote-1.png" width={100} height={100} alt="Food"/>
      <p> Lorem ipsum dolor sit amet, consectetur adpiscing cell,sed do eiusmod tempor incidid<br/>
      ut labore et dolore magna alique.Ut enim ad minim veniam,quis nstrud exercitation<br/>
      uliaco laboris nisi ut aliquip ex ea commodo</p>

      <div className= "flex ">
      <Image src="/images/people.png" width={400} height={400} alt="Food"  className="rounded-full  " />
      </div>
      <h1 className="font-bold">Mitchel Marsh</h1>
        <p>ceo.Bexan Agency</p>
      <div className="flex">
      <Image src="/images/prev.png" width={100} height={100} alt="Food"  /> 
      <Image src="/images/arrow.png" width={100} height={100} alt="Food"  />
       </div>
   </div>
   <div className="flex gap-[70px] items-center m-15  m-8 ms-60 text-[25px]">
    <div>
    <Image src="/images/phone.png" width={200} height={300} alt="Food"  />
    </div>
    <div>
      <p className="text-yellow-500">Download Our App</p>
      <h1 className="font-bold text[30]">It's all here </h1>
      <h1 className="font-bold text[30]">All in one App</h1>
      <p>Discover local on demand delivery or pickup from<br/>
      resaturant nearby grocery and convenience sores<br/>
      and more</p>
      <div className="flex">
    <div>
    <Image src="/images/AppStore.png" width={200} height={200} alt="Food"  />
    </div>
    <div>
    <Image src="/images/Play.png" width={200} height={200} alt="Food"  />
    </div>
   </div>
   </div>
   </div>
<div className="flex gap-[70px] ms-60  place-center-center grid grid-cols-4 gap-4 place-items-center ">
<div>
 <h1 className="font-bold text[30px]  ">Subscribe Our Newsletter</h1>
 <p>Subscribe on our newsletter to get our<br/>
 news</p>
</div>
<div>
  <p>Your email address</p>
</div>
<div>
<button className="my-[60px] bg-yellow-500 text-white-100 min-w-[200px] text-white min-h-[65px] text-[18px] rounded-lg  mx-[10px]">Subscribe</button>
</div>
</div>
<div className="bg-black flex h-80 gap-[70px] text-slate-200  place-center-center grid grid-cols-4 gap-4 place-items-center">
  <div>
    <h1 className="font-bold text-3xl">FoodHouse</h1>
    <p>Best cooks and best delivery guys all<br/>
    at your services.Hot tasty food will<br/>
    reach you in 60 minutes</p>

    <div className="flex gap-4 rounded-lg my-5">
    <Image src="/images/facebook.jpeg" width={30} height={20} alt="Food"  />
    <Image src="/images/twitter.png" width={30} height={20} alt="Food"  />
    <Image src="/images/linkedin.png" width={30} height={20} alt="Food"  />
    </div>
  </div>
  <div>
    <h1 className="font-bold text-2xl">Company</h1>
    Career<br/>
    About us<br/>
    Blog<br/>
    Press info<br/>
    Features
  </div>
  <div>
    <h1 className="font-bold text-2xl">Fudo</h1>
    Why Fudo<br/>
    How it works<br/>
    Why choose us<br/>
    Client stories<br/>
    Gallery
  </div>
  <div>
    <h1 className="font-bold text-2xl">Menu</h1>
    Breakfast<br/>
    Lunch<br/>
    Dinner<br/>
    Fastfood<br/>
    Drinks
  </div>
</div>
<div className="flex bg-yellow-500 h-16 place-center-center grid grid-cols-4 gap-2 place-items-center  text-[20px] mr-0 ">
  <div className="text-white">
    Copyright 2023 Besnik All rights reserved
  </div >
  <div className="text-white">Terms</div>
  <div className="text-white">Privacy</div>
  <div className="text-white">Policy</div>
</div>
</div>
 </main>
  );
}
