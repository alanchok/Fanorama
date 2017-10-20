import React from 'react';
import Isvg from 'react-inlinesvg';
import Logo from '../components/Icons/logo.svg';

const NotFound = () => {
    return (
        <table style={{ width: '100%', height: '100%' }}>
            <tbody>
                <tr>
                    <td valign={'middle'} align={'center'}>
                        <p>
                            Coming Soon
                        </p>
                        <Isvg src={Logo} className='logo' />
                    </td>
                </tr>
            </tbody>
        </table>

    );
};

export default NotFound;
