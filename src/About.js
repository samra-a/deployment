import { useLoaderData } from "react-router-dom";


const About = () => {

    const countries = useLoaderData();

    const firstFiveCountries = countries.slice(0, 5);

    const countryListElements =  firstFiveCountries.map((country, index) => {
        return (
            <li key={index}> {country.name.common}</li>
        )
    })

    return ( 
        <>
        <h2>About Me</h2>
        <p>Personal info will go in here</p>
        <h3>Some of the countries I have visited</h3>
        <ul>
            {countryListElements}
        </ul>
        </>
     );
}
 
export default About;