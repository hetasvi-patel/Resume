import React from 'react';
import Resume from './Resume';

const App = () => {
    const contactInfo = "New Delhi, India 11034 | +91 22 5555 334 | i.agarwal@sample.in";
    const name = "IshaarAgarwal";
    const professionalSummary = "Customer-Focused Retail & Sales professional with in-depth understanding of retail dynamics, marketing, and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer expectations and needs. Demonstrated record of exceeding revenue targets by leveraging expertise and communication skills.";
    const coreQualifications = [
        ["Case registration operation", "Case registration operation", "Case registration operation"],
        ["Case registration operation", "Case registration operation", "Case registration operation"],
        ["Case registration operation", "Case registration operation", "Case registration operation"]
    ];
    const experience = [
        {
            title: "RETAIL SALES ASSOCIATE",
            duration: "02/2021-Current",
            company: "ZARA",
            location: "New Delhi, India",
            description: "Increased monthly sales by 10% by effectively upselling and cross-selling products to maximize profitability. Prevented store losses by leveraging awareness, attention to detail, and integrity to identify and investigate concerns. Processed payments and maintained accurate drawers to meet financial targets."
        },
        {
            title: "BARISTA",
            duration: "03/2019-01/2021",
            company: "DUNKIN's Donuts",
            location: "New Delhi, India",
            description: "Customer-Focused Retail & Sales professional with in-depth understanding of retail dynamics, marketing, and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer expectations and needs. Demonstrated record of exceeding revenue targets by leveraging expertise and communication skills."
        },
        {
            title: "Cashier",
            duration: "07/2017-01/2021",
            company: "Burger King",
            location: "New Delhi, India",
            description: "Demonstrated record of exceeding revenue targets by leveraging expertise and communication skills. Customer-Focused Retail & Sales professional with in-depth understanding of retail dynamics, marketing, and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer expectations and needs. Demonstrated record of exceeding revenue targets by leveraging expertise and communication skills."
        }
    ];
    const education = {
        field: "Financial Accounting",
        year: "2018",
        institute: "Oxford Software Institute & Oxford School of English",
        location: "New Delhi, India"
    };

    return (
        <div>
            <Resume
                contactInfo={contactInfo}
                name={name}
                professionalSummary={professionalSummary}
                coreQualifications={coreQualifications}
                experience={experience}
                education={education}
            />
        </div>
    );
}

export default App;
