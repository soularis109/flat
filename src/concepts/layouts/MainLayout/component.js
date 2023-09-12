import React from 'react';
import styles from './MainLayout.module.scss';
import localFont from "next/font/local";
import Header from "@/common/Header";
import Footer from "@/common/Footer";
const myFont = localFont({src:"../../../../public/fonts/Mulish-VariableFont_wght.ttf"})
const MainLayout = ({ children, customStyles }) => (
  <div style={myFont.style}>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);


export default MainLayout;
