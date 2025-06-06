import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, Bell, Moon, ChevronDown } from 'lucide-react';


const Navbar = ({ username = "Akshat Gupta", companyName = "MyCompany" }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const dropdownItems = [
        { icon: User, label: 'Profile', id: 'profile' },
        { icon: Settings, label: 'Settings', id: 'settings' },
        { icon: Bell, label: 'Notifications', id: 'notifications' },
        { icon: Moon, label: 'Dark Mode', id: 'darkmode' },
        { divider: true },
        { icon: LogOut, label: 'Logout', id: 'logout', danger: true }
    ];

    return (
        <nav style={{
            width: '100%',
            height: '50px',
            backgroundColor: '#2c3e50',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 30px 0px 70px',
            boxSizing: 'border-box',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            fontFamily: 'Arial, sans-serif'
        }}>
            {/* Left Side - Logo and Company Name */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
            }}>
                {/* Company Logo */}
                <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#3498db',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 8px rgba(52, 152, 219, 0.3)'
                }}>
                    {companyName.charAt(0).toUpperCase()}
                </div>
                
                {/* Company Name */}
                <h2 style={{
                    color: 'white',
                    margin: 0,
                    fontSize: '20px',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                }}>
                    {companyName}
                </h2>
            </div>

            {/* Right Side - Greeting and User Settings */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
            }}>
                {/* Greeting Message */}
                <span style={{
                    color: '#ecf0f1',
                    fontSize: '16px',
                    fontWeight: '500'
                }}>
                    Hi, {username}
                </span>

                {/* User Settings Dropdown */}
                <div style={{ position: 'relative' }} ref={dropdownRef}>
                    <button
                        onClick={toggleDropdown}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            transition: 'background-color 0.2s ease',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}
                        onMouseEnter={(e) => {
                            if (!isDropdownOpen) {
                                e.target.style.backgroundColor = '#34495e';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isDropdownOpen) {
                                e.target.style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        {/* User Avatar */}
                        <div style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: '#3498db',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}>
                            {username.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        
                        <ChevronDown 
                            size={16} 
                            style={{
                                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s ease'
                            }}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            marginTop: '8px',
                            width: '220px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                            border: '1px solid #e9ecef',
                            overflow: 'hidden',
                            zIndex: 1001,
                            animation: 'fadeIn 0.2s ease'
                        }}>
                            {/* User Info Header */}
                            <div style={{
                                padding: '16px',
                                borderBottom: '1px solid #e9ecef',
                                backgroundColor: '#f8f9fa'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: '#3498db',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '16px',
                                        fontWeight: 'bold'
                                    }}>
                                        {username.split(' ').map(n => n[0]).join('').toUpperCase()}
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '2px'
                                        }}>
                                            {username}
                                        </div>
                                        <div style={{
                                            fontSize: '12px',
                                            color: '#6c757d'
                                        }}>
                                            Administrator
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dropdown Items */}
                            <div style={{ padding: '8px 0' }}>
                                {dropdownItems.map((item, index) => {
                                    if (item.divider) {
                                        return (
                                            <div
                                                key={`divider-${index}`}
                                                style={{
                                                    height: '1px',
                                                    backgroundColor: '#e9ecef',
                                                    margin: '8px 0'
                                                }}
                                            />
                                        );
                                    }

                                    const IconComponent = item.icon;
                                    return (
                                        <div
                                            key={item.id}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                padding: '12px 16px',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.2s ease',
                                                color: item.danger ? '#e74c3c' : '#495057',
                                                fontSize: '14px',
                                                fontWeight: '500'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = item.danger ? '#fee' : '#f8f9fa';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                            }}
                                            onClick={() => {
                                                console.log(`Clicked: ${item.label}`);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            <IconComponent size={16} />
                                            <span>{item.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* CSS Animation */}
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(-10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </nav>
    );
};

export default Navbar;