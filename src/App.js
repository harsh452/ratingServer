import { firestore } from "./firebase";
import React from "react";


function App() {
  var serviceRatings;
  var star1;
  var star2;
  var star3;
  var star4;
  var star5;
  var totalRating;
  
  var totalRating2;
  var averageRatings;
  var str_x ;
  var str_y ;
  var str_z;
  var str_a ;
  var str_b ;
  var star$1;
  var star$2;
  var star$3;
  var star$4;
  var star$5;


  
   
  firestore
  .collection("RATINGS")
  .orderBy("TIME",'asc')
  .limit(1)
  .onSnapshot(querySnapshot => {
      var ratingData = [];
      querySnapshot.forEach((doc) => {
          ratingData.push( doc.data());
          serviceRatings = ratingData[0].SERVICE_PROVIDER_ID;
          star1 = ratingData[0].STAR_1;
          star2 = ratingData[0].STAR_2;
          star3 = ratingData[0].STAR_3;
          star4 = ratingData[0].STAR_4;
          star5 = ratingData[0].STAR_5;
          totalRating = star1+star2+star3+star4+star5;
          data();
        })
      });  
   
  
  
  function data() {
    firestore.collection("SERVICE PROVIDER").doc(serviceRatings).get().then((snapshot) =>{

    totalRating2 = snapshot.get("total_ratings")+totalRating;
    str_x = snapshot.get("1_star");
     str_y = snapshot.get("2_star");
    str_z = snapshot.get("3_star");
     str_a = snapshot.get("4_star");
     str_b = snapshot.get("5_star");
     star$1 = star1+str_x
     star$2 = star2+str_y
     star$3 = star3+str_z
     star$4 = star4+str_a
     star$5 = star5+str_b
  updateServiceproviders();
  newData();
   })
  }
  function updateServiceproviders() {
    firestore.collection("SERVICE PROVIDER").doc(serviceRatings).update({
    "1_star" : star$1,
    "2_star": star$2,
    "3_star": star$3,
    "4_star" : star$4,
    "5_star" : star$5,
    total_ratings: totalRating2
  })
  }

  function newData() {
      averageRatings = (1*star$1 + 2*star$2 + 3*star$3 + 4*star$4 + 5*star$5)/totalRating2;
      console.log(averageRatings);
         del();
  }

  function del () {
    firestore
    .collection("RATINGS")
      .orderBy("TIME",'asc').limit(1)
      .get()
      .then((querySnapshot) =>{
querySnapshot.forEach((doc)=>{
doc.ref.delete()
})
avgRating();

      })
  }

  function avgRating() {
    firestore.collection("SERVICE PROVIDER").doc(serviceRatings).update({
      average_rating: averageRatings
    })
    
setInterval(function(){ window.location.reload(true)
  ; }, 3000);
  }

  return (
   <div>
     SERVER UP AND RUNNING......../../..
     
   </div>
  );
}
export default App;


