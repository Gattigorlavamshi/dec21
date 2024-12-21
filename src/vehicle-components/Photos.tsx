import React from "react";
import NavBar from "./NavBar";

export default function Photos() {
  const places = [
    {
      name: "Mahindra thar(hyd-kompally",
      city: "hyd",
      description:
        "1500/6hrs",
      url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/124839/thar-roxx-exterior-right-front-three-quarter-24.jpeg?isig=0&q=80",
    },

    {
      name: "fortuner(miyapur)",
      city: "Hyd",
      description:
        "3000/6hrs",
      url: "https://images.hindustantimes.com/auto/img/2022/10/17/600x338/Toyota_Fortuner_custom_1665988101342_1665988260879_1665988260879.jpeg",
    },
    {
      name: "mini cooper(lb nagar)",
      city: "Paris",
      description:
        "3550/6hrs",
      url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20241009061211_Mini_Convertible_2025_front.jpg&w=700&c=1",
    },
    {
      name: "Ambassador(ameerpet)",
      city: "Delhi",
      description:
        "5000/6hrs",
      url: "https://images.hindustantimes.com/auto/img/2020/04/03/600x338/amby_1585896460277_1585896460484.jpg",
    },
  ];

  return (
    <div>
      <NavBar />
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {places.map((place) => (
          <div className="col">
            <div className="card">
              <img src={place.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{place.name}</h5>
                <p className="card-title">{place.city}</p>
                <p className="card-text">{place.description}</p>
                <div><a href="https://auto.hindustantimes.com" target="blank" className="button">get details</a>

                </div>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
    </div>
  );
}