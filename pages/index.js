import Link from 'next/link'
import NavBar from '../component/NavBar'
 const index = ()=> {
    return (
        <section>
        <NavBar/>
            <h1>
                hello world fron Next js
            </h1>
        <style jsx global>
            {`
                a{
                    padding: 10px;
                    text-decoration: none;
                    color: green; 
                }
            `}
        </style>
        </section>
    )
}

export default index