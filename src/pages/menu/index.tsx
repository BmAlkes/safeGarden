import sunday from "../../assets/bowlburguer.jpg";
import monday from "../../assets/chickenlemon.jpg";
import tuesday from "../../assets/meatpita.jpg";
import wednesday from "../../assets/13.-Savoury-Vegetable-Muffins-720x1080.jpg";
import thursday from "../../assets/18.-Greek-Yogurt-Peanut-Butter-Dip-720x1080.jpg";
import friday from "../../assets/4x5-29-768x960.jpg";

const Menu = () => {
  return (
    <div className="container">
      <section className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-normal text-4xl text-green-500">Weekly Menu</h1>
      </section>
      <ol className="border-l border-neutral-300 dark:border-neutral-500">
        {/* <!--First item--> */}
        <li>
          <div className="flex-start flex items-center pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-green-500">Sunday</p>
          </div>
          <div className="mb-6 ml-4 mt-2">
            <h4 className="mb-1.5 text-xl font-semibold">
              Red Kidney Bean Burger Bowls
            </h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                These kidney bean burgers are vegetarian-friendly and taste
                absolutely delicious, accompanied with fresh vegetables. The
                burgers are spicy, flavorful, and filling! They’re also high
                protein, and gluten-free. More and more of us are adding more
                vegetarian meals to our diets. So, if you’re looking for a high
                protein lunch to have on meatless Monday, these are a great
                option.
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={sunday}
                alt="blog"
              />
            </div>
          </div>
        </li>

        {/* <!--Second item--> */}
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-green-500">Monday</p>
          </div>
          <div className="mb-6 ml-4 mt-2">
            <h4 className="mb-1.5 text-xl font-semibold">
              Lemon Chicken with Veggies Meal Prep
            </h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Lemon chicken with veggies does for a perfect naturally sweet
                meal prep. It’s nutritious, filling, and full of flavors. The
                chicken meal prep is high in protein, dairy-free, Paleo, and
                gluten-free. It’s packed with roasted veggies such as sweet
                potatoes and broccoli. Roasting your veggies adds caramelization
                to your veggies, so they’re naturally sweet…no sugar needed.
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={monday}
                alt="blog"
              />
            </div>
          </div>
        </li>

        {/* <!--Third item--> */}
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-green-500">Tuesday</p>
          </div>
          <div className="ml-4 mt-2 pb-5">
            <h4 className="mb-1.5 text-xl font-semibold">
              Meatball Pita Pockets
            </h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                These 5 ingredient Meatballs Pita Pockets, made with pantry
                staples, are the perfect easy back to school eat, family dinner,
                appetizer, or snack.
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={tuesday}
                alt="blog"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-green-500">Wednesday</p>
          </div>
          <div className="ml-4 mt-2 pb-5">
            <h4 className="mb-1.5 text-xl font-semibold">
              Savoury Vegetable Muffins
            </h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                These irresistible savoury vegetable muffins are packed with
                flavour thanks to Cheddar cheese, sage, garlic, cumin and plenty
                of vegetables.
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={wednesday}
                alt="blog"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-green-500">Thursday</p>
          </div>
          <div className="ml-4 mt-2 pb-5">
            <h4 className="mb-1.5 text-xl font-semibold">
              GREEK YOGURT PEANUT BUTTER DIP
            </h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Peanut butter yogurt dip is the best healthy snack! This super
                easy recipe is made with 3 simple ingredients and comes together
                in just 5 minutes. It's perfect for dipping fresh fruit like
                apple slices, grapes, strawberries, blueberries, blackberries
                and bananas. I also love eating it with graham crackers, nilla
                wafers or pretzels..
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={thursday}
                alt="blog"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-green-500">Friday</p>
          </div>

          <div className="ml-4 mt-2 pb-5">
            <h4 className="mb-1.5 text-xl font-semibold">
              Egg Muffin Cups With Veggies
            </h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                These healthy egg muffin cups are loaded with vegetables and are
                super easy to make. With just 81 calories per muffin, you can
                make them ahead and have them as a healthy breakfast or a snack.
                These muffin cups are high in protein, low calorie, vegetarian,
                dairy-free, and gluten-free. They‘re flavorful and savory yet
                have a hint of natural sweetness!
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={friday}
                alt="blog"
              />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Menu;
