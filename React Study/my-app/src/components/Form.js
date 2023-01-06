import React from "react"

export default function Form() {
    const initialValues = {
        firstName: '',
        lastName: ''
    }

    const [values, setValues] = React.useState(initialValues)

    function handleChange(event) {
        const { name, value } = event.target
        
        setValues({
            ...values,
            [name] : value
        })
    }
    
    console.log(values)

    return (
        <form>
            <input
                name="firstName"
                value={values.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input
                name="lastName"
                value={values.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
            />
        </form>
    )
}
