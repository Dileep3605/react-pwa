import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function AppNavbar({ isLoggedIn, onLogout }: NavbarProps) {
  const navigate = useNavigate();

  return (
    <Navbar
      maxWidth="xl"
      position="sticky"
      className="border-b border-default-200"
    >
      <NavbarBrand>
        <Icon icon="logos:zomato" width={120} className="text-danger" />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/foods">
            <Icon icon="lucide:home" className="mr-2" />
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/restaurants">
            <Icon icon="lucide:utensils" className="mr-2" />
            Restaurants
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/nearby">
            <Icon icon="lucide:map-pin" className="mr-2" />
            Near Me
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {isLoggedIn ? (
          <>
            <NavbarItem>
              <Button
                variant="flat"
                startContent={<Icon icon="lucide:shopping-cart" />}
              >
                Cart
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src="https://img.heroui.chat/image/avatar?w=150&h=150&u=1"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">user@example.com</p>
                  </DropdownItem>
                  <DropdownItem
                    key="orders"
                    startContent={<Icon icon="lucide:package" />}
                  >
                    My Orders
                  </DropdownItem>
                  <DropdownItem
                    key="settings"
                    startContent={<Icon icon="lucide:settings" />}
                    onPress={() => navigate("/profile")}
                  >
                    Profile
                  </DropdownItem>
                  <DropdownItem
                    key="favorites"
                    startContent={<Icon icon="lucide:heart" />}
                  >
                    Favorites
                  </DropdownItem>
                  <DropdownItem
                    key="addresses"
                    startContent={<Icon icon="lucide:map-pin" />}
                  >
                    Addresses
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    color="danger"
                    startContent={<Icon icon="lucide:log-out" />}
                    onPress={onLogout}
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden sm:flex">
              <Link href="/login" color="foreground">
                Log In
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button color="primary" variant="flat" href="#">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
