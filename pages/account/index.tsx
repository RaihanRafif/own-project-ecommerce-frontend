import NextBreadcrumb from '@/components/NextBreadcrumb';
import Head from 'next/head';
import React from 'react';

const Account = () => {
    return (
        <>
            <Head>
                <title>My Account</title>
            </Head>
            <NextBreadcrumb
                homeElement={'Home'}
                separator={<span> | </span>}
                activeClasses='text-amber-500'
                containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
                listClasses='hover:underline mx-2 font-bold'
                capitalizeLinks
                productName={''}
            />

            <div className="flex pl-[135px] px-[135px]">
                <div className="w-1/4">
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Manage My Account</h2>
                        <ul className="space-y-2 pl-5">
                            <li className="text-red-500 font-bold">My Profile</li>
                            <li className="text-gray-500">Address Book</li>
                            <li className="text-gray-500">My Payment Options</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">My Orders</h2>
                        <ul className="space-y-2 pl-5">
                            <li className="text-gray-500">My Returns</li>
                            <li className="text-gray-500">My Cancellations</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">My WishList</h2>
                    </div>
                </div>
                <div className="form w-3/4 pt-10 pl-14 pr-14 pb-10 shadow-2xl rounded-lg bg-white">
                    <h2 className="text-red-500 font-bold mb-4">Edit Your Profile</h2>
                    <form className="space-y-4">
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" value="Md" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" value="Rimel" />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" value="rimel111@gmail.com" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" value="Kingston, 5236, United States" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-700">Password Changes</h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                                <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">New Password</label>
                                <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                                <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                            </div>
                        </div>
                        <div className="flex space-x-4 ">
                            <button type="button" className="ml-auto py-2 px-4">Cancel</button>
                            <button type="submit" className="bg-red-500 text-white rounded-md py-2 px-4">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Account;
