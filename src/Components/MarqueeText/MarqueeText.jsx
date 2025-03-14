
// const MarqueeText = () => {
//     return (
//         <section className="hero10-benar">
//             <div className="container-fluid p-0">
//               <div className="row">
//                 <div className="col-12">
//                   <div className="marquee-wrap marquee-wrap-inner">
//                     <div className="marquee-text">
    
//                       <div className="brand-single-box">
//                       <img src="/assets/img/logo/slider-logo1.png" alt="" />
//                     </div>
    
//                     <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo2.png" alt="" />
//                     </div>
    
//                     <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo3.png" alt="" />
//                     </div>
    
//                     {/* <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo4.png" alt=""/>
//                     </div> */}
    
//                     <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo5.png" alt="" />
//                     </div>
    
//                     <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo6.png" alt=""/>
//                     </div>
    
//                     <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo7.png" alt="" />
//                     </div>

//                     <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo1.png" alt="" />
//                       </div>
      
//                       <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo2.png" alt="" />
//                       </div>
      
//                       <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo3.png" alt="" />
//                       </div>
      
//                       {/* <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo4.png" alt="" />
//                       </div> */}
      
//                       <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo5.png" alt="" />
//                       </div>
      
//                       <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo6.png" alt="" />
//                       </div>
      
//                       <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo7.png" alt="" />
//                       </div>

//                       {/* <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo4.png" alt="" />
//                     </div> */}
    
//                     <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo5.png" alt="" />
//                     </div>
    
//                     <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo6.png" alt="" /> 
//                     </div>
    
//                     <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo7.png" alt="" />
//                     </div>

//                     <div className="brand-single-box">
//                         <img src="/assets/img/logo/slider-logo1.png" alt="" />
//                       </div>
      
//                       <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo2.png" alt="" />
//                       </div>
      
//                       <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo3.png" alt="" />
//                       </div>
      
//                       {/* <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo4.png" alt="" /> 
//                       </div> */}
      
//                       <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo5.png" alt="" />
//                       </div>
      
//                       <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo6.png" alt="" />
//                       </div>
      
//                       <div className="brand-single-box">
//                           <img src="/assets/img/logo/slider-logo7.png" alt="" />
//                       </div>

    
//                     </div>
//                   </div>
//                 </div>
//               </div>
    
//               <div className="slider-after"></div>
//             </div>
//           </section>
//     );
// };

// export default MarqueeText;
const MarqueeText = ({ names = ["Apple", "Google", "Microsoft", "Amazon", "Tesla", "Meta"] }) => {
    return (
        <section className="hero10-benar">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-wrap marquee-wrap-inner">
                            <div className="marquee-text">
                                {names.concat(names).map((name, index) => ( // Duplicate for smooth loop
                                    <div className="brand-single-box" key={index}>
                                     <img src="/assets/img/logo/slider-logo2.png" alt="" />
                                     {/* <h3</h3> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-after"></div>
            </div>
        </section>
    );
};

export default MarqueeText;
