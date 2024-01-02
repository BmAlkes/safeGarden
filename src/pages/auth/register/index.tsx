import Header from "../../../components/header";
import logo from "../../../assets/logo (2).jpg";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormParents from "@/components/Forms/FormParents";
import FormsTeacher from "@/components/Forms/FormsTeacher";

const Register = () => {
  return (
    <>
      <Header />
      <section className=" fullScreen flex items-center justify-center">
        <div className="efeito-vidro  md:w-[500px] w-[380px]  p-3 flex flex-col items-center ">
          <img src={logo} alt="" className="w-full h-12 object-contain  " />
          <h2 className="text-xl text-slate-400 text-center">
            Welcome to SafeGarden
          </h2>

          <Tabs
            defaultValue="parents"
            className="md:w-[450px] w-[380px] h-full mt-2"
          >
            <TabsList className="grid w-full grid-cols-2 p-4">
              <TabsTrigger value="parents" className="text-base">
                Parents
              </TabsTrigger>
              <TabsTrigger value="kidgarden" className="text-base">
                KidGarden
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="parents"
              className="md:w-full w-[330px] mr-auto ml-auto"
            >
              <Card className="p-3">
                <FormParents />
              </Card>
            </TabsContent>
            <TabsContent
              value="kidgarden"
              className="md:w-full w-[330px] mr-auto ml-auto"
            >
              <Card className="p-3">
                <CardHeader></CardHeader>

                <FormsTeacher />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Register;
