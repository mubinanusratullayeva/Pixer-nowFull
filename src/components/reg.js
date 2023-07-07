import './reg.css';

function Reg() {
    let value = 'description'
    return (
        <>
            <section className='val'>
                <div className='container'>
                    <h2 className='regTitle'>Leave your number and we'll call you back</h2>
                    <p className='regText'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                    <div className='reg'>
                        <form className='regVal'>
                            <input type='text' className='regVal__el' placeholder='Name' />
                            <input type='tel' className='regVal__el' placeholder='Phone number' />
                            <select className='regVal__el'>
                                <option value={value}>Description</option>
                                <option>smth</option>
                                <option>smth</option>
                            </select>
                            <button className='regVal__btn'>Send</button>
                            <p className='regVal__text'>We call back in 10-30 minutes, guaranteed!</p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reg;