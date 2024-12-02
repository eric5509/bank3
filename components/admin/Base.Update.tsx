'use client'
import { useState } from 'react';
import Button2 from '../global/Button2'
import Input from '../global/Input'

export default function BaseUpdate() {
    const [accountInfo, setAccountInfo] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        phone: "",
        email: "",
        dob: "",
        country: "",
        state: "",
        street: "",
        city: "",
        zip: "",
        currency: "",
        occupation: "",
        maritalStatus: "",
        accountType: "",
        currentBalance: "",
        availableBalance: "",
        cot: "",
        ssn: "",
        imfNumber: "",
        pin: "",
        password: ""
    });
    
      const onChange = (event: any) => {
        const {name, value} = event.target
        setAccountInfo({
          ...accountInfo,
          [name]: value
        });
      };
    return (
        <div>
            <div className="grid grid-cols-3 gap-3">
                <Input label="Firstname" name="firstname" onChange={onChange} value="" error="" />
            </div>
        </div>
    )
}


