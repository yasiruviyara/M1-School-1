// import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
// import logo from '../../Photo/logo.png';
import '../../css/Login.css';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center body">
            <div>
                <Link href="/">
                    {/* <img src={logo} className='logo' /> */}
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white box">
                {children}
            </div>
        </div>
    );
}
