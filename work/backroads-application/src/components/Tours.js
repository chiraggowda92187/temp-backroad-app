import { toursData } from "../linkData";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title = 'featured' subtitle='tours'></Title>
      {/* <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div> */}

      <div className="section-center featured-center">


        {toursData.map((tour)=>{
          const {id, date, icon, img, title, description, days, price, country} = tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>
                  {description}
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className = {icon}></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}


        
      </div>
    </section>
  );
}
export default Tours