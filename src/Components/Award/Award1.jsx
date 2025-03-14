import data from '../../Data/home5/counter.json';
import Counter from '../animations/counter';


const Award1 = () => {
    return (
        <div className="about7">
          <div className="container">
            <div className="row hero-bottom-area">
            {/* {data.map((item, i) => (
              <div key={i} className="col-lg-3">
                <div className="single-box">
                  <div className="icon">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="headding">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))} */}


{/* {data.map((item, i) => (
    <div key={i} className="col-lg-3 col-md-6">
        <div className="about-counter">
            <h4> {item.title}</h4>
            <h4> <Counter value={item.title}/> {item.sub}</h4>

            <p>{item.desc}</p>
        </div>
    </div>
    ))} */}
    {data.map((item, i) => (
  <div key={i} className="col-lg-3 col-md-6">
    <div className="about-counter">
    <h4 className="d-flex align-items-center justify-content-center gap-2 mb-0">
  <Counter value={item.title} />
  <span>{item.sub}</span>
</h4>

      <p>{item.desc}</p>
    </div>
  </div>
))}


            </div>
          </div>
        </div>
    );
};

export default Award1;