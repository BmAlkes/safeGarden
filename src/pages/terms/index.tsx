import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo (2).jpg";
import Header from "@/components/header";

const Therms = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="container">
        <div className="mx-auto w-ful">
          <img className="mx-auto object-fill  h-32" src={logo} alt="" />
        </div>
        <ol className="list-decimal">
          <li className="text-green-500">
            Introduction
            <p className="text-black my-3">
              Welcome to SafeGarden, operated by SafeGarden. ("we," "us," or
              "our"). By accessing and using our website, you agree to comply
              with and be bound by the following terms and conditions of use,
              which together with our privacy policy govern our relationship
              with you in relation to this website.
            </p>
          </li>
          <li className="text-green-500">
            Intellectual Property Rights
            <p className="text-black my-3">
              Unless otherwise indicated, we are the owner or licensee of all
              intellectual property rights in our website and its contents.
              These include, but are not limited to, text, graphics, logos,
              images, audio and video clips, and software. You are not permitted
              to use, reproduce, modify or distribute any of our intellectual
              property without our prior written consent.
            </p>
          </li>
          <li className="text-green-500">
            Acceptable Use
            <p className="text-black my-3">
              You agree to use our website only for lawful purposes and in a
              manner which does not infringe the rights of, or restrict or
              inhibit the use and enjoyment of our website by any third party.
              Prohibited uses include but are not limited to: using our website
              in any way that is unlawful, fraudulent, or harmful to others,
              transmitting or uploading any viruses, trojans, worms, or any
              other malicious software, and attempting to gain unauthorized
              access to our website or servers.
            </p>
          </li>
          <li className="text-green-500">
            User-Generated Content
            <p className="text-black my-3">
              We may provide opportunities for users to submit comments,
              reviews, ratings, or other user-generated content on our website.
              By submitting content to our website, you grant us a
              non-exclusive, transferable, sub-licensable, royalty-free,
              worldwide license to use, reproduce, modify, adapt, publish,
              translate, create derivative works from, distribute, perform, and
              display such content in any media.
            </p>
          </li>
          <li className="text-green-500">
            Links to Third-Party Websites
            <p className="text-black my-3">
              Our website may contain links to third-party websites that are not
              under our control. We do not endorse or make any representations
              about third-party websites, and we are not responsible for their
              content or availability. You use such websites at your own risk.
            </p>
          </li>
          <li className="text-green-500">
            Disclaimer of Warranties
            <p className="text-black my-3">
              Our website and its contents are provided "as is" and "as
              available" without any warranties of any kind, express or implied.
              We do not warrant that our website will be uninterrupted or
              error-free, that defects will be corrected, or that our website or
              the server that makes it available are free of viruses or other
              harmful components.
            </p>
          </li>
          <li className="text-green-500">
            Limitation of Liability
            <p className="text-black my-3">
              In no event shall we be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of or in
              connection with the use or inability to use our website, even if
              we have been advised of the possibility of such damages.
            </p>
          </li>
          <li className="text-green-500">
            Indemnification
            <p className="text-black my-3">
              You agree to indemnify and hold us harmless from any claims,
              losses, damages, liabilities, costs, and expenses (including
              without limitation reasonable attorney's fees) arising out of or
              in connection with your use of our website or your breach of these
              terms and conditions.
            </p>
          </li>
          <li className="text-green-500">
            Modification and Termination
            <p className="text-black my-3">
              We reserve the right to modify, suspend, or terminate our website
              or any part of it at any time without notice. We may also change
              these terms and conditions at any time by updating this page. Your
              continued use of our website after any such changes shall
              constitute your agreement to be bound by the modified terms and
              conditions.
            </p>
          </li>
          <li className="text-green-500">
            Governing Law and Jurisdiction
            <p className="text-black my-3">
              These terms and conditions shall be governed by and construed in
              accordance with the laws of Israel State without regard to its
              conflict of law provisions. Any dispute arising out of or in
              connection with these terms and conditions shall be subject to the
              exclusive jurisdiction of the courts of Israel.
            </p>
          </li>
        </ol>
        <p>Thank you for using our website!</p>

        <button
          className="w-full bg-green-500 mt-16 rounded-lg h-9 mb-7 text-xl text-white transition-all hover:bg-green-600"
          onClick={() => navigate("/register")}
        >
          Back to Register
        </button>
      </section>
    </>
  );
};

export default Therms;
