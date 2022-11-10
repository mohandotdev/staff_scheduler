import React, { useState } from 'react';
import MemberDropDown from './MemberDropDown';
// import { Options } from '../constant/options';
import {Load} from './Load';

const Landing = () => {
    const[,setStaff] = useState("");
    const forceUpdate = React.useCallback(() => setStaff({}), []);

    const onSelectChange = (sm,data) =>
    {   
        console.log(data);
        switch(data)
        {
            case "mon":
                setStaff(sm.value)
                Load[0][`${sm.value}`] += 1;
                Load[5][`${sm.value}`] += 1;
                forceUpdate();
                break;
            case "tue":
                setStaff(sm.value)
                Load[1][`${sm.value}`] += 1;
                Load[5][`${sm.value}`] += 1;
                forceUpdate();
                break;
            case "wed":
                setStaff(sm.value)
                Load[2][`${sm.value}`] += 1;
                Load[5][`${sm.value}`] += 1;
                forceUpdate();
                break;
            case "thu":
                setStaff(sm.value)
                Load[3][`${sm.value}`] += 1;
                Load[5][`${sm.value}`] += 1;
                forceUpdate();
                break;
            case "fri":
                setStaff(sm.value)
                Load[4][`${sm.value}`] += 1;
                Load[5][`${sm.value}`] += 1;
                forceUpdate();
                break;
            default:
                setStaff("")
            }
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
                        <td class="flex h-14 justify-center items-center border">Morning Up Stairs</td>
                        <td class="border"><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Morning Down Stairs</td>
                        <td class="border"><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Morning Paking Lot</td>
                        <td class="border"><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
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
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Lunch B</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Lunch C</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Lunch D</td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
                        <td class="border"><MemberDropDown onSelectChange={onSelectChange6}/></td>
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
                        <td class="flex h-14 justify-center items-center border">Afternoon Up Stairs</td>
                        <td class="border"><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Afternoon Down Stairs</td>
                        <td class="border"><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
                    </tr>
                    <tr>
                        <td class="h-14 flex justify-center items-center border">Afternoon Paking Lot</td>
                        <td class="border"><MemberDropDown day="mon" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="tue" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="wed" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="thu" onSelectChange={onSelectChange}/></td>
                        <td class="border"><MemberDropDown day="fri" onSelectChange={onSelectChange}/></td>
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
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[0]["X1"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[1]["X1"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[2]["X1"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[3]["X1"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[4]["X1"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[5]["X1"]}</p></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X2
                        </td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[0]["X2"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[1]["X2"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[2]["X2"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[3]["X2"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[4]["X2"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[5]["X2"]}</p></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X3
                        </td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[0]["X3"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[1]["X3"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[2]["X3"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[3]["X3"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[4]["X3"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[5]["X3"]}</p></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X4
                        </td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[0]["X4"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[1]["X4"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[2]["X4"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[3]["X4"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[4]["X4"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[5]["X4"]}</p></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X5
                        </td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[0]["X5"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[1]["X5"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[2]["X5"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[4]["X5"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[4]["X5"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[5]["X5"]}</p></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X6
                        </td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[0]["X6"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[1]["X6"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[2]["X6"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[3]["X6"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[4]["X6"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[5]["X6"]}</p></td>
                    </tr>
                    <tr>
                        <td class="flex h-14 justify-center items-center border">
                            X7
                        </td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[0]["X7"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[1]["X7"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[2]["X7"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[3]["X7"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[4]["X7"]}</p></td>
                        <td class="border"><p className="flex justify-center items-center text-lg font-semibold">{Load[5]["X7"]}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Landing;