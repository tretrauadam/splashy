import Link from 'next/link'; 
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';


export default function FirstPost(){
    return (

    <Layout>
        <Head>
          <title className='md 5 pt 0 bg-col yellow'> First Post </title>
        </Head>
          <h1>First Post</h1>
          <h2>
            <Link href="/">Back to Home</Link>
            <Image src='/images/profile.jpg' alt='image' width={400} height={400}/>
          </h2>  
    </Layout>

    )
}