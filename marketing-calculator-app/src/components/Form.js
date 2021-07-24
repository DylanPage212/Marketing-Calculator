import React, {useState} from "react";
import Display from "./Display";

const Form = () => {

    const initialData = {
        Leads: "",
        Qualified_Leads: "",
        Telehealth_Calls: "",
        Bookings: "",
        Treatments: ""
    }

    const [data, setData] = useState(initialData);

    const initialFormValues = {
        Leads: "",
        Qualified_Leads: "",
        Telehealth_Calls: "",
        Bookings: "",
        Treatments: ""
    }

    const [formValues, setFormValues] = useState(initialFormValues);


    const onChange = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        setData({...formValues})
        setFormValues(initialFormValues)
    }

    return(
        <div className="app-container">
            <form onSubmit={onSubmit}>
                <input 
                name="Leads"
                value={formValues.Leads}
                placeholder="Leads"
                onChange={onChange}
                />
                 <input 
                name="Qualified_Leads"
                value={formValues.Qualified_Leads}
                placeholder="Qualified Leads"
                onChange={onChange}
                />
                 <input 
                name="Telehealth_Calls"
                value={formValues.Telehealth_Calls}
                placeholder="Telehealth Calls"
                onChange={onChange}
                />
                 <input 
                name="Bookings"
                value={formValues.Bookings}
                placeholder="Bookings"
                onChange={onChange}
                />
                 <input 
                name="Treatments"
                value={formValues.Treatments}
                placeholder="Treatments"
                onChange={onChange}
                />
                <button>Submit</button>
            </form>

        <Display 
        Leads={data.Leads}
        Qualified_Leads={data.Qualified_Leads}
        Telehealth_Calls={data.Telehealth_Calls}
        Bookings={data.Bookings}
        Treatments={data.Treatments}
        />

        </div>
    );
}

export default Form;