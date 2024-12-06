'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Button2 from '../global/Button2';
import Input from '../global/Input';
import { countries, nationalities, valuesData } from './data';
import Select from '../global/Select';
import Title from '../global/Title';
import { validate } from '../global/Validate';
import { useRouter } from 'next/navigation';
import { CreateAccount, SendSignupOTP } from '@/lib/Post';
import { fetchAllUsers } from '@/lib/Get';
import { loadAccounts } from '@/provider/slice/account';
import { useAppDispatch } from '@/provider/store/hook';

export default function BaseCreateAccount() {
  const [values, setValues] = useState(valuesData);
  const [errors, setErrors] = useState(valuesData);
  const [serverError, setServerError] = useState('');
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const onChange = (event: any) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };


  const Submit = async () => {
    const valid = validate(values);
    if (!valid.valid) return setErrors({ ...errors, ...valid.errors })
    setLoading(true)
    const response = await CreateAccount(values)
    if (!response.success) {
      toast.error(response.message)
      if (response.message === 'Email already exists') {
        setErrors({ ...errors, email: response.message })
      }
      if (response.message === "Phone number already exists") {
        setErrors({ ...errors, phone: response.message })
      }
      return setLoading(false)
    }
    await SendSignupOTP({ firstName: values.firstName, otp: response.otp })
    const result = await fetchAllUsers()
    if(result.success){
      dispatch(loadAccounts(result.data))
    }
    setLoading(false)
    router.push('/admin/account')
  }

  return (
    <div className='p-4'>
      <Title style={{ fontSize: '30px' }} title='Create Account' />
      <ToastContainer />
      <div className="grid grid-cols-4 gap-5 mt-7">
        <Input
          label="First Name"
          name="firstName"
          onChange={onChange}
          value={values.firstName}
          error={errors.firstName}
        />
        <Input
          label="Middle Name"
          name="middleName"
          onChange={onChange}
          value={values.middleName}
          error={errors.middleName}
        />
        <Input
          label="Last Name"
          name="lastName"
          onChange={onChange}
          value={values.lastName}
          error={errors.lastName}
        />
        <Input
          label="Phone"
          name="phone"
          onChange={onChange}
          value={values.phone}
          error={errors.phone}
        />
        <Input
          label="Email"
          name="email"
          onChange={onChange}
          value={values.email}
          error={errors.email}
        />
        <Input
          label="Date of Birth"
          name="dob"
          onChange={onChange}
          value={values.dob}
          error={errors.dob}
        />
        <Select
          label="Gender"
          name="gender"
          onChange={onChange}
          value={values.gender}
          error={errors.gender}
          data={['', 'Female', 'Male', 'Rather Not Say']}
        />
        <Select
          label="Marital Status"
          name="maritalStatus"
          onChange={onChange}
          value={values.maritalStatus}
          error={errors.maritalStatus}
          data={['', 'Single', 'Married', 'Complicated', 'Divorced', 'Widowed', 'Separated', 'Domestic Partnership']}
        />

        <Input
          label="State"
          name="state"
          onChange={onChange}
          value={values.state}
          error={errors.state}
        />
        <Input
          label="Street"
          name="street"
          onChange={onChange}
          value={values.street}
          error={errors.street}
        />
        <Input
          label="City"
          name="city"
          onChange={onChange}
          value={values.city}
          error={errors.city}
        />
        <Input
          label="ZIP Code"
          name="zipCode"
          onChange={onChange}
          value={values.zipCode}
          error={errors.zipCode}
        />
        <Select
          label="Country"
          data={countries}
          name="country"
          onChange={onChange}
          value={values.country}
          error={errors.country}
        />
        <Select
          label="Currency"
          name="currency"
          onChange={onChange}
          value={values.currency}
          error={errors.currency}
          data={['', 'USD', 'GBP', 'EUR']}
        />
        <Input
          label="Occupation"
          name="occupation"
          onChange={onChange}
          value={values.occupation}
          error={errors.occupation}
        />

        <Select
          label="Nationality"
          data={nationalities}
          name="nationality"
          onChange={onChange}
          value={values.nationality}
          error={errors.nationality}
        />

        <Select
          label="Account Type"
          name="accountType"
          onChange={onChange}
          value={values.accountType}
          error={errors.accountType}
          data={['', 'checking', 'savings']}
        />
        <Input
          label="Available Balance"
          name="availableBalance"
          onChange={onChange}
          value={values.availableBalance}
          error={errors.availableBalance}
        />
        <Input
          label="Current Balance"
          name="currentBalance"
          onChange={onChange}
          value={values.currentBalance}
          error={errors.currentBalance}
        />
        <Input
          label="COT Code"
          name="cot"
          onChange={onChange}
          value={values.cot}
          error={errors.cot}
        />

        <Input
          label="IMF Code"
          name="imf"
          onChange={onChange}
          value={values.imf}
          error={errors.imf}
        />
        <Input
          label="Account Pin"
          name="authPin"
          onChange={onChange}
          value={values.authPin}
          error={errors.authPin}
        />
        <Input
          label="Transfer Pin"
          name="transferPin"
          onChange={onChange}
          value={values.transferPin}
          error={errors.transferPin}
        />
        <Input
          label="Password"
          name="password"
          onChange={onChange}
          value={values.password}
          error={errors.password}
        />
        <p className={`${serverError ? "h-5" : "h-0 "} text-red-600 duration-300`}>{serverError}</p>
      </div>
      <div onClick={Submit} className="flex justify-end">
        <Button2 title='Submit' loading={loading} />
      </div>
    </div>
  );
}
