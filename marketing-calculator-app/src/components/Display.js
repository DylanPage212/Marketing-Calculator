import React from "react";

const Display = (props) => {

    let leads = props.Leads
    let qualifiedLeads = props.Qualified_Leads
    let telehealthCalls = props.Telehealth_Calls
    let bookings = props.Bookings
    let treatments = props.Treatments


    let leadCalculations = {

    }

    let qualifiedLeadsCalculations = {
        percentageOfTotal: Math.round(((qualifiedLeads/leads)*100))+"%"
    }

    let telehealthCallsCalculations = {
        percentageOfTotal: Math.round(((telehealthCalls/leads)*100))+"%",
        percentageOfQualifiedLeads: Math.round(((telehealthCalls/qualifiedLeads)*100))+"%"
    }

    let bookingsCalculations = {
        percentageOfTotal: Math.round(((bookings/leads)*100))+"%",
        percentageOfQualifiedLeads: Math.round(((bookings/qualifiedLeads)*100))+"%",
        percentageOfTelehealthCalls: Math.round(((bookings/telehealthCalls)*100))+"%"
    }

    let treatmentsCalculations = {
        percentageOfTotal: Math.round(((treatments/leads)*100))+"%",
        percentageOfQualifiedLeads: Math.round(((treatments/qualifiedLeads)*100))+"%",
        percentageOfTelehealthCalls: Math.round(((treatments/telehealthCalls)*100))+"%",
        percentageOfBookings: Math.round(((treatments/bookings)*100))+"%"
    }


    return (
        <div className="display">

             <div className="values">
                <div> Leads: {leads} </div> 
                <div> Qualified Leads: {qualifiedLeads} </div> 
                <div> Telehealth Calls: {telehealthCalls} </div>
                <div> Bookings: {bookings} </div>
                <div> Treatments: {treatments} </div>
             </div>

            <div className="calculations">

                <div className="leads-calculations calcs">
                    <div>Leads Calculations</div>
                    <div>filler</div>
                </div>

                <div className="qualified-leads-calculations calcs">
                    <div>Qualified Leads Calculations</div>
                    <div className="spacing">Percentage of Leads: {qualifiedLeadsCalculations.percentageOfTotal}</div>
                </div>

                <div className="telehealth-calls-calculations calcs">
                    <div>Telehealth Calls Calculations</div>
                    <div className="spacing">Percentage of Leads: {telehealthCallsCalculations.percentageOfTotal}</div>
                    <div className="spacing">Percentage of Qualified Leads: {telehealthCallsCalculations.percentageOfQualifiedLeads}</div>
                </div>

                <div className="bookings-calculations calcs">
                    <div>Bookings Calculations</div>
                    <div className="spacing">Percentage of Leads: {bookingsCalculations.percentageOfTotal}</div>
                    <div className="spacing">Percentage of Qualified Leads: {bookingsCalculations.percentageOfQualifiedLeads}</div>
                    <div className="spacing">Percentage of Telehealth Calls: {bookingsCalculations.percentageOfTelehealthCalls}</div>
                </div>

                <div className="treatments-calculations calcs">
                    <div>Treatments Calculations</div>
                    <div className="spacing">Percentage of Leads: {treatmentsCalculations.percentageOfTotal}</div>
                    <div className="spacing">Percentage of Qualified Leads: {treatmentsCalculations.percentageOfQualifiedLeads}</div>
                    <div className="spacing">Percentage of Telehealth Calls: {treatmentsCalculations.percentageOfTelehealthCalls}</div>
                    <div className="spacing">Percentage of Bookings: {treatmentsCalculations.percentageOfBookings}</div>
                </div>


            </div>  
        </div>     
    );
}

export default Display;