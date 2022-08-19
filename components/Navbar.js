import Link from 'next/link';

export default function Navbar({ id, title}) {

    return (
        <div>
            <Link href={id}>
                <a>{title}</a>
            </Link>
        </div>
    )
}
