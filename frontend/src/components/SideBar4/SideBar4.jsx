import React, { useState } from 'react';
import { Home, User, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const SlidingSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState({});

    const menuItems = [
        { icon: Home, label: 'Dashboard', id: 'dashboard', link: 'dashboard' },
        { icon: User, label: 'Profile', id: 'profile', link: 'profile' },
        { icon: Mail, label: 'Messages', id: 'messages', link: 'messages' },
        {
            icon: User,
            label: 'Team',
            id: 'team',
            children: [
                { icon: User, label: 'User', id: 'user', link: 'team/user' },
                { icon: User, label: 'Banned User', id: 'banned-user', link: 'team/banned-user' },
            ]
        },
    ];

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleExpanded = (itemId) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    const renderMenuItem = (item, isChild = false) => {
        const IconComponent = item.icon;
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedItems[item.id];

        return (
            <div key={item.id}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: isOpen ? '12px 20px' : '12px 0',
                        paddingLeft: isOpen && isChild ? '40px' : isOpen ? '20px' : '0',
                        justifyContent: isOpen ? 'flex-start' : 'center',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: '0 25px 25px 0',
                        margin: '2px 0',
                        marginRight: '10px',
                        transition: 'all 0.2s ease'
                    }}
                    onClick={() => hasChildren && toggleExpanded(item.id)}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#34495e';
                        e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.transform = 'translateX(0)';
                    }}
                    > {hasChildren && <>
                    
                        <IconComponent size={20} style={{ minWidth: '20px' }} />
                        {isOpen && (
                            <>
                                <span style={{ marginLeft: '15px', fontSize: '14px', fontWeight: '500', flex: 1 }}>
                                    {item.label}
                                </span>
                                {hasChildren && (
                                    <div style={{ marginLeft: '10px' }}>
                                        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                    </div>
                                )}
                            </>
                        )}
                        </>
                    }
                    {!hasChildren && <Link to={`/${item.link}`} style={{
                    color: 'white', textDecoration: 'none', 
                }}>

                        <IconComponent size={20} style={{ minWidth: '20px' }} />
                        {isOpen && (
                            <>
                                <span style={{ marginLeft: '15px', fontSize: '14px', fontWeight: '500', flex: 1 }}>
                                    {item.label}
                                </span>
                                {hasChildren && (
                                    <div style={{ marginLeft: '10px' }}>
                                        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                    </div>
                                )}
                            </>
                        )}
                    </Link>}
                </div>

                {/* Render children if expanded */}
                {hasChildren && isExpanded && isOpen && (
                    <div style={{ marginLeft: '0px' }}>
                        {item.children.map(child => renderMenuItem(child, true))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            {/* Sidebar */}
            <div
                style={{
                    width: isOpen ? '250px' : '60px',
                    height: '100vh',
                    backgroundColor: '#2c3e50',
                    transition: 'width 0.3s ease',
                    position: 'fixed',
                    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    zIndex: 1100,
                    top: 0,
                    left: 0,
                }}
            >
                {/* Toggle Button */}
                <div
                    style={{
                        padding: '14px',
                        borderBottom: '1px solid #34495e',
                        display: 'flex',
                        justifyContent: isOpen ? 'space-between' : 'center',
                        alignItems: 'center'
                    }}
                >
                    {isOpen && (
                        <h3 style={{ color: 'white', margin: 0, fontSize: '18px', fontWeight: '600' }}>Menu</h3>
                    )}
                    <button
                        onClick={toggleSidebar}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            // padding: '5px',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                width: '20px',
                                height: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '20px',
                                height: '2px',
                                backgroundColor: 'white',
                                margin: '2px 0',
                                borderRadius: '1px'
                            }}></div>
                            <div style={{
                                width: '20px',
                                height: '2px',
                                backgroundColor: 'white',
                                margin: '2px 0',
                                borderRadius: '1px'
                            }}></div>
                            <div style={{
                                width: '20px',
                                height: '2px',
                                backgroundColor: 'white',
                                margin: '2px 0',
                                borderRadius: '1px'
                            }}></div>
                        </div>
                    </button>
                </div>

                {/* Menu Items */}
                <nav style={{ padding: '10px 0' }}>
                    {menuItems.map(item => renderMenuItem(item))}
                </nav>
            </div>


        </div>
    );
};

export default SlidingSidebar;