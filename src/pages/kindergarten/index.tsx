import { Link } from "react-router-dom";
import img from "../../assets/img1.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const KinderGarten = () => {
  return (
    <section className="container">
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-normal text-4xl text-green-500">Kindergarten</h1>
      </nav>
      <table className="shadow-2xl">
        <thead className="bg-green-600">
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Came</th>
            <th scope="col">Alergic</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr className="tr">
            <Link to="/kidsdetail/:id">
              <td className="tdLabel" data-label="picture">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    src={
                      "https://edytg45wchr.exactdn.com/wp-content/uploads/2021/10/baby-toddler-kids-sunglasses-beachcomber-bicycle-ride_1.jpg?strip=all&lossy=1&ssl=1"
                    }
                    className="object-cover "
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </td>
            </Link>
            <td className="tdLabel" data-label="Name">
              Leo
            </td>
            <td className="tdLabel" data-label="Come">
              came at: 08:08:25, 17/01/25
            </td>
            <td className="tdLabel" data-label="allergic">
              Nuts
            </td>
          </tr>
          <tr className="tr">
            <Link to="/kidsdetail/:id">
              <td className="tdLabel" data-label="picture">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    src={
                      "https://edytg45wchr.exactdn.com/wp-content/uploads/2021/10/baby-toddler-kids-sunglasses-beachcomber-bicycle-ride_1.jpg?strip=all&lossy=1&ssl=1"
                    }
                    className="object-cover "
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </td>
            </Link>
            <td className="tdLabel" data-label="Name">
              Leo
            </td>
            <td className="tdLabel" data-label="Come">
              came at: 08:08:25, 17/01/25
            </td>
            <td className="tdLabel" data-label="allergic">
              Nuts
            </td>
          </tr>
          <tr className="tr">
            <Link to="/kidsdetail/:id">
              <td className="tdLabel" data-label="picture">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    src={
                      "https://campaignforkids.com/wp-content/uploads/2015/03/freekid-1024x768.jpg"
                    }
                    className="object-cover "
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </td>
            </Link>
            <td className="tdLabel" data-label="Name">
              Maya
            </td>
            <td className="tdLabel" data-label="Come">
              came at: 08:08:25, 17/01/25
            </td>
            <td className="tdLabel" data-label="allergic">
              Gluten
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default KinderGarten;
