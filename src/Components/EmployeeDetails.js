import React, { useState, useEffect, useCallback } from 'react';

const EmployeeDetails = () => {
    const [employee, setEmployee] = useState(null);

    // Wrapping fetchEmployeeDetails with useCallback
    const fetchEmployeeDetails = useCallback(async () => {
        try {
            const response = await fetch('/api/employee/details'); // Replace with actual API endpoint
            const data = await response.json();
            setEmployee(data);
        } catch (error) {
            console.error('Error fetching employee details:', error);
        }
    }, []); // Empty dependency array, so fetchEmployeeDetails is memoized

    // Using useEffect to call fetchEmployeeDetails once on component mount
    useEffect(() => {
        fetchEmployeeDetails(); // Fetch employee details when component mounts
    }, [fetchEmployeeDetails]); // Dependency array ensures fetchEmployeeDetails doesn't change unless necessary

    
           



    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-md-3">
                            <img
                                src={employee.profileImage}
                                alt={employee.name}
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-md-9">
                            <h4>{employee.name}</h4>
                            <p><strong>Email:</strong> {employee.email}</p>
                            <p><strong>Phone:</strong> {employee.phone}</p>
                            <p><strong>Department:</strong> {employee.department}</p>
                            <p><strong>Salary:</strong> {employee.salary}</p>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={() => navigate('/employee')}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
