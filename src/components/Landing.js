import React, { useState } from 'react';
import MemberDropDown from './MemberDropDown';
import {Load} from './Load';

const Landing = () => {
    const[,setStaff] = useState();
    const forceUpdate = React.useCallback(() => setStaff({}), []);
    const onSelectChange = (sm,day) =>
    {   
        //Updating the data
        setStaff(sm.value);
        forceUpdate();
        Load[day][sm.value] += 1;
        Load['tot'][sm.value] += 1;
    } 
    const onSelectChange6 = (sm) =>
    {
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
                        <td className="flex h-14 justify-center items-center border">Morning Up Stairs</td>
                        <td className="border" id='mon'><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Morning Down Stairs</td>
                        <td className="border"><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Morning Paking Lot</td>
                        <td className="border"><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr className="border">
                        <td className="h-14"></td>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Lunch A</td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Lunch B</td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Lunch C</td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Lunch D</td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td className="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                    </tr>
                    <tr className="border">
                        <td className="h-14"></td>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">Afternoon Up Stairs</td>
                        <td className="border"><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Afternoon Down Stairs</td>
                        <td className="border"><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Afternoon Paking Lot</td>
                        <td className="border"><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td className="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr className="border">
                        <td className="h-14"></td>
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
                        <th className="h-14 border">Staff Member</th>
                        <th className="border">Monday</th>
                        <th className="border">Tuesday</th>
                        <th className="border">Wednesday</th>
                        <th className="border">Thursday</th>
                        <th className="border">Friday</th>
                        <th className="border">Totals</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">
                            X1
                        </td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["mon"]["X1"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tue"]["X1"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["wed"]["X1"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["thu"]["X1"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["fri"]["X1"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tot"]["X1"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">
                            X2
                        </td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["mon"]["X2"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tue"]["X2"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["wed"]["X2"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["thu"]["X2"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["fri"]["X2"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tot"]["X2"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">
                            X3
                        </td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["mon"]["X3"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tue"]["X3"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["wed"]["X3"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["thu"]["X3"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["fri"]["X3"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tot"]["X3"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">
                            X4
                        </td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["mon"]["X4"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tue"]["X4"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["wed"]["X4"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["thu"]["X4"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["fri"]["X4"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tot"]["X4"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">
                            X5
                        </td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["mon"]["X5"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tue"]["X5"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["wed"]["X5"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["thu"]["X5"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["fri"]["X5"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tot"]["X5"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">
                            X6
                        </td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["mon"]["X6"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tue"]["X6"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["wed"]["X6"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["thu"]["X6"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["fri"]["X6"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tot"]["X6"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">
                            X7
                        </td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["mon"]["X7"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tue"]["X7"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["wed"]["X7"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["thu"]["X7"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["fri"]["X7"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{Load["tot"]["X7"]}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Landing;