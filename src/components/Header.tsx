import React, { useState } from 'react'
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const user = { _id: '123', role: 'admin' }

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean> (false)

    const handleLogout = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <nav className='header'>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/search" onClick={() => setIsOpen(false)}>
                    <FaSearch />
                </Link>
                <Link to="/cart" onClick={() => setIsOpen(false)}>
                    <FaShoppingBag />
                </Link>
                {user?._id ? (
                    <>
                        <button onClick={() => setIsOpen((prev) =>!prev)}>
                            <FaUser />
                        </button>
                        <dialog open={isOpen}>
                            <div>
                                {
                                    user.role === ' ' && (
                                        <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">Admin</Link>
                                    )
                                }
                                <Link onClick={() => setIsOpen(false)} to="/orders">Orders </Link>
                                <button onClick={handleLogout}>
                                    <FaSignOutAlt/>
                                </button>
                            </div>
                        </dialog>
                    </>
                ) : (
                    <Link onClick={() => setIsOpen(false)} to="/login">
                        <FaSignInAlt />
                    </Link>
                )
                }
            </nav>
        </div>
    )
}

export default Header