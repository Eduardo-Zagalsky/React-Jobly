import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Company from "./backend/models/company";

const CompanyDetail = () => {
    const { name } = useParams();
    const [company, setCompany] = useState(new Company());

    useEffect(() => {
        const getCompany = async () => {
            const company = await Company.get(name);
            setCompany(company);
        };
        getCompany();
    }, []);

    return (<div>
        <h1>Company: {company.name}</h1>
        <h4>{company.description}</h4>
    </div>);
}
export default CompanyDetail;