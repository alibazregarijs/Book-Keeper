"use client"
import Image from "next/image";
import logo from "../../public/Images/logo.jpg";
import SearchBox from "./Search";
import { useSession} from "next-auth/react";
import { Button } from "@nextui-org/button";
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center m-3">
      <div className="flex items-center gap-2">
      <p>{session?.user?.name}</p>
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>
      <div>

        <SearchBox />
      </div>
      <div className="flex items-center gap-2">
        <Button className="bg-myBrown1">Saved</Button>
        <Button className="bg-myBrown1">My Books</Button>
      </div>
    </div>
  );
};

export default Navbar;
