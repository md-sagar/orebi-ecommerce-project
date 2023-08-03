
import React from "react";
import Container from "../container/Container";
import Flex from "../flex/Flex";
import List from '../list/List'
import ListItem from '../list-item/ListItem'
import Images from "../images/Images";
import Logo from '../../assets/Logo.png';
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 md:mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-4 md:col-span-2">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Home'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Shop'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='About'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Contact'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Journal'/>
            </List>
          </div>
          <div className="col-span-4 md:col-span-2">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Category 1'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Category 2'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Category 3'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Category 4'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Category 5'/>
            </List>
          </div>
          <div className="col-span-4 md:col-span-2">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Privacy Policy'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Terms & Conditions'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Special E-shop'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Shipping'/>
              <ListItem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" href="#" itemName='Secure Payments'/>
            </List>
          </div>
          <div className=" col-span-8 mt-10 md:col-span-4">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="col-span-4 mt-10 md:col-span-2">
            <Images imgSrc={Logo} />
          </div>
        </div>
        <Flex className=' mt-16 justify-between items-center gap-10'>
            <div className="flex gap-5 cursor-pointer">
                <FaFacebookF/>
                <FaLinkedinIn/>
                <FaInstagram/>
            </div>
            <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
