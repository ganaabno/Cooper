import calculateCost from '../assets/calculator.svg'
import timeTracking from '../assets/clock.svg'
import oneClickCleaning from '../assets/cleaning.png'
import makeNotes from '../assets/notes.svg'
import dailyReport from '../assets/calendar.svg'
import idCard from '../assets/id-card.svg'

function Cards() {
    return (
        <div className="relative">

            <div className='w-full flex justify-center items-center'>
                <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-[1200px]">
                    <div className="h-40 rounded-xl flex items-center p-4">
                        <img src={idCard} alt="id" className="w-20" />
                        <div className="ml-4">
                            <p className='sbfont'>SPECIAL LOGIN SYSTEM</p>
                            <p className='tfont'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                        </div>
                    </div>
                    <div className="h-40 rounded-xl flex items-center p-4">
                        <img src={calculateCost} alt="calculate" className='w-20' />
                        <div className="ml-4">
                            <p className='sbfont'>TIME TRACKING</p>
                            <p className='tfont'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                        </div>
                    </div>
                    <div className="h-40 rounded-xl flex items-center p-4">
                        <img src={timeTracking} alt="time" className='w-20' />
                        <div className="ml-4">
                            <p className='sbfont'>MAKE NOTES EASILY</p>
                            <p className='tfont'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                        </div>
                    </div>
                    <div className="h-40 rounded-xl flex items-center p-4">
                        <img src={oneClickCleaning} alt="clean" className='w-20' />
                        <div className="ml-4">
                            <p className='sbfont'>CALCULATE DAILY COST</p>
                            <p className='tfont'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                        </div>
                    </div>
                    <div className="h-40 rounded-xl flex items-center p-4">
                        <img src={makeNotes} alt="notes" className='w-20' />
                        <div className="ml-4">
                            <p className='sbfont'>ONE CLICK CLEANING</p>
                            <p className='tfont'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                        </div>
                    </div>
                    <div className="h-40 rounded-xl flex items-center p-4">
                        <img src={dailyReport} alt="report" className='w-20' />
                        <div className="ml-4">
                            <p className='sbfont'>DAILY REPORT</p>
                            <p className='tfont'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Cards