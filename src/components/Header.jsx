import './Header-Navbar.scss';

function Header() {
    return (
        <header>
            <div className='container'>
                <div className='hero'>
                    <div className='hero__description'>
                        <h1 className='hero__description-title'>Take your business to the next level take out</h1>
                        <p className='hero__description-text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                        <button className='hero__description-btn'>Learn more</button>
                    </div>
                    <iframe width="562" height="334" src="https://www.youtube.com/embed/rv2DAMRJq8s" title="A tour of London history" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </header>
    )
}

export default Header;