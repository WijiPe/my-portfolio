import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles, StylesContext } from '@mui/styles';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { DataObjectSharp } from '@mui/icons-material';

const links = ['about me', 'my project', 'contact me']


export default function Navbar({ id, title}) {



    return (
        <div>
            <Link href={id}>
                <a>{title}</a>
            </Link>
        </div>
    )
}
