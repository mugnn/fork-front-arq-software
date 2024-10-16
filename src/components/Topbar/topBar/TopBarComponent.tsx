import { FormatRole } from "@/utils/formatters/GeneralStateFormatter";
import { canAccess, Routes } from "@/utils/routes";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { User } from "@/utils/interfaces/User";
import { Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useUserSession } from "@/contexts/userContext";
import LogoComponent from "@/components/Icons/logo/LogoComponent";
import UserService from "@/services/user/UserService";
import ProfilePicComponent from "@/components/Icons/profilePic/ProfilePicComponent";
import Link from "next/link";
import React from "react";
import "./index.css";

const TopBarComponent = () => {
  const [routes] = useState<[string, string][]>(
    () => Object.entries(Routes) as [string, string][]
  );
  const router = useRouter();
  const [user, setUserData] = useState<User | any>();
  const userService = new UserService();
  const { setUser } = useUserSession();

  useEffect(() => {
    console.log(router.pathname);
    const userData = JSON.parse(
      localStorage.getItem("user_data") || "{ id: -1 }"
    );
    setUserData(userData);
  }, []);

  const handleLogout = () => {
    userService.logOut();
    setUser(null);
    router.push("/login");
  };

  return (
    <div className="flex flex-row w-screen items-center topbar-component h-16">
      <div className="flex flex-row px-6 gap-14">
        <LogoComponent />
        <div className="flex items-center gap-6">
          {routes.map(
            ([key, value]) =>
              canAccess(value as Routes, user?.roles[0].id) && (
                <div className="flex flex-col items-center" key={key}>
                  <Link href={value} className="anchor-box text-box">
                    <p>{key}</p>
                  </Link>
                  {router.pathname.includes(value) && (
                    <span className="custom-route-indicator"></span>
                  )}
                </div>
              )
          )}
        </div>
      </div>
      <div className="mr-6">
        {/* gets subject from localstorage */}
        <Menu>
          <MenuButton>
            <div className="flex flex-row gap-3 h-3/4 items-center">
              <div className="h-12 w-12 mt-1 cursor-pointer">
                <ProfilePicComponent
                  subject={user?.usernameUser || "none"}
                  border={true}
                  not_shadow={true}
                />
              </div>
              <div className="flex flex-col gap-1 text-box text-left">
                <p>{user?.usernameUser || ""}</p>
                <p>{FormatRole(user?.roles[0].id) || ""}</p>
              </div>
            </div>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleLogout}>
              Sair <Spacer /> <FontAwesomeIcon icon={faRightFromBracket} />
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default React.memo(TopBarComponent);
