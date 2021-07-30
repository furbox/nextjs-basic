import Link from 'next/link';

export default function primerPost() {
    return (
        <div>
            <h1>Mi primer post</h1>
            <Link href="/blog"><a>Blog</a></Link>
            <Link href="/"><a>Inicio</a></Link>
        </div>
    )
}
