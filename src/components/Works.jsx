import './Works.css';
import TypeSection from './TypeSection';
import blockimg1 from '../images/blockimg1.png';
import blockimg1x from '../images/blockimg1x.png';

function Works() {
    const flexBlock = {
        alignSelf: 'flex-end',
    }
    return (
        <div>
            <TypeSection />
            <section className='work'>
                <div className='container'>
                    <h2 className='workTitle'>How do we work?</h2>
                    <p className='workText'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                    <div className='blocks'>
                        <div className='blocks__block'>
                            <img src={blockimg1} alt='clarify' srcSet={`${blockimg1} 1x, ${blockimg1x} 2x`} />
                            <div className='blocks__block-description'>
                                <h2 className='blocks__block-description--title'>Let's clarify the requirements</h2>
                                <p className='blocks__block-description--text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                        <div style={flexBlock} className='blocks__block'>
                            <div className='blocks__block-description'>
                                <h2 className='blocks__block-description--title'>Let's clarify the requirements</h2>
                                <p className='blocks__block-description--text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                            <img src={blockimg1} alt='clarify' srcSet={`${blockimg1} 1x, ${blockimg1x} 2x`} />
                        </div>
                        <div className='blocks__block'>
                            <img src={blockimg1} alt='clarify' srcSet={`${blockimg1} 1x, ${blockimg1x} 2x`} />
                            <div className='blocks__block-description'>
                                <h2 className='blocks__block-description--title'>Let's clarify the requirements</h2>
                                <p className='blocks__block-description--text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Works;
