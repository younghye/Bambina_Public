export default function DrinkMenu() {
  const colStyle = "col-span-3 font-bold";
  return (
    <div className="relative font-serif">
      <div
        className="bg-cover bg-no-repeat bg-center h-[50vh]"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/drinkMenu.jpg"
          })`,
        }}
      ></div>
      <div className="absolute top-[25vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl md:text-5xl">
        Drink Menu
      </div>

      <div className="flex items-center justify-center">
        <div className="w-5/6 md:w-4/6 text-start grid grid-cols-1 md:grid-cols-2 md:gap-24 mt-10 leading-tight">
          <div className="grid grid-cols-4 gap-3 grid-flow-row mb-20">
            <div className="col-span-4 text-3xl text-red-700">JUICED</div>
            <div className={colStyle}>Orange</div>
            <div className="text-end">10.50</div>
            <div className={colStyle}>Orange, ginger, turmeric, lemon</div>
            <div className="text-end">10.50</div>
            <div className={colStyle}>Spinach, mint, cucumber, apple</div>
            <div className="text-end">10.50</div>

            <div className="col-span-4 text-3xl text-red-700 mt-10">
              SMOOTHIES
            </div>
            <div className={colStyle}>
              Blueberry, orange, mint, banana, yoghurt
            </div>
            <div className="text-end">10.50</div>
            <div className={colStyle}>
              Almond milk, roast almond,
              <br />
              valrona chocolate, banana
            </div>
            <div className="text-end">10.50</div>
            <div className={colStyle}>Banana, greek yoghurt, honey</div>
            <div className="text-end">10.50</div>

            <div className="col-span-4 text-3xl text-red-700 mt-10">
              FRESH SLICED HOT
            </div>
            <div className={colStyle}>Ginger, lemon, organic honey</div>
            <div className="text-end">7.50</div>
            <div className={colStyle}>Mint</div>
            <div className="text-end">6.00</div>
          </div>

          <div className="grid grid-cols-4 gap-3 grid-flow-row mb-20">
            <div className="col-span-4 text-3xl text-red-700">REFRESH</div>
            <div className={colStyle}>Aperol Spritz</div>
            <div className="text-end">18.50</div>
            <div className={colStyle}>Campari, ruby grapefruit, mint</div>
            <div className="text-end">15.00</div>
            <div className={colStyle}>Vodka, blood orange</div>
            <div className="text-end">15.00</div>

            <div className="col-span-4 text-3xl text-red-700 mt-10">WINE</div>
            <div className={colStyle}>Q Pinot Gris, Waitaki Valley</div>
            <div className="text-end">14.00</div>
            <div className={colStyle}>
              Deep Down Chardonnay, organic, Marlborough
            </div>
            <div className="text-end">14.00</div>
            <div className={colStyle}>
              Squawking Magpie Reserve Sauvignon Blanc 2023
            </div>
            <div className="text-end">16.00</div>
            <div className={colStyle}>Q Rose, Waitaki Valley</div>
            <div className="text-end">15.00</div>
            <div className={colStyle}>Maude Pinot Noir, Otago 375ml</div>
            <div className="text-end">32.00</div>
            <div className={colStyle}>La Gioiosa Prosecco, Treviso 200ml</div>
            <div className="text-end">15.00</div>

            <div className="col-span-4 text-3xl text-red-700 mt-10">BEER</div>
            <div className={colStyle}>Heineken</div>
            <div className="text-end">11.00</div>
            <div className={colStyle}>Sawmill Bare Beer 0% Pale Ale</div>
            <div className="text-end">11.00</div>
            <div className={colStyle}>Sawmill Pilsner</div>
            <div className="text-end">11.00</div>
            <div className={colStyle}>Sawmill Pale Ale</div>
            <div className="text-end">11.00</div>
            <div className={colStyle}>Garage Project Fugazi 2.2%</div>
            <div className="text-end">11.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
