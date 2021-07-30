import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function primerPost() {
    return (
        <div>
            <Head>
                <title>Mi primer post</title>
                <meta
                name="description"
                content="mi post desde nextjs" />
            </Head>
            <h1>Mi primer post</h1>
            <Image
            src="/img/702-200x300.jpg" // Route of the image file
            height={600} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="My img"
        /><br></br>
            <Link href="/blog"><a>Blog</a></Link>
            <Link href="/"><a>Inicio</a></Link>
        </div>
    )
}
