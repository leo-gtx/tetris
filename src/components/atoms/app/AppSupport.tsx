/* eslint-disable prettier/prettier */
import {useEffect} from 'react';
import classNames from 'classnames';
import {environment} from '../../../environment/environment';
import {FC} from 'react';
import {ClassNameProps} from '../../particles/particles.types';
import { AppLogo } from './AppLogo';

export const AppSupport: FC<ClassNameProps> = ({className}) => {
    const {apiKey} = environment;
    const langue = 'en';
    const btnTitle = 'Donate Now';
    const amount = 2;
    const currency = 'USD';
    const orderId = '';
    const description = 'Thank you for your support💟, and be blessed🙏';
    const businessName = 'Tetromino';
    const successUrl = `${document.location.protocol}://${document.location.hostname}`;
    const loadInvoice = false;
    const mode = 'TIPING';
    useEffect(() => {
        const scriptExist1 = document.getElementById('SBScript');
        const scriptExist2 = document.getElementById('SBScript2');
        if (scriptExist1 && scriptExist2) {
            scriptExist1.setAttribute('data-lang', langue);
            scriptExist1.setAttribute('data-apikey', apiKey);
            scriptExist2.innerHTML = `
          const options = {
            btnTitle: "${btnTitle}",
            amount: ${amount},
            currency: "${currency}",
            orderId: "${orderId}",
            description: "${description}",
            businessName: "${businessName}",
            loadInvoice: ${loadInvoice},
            successUrl: "${successUrl}",
            mode: "${mode}",
          };
    
          function initButton(){
            return SopayButton.pay(options)
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
            .finally(initButton)
            }
            
            initButton()
        `;
        } else {
            const script1 = document.createElement('script');
            const script2 = document.createElement('script');
            script1.id = 'SBScript';
            script1.type = 'text/javascript';
            script1.setAttribute('data-lang', langue);
            script1.setAttribute('data-apikey', apiKey);
            script1.async = true;
            script1.src = 'https://btn.soleaspay.com/main.js';
            document.body.appendChild(script1);
            script1.onload = () => {
                script2.id = 'SBScript2';
                script2.type = 'text/javascript';
                script2.async = false;
                script2.innerHTML = `
            const options = {
                btnTitle: "${btnTitle}",
                amount: ${amount},
                currency: "${currency}",
                orderId: "${orderId}",
                description: "${description}",
                businessName: "${businessName}",
                loadInvoice: ${loadInvoice},
                successUrl: "${successUrl}",
                mode: "${mode}",
              };
    
              function initButton(){
                return SopayButton.pay(options)
                .then((res)=>console.log(res))
                .catch((err)=>console.log(err))
                .finally(initButton)
                }
                
                initButton()
        `;
                document.body.appendChild(script2);
            };
        }
    }, [
        apiKey,
        langue,
        mode,
        btnTitle,
        amount,
        currency,
        orderId,
        description,
        businessName,
        loadInvoice,
        successUrl
    ]);

    return (
        <div
            className={classNames(
                className,
                'flex flex-col justify-center content-center mt-2'
            )}
        >
            <div className='text-center'>
                <h5 className='text-md'>🌟Support Tetromino - No Ads🌟</h5>
                <p className='text-justify text-sm'>Enjoying Tetromino - No Ads? Help us keep it awesome by making a donation! Your support helps cover costs and improve the game for everyone. Connect your device to internet and tap below to donate now. Thank you for being part of the Tetromino - No Ads community!</p>
            </div> 
            <div className="sopayButton self-center"></div>
        </div>
    );
};
