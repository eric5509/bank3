import axios from "axios";
import { ValuesDataType } from "./data";
import { deleteTransferLink, usersLink } from "@/lib/links";

export const CreateAccount = async (values: ValuesDataType) => {
  try {
    const response = await fetch("http://localhost:5000/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstName,
        middleName: values.middleName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        gender: values.gender,
        dob: values.dob,
        occupation: values.occupation,
        street: values.street,
        city: values.city,
        state: values.state,
        country: values.country,
        zipCode: values.zipCode,
        availableBalance: values.availableBalance,
        currency: values.currency,
        imf: values.imf,
        nationality: values.nationality,
        cot: values.cot,
        maritalStatus: values.maritalStatus,
        accountType: values.accountType,
        authPin: values.authPin,
        transferPin: values.transferPin,
        password: values.password,
      }),
    });
    const result = await response.json();
    if (!result.success) {
      return { success: false, message: result.message };
    }
    return { success: true, code: result.data, message: result.message };
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong" };
  }
};

export const sendTokenAfterRegistration = async ({
  code,
  firstName,
}: {
  code: string;
  firstName: string;
}) => {
  try {
    const response = await fetch("http://localhost:3000/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        firstName,
      }),
    });
    const result = await response.json();
    if (!result.success) {
      return result;
    }
    return result;
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const deleteTransfer = async (id: string | undefined) => {
  if (id) {
    console.log(id);
    try {
      const response = await fetch(`${deleteTransferLink}${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return { data: null, error: error.message, success: false };
    }
  }
};

export const fetchAllUsers = async () => {
  try {
    const users = await fetch(usersLink);
    const response = await users.json();
    const result = await response.data;
    return result;
  } catch (error: any) {
    return { data: null, error: error.message, success: false };
  }
};
