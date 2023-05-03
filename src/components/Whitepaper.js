import React from 'react'

const Whitepaper = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('suidoge-whitepaper.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'suidoge-whitepaper.pdf';
                alink.click();
            })
        })
    }

    return (
        <div id='whitepaper' className='sections whitepaper w-100 mt-5'>
            <div className='text-center'>
                <h4 className='section-title text-white pb-3'>SuiDoge Whitepaper</h4>
                <div className='d-flex justify-content-center'>
                    <div onClick={onButtonClick} className="buy-now-btn hvr-back-pulse" style={{ width: 225 }}>
                        Download Whitepaper
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whitepaper
