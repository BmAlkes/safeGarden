import Header from "../../../components/header";
import logo from "../../../assets/logo (2).jpg";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Register = () => {
  return (
    <>
      <Header />
      <section className=" fullScreen flex items-center justify-center">
        <div className="efeito-vidro  md:w-[500px] w-[380px]  p-10 flex flex-col items-center ">
          <img src={logo} alt="" className="w-full h-32 object-contain my-8 " />
          <h2 className="text-3xl text-slate-400 text-center">
            Welcome to SafeGarden
          </h2>

          <Tabs defaultValue="parents" className="w-[500px] mt-5">
            <TabsList className="grid w-full grid-cols-2 p-4">
              <TabsTrigger value="parents">Parents</TabsTrigger>
              <TabsTrigger value="kidgarden">KidGarden</TabsTrigger>
            </TabsList>
            <TabsContent value="parents">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you're
                    done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1"></div>
                  <div className="space-y-1"></div>
                </CardContent>
                <CardFooter>
                  <button> Register</button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="kidgarden">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">=</div>
                  <div className="space-y-1"></div>
                </CardContent>
                <CardFooter>
                  <button>Register</button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Register;
