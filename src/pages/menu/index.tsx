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
            <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1920px-Pizza-3007395.jpg"
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
            <h4 className="mb-1.5 text-xl font-semibold">Title of section 2</h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2-1200x1752.jpg"
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
            <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://piano-center.co.il/wp-content/uploads/2021/07/IMG_6146.jpg"
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
            <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/721x401"
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
            <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/721x401"
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
            <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
            <div className="flex flex-col md:flex-row items-center">
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/721x401"
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
