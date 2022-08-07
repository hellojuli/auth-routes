import { Flex, Link, HStack  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CookieService from "../../services/CookieService";

export function NavigationLinks() {
    const navigate = useNavigate();
    const logged = CookieService.get('token');

    const handleLogout = () => {
      CookieService.remove('token')
      navigate("/auth");
    };

    return(
      <Flex align="center" color="white">
        <HStack spacing='10' mr='10'>
          {logged ? 
            <Link onClick={handleLogout}>
              Logout
            </Link>
            :
            <Link 
              onClick={() => {
                navigate("/auth");
              }}
            >
              Login
            </Link>
            }

            <Link 
              onClick={() => {
                navigate("/products");
              }}
            >
              Products
            </Link>

            <Link 
              onClick={() => {
                window.location.href="https://github.com/hellojuli";
            }}
            >
              Github
            </Link>
        </HStack >
      </Flex>
    );
}