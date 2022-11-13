import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "100vh",
        width: "100%"
    }
    return (
        <>
            <footer className='bg-dark text-light py-3' style={footerStyle}>
                <p>Copy right &copy;    </p>

            </footer>
        </>
    )
}

export default Footer
