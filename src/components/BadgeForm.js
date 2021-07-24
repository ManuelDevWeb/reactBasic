import React from "react";

//Creando componente
const BadgeForm = (props) => {
    const { handleChange, handleSubmit, form } = props;

    return (
        <div>
            <h1>New Attendant</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={form.firstName}
                    />
                    <label>Last Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={form.lastName}
                    />
                    <label>Email</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={form.email}
                    />
                    <label>Job Title</label>
                    <input
                        className="form-control"
                        type="text"
                        name="jobTitle"
                        onChange={handleChange}
                        value={form.jobTitle}
                    />
                    <label>Twitter</label>
                    <input
                        className="form-control"
                        type="text"
                        name="twitter"
                        onChange={handleChange}
                        value={form.twitter}
                    />
                </div>
                <hr />
                <button className="btn btn-primary mt-2">Save</button>
            </form>
        </div>
    );
};

//Exportando componente
export default BadgeForm;
