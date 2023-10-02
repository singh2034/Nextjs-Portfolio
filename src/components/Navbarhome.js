import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useState } from "react";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";

const NavbarHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div>
        <Navbar shouldHideOnScroll>
          <NavbarBrand>
            <p className="font-bold text-xl text-inherit">Aayush Singh</p>
          </NavbarBrand>
          <NavbarContent
            className="hidden md:flex space-x-3 font-semibold"
            justify="center"
          >
            <NavbarItem>
              <Link color="foreground" href="#">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" aria-current="page">
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="flat"
                    color="warning"
                    className="font-semibold"
                  >
                    Projects
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dynamic Actions">
                  <DropdownItem>
                    <Link color="foreground" href="#">
                      Front End Projects
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link color="foreground" href="#">
                      Full Stack Projects
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link color="foreground" href="#">
                      React Native Projects
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end" className="hidden md:flex">
            <NavbarItem>
              {/* pop over content */}
              <Popover placement="bottom" showArrow={true}>
                <PopoverTrigger>
                  <Button
                    color="danger"
                    variant="flat"
                    className="text-black text-md font-bold"
                  >
                    Hire Me
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2 space-x-2">
                    <Tooltip
                      showArrow={true}
                      color="success"
                      className="text-white"
                      content="Say Hello or Hi"
                    >
                      <Button as={Link} color="success" href="#" variant="flat">
                        <BsWhatsapp size={20} />
                      </Button>
                    </Tooltip>
                    <Tooltip showArrow={true} content="See My Projects 🔥">
                      <Button as={Link} color="default" href="#" variant="flat">
                        <BsGithub size={20} />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      showArrow={true}
                      color="secondary"
                      content="Download My CV!"
                    >
                      <Button
                        as={Link}
                        color="secondary"
                        href="#"
                        variant="flat"
                      >
                        <AiOutlineFileText size={20} />
                      </Button>
                    </Tooltip>
                  </div>
                </PopoverContent>
              </Popover>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarHome;
