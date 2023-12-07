import { servicesData } from "../linkData";
import Title from "./Title";



const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title = 'our' subtitle='services'></Title>

      {/* <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div> */}


      <div className="section-center services-center">
        {servicesData.map((services)=>{
          const {id, icon, heading, paragraph} = services
          return (
            <article className="service" key = {id}>
              <span className="service-icon">
                <i className = {icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{heading}</h4>
                <p className="service-text">
                  {paragraph}
                </p>
              </div>
            </article>
          );
        })}


      </div>
    </section>
  );
}
export default Services