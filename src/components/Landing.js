import React, { useState } from 'react';
import MemberDropDown from './MemberDropDown';
import { employeeLoad } from './employeeLoad';
import { lunchLoad } from './lunchLoad';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Landing = () => {
    const[,setStaff] = useState();
    const forceUpdate = React.useCallback(() => setStaff({}), []);
    
    const handleStaffLoad = (sm,day,shift) =>
    {   
        //Updating the Staff Load
        if(employeeLoad[shift][day] === "NA"){
            employeeLoad[shift][day] = sm.value;
            setStaff(sm.value);
            employeeLoad[day][sm.value] += 1;
            employeeLoad['tot'][sm.value] += 1;
        }
        else{
            // correction for existing staff 
            let existValue = employeeLoad[shift][day];
            employeeLoad[day][existValue] -= 1;
            employeeLoad['tot'][existValue] -=1;
            // updating the staff load
            employeeLoad[shift][day] = sm.value;
            setStaff(sm.value);
            employeeLoad[day][sm.value] += 1;
            employeeLoad['tot'][sm.value] += 1;
        }
        forceUpdate();
    } 
    const handleLunchLoad = (sm,day,shift) =>{
        if(lunchLoad[day][sm.value] < 1){
            if(lunchLoad[shift][day] === "NA"){
                lunchLoad[shift][day] = sm.value;
                lunchLoad[day][sm.value] += 1;
            }
            else{
                // correction for existing staff 
                let existValue = lunchLoad[shift][day];
                lunchLoad[day][existValue] -= 1;
                // update the staff load
                lunchLoad[shift][day] = sm.value;
                lunchLoad[day][sm.value] += 1;
            }
        }
        else{
            let existValue = lunchLoad[shift][day];
            lunchLoad[day][existValue] -= 1;
            lunchLoad[shift][day] = "NA";
            showErrorToast(sm.value,day);
        }        
    }

    const showErrorToast = (staff,day) =>
    {
        toast.error(`${staff} consecutive in ${day} lunch slot`,{
            position: 'top-right',
            autoClose: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    
    return (
        <div className='flex flex-col mx-36 my-10'>
            <ToastContainer
                position="top-right"
                autoClose={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="colored"
            />
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
                        <td className="border"><MemberDropDown day="mon" shift="morning_up_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="tue" shift="morning_up_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="wed" shift="morning_up_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="thu" shift="morning_up_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="fri" shift="morning_up_stairs" onSelectChange={handleStaffLoad}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Morning Down Stairs</td>
                        <td className="border"><MemberDropDown day="mon" shift="morning_down_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="tue" shift="morning_down_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="wed" shift="morning_down_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="thu" shift="morning_down_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="fri" shift="morning_down_stairs" onSelectChange={handleStaffLoad}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Morning Paking Lot</td>
                        <td className="border"><MemberDropDown day="mon" shift="morning_parking_lot" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="tue" shift="morning_parking_lot" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="wed" shift="morning_parking_lot" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="thu" shift="morning_parking_lot" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="fri" shift="morning_parking_lot" onSelectChange={handleStaffLoad}/></td>
                    </tr>
                    <tr className="border"><td className="h-14"/></tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Lunch A</td>
                        <td className="border"><MemberDropDown day="mon" shift="lunchA" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="tue" shift="lunchA" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="wed" shift="lunchA" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="thu" shift="lunchA" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="fri" shift="lunchA" onSelectChange={handleLunchLoad}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Lunch B</td>
                        <td className="border"><MemberDropDown day="mon" shift="lunchB" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="tue" shift="lunchB" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="wed" shift="lunchB" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="thu" shift="lunchB" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="fri" shift="lunchB" onSelectChange={handleLunchLoad}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Lunch C</td>
                        <td className="border"><MemberDropDown day="mon" shift="lunchC" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="tue" shift="lunchC" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="wed" shift="lunchC" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="thu" shift="lunchC" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="fri" shift="lunchC" onSelectChange={handleLunchLoad}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Lunch D</td>
                        <td className="border"><MemberDropDown day="mon" shift="lunchD" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="tue" shift="lunchD" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="wed" shift="lunchD" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="thu" shift="lunchD" onSelectChange={handleLunchLoad}/></td>
                        <td className="border"><MemberDropDown day="fri" shift="lunchD" onSelectChange={handleLunchLoad}/></td>
                    </tr>
                    <tr className="border"><td className="h-14"/></tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">Afternoon Up Stairs</td>
                        <td className="border"><MemberDropDown day="mon" shift="afternoon_up_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="tue" shift="afternoon_up_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="wed" shift="afternoon_up_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="thu" shift="afternoon_up_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="fri" shift="afternoon_up_stairs" onSelectChange={handleStaffLoad}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Afternoon Down Stairs</td>
                        <td className="border"><MemberDropDown day="mon" shift="afternoon_down_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="tue" shift="afternoon_down_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="wed" shift="afternoon_down_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="thu" shift="afternoon_down_stairs" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="fri" shift="afternoon_down_stairs" onSelectChange={handleStaffLoad}/></td>
                    </tr>
                    <tr>
                        <td className="h-14 flex justify-center items-center border">Afternoon Paking Lot</td>
                        <td className="border"><MemberDropDown day="mon" shift="afternoon_parking_lot" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="tue" shift="afternoon_parking_lot" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="wed" shift="afternoon_parking_lot" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="thu" shift="afternoon_parking_lot" onSelectChange={handleStaffLoad}/></td>
                        <td className="border"><MemberDropDown day="fri" shift="afternoon_parking_lot" onSelectChange={handleStaffLoad}/></td>
                    </tr>
                    <tr className="border"><td className="h-14"/></tr>
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
                        <td className="flex h-14 justify-center items-center border">X1</td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["mon"]["X1"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tue"]["X1"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["wed"]["X1"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["thu"]["X1"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["fri"]["X1"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tot"]["X1"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">X2
                        </td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["mon"]["X2"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tue"]["X2"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["wed"]["X2"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["thu"]["X2"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["fri"]["X2"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tot"]["X2"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">X3</td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["mon"]["X3"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tue"]["X3"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["wed"]["X3"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["thu"]["X3"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["fri"]["X3"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tot"]["X3"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">X4</td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["mon"]["X4"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tue"]["X4"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["wed"]["X4"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["thu"]["X4"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["fri"]["X4"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tot"]["X4"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">X5</td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["mon"]["X5"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tue"]["X5"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["wed"]["X5"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["thu"]["X5"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["fri"]["X5"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tot"]["X5"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">X6</td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["mon"]["X6"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tue"]["X6"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["wed"]["X6"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["thu"]["X6"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["fri"]["X6"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tot"]["X6"]}</p></td>
                    </tr>
                    <tr>
                        <td className="flex h-14 justify-center items-center border">X7</td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["mon"]["X7"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tue"]["X7"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["wed"]["X7"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["thu"]["X7"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["fri"]["X7"]}</p></td>
                        <td className="border"><p className="flex justify-center items-center text-lg font-semibold">{employeeLoad["tot"]["X7"]}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Landing;