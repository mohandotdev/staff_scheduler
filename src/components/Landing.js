import React,{useState} from 'react';
import MemberDropDown from './MemberDropDown';
// import { Options } from '../constant/options';

const Landing = () => {

    const[staff,setStaff] = useState("");
    console.log(staff)

    const onSelectChange = (sm) =>{
        console.log("Selected Option:",sm);
        setStaff(sm);
    }

    return (
        <div className='flex flex-col mx-36 my-10'>
            <div className='flex justify-center items-center p-3 bg-gray-600 border'>
                <p className='text-lg text-gray-200 font-bold uppercase'>schedule</p>
            </div>
            <table className='table-fixed w-full bg-slate-800 text-gray-200'>
                <thead>
                    <tr>
                        <th className='h-14 border'></th>
                        <th className='border'>
                            Monday
                        </th>
                        <th className='border'>
                            Tuesday
                        </th>
                        <th className='border'>
                            Wednesday
                        </th>
                        <th className='border'>
                            Thursday
                        </th>
                        <th className='border'>
                            Friday
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">Morning Up Stairs</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Morning Down Stairs</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Morning Paking Lot</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr class="border">
                        <td class="h-14"></td>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Lunch A</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Lunch B</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Lunch C</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Lunch D</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">Afternoon Up Stairs</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Afternoon Down Stairs</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Afternoon Paking Lot</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr class="border">
                        <td class="h-14"></td>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                    </tr>
                </tbody>
            </table>
            <div className='flex justify-center items-center p-3 bg-gray-600 border'>
                <p className='font-bold text-xl text-gray-200 uppercase'>Load</p>
            </div>
            <table className='table-fixed w-full text-gray-200 bg-slate-800'>
                <thead>
                    <tr>
                        <th class="h-14 border">Staff Member</th>
                        <th class="border">Monday</th>
                        <th class="border">Tuesday</th>
                        <th class="border">Wednesday</th>
                        <th class="border">Thursday</th>
                        <th class="border">Friday</th>
                        <th class="border">Totals</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X1
                        </td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X2
                        </td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X3
                        </td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X4
                        </td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X5
                        </td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X6
                        </td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X7
                        </td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                        <td class="border"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Landing;