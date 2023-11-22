import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MobiKwiks from '../../image/MobiKwiks.png';
import '../paypal/paypal.css';

const ZaakPay = () => {
    const [data, setData] = useState({});
    const [btnName, setBtnName] = useState('Do not refresh the page');
    const [checksum, setChecksum] = useState(null);
    const [url, setUrl] = useState(null);

    const getChecksumString= ()=>{
        setBtnName("Loading Checksum...")
        axios.post('api/transact')
        .then(res => {  
            setUrl(res.data.url);
            setData(res.data.data);
            setChecksum(res.data.checksum);
            setTimeout(() => {
                setBtnName("Pay Now")
            }, 1500);
        })
        .catch(error => {
            setBtnName("Pay Now")
            console.error(error);
        });   
    }

    useEffect(() => {
        if(!checksum){
            setTimeout(() => {
                getChecksumString();
            }, 1500);
        }
      // eslint-disable-next-line
    }, [checksum])
    
  return (
    <>
    <div className='main2'>
        <div className='center'>
            <img width={300} src={MobiKwiks} alt="" />
            <p>Payment Gateway integration</p>
        </div>
        <div className='border px-5 py-4'>
            <form className='' action={url} method="post">
                {Object.entries(data)?.map(([key, value]) => (
                    <>
                    <label htmlFor="#" className='mt-2'>{(key).toUpperCase()}:</label>
                    <div className='col-12 center'>
                        <input key={key} type="text" name={key} value={value} />
                    </div>
                    </>
                ))}
                <input type="hidden" name="checksum" value={checksum} />
                {/* Add any additional form fields or components as needed */}
                <div className='col-12 center'>
                    <button className='w-100 px-4' type="submit">{btnName}</button>
                </div>
            </form>
        </div>
    </div>
    <p className='mt-4'>@codesense24</p>
    </>
  )
}

export default ZaakPay
