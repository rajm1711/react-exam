import React from "react";
// Header
function Header() {

    

    return (
        <>
        <header>
            <div className="wrapper d-flex flex-wrap justify-content-between w-100 p-3 item-center">
                <div>
                    <div className='logo w-2 d-flex'>
                        <a href="#">
                            {/* <FontAwesomeIcon icon={faHouse} onClick={handleHome} /> */}<p>home</p>
                        </a>
                        <div className="vline"></div>
                        <a href="#">
                            {/* <FontAwesomeIcon icon={faPlus} onClick={handleAdd} /> */}<p>addproduct</p>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;