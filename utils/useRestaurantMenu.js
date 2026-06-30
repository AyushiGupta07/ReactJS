import { restaurantMenuObj } from "./restaurantMenuData";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = () => {
    //fetch Data from api
    const data = restaurantMenuObj;
    console.log(data);
    setResInfo(data);
  };
  return resInfo;
};

export default useRestaurantMenu;
