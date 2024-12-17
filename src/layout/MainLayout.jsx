import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div >
            <header className='max-w-7xl   mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='max-w-7xl  mx-auto min-h-[calc(100vh-290px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;