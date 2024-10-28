import React, { useState } from 'react';

const Volunteerform = () => {
    // State management for form fields
    const [formData, setFormData] = useState({
        Name: '',
        Fathers_Name: '',
        Mobile_No: '',
        Email: '',
        Qualification: '',
        Work_Experience: '', // Added field for Working Experience
        Address: '', // Replacing State with Address
        About_You: '', // Added field for About_You
        Image: null, // Initialize Image as null
    });

    const [errors, setErrors] = useState({});

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle image input change
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the file
        setFormData({
            ...formData,
            Image: file, // Set the image file
        });
    };

    // Form validation
    const validateForm = () => {
        let errors = {};
        if (!formData.Name) errors.Name = 'Name is required';
        if (!formData.Fathers_Name) errors.Fathers_Name = 'Father\'s Name is required';
        if (!formData.Mobile_No) errors.Mobile_No = 'Mobile Number is required';
        if (!formData.Email) errors.Email = 'Email is required';
        if (!formData.Qualification) errors.Qualification = 'Qualification is required';
        if (!formData.Work_Experience) errors.Work_Experience = 'Working Experience is required'; // Validate working experience
        if (!formData.Address) errors.Address = 'Address is required'; // Validate Address
        if (!formData.About_You) errors.About_You = 'About you is required'; // Validate About_You
        if (!formData.Image) errors.Image = 'Image is required'; // Validate image
        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        // If there are no validation errors, submit the form
        if (Object.keys(validationErrors).length === 0) {
            const formPayload = new FormData();
            // Append form fields to FormData
            for (let key in formData) {
                formPayload.append(key, formData[key]);
            }
            // API call to submit form data
            fetch('http://192.168.1.2:8000/submit', {
                method: 'POST',
                body: formPayload,
            })
            .then(response => response.json())
            .then(data => {
                console.log("Form Data Submitted:", data);
                // Reset form fields after successful submission
                setFormData({
                    Name: '',
                    Fathers_Name: '',
                    Mobile_No: '',
                    Email: '',
                    Qualification: '',
                    Work_Experience: '',
                    Address: '',
                    About_You: '',
                    Image: null, // Reset image path
                });
                setErrors({}); // Reset errors
            })
            .catch(error => {
                console.error("Error submitting form:", error);
            });
        }
    };

    return (
        <div>
            {/* Introduction Section */}
            <section className="container mx-auto px-10 py-10">
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-red-600 font-bold text-center px-5">
                    Become A Volunteer
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mt-4 text-center">
                    Join us in making a meaningful difference.
                </p>
            </section>

            {/* Form Section */}
            <section className="">
                <div className="container mx-auto px-4">
                    <form className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Name" 
                                placeholder="Name" 
                                value={formData.Name}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Name && <span className="text-red-500 text-sm">{errors.Name}</span>}
                        </div>

                        {/* Father's Name */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Fathers_Name" 
                                placeholder="Father's Name" 
                                value={formData.Fathers_Name}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Fathers_Name && <span className="text-red-500 text-sm">{errors.Fathers_Name}</span>}
                        </div>

                        {/* Mobile Number */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Mobile_No" 
                                placeholder="Mobile Number" 
                                value={formData.Mobile_No}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Mobile_No && <span className="text-red-500 text-sm">{errors.Mobile_No}</span>}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <input 
                                type="email" 
                                name="Email" 
                                placeholder="Email" 
                                value={formData.Email}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Email && <span className="text-red-500 text-sm">{errors.Email}</span>}
                        </div>

                        {/* Qualification */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Qualification" 
                                placeholder="Qualification" 
                                value={formData.Qualification}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Qualification && <span className="text-red-500 text-sm">{errors.Qualification}</span>}
                        </div>

                        {/* Working Experience */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Work_Experience" 
                                placeholder="Working Experience" 
                                value={formData.Work_Experience}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Work_Experience && <span className="text-red-500 text-sm">{errors.Work_Experience}</span>}
                        </div>

                        {/* Address */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Address" 
                                placeholder="Address" 
                                value={formData.Address}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Address && <span className="text-red-500 text-sm">{errors.Address}</span>}
                        </div>

                        {/* Image Input */}
                        <div className="flex flex-col">
                            <input 
                                type="file" 
                                name="Image" 
                                onChange={handleImageChange} 
                                className="border border-gray-300 p-3 rounded-md w-full"
                            />  <p className='px-4 text-red-400'>Upload your photograph</p>
                            {errors.Image && <span className="text-red-500 text-sm">{errors.Image}</span>}
                        </div>

                        {/* About_You */}
                        <div className="flex flex-col sm:col-span-2">
                            <textarea 
                                name="About_You" 
                                placeholder="About yourself"
                                value={formData.About_You}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full h-32" 
                            />
                            {errors.About_You && <span className="text-red-500 text-sm">{errors.About_You}</span>}
                        </div>


                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="bg-red-600 text-white px-4 py-2 rounded-md w-full sm:col-span-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Volunteerform;
