import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import photo1 from "../../assets/1.jpeg";
import photo2 from "../../assets/2.jpeg";
import photo3 from "../../assets/3.jpeg";
import photo4 from "../../assets/4.jpeg";
import photo5 from "../../assets/5.jpeg";
import photo6 from "../../assets/6.jpeg";

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
            <Dialog>
              <DialogTrigger asChild>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={photo1}
                  alt=""
                />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] lg:max-w-[700px]">
                <DialogHeader>
                  <DialogDescription className="mx-auto">
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={photo1}
                      alt=""
                    />
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4"></div>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={photo2} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={photo3} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={photo4} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://w0.peakpx.com/wallpaper/866/110/HD-wallpaper-cute-little-girl-children-little-girl-smile-adorable-human.jpg"
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={photo5} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={photo6} alt="" />
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
