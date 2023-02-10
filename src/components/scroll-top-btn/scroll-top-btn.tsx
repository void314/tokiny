import React, { useEffect, useState } from 'react'

export default function ScrollTopBtn() {

    const [toTopBtn, setToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {

            if (window.scrollY > 10) {
                setToTopBtn(true);
            } else {
                setToTopBtn(false);
            }
        })
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {toTopBtn && <button onClick={ () => scrollTop() } className=' fixed bg-red-200 text-red-600 bottom-0 right-0' >^^^</button>}
        </>
    )
}
