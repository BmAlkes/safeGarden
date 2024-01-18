const DailyPhotos = () => {
  return (
    <section className=" md:container ">
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-normal text-4xl text-green-500">Daily Photo</h1>
      </nav>
      <div className="w-full flex justify-end mb-12">
        <button className="bg-green-500 text-white font-thin h-10 p-6 flex items-center rounded-lg hover:bg-green-600">
          upload photo
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://campaignforkids.com/wp-content/uploads/2015/03/freekid-1024x768.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://images.gmanews.tv/webpics/2019/12/1_2019_12_14_11_26_53.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i2-prod.derbytelegraph.co.uk/incoming/article5248213.ece/ALTERNATES/s810/0_GettyImages-1172643701.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://w0.peakpx.com/wallpaper/417/910/HD-wallpaper-cute-kid-girl-toddler-cute-children-kid.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://w0.peakpx.com/wallpaper/866/110/HD-wallpaper-cute-little-girl-children-little-girl-smile-adorable-human.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://w0.peakpx.com/wallpaper/391/587/HD-wallpaper-little-cute-girl-little-girl-cute.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://img.freepik.com/fotos-gratis/aproxime-se-criancas-brincando-com-corda_23-2149073600.jpg?w=826&t=st=1705583350~exp=1705583950~hmac=bd49372871f1f2b238f1b2d21162ea294a18d183b263142e7586476a88b26dd2"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://img.freepik.com/fotos-gratis/criancas-em-fotos-medias-posando-juntas_23-2149073580.jpg?w=826&t=st=1705583366~exp=1705583966~hmac=2a7449e46462407d203ec2d7caa3fef4ad2a76d934d2915c5751ec687d6cd31a"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://img.freepik.com/fotos-gratis/linda-crianca-negra-sorrindo_23-2149310674.jpg?w=740&t=st=1705583390~exp=1705583990~hmac=23756b14d553514037cbc08de09dc965880ab3b8de4b2657ba26025d7c201d49"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://img.freepik.com/fotos-premium/retrato-de-uma-linda-garota-afro-americana-sorridente-em-pe-contra-plantas-ao-ar-livre_13339-307093.jpg?w=740"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://img.freepik.com/fotos-premium/garoto-bonito-brincalhao-alegre-crianca-careta-engracada-tem-um-feliz-dia-feliz_265223-60388.jpg?w=826"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://img.freepik.com/fotos-premium/menina-no-parque_13339-232984.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyPhotos;
