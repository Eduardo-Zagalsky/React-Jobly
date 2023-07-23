import { useEffect, useState } from "react";
import Company from "./backend/models/company"
import CompanyDetail from "./company";
import { Link } from "react-router-dom";

const Companies = () => {
    const [companyData, setCompanyData] = useState(new Company);

    useEffect(() => {
        const getCompanies = async () => {
            const companies = await Company.get();
            setCompanyData(companies);
        };

        getCompanies();
    }, []);

    return (
        <div>
            <form>
                <input type="text" />
            </form>
            {companyData.map((details) => <Link to={`/companies/${details.title}`} ><CompanyDetail datails={details} /></Link>)}
        </div>
    )
}
export default Companies;