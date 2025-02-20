export default function FoodMenu() {
  return (
    <div className="relative font-serif">
      <div
        className="bg-cover bg-no-repeat bg-center h-[50vh]"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/foodMenu.jpg"
          })`,
        }}
      ></div>
      <div className="absolute top-[25vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl md:text-5xl">
        Food Menu
      </div>

      <div className="flex items-center justify-center">
        <div className="w-5/6 text-start grid grid-cols-1 md:grid-cols-2 md:gap-24 mt-10 leading-tight">
          <div className="grid grid-cols-4 gap-3 grid-flow-row mb-20">
            <div className="col-span-4 text-3xl text-red-700 mb-3">
              BREAKFAST ALL DAY
            </div>
            <div className="col-span-3">
              <span className="font-bold">PORRIDGE</span>
              <br /> seasonal fruit
            </div>
            <div className="text-end">17.50</div>

            <div className="col-span-3">
              <span className="font-bold">GRANOLA</span>
              <br /> fruit, coconut or natural yogurt
            </div>
            <div className="text-end">18.50</div>

            <div className="col-span-3">
              <span className="font-bold">FREE RANGE EGGS</span>
              <br />
              scrambled, poached, fried on sourdough
            </div>
            <div className="text-end">16.00</div>

            <div className="col-span-4 mb-10">
              <span className="font-bold">SIDES:</span>
              <br />
              avocado 6, bacon 6, mushrooms 6.50
              <br />
              tomato 7, fennel pork sausage 7, spinach 5, <br />
              smoked salmon 7.50, haloumi 7
            </div>

            <div className="col-span-3">
              <span className="font-bold">SALMON BREAKFAST SALAD</span>
              <br />
              poached egg, seeds, almonds
            </div>
            <div className="text-end">23.00</div>

            <div className="col-span-3">
              <span className="font-bold">BREAKFAST SALAD</span>
              <br />
              poached egg, seeds, almonds
            </div>
            <div className="text-end">23.00</div>

            <div className="col-span-3">
              <span className="font-bold">MEDITERRANEAN EGGS</span>
              <br />
              bacon, garlic, onion, tomato, spinach
            </div>
            <div className="text-end">24.00</div>

            <div className="col-span-3">
              <span className="font-bold">CORN FRITTERS</span>
              <br />
              bacon
            </div>
            <div className="text-end">25.00</div>

            <div className="col-span-3">
              <span className="font-bold">RICOTTA HOTCAKES</span>
              <br />
              fresh fruit
            </div>
            <div className="text-end">24.00</div>

            <div className="col-span-3">
              <span className="font-bold">HALF AND HALF</span>
              <br />
              fresh fruit, toast
            </div>
            <div className="text-end">19.00</div>

            <div className="col-span-3">
              <span className="font-bold">MINCE ON 5 GRAIN</span>
              <br />
              poached egg
            </div>
            <div className="text-end">25.00</div>
          </div>

          <div className="grid grid-cols-4 gap-3 grid-flow-row mb-20">
            <div className="col-span-4 text-3xl text-red-700 mb-3">LUNCH</div>
            <div className="col-span-3">
              <span className="font-bold">ROAST BEETROOT SALAD</span>
              <br />
              feta, walnuts, rocket, balsamic dressing
            </div>
            <div className="text-end">23.00</div>

            <div className="col-span-3">
              <span className="font-bold">RARE GRILLED TUNA</span>
              <br />
              cos, avocado, crispy capers
            </div>
            <div className="text-end">28.00</div>

            <div className="col-span-3">
              <span className="font-bold">SALMON</span>
              <br />
              ginger, coriander, baby spinach, lime, chilli in broth
            </div>
            <div className="text-end">28.00</div>

            <div className="col-span-3">
              <span className="font-bold">CHICHEN SALAD</span>
              <br />
              cos, lime, peanut, coriander
            </div>
            <div className="text-end">27.00</div>

            <div className="col-span-3">
              <span className="font-bold">MUSHROOM RISOTTO</span>
              <br />
              grana padano, truffle oil
            </div>
            <div className="text-end">27.00</div>

            <div className="col-span-3">
              <span className="font-bold">PASTA</span>
              <br />
              prawn, chilli, garlic, white wine
            </div>
            <div className="text-end">28.00</div>

            <div className="col-span-4 mt-10">
              <span className="font-bold">BRUCHETTA</span>
            </div>
            <div className="col-span-3">- vinetomato, avocado, basil</div>
            <div className="text-end">23.00</div>

            <div className="col-span-3">- vinetomato, goat cheese, basil</div>
            <div className="text-end">23.00</div>

            <div className="col-span-3">- avocado, broad bean, cress</div>
            <div className="text-end">23.00</div>

            <div className="col-span-4 mt-10">
              <span className="font-bold">GRILLED SOURDOUGH SANDWICHES</span>
            </div>
            <div className="col-span-3">
              - grilled chicken, avocado, chilli jam
            </div>
            <div className="text-end">27.00</div>

            <div className="col-span-3">
              - minute steak, rocket, grana padano
            </div>
            <div className="text-end">23.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
